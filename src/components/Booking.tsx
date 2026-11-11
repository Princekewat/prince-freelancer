"use client";

import { useState, type FormEvent } from "react";
import { Calendar, Send } from "lucide-react";

export default function Booking() {
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    setSubmitting(true);
    setStatus(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          message: formData.get("message"),
        }),
      });
      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Unable to send your message.");
      }

      form.reset();
      setStatus({ type: "success", message: "Message sent. I’ll be in touch soon." });
    } catch (error) {
      setStatus({
        type: "error",
        message:
          error instanceof Error ? error.message : "Unable to send your message.",
      });
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section className="booking" id="contact">
      <div className="booking-copy">
        <p className="booking-label">HAVE A PROJECT?</p>
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

      <form className="booking-form" onSubmit={handleSubmit}>
        <label className="booking-field">
          <span>Name</span>
          <input name="name" autoComplete="name" minLength={2} maxLength={100} required />
        </label>
        <label className="booking-field">
          <span>Email</span>
          <input name="email" type="email" autoComplete="email" maxLength={254} required />
        </label>
        <label className="booking-field">
          <span>Project details</span>
          <textarea name="message" minLength={10} maxLength={5000} rows={4} required />
        </label>
        <div className="booking-form-actions">
          <button className="primary-btn" type="submit" disabled={submitting}>
            <Send size={18} />
            {submitting ? "Sending..." : "Send message"}
          </button>
          <a
            href="mailto:princerewa2002@gmail.com?subject=Project%20meeting"
            className="secondary-btn"
          >
            <Calendar size={18} />
            Schedule a meeting
          </a>
        </div>
        <p className="booking-status" role="status" aria-live="polite">
          {status?.message}
        </p>
      </form>
    </section>
  );
}