import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Code2, GraduationCap, Mail } from "lucide-react";

export const metadata = {
  title: "Resume | Prince Kewat",
  description: "Prince Kewat's developer profile and B.Tech journey.",
};

const skills = ["Next.js", "React", "TypeScript", "Modern web development"];

export default function ResumePage() {
  return (
    <main className="journey-page resume-page">
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
              alt="Temporary illustrated portrait for Prince Kewat's resume"
              width={280}
              height={280}
              priority
            />
            <figcaption className="journey-photo-caption">
              Temporary portrait — replace with your own photo when ready.
            </figcaption>
          </figure>
          <p className="journey-eyebrow">Developer profile</p>
          <h1>
            Prince <span>Kewat</span>
          </h1>
          <p className="journey-lede">
            Next.js developer and freelancer building modern digital
            experiences with React, TypeScript, and clean code.
          </p>
          <p className="journey-photo-note">
            Replace the temporary portrait by adding your photo at{" "}
            <code>public/prince-photo.jpg</code>.
          </p>
        </div>
      </section>

      <section className="journey-story" aria-labelledby="resume-details-title">
        <div className="journey-section-heading">
          <p className="journey-eyebrow">Profile</p>
          <h2 id="resume-details-title">My resume</h2>
          <p>
            A snapshot of my development skills, education journey, and the
            work I enjoy creating.
          </p>
        </div>

        <div className="resume-details">
          <article className="resume-card">
            <div className="journey-step-marker">
              <GraduationCap size={21} aria-hidden="true" />
            </div>
            <div>
              <h3>B.Tech journey</h3>
              <p>
                Studying technology and developing a strong foundation through
                learning, practice, and personal projects.
              </p>
              <Link href="/journey" className="resume-card-link">
                Read my full story
                <ArrowLeft size={15} />
              </Link>
            </div>
          </article>

          <article className="resume-card">
            <div className="journey-step-marker">
              <Code2 size={21} aria-hidden="true" />
            </div>
            <div>
              <h3>Skills</h3>
              <ul className="resume-skills">
                {skills.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </div>
          </article>
        </div>

        <Link href="mailto:princerewa2002@gmail.com" className="journey-projects-link">
          <Mail size={17} />
          Contact me
        </Link>
      </section>
    </main>
  );
}
