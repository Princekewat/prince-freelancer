"use client";

import { useCallback, useState, type FormEvent } from "react";

type Contact = {
  id: string;
  name: string;
  email: string;
  message: string;
  createdAt: string;
};

export default function AdminPage() {
  const [password, setPassword] = useState("");
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [signedIn, setSignedIn] = useState(false);
  const [loading, setLoading] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  const fetchContacts = useCallback(async () => {
    try {
      const response = await fetch("/api/admin/contacts", { cache: "no-store" });
      const result = await response.json();

      if (response.status === 401) {
        setSignedIn(false);
        setContacts([]);
        return;
      }

      if (!response.ok) {
        throw new Error(result.error || "Could not load messages.");
      }

      setSignedIn(true);
      setContacts(result.contacts);
    } catch (loadError) {
      setError(
        loadError instanceof Error ? loadError.message : "Could not load messages.",
      );
    } finally {
      setLoading(false);
    }
  }, []);

  const loadContacts = useCallback(async () => {
    setLoading(true);
    setError("");
    await fetchContacts();
  }, [fetchContacts]);

  async function handleLogin(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitting(true);
    setError("");

    try {
      const response = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });
      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Could not sign in.");
      }

      setPassword("");
      await loadContacts();
    } catch (loginError) {
      setError(loginError instanceof Error ? loginError.message : "Could not sign in.");
    } finally {
      setSubmitting(false);
    }
  }

  async function handleLogout() {
    const response = await fetch("/api/admin/login", { method: "DELETE" });
    if (!response.ok) {
      setError("Could not sign out. Please try again.");
      return;
    }
    setSignedIn(false);
    setContacts([]);
    setError("");
  }

  return (
    <main className="admin-page">
      <section className="admin-card">
        {!signedIn ? (
          <>
            <p className="admin-eyebrow">PRIVATE AREA</p>
            <h1>Admin sign in</h1>
            <p className="admin-description">
              Sign in to view messages submitted through the booking form.
            </p>
            <form className="admin-login-form" onSubmit={handleLogin}>
              <label htmlFor="admin-password">Admin password</label>
              <input
                id="admin-password"
                type="password"
                autoComplete="current-password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                required
              />
              <button type="submit" disabled={submitting}>
                {submitting ? "Signing in..." : "Sign in"}
              </button>
            </form>
          </>
        ) : (
          <>
            <div className="admin-header">
              <div>
                <p className="admin-eyebrow">INBOX</p>
                <h1>Booking messages</h1>
              </div>
              <div className="admin-actions">
                <button type="button" onClick={() => void loadContacts()} disabled={loading}>
                  Refresh
                </button>
                <button type="button" className="admin-logout" onClick={handleLogout}>
                  Sign out
                </button>
              </div>
            </div>
            {loading ? (
              <p className="admin-description">Loading messages...</p>
            ) : contacts.length === 0 ? (
              <p className="admin-description">No booking messages yet.</p>
            ) : (
              <div className="admin-contact-list">
                {contacts.map((contact) => (
                  <article className="admin-contact" key={contact.id}>
                    <div className="admin-contact-header">
                      <h2>{contact.name}</h2>
                      <time dateTime={contact.createdAt}>
                        {new Date(contact.createdAt).toLocaleString()}
                      </time>
                    </div>
                    <a href={`mailto:${contact.email}`}>{contact.email}</a>
                    <p>{contact.message}</p>
                  </article>
                ))}
              </div>
            )}
          </>
        )}
        {error && <p className="admin-error" role="alert">{error}</p>}
      </section>
    </main>
  );
}
