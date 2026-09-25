// hooks/usePortfolio.js
// Fetches portfolio data from the Laravel API.
// Usage: const { data, loading, error } = usePortfolio();

import { useState, useEffect } from "react";

const API_BASE = import.meta.env.VITE_API_URL ?? "http://localhost:8000/api/v1";

export function usePortfolio() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    fetch(`${API_BASE}/portfolio`, { signal: controller.signal })
      .then(res => {
        if (!res.ok) throw new Error(`API error ${res.status}`);
        return res.json();
      })
      .then(setData)
      .catch(err => { if (err.name !== "AbortError") setError(err.message); })
      .finally(() => setLoading(false));
    return () => controller.abort();
  }, []);

  return { data, loading, error };
}

// hooks/useContact.js
// Sends contact form data to the Laravel API.
// Usage: const { send, sending, success, error } = useContact();

export function useContact() {
  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);

  const send = async (payload) => {
    setSending(true);
    setError(null);
    try {
      const res = await fetch(`${API_BASE}/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json", "Accept": "application/json" },
        body: JSON.stringify(payload),
      });
      const json = await res.json();
      if (!res.ok) {
        // Laravel validation errors come back as { errors: { field: ["msg"] } }
        const msgs = json.errors
          ? Object.values(json.errors).flat().join(" ")
          : json.message ?? "Something went wrong.";
        throw new Error(msgs);
      }
      setSuccess(true);
    } catch (err) {
      setError(err.message);
    } finally {
      setSending(false);
    }
  };

  return { send, sending, success, error };
}
