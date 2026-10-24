import { Calendar, MessageCircle } from "lucide-react";

export default function Booking() {
  return (
    <section className="booking" id="contact">

      <div>

        <p className="booking-label">
          HAVE A PROJECT?
        </p>

        <h2>
          Let&apos;s turn your idea
          <br />
          into something <span>extraordinary.</span>
        </h2>

        <p>
          Tell me about your project, requirements, and timeline. I&apos;ll get
          back to you with the next steps.
        </p>

      </div>

      <div className="booking-buttons">

        <a
          href="mailto:prince2002@gmail.com"
          className="primary-btn"
        >
          <MessageCircle size={18} />
          Start a conversation
        </a>

        <a
          href="mailto:princerewa2002@gmail.com?subject=Project%20meeting"
          className="secondary-btn"
        >
          <Calendar size={18} />
          Schedule a meeting
        </a>

      </div>

    </section>
  );
}