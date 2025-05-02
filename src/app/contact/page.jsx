"use client";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

export default function Page() {
  const messageRef = useRef(null);

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const result = await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        e.target,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      );
      messageRef.current.textContent = "Message envoyé ✅";
      e.target.reset();
    } catch (error) {
      console.error("EmailJS error:", error);
      messageRef.current.textContent = "Un problème est survenu";
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col items-center gap-6 text-amber-50"
    >
      <label className="floating-label">
        <span>Ton prénom</span>
        <input
          type="text"
          placeholder="Ton prénom"
          className="input input-md"
          name="name"
        />
      </label>
      <label className="floating-label">
        <span>Ton Email</span>
        <input
          type="mail"
          placeholder="Ton Email"
          className="input input-md"
          name="email"
        />
      </label>
      <label className="floating-label">
        <span>Votre message</span>
        <textarea
          type="textarea"
          placeholder="Votre message"
          className="input input-md text-wrap h-20"
          name="message"
        />
      </label>
      <button type="sumbit" className="btn btn-outline">
        Envoyer{" "}
      </button>
      <p className="text-white" ref={messageRef}></p>
    </form>
  );
}
