"use client";

import { FormEvent, useState } from "react";

export default function ChatBox() {
  const [message, setMessage] = useState("");
  const [reply, setReply] = useState("");
  const [loading, setLoading] = useState(false);

  const sendMessage = async (e: FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;

    setLoading(true);
    setReply("");

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message }),
      });

      const data = await res.json();
      setReply(data.reply || "Sorry, I could not generate a response.");
    } catch {
      setReply("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="rounded-[1.75rem] border border-rose-200 bg-rose-50 p-6 shadow-sm">
      <form onSubmit={sendMessage} className="flex flex-col gap-4">
        <textarea
          className="min-h-[130px] rounded-2xl border border-rose-200 bg-white p-4 text-slate-800 outline-none transition focus:border-rose-400"
          placeholder="Ask something like: What are Gabriela's career goals?"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button
          type="submit"
          disabled={loading}
          className="w-fit rounded-2xl bg-rose-500 px-6 py-3 font-semibold text-white transition hover:bg-rose-400 disabled:opacity-50"
        >
          {loading ? "Thinking..." : "Ask AI"}
        </button>
      </form>

      <div className="mt-6 rounded-2xl border border-rose-200 bg-white p-5 shadow-sm">
        <h3 className="mb-2 font-semibold text-rose-500">AI Response</h3>
        <p className="whitespace-pre-line leading-7 text-slate-600">
          {reply || "The AI response will appear here."}
        </p>
      </div>
    </div>
  );
}