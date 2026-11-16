import Image from "next/image";
import Link from "next/link";
import HomeScrollExperience from "@/components/home-scroll-experience";
import HomeIntroOverlay from "@/components/media/HomeIntroOverlay";
import ScrollScene, { type SceneVisual } from "@/components/scroll-scene";
import { founders } from "@/data/founders";
import { projects } from "@/data/projects";

function sceneVisual(
  src: string,
  alt: string,
  label: string,
  position: SceneVisual["position"],
  startX: number,
  startY: number,
  startRotateY: number,
  startScale: number
): SceneVisual {
  return {
    src,
    alt,
    label,
    position,
    startX,
    startY,
    startRotateX: 12,
    startRotateY,
    startScale,
    endX: 0,
    endY: 0,
    endRotateX: 0,
    endRotateY: 0,
    endScale: 1,
  };
}

const websiteVisuals: SceneVisual[] = [
  sceneVisual(
    "/images/portfolio/my-portfolio-2/website-preview.png",
    "Preview of Waleed's creative portfolio website",
    "Waleed's portfolio",
    "back-left",
    -35,
    25,
    28,
    0.82
  ),
  sceneVisual(
    "/images/portfolio/eventbooking-website/website-preview.png",
    "EventSphere event booking website preview",
    "EventSphere",
    "center",
    10,
    -55,
    -12,
    0.9
  ),
  sceneVisual(
    "/images/portfolio/gym-website/website-preview.png",
    "Muscle Up Gym website preview",
    "Muscle Up Gym",
    "front-right",
    45,
    60,
    -30,
    0.8
  ),
];

const showcaseItems = [
  {
    discipline: "FOOD / BURGER CAMPAIGN",
    points: [
      "Bold, appetite-led product art direction.",
      "A clear campaign made to catch attention.",
    ],
    src: "/images/portfolio/poster-designs/restaurant-brand-1.jpeg",
    alt: "Smash Monster burger promotional poster",
  },
  {
    discipline: "CINEMATIC / NARRATIVE",
    points: [
      "Concept-driven cinematic storytelling.",
      "Atmosphere shaped through image and typography.",
    ],
    src: "/images/portfolio/poster-designs/hopeless-poster.jpg",
    alt: "Hopeless cinematic narrative poster featuring a classical sculpture",
  },
  {
    discipline: "FOOD / CHICKEN CAMPAIGN",
    points: [
      "Product-first campaign composition.",
      "Clear messaging made for quick recognition.",
    ],
    src: "/images/portfolio/poster-designs/restaurant-brand-2.jpeg",
    alt: "Chicken burger promotional poster",
  },
  {
    discipline: "FASHION / EDITORIAL",
    points: [
      "Confident, portrait-led art direction.",
      "A polished balance of color and typography.",
    ],
    src: "/images/portfolio/poster-designs/girl-poster.jpg",
    alt: "High-fashion editorial portrait poster",
  },
] as const;

const clientProjects = projects.filter((project) =>
  [
    "yaseen-engineering-consultancy",
    "cad-sketch-by-ashir",
  ].includes(project.id)
);

