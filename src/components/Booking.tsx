import { Calendar, MessageCircle } from "lucide-react";

export default function Booking() {
  return (
    <section className="booking" id="contact">

      <div>

        <p className="booking-label">
          HAVE A PROJECT?
        </p>

        <h2>
          let is  turn your idea
          <br />
          into a real product.
        </h2>

        <p>
          Tell me about your project, requirements and
          timeline. I will ll get back to you with the next steps.
        </p>

      </div>

      <div className="booking-buttons">

        <a
          href="mailto:prince.kewat@example.com"
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