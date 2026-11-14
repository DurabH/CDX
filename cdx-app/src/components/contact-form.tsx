"use client";

import { useState, type FormEvent } from "react";
import { ArrowRight } from "lucide-react";

const fieldClassName =
  "mt-2 w-full rounded-xl border border-white/10 bg-[#0B0F17] px-4 py-3 text-white placeholder:text-slate-500 focus:border-[#00D4FF] focus:outline-none";

export default function ContactForm() {
  const [message, setMessage] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const projectDetails = event.currentTarget.elements.namedItem("projectDetails");

    if (projectDetails instanceof HTMLTextAreaElement && !projectDetails.value.trim()) {
      projectDetails.setCustomValidity("Please enter your project details.");
      projectDetails.reportValidity();
      return;
    }

    setMessage(
      "Your details are valid, but email delivery has not been configured yet. Please check back soon."
    );
  };

  return (
    <form className="space-y-5" onSubmit={handleSubmit}>
      <div className="grid gap-5 md:grid-cols-2">
        <label className="block text-sm text-slate-300">
          Name <span className="text-[#7dd3fc]">*</span>
          <input
            type="text"
            name="name"
            autoComplete="name"
            required
            pattern="[\p{L}\p{M}]+(?:[\x2D'. ][\p{L}\p{M}]+)*"
            title="Enter a name using letters, spaces, apostrophes, or hyphens."
            placeholder="Your name"
            className={fieldClassName}
          />
        </label>
        <label className="block text-sm text-slate-300">
          Email <span className="text-[#7dd3fc]">*</span>
          <input
            type="email"
            name="email"
            autoComplete="email"
            required
            pattern="[^@\s]+@[^@\s]+\.[^@\s]{2,}"
            title="Enter an email address in a valid format, such as name@gmail.com."
            placeholder="you@example.com"
            className={fieldClassName}
          />
        </label>
      </div>

      <label className="block text-sm text-slate-300">
        Company <span className="text-slate-500">(optional)</span>
        <input
          type="text"
          name="company"
          autoComplete="organization"
          placeholder="Your company"
          className={fieldClassName}
        />
      </label>

      <label className="block text-sm text-slate-300">
        Project details <span className="text-[#7dd3fc]">*</span>
        <textarea
          name="projectDetails"
          rows={5}
          required
          onChange={(event) => event.currentTarget.setCustomValidity("")}
          placeholder="Tell us what you need, your goals, and any important timing."
          className={fieldClassName}
        />
      </label>

      <p className="text-xs leading-5 text-slate-400">
        Email addresses are checked for valid format. Delivery will be enabled
        after a real destination inbox is configured.
      </p>

      <button
        type="submit"
        className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#007AFF] to-[#00D4FF] px-6 py-3 text-sm font-semibold text-white shadow-[0_0_24px_rgba(0,122,255,0.3)] transition duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(0,212,255,0.4)] active:translate-y-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#00D4FF] sm:w-auto"
      >
        Send inquiry
        <ArrowRight className="h-4 w-4" aria-hidden="true" />
      </button>

      {message && (
        <p role="status" aria-live="polite" className="text-sm text-[#9fe8ff]">
          {message}
        </p>
      )}
    </form>
  );
}
