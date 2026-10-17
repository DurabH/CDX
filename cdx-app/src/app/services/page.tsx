import Link from "next/link";
import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";
import { creativeServices, engineeringServices, services } from "@/data/services";

export const metadata = {
  title: "Services | CDX",
  description: "Engineering and creative solutions for growth-focused brands.",
};

export default function ServicesPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 pb-20 pt-16 sm:px-6 lg:px-8">
      <section className="mb-20">
        <div className="inline-flex items-center gap-2 rounded-full border border-[#00D4FF]/30 bg-[#00D4FF]/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-[#8fe3ff]">
          <Sparkles className="h-3.5 w-3.5" />
          Services
        </div>
        <h1 className="mt-6 max-w-3xl text-4xl font-black tracking-tight text-white md:text-6xl">
          Strategy, build, and storytelling for ambitious brands.
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
          CDX combines engineering rigor with creative direction to turn bold ideas into high-performing digital experiences.
        </p>
      </section>

      <div className="grid gap-8 lg:grid-cols-2">
        <section className="rounded-3xl border border-white/10 bg-white/5 p-6 md:p-8">
          <p className="mb-6 text-sm font-semibold uppercase tracking-[0.22em] text-[#7dd3fc]">
            Engineering vertical
          </p>
          <div className="space-y-5">
            {engineeringServices.map((service) => (
              <div
                key={service.id}
                className="rounded-2xl border border-white/10 bg-[#111827] p-5"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h2 className="text-xl font-semibold text-white">{service.title}</h2>
                    <p className="mt-2 text-sm leading-6 text-slate-300">
                      {service.shortDescription}
                    </p>
                  </div>
                  <span className="rounded-full border border-[#007AFF]/40 bg-[#007AFF]/10 px-2.5 py-1 text-xs uppercase tracking-[0.12em] text-[#8fe3ff]">
                    {service.id}
                  </span>
                </div>
                <div className="mt-5 flex flex-wrap gap-2">
                  {service.techStack.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-3xl border border-white/10 bg-white/5 p-6 md:p-8">
          <p className="mb-6 text-sm font-semibold uppercase tracking-[0.22em] text-[#7dd3fc]">
            Creative vertical
          </p>
          <div className="space-y-5">
            {creativeServices.map((service) => (
              <div
                key={service.id}
                className="rounded-2xl border border-white/10 bg-[#111827] p-5"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h2 className="text-xl font-semibold text-white">{service.title}</h2>
                    <p className="mt-2 text-sm leading-6 text-slate-300">
                      {service.shortDescription}
                    </p>
                  </div>
                  <span className="rounded-full border border-[#00D4FF]/40 bg-[#00D4FF]/10 px-2.5 py-1 text-xs uppercase tracking-[0.12em] text-[#8fe3ff]">
                    {service.id}
                  </span>
                </div>
                <div className="mt-5 flex flex-wrap gap-2">
                  {service.techStack.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      <section className="mt-16 rounded-3xl border border-[#007AFF]/20 bg-gradient-to-r from-[#0B0F17] via-[#111827] to-[#0B0F17] p-8 md:p-10">
        <div className="grid gap-6 lg:grid-cols-[1.3fr_0.7fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#7dd3fc]">
              Why teams choose CDX
            </p>
            <h3 className="mt-3 text-3xl font-bold text-white">
              One partner for product thinking and polished execution.
            </h3>
          </div>
          <div className="space-y-4">
            {services[0].highlights.slice(0, 3).map((highlight) => (
              <div key={highlight} className="flex items-start gap-3 text-slate-200">
                <CheckCircle2 className="mt-0.5 h-5 w-5 text-[#00D4FF]" />
                <span>{highlight}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="mt-10 flex justify-center">
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#007AFF] to-[#00D4FF] px-6 py-3 text-sm font-semibold text-white shadow-[0_0_24px_rgba(0,122,255,0.4)]"
        >
          Discuss your project
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}
