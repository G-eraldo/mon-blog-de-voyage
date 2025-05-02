"use client";
import { useRef, useState } from "react";

export default function page() {
  const messageRef = useRef(null);
  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const result = await emailjs.sendForm(
        "service_ns15fq2",
        "template_bfh47am",
        e.target,
        "bcxHquc7XQFLSlbmG"
      );
      messageRef.current.textContent = "Message envoyé ✅";
      e.target.reset();
    } catch (error) {
      messageRef.current.textContent = "Un problème est survenu";
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col items-center gap-6 text-amber-50"
    >
      <label className="form-control w-full max-w-md floating-label mb-4">
        <span>Ton prénom</span>
        <input
          type="text"
          placeholder="Ton prénom"
          className="input input-md w-full"
          name="name"
        />
      </label>
      <label className="form-control w-full max-w-md floating-label mb-4">
        <span>Ton Email</span>
        <input
          type="mail"
          placeholder="Ton Email"
          className="input input-md w-full"
          name="email"
        />
      </label>
      <label className="form-control w-full max-w-md floating-label mb-4">
        <span>Votre message</span>
        <textarea
          type="textarea"
          placeholder="Votre message"
          className="input input-md text-wrap h-20 w-full"
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
