import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, BookOpen, Code2, GraduationCap } from "lucide-react";

const journeySteps = [
  {
    number: "01",
    title: "Learning the foundations",
    description:
      "B.Tech is a chapter of learning, asking questions, and building a strong foundation in technology.",
    icon: BookOpen,
  },
  {
    number: "02",
    title: "Putting ideas into practice",
    description:
      "Each project is a chance to turn what I learn into useful, thoughtful digital experiences.",
    icon: Code2,
  },
  {
    number: "03",
    title: "Growing as a developer",
    description:
      "I keep exploring modern tools and improving my craft as I work toward what comes next.",
    icon: GraduationCap,
  },
];

export default function JourneyPage() {
  return (
    <main className="journey-page">
      <section className="journey-hero">
        <Link href="/" className="journey-back-link">
          <ArrowLeft size={17} />
          Back to home
        </Link>

        <div className="journey-intro">
          <figure className="journey-photo-figure">
            <Image
              className="journey-photo-image"
              src="/journey-placeholder.svg"
              alt="Temporary illustrated portrait placeholder"
              width={280}
              height={280}
              priority
            />
            <figcaption className="journey-photo-caption">
              My story — learning, building, and growing.
            </figcaption>
          </figure>
          <p className="journey-eyebrow">A little about me</p>
          <h1>
            My <span>B.Tech journey</span>
          </h1>
          <p className="journey-lede">
            A journey of learning, building, and growing through technology.
          </p>
          <p className="journey-photo-note">
            This is a temporary illustration. Add your own photo as{" "}
            <code>public/prince-photo.jpg</code> when you are ready.
          </p>
        </div>
      </section>

      <section className="journey-story" aria-labelledby="journey-story-title">
        <div className="journey-section-heading">
          <p className="journey-eyebrow">Learning, one step at a time</p>
          <h2 id="journey-story-title">The journey so far</h2>
          <p>
            From learning the fundamentals to creating with code, every step
            helps shape the developer I am becoming.
          </p>
        </div>

        <div className="journey-timeline">
          {journeySteps.map(({ number, title, description, icon: Icon }) => (
            <article className="journey-step" key={number}>
              <div className="journey-step-marker">
                <Icon size={21} aria-hidden="true" />
              </div>
              <div className="journey-step-content">
                <span className="journey-step-number">{number}</span>
                <h3>{title}</h3>
                <p>{description}</p>
              </div>
            </article>
          ))}
        </div>

        <Link href="/projects" className="journey-projects-link">
          Explore my projects
          <Code2 size={17} />
        </Link>
      </section>
    </main>
  );
}
