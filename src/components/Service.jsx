import {
  Code2,
  Database,
  Globe,
  Smartphone
} from "lucide-react";

const services = [
  {
    icon: Code2,
    title: "Web Development",
    text: "Modern websites using React, Next.js and TypeScript."
  },
  {
    icon: Globe,
    title: "Business Websites",
    text: "Professional websites designed to convert visitors into customers."
  },
  {
    icon: Database,
    title: "Backend & API",
    text: "REST APIs, databases and backend integrations."
  },
  {
    icon: Smartphone,
    title: "Responsive Design",
    text: "Fast websites that work perfectly on mobile, tablet and desktop."
  }
];

export default function Services() {
  return (
    <section className="section">

      <div className="section-heading">
        <p>WHAT I DO</p>
        <h2 >
          Services I provide
        </h2>
      </div>

      <div className="services-grid">

        {services.map((service) => {
          const Icon = service.icon;

          return (
            <div className="service-card" key={service.title}>

              <div className="service-icon">
                <Icon size={26} />
              </div>

              <h3>{service.title}</h3>

              <p>{service.text}</p>

              <a href="#contact">
                Start a project →
              </a>

            </div>
          );
        })}

      </div>

    </section>
  );
}