function AudienceSection() {
  const audiences = [
    {
      number: "01",
      title: "Individuals & creators",
      summary:
        "Launch a personal site, portfolio, app, or digital project without needing to arrive with every detail already figured out.",
    },
    {
      number: "02",
      title: "Startups & product teams",
      summary:
        "Shape an early idea into a website, MVP, mobile app, or focused AI prototype that can be tested against a real need.",
    },
    {
      number: "03",
      title: "Businesses & organizations",
      summary:
        "Improve how people find and use your services with a clearer website, a useful internal tool, or a practical workflow integration.",
    },
  ];

  return (
    <section className="audience-section" aria-labelledby="audience-title">
      <div className="section-heading">
        <p className="section-eyebrow">Who we work with</p>
        <h2 id="audience-title">
          Bring a goal, an idea, <span className="text-gradient-brand">or a problem to solve.</span>
        </h2>
        <p>
          We work with people and teams at different stages. You do not need a
          finished brief—we can help define a practical first step together.
        </p>
      </div>
      <div className="audience-grid">
        {audiences.map((audience) => (
          <article className="audience-card" key={audience.number} data-scroll-reveal>
            <span>{audience.number}</span>
            <h3>{audience.title}</h3>
            <p>{audience.summary}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function ClientWorkSection() {
  return (
    <section
      id="client-work"
      className="client-work-section"
      aria-labelledby="client-work-title"
    >
      <div className="section-heading">
        <p className="section-eyebrow">Client work</p>
        <h2 id="client-work-title">
          Two real businesses. <span className="text-gradient-brand">Two clearer presentations.</span>
        </h2>
        <p>
          Websites for an engineering consultancy and a CAD designer—each
          organized around the services their prospective clients need to see.
        </p>
      </div>
      <div className="client-work-grid">
        {clientProjects.map((project, index) => (
          <article className="client-project-card" key={project.id} data-scroll-reveal>
            <div className="client-project-card__top">
              <span className="client-project-card__number">
                0{index + 1}
              </span>
              <span className="client-project-card__category">
                {project.category}
              </span>
            </div>
            <h3>{project.title}</h3>
            <p className="client-project-card__description">
              {project.description}
            </p>
            <ul>
              {project.highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
            {project.liveUrl && (
              <a
                className="client-project-card__link"
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
              >
                Visit live project <span aria-hidden="true">↗</span>
              </a>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}

function TestimonialsSection() {
  const testimonials = clientProjects.flatMap((project) => {
    if (!project.clientFeedback) return [];

    const [name, company] = project.clientFeedback.attribution.split(" · ");
    if (!name || !company) return [];

    return [{
      name,
      company,
      quote: project.clientFeedback.summary,
    }];
  });

  return (
    <section className="testimonials-section" aria-labelledby="testimonials-title">
      <div className="section-heading">
        <p className="section-eyebrow">Client review drafts</p>
        <h2 id="testimonials-title">
          A better first impression, <span className="text-gradient-brand">in their words.</span>
        </h2>
        <p>
          Suggested wording based on your brief. Confirm each review with the
          client before publishing.
        </p>
      </div>
      <div className="testimonials-grid">
        {testimonials.map((testimonial) => (
          <article className="testimonial-card" key={testimonial.name} data-scroll-reveal>
            <div className="testimonial-card__quote-mark" aria-hidden="true">“</div>
            <p className="testimonial-card__quote">{testimonial.quote}</p>
            <div className="testimonial-card__person">
              <h3>{testimonial.name}</h3>
              <p>{testimonial.company}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function WorkShowcaseSection() {
  return (
    <section
      id="showcase"
      className="work-showcase-section work-showcase-section--cinematic"
      aria-labelledby="showcase-title"
    >
      <div className="work-showcase-heading">
        <div className="section-heading">
          <p className="section-eyebrow">Scroll through selected work</p>
          <h2 id="showcase-title">
            From first impression{" "}
            <span className="text-gradient-brand">to final frame.</span>
          </h2>
        </div>
        <Link href="/portfolio" className="work-showcase-link">
          View all work <span aria-hidden="true">↗</span>
        </Link>
      </div>
      <div className="work-showcase-track-viewport">
        <div className="work-showcase-track">
          {showcaseItems.map((item) => (
            <article className="work-showcase-card" key={item.discipline}>
              <div className="work-showcase-copy work-showcase-copy--studio">
                <p className="work-showcase-copy__eyebrow">The CDX approach</p>
                <h3>Thoughtful work, made with purpose.</h3>
                <p>
                  Strategy, design, and technology—crafted with care from
                  brief to final finish.
                </p>
              </div>
              <div className="work-showcase-card__media">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 900px) 92vw, 48vw"
                  className="work-showcase-card__image"
                />
              </div>
              <div className="work-showcase-copy work-showcase-copy--work">
                <ul className="work-showcase-points">
                  {item.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function FoundersSection() {
  return (
    <section
      id="founders"
      className="founders-section"
      aria-labelledby="founders-title"
    >
      <div className="section-heading founders-section__heading">
        <p className="section-eyebrow">People behind the work</p>
        <h2 id="founders-title">
          Two disciplines. <span className="text-gradient-brand">One project team.</span>
        </h2>
        <p>
          Waleed focuses on mobile apps, graphic design, and video editing, and
          also works on web development.
          Durab focuses on web development and AI/ML, with hands-on UI/UX and
          SEO skills and supporting experience in mobile apps.
        </p>
      </div>
      <div className="founders-grid">
        {founders.map((founder) => (
          <article className="founder-card" key={founder.id} data-scroll-reveal>
            <div className="founder-card__portrait">
              <Image
                src={founder.avatarImage}
                alt={`Portrait of founder ${founder.name}`}
                fill
                sizes="(max-width: 700px) 90vw, 42vw"
                quality={90}
                className="object-cover"
              />
            </div>
            <div className="founder-card__content">
              <h3>{founder.name}</h3>
              <p>{founder.portfolioDescription}</p>
              <div className="founder-card__specialties">
                {founder.specialties?.map((specialty) => (
                  <span key={specialty}>{specialty}</span>
                ))}
              </div>
              <a
                href={founder.portfolioUrl}
                target="_blank"
                rel="noreferrer"
                className="founder-card__link"
              >
                {founder.portfolioLabel} <span aria-hidden="true">↗</span>
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <HomeScrollExperience>
      <div className="home-story">
        <HomeIntroOverlay />
        <ScrollScene
          id="top"
          number="01"
          eyebrow="Brand · Video · Websites · Apps"
          titleTag="h1"
          title={
            <>
              Creative work.
              <br />
              <span className="text-gradient-brand">Built to move people.</span>
            </>
          }
          description="We bring design and development together to create memorable brands, videos, websites, and mobile apps. Whether you are an individual, a growing team, or an established organization, we shape the work around what you need to make."
          visuals={websiteVisuals}
          details={[
            "Graphic design, brand identity & video",
            "Websites and mobile apps, designed and built",
            "Applied AI when it solves a real problem",
          ]}
          actions={[
            { href: "#showcase", label: "Explore our work" },
            { href: "/contact", label: "Talk through an idea" },
          ]}
        />

        <WorkShowcaseSection />
        <AudienceSection />
        <ClientWorkSection />
        <TestimonialsSection />

        <section className="process-section" aria-labelledby="process-title">
          <div className="process-section__intro">
            <p className="section-eyebrow">A direct way to work</p>
            <h2 id="process-title">
              Agree the goal.{" "}
              <span className="text-gradient-brand">Keep the scope clear.</span>
            </h2>
            <p>
              You work with the people designing and building the project. We
              define deliverables up front and share progress at agreed review
              points.
            </p>
          </div>
          <ol className="process-steps">
            {[
              ["01", "Understand", "Talk through the goal, audience, and practical constraints."],
              ["02", "Shape", "Agree the deliverables and a realistic project scope."],
              ["03", "Make", "Design and build the work, sharing progress as it develops."],
              ["04", "Review", "Check the details together and hand over the agreed work."],
            ].map(([number, title, description]) => (
              <li className="process-step" key={number} data-scroll-reveal>
                <span>{number}</span>
                <h3>{title}</h3>
                <p>{description}</p>
              </li>
            ))}
          </ol>
        </section>

        <FoundersSection />

        <section className="home-contact" aria-labelledby="home-contact-title">
          <div
            className="home-contact__orb home-contact__orb--one"
            aria-hidden="true"
          />
          <div
            className="home-contact__orb home-contact__orb--two"
            aria-hidden="true"
          />
          <p className="section-eyebrow">Have an idea or problem to solve?</p>
          <h2 id="home-contact-title">
            Let’s find
            <br />
            <span className="text-gradient-brand">the right first step.</span>
          </h2>
          <p>
            Tell us what you want to build or improve. We’ll help shape a clear,
            realistic scope before work begins.
          </p>
          <Link href="/contact" className="home-contact__button">
            Start a conversation <span aria-hidden="true">↗</span>
          </Link>
        </section>
      </div>
    </HomeScrollExperience>
  );
}
