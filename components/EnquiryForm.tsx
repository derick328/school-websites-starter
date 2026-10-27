"use client";

import { useState, type FormEvent } from "react";
import Icon from "./Icon";

export default function EnquiryForm({ schoolName, recipient }: { schoolName: string; recipient: string }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [stage, setStage] = useState("General enquiry");
  const [message, setMessage] = useState("");
  const [info, setInfo] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const subject = encodeURIComponent(`[School website enquiry] ${stage} - ${schoolName}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nInterest: ${stage}\n\nMessage:\n${message}`);
    const target = `mailto:${recipient}?subject=${subject}&body=${body}`;
    setInfo("Your email application will open with this enquiry ready to send. No message has been sent automatically.");
    window.location.href = target;
  }

  return <form className="enquiry-form" onSubmit={handleSubmit}>
    <div className="form-row">
      <label>Your name<input required maxLength={100} value={name} onChange={e=>setName(e.target.value)} placeholder="Enter your name" autoComplete="name" /></label>
      <label>Email address<input required type="email" maxLength={150} value={email} onChange={e=>setEmail(e.target.value)} placeholder="you@example.com" autoComplete="email" /></label>
    </div>
    <label>I am enquiring about<select value={stage} onChange={e=>setStage(e.target.value)}><option>General enquiry</option><option>Admissions</option><option>Kindergarten</option><option>Primary School</option><option>Secondary School</option><option>School visit</option></select></label>
    <label>Message<textarea required rows={5} maxLength={3000} value={message} onChange={e=>setMessage(e.target.value)} placeholder="Tell us a little about your enquiry..." /></label>
    <p className="form-help">This starter sends via your email app. Connect a backend or form service before accepting live online submissions.</p>
    <button className="button button--dark" type="submit">Open email draft <Icon name="arrowUp" size={16}/></button>
    {info ? <p className="form-info" role="status">{info}</p> : null}
  </form>;
}
