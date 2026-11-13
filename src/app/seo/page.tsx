import Link from "next/link";
import { Code2, Search, Smartphone } from "lucide-react";

export const metadata = {
  title: "SEO Services | Prince Kewat",
  description:
    "Explore technical SEO services by Prince Kewat, including on-page metadata, structured data, and website performance improvements.",
  keywords: [
    "Prince Kewat SEO",
    "SEO services",
    "technical SEO",
    "on-page SEO",
    "structured data",
    "website performance optimization",
  ],
};

const seoServices = [
  {
    icon: Search,
    title: "Technical and on-page SEO",
    description:
      "Improve page titles, meta descriptions, heading structure, and technical details so search engines can better understand your pages.",
  },
  {
    icon: Code2,
    title: "Structured data",
    description:
      "Add relevant structured data to describe your website and its content more clearly to search engines.",
  },
  {
    icon: Smartphone,
    title: "Performance and mobile experience",
    description:
      "Improve loading speed, responsive behavior, and usability across phones, tablets, and desktop screens.",
  },
];

export default function SeoPage() {
  return (
    <main>
      <section className="section services-section seo-page">
        <div className="section-heading seo-page-heading">
          <p>SEO SERVICES BY PRINCE KEWAT</p>
          <h1>Technical SEO for modern websites</h1>
          <p className="seo-page-lede">
            I help businesses make their websites easier to discover and
            understand with clear metadata, structured data, and practical
            performance improvements.
          </p>
          <Link href="/contact" className="primary-btn seo-page-cta">
            Discuss your SEO project <span aria-hidden="true">→</span>
          </Link>
        </div>

        <div className="section-heading">
          <p>WHAT I CAN IMPROVE</p>
          <h2>SEO foundations built into your website</h2>
        </div>

        <div className="services-grid">
          {seoServices.map(({ icon: Icon, title, description }) => (
            <article className="service-card" key={title}>
              <div className="service-icon">
                <Icon size={26} aria-hidden="true" />
              </div>
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>

        <div className="seo-page-next-step">
          <h2>Want to improve your website&apos;s SEO?</h2>
          <p>
            Get in touch to discuss your website and the SEO improvements that
            make sense for your goals.
          </p>
          <Link href="/contact" className="primary-btn seo-page-cta">
            Contact Prince Kewat <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>
    </main>
  );
}
