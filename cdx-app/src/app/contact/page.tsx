import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";

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
            Tell us what you’re building, the challenge you’re solving, and the momentum you want to unlock.
          </p>

          <div className="mt-8 space-y-4">
            <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 text-slate-200">
              <Mail className="h-5 w-5 text-[#00D4FF]" />
              <span>hello@cdx.studio</span>
            </div>
            <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 text-slate-200">
              <Phone className="h-5 w-5 text-[#00D4FF]" />
              <span>+1 (415) 555-0138</span>
            </div>
            <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 text-slate-200">
              <MapPin className="h-5 w-5 text-[#00D4FF]" />
              <span>Remote-first, serving clients globally</span>
            </div>
          </div>
        </section>

        <section className="rounded-3xl border border-white/10 bg-white/5 p-6 md:p-8">
          <form className="space-y-5">
            <div className="grid gap-5 md:grid-cols-2">
              <label className="block text-sm text-slate-300">
                Name
                <input
                  type="text"
                  placeholder="Your name"
                  className="mt-2 w-full rounded-xl border border-white/10 bg-[#0B0F17] px-4 py-3 text-white placeholder:text-slate-500 focus:border-[#00D4FF] focus:outline-none"
                />
              </label>
              <label className="block text-sm text-slate-300">
                Email
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="mt-2 w-full rounded-xl border border-white/10 bg-[#0B0F17] px-4 py-3 text-white placeholder:text-slate-500 focus:border-[#00D4FF] focus:outline-none"
                />
              </label>
            </div>

            <label className="block text-sm text-slate-300">
              Company
              <input
                type="text"
                placeholder="Your company"
                className="mt-2 w-full rounded-xl border border-white/10 bg-[#0B0F17] px-4 py-3 text-white placeholder:text-slate-500 focus:border-[#00D4FF] focus:outline-none"
              />
            </label>

            <label className="block text-sm text-slate-300">
              Project details
              <textarea
                rows={5}
                placeholder="Tell us about your goals, timeline, and the problem you want to solve."
                className="mt-2 w-full rounded-xl border border-white/10 bg-[#0B0F17] px-4 py-3 text-white placeholder:text-slate-500 focus:border-[#00D4FF] focus:outline-none"
              />
            </label>

            <button
              type="submit"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#007AFF] to-[#00D4FF] px-6 py-3 text-sm font-semibold text-white shadow-[0_0_24px_rgba(0,122,255,0.4)] sm:w-auto"
            >
              Send inquiry
              <ArrowRight className="h-4 w-4" />
            </button>
          </form>
        </section>
      </div>
    </div>
  );
}
