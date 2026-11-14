import { MapPin } from "lucide-react";
import ContactForm from "@/components/contact-form";

export const metadata = {
  title: "Contact | CDX",
  description: "Get in touch to discuss your next digital product or brand project.",
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 pb-20 pt-16 sm:px-6 lg:px-8">
      <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr]">
        <section>
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#7dd3fc]">
            Contact
          </p>
          <h1 className="mt-4 text-4xl font-black tracking-tight text-white md:text-6xl">
            Let’s build what’s next.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-slate-300">
            Share what you need, who it is for, and any important timing or requirements.
          </p>

          <div className="mt-8 space-y-4">
            <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 text-slate-200">
              <MapPin className="h-5 w-5 text-[#00D4FF]" />
              <span>Remote-first, working directly with each client.</span>
            </div>
          </div>
        </section>

        <section className="rounded-3xl border border-white/10 bg-white/5 p-6 md:p-8">
          <ContactForm />
        </section>
      </div>
    </div>
  );
}
