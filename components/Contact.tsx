"use client";

import { useState } from "react";
import { Mail, Phone, Ticket } from "lucide-react";

type FormData = {
  name: string;
  email: string;
  phone: string;
  eventType: string;
  eventDate: string;
  venue: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormData, string>>;

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    eventType: "",
    eventDate: "",
    venue: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});

  const validate = (): FormErrors => {
    const result: FormErrors = {};
    if (!form.name.trim()) result.name = "Name is required";
    if (!form.email.trim()) result.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) result.email = "Invalid email";
    if (!form.phone.trim()) result.phone = "Phone is required";
    if (!form.eventType.trim()) result.eventType = "Event type is required";
    if (!form.eventDate.trim()) result.eventDate = "Event date is required";
    if (!form.venue.trim()) result.venue = "Venue is required";
    return result;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
    if (errors[name as keyof FormData]) {
      setErrors((err) => ({ ...err, [name]: "" }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validation = validate();
    setErrors(validation);
    if (Object.keys(validation).length === 0) {
      setSubmitted(true);
    }
  };

  return (
    <section id="contact" className="py-24 bg-background scroll-mt-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
          Book Teekay
        </h2>
        <p className="text-lg text-foreground/70 max-w-2xl mx-auto mb-10">
          Whether it&apos;s a corporate gala, private party, or sold-out theater, Teekay delivers a comedy experience that transcends the ordinary.
        </p>

        <div className="rounded-2xl border border-charcoal-light bg-charcoal p-8 sm:p-12">
          {submitted ? (
            <div className="py-12">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gold/20 mb-6">
                <Ticket className="h-8 w-8 text-gold" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-foreground mb-2">Booking Request Sent</h3>
              <p className="text-foreground/70">Thank you! Teekay&apos;s team will get back to you shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="text-left space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-charcoal-light bg-background px-4 py-2.5 text-foreground focus:outline-none focus:ring-2 focus:ring-gold"
                    placeholder="Your full name"
                  />
                  {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-charcoal-light bg-background px-4 py-2.5 text-foreground focus:outline-none focus:ring-2 focus:ring-gold"
                    placeholder="you@example.com"
                  />
                  {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-charcoal-light bg-background px-4 py-2.5 text-foreground focus:outline-none focus:ring-2 focus:ring-gold"
                    placeholder="+1 (555) 000-0000"
                  />
                  {errors.phone && <p className="text-red-400 text-xs mt-1">{errors.phone}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">Event Type</label>
                  <select
                    name="eventType"
                    value={form.eventType}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-charcoal-light bg-background px-4 py-2.5 text-foreground focus:outline-none focus:ring-2 focus:ring-gold"
                  >
                    <option value="">Select event type</option>
                    <option value="Corporate">Corporate</option>
                    <option value="Private Party">Private Party</option>
                    <option value="Festival">Festival</option>
                    <option value="Theater">Theater</option>
                    <option value="Other">Other</option>
                  </select>
                  {errors.eventType && <p className="text-red-400 text-xs mt-1">{errors.eventType}</p>}
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">Event Date</label>
                  <input
                    type="date"
                    name="eventDate"
                    value={form.eventDate}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-charcoal-light bg-background px-4 py-2.5 text-foreground focus:outline-none focus:ring-2 focus:ring-gold"
                  />
                  {errors.eventDate && <p className="text-red-400 text-xs mt-1">{errors.eventDate}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">Venue</label>
                  <input
                    type="text"
                    name="venue"
                    value={form.venue}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-charcoal-light bg-background px-4 py-2.5 text-foreground focus:outline-none focus:ring-2 focus:ring-gold"
                    placeholder="Venue name & city"
                  />
                  {errors.venue && <p className="text-red-400 text-xs mt-1">{errors.venue}</p>}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-1">Message</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full rounded-lg border border-charcoal-light bg-background px-4 py-2.5 text-foreground focus:outline-none focus:ring-2 focus:ring-gold"
                  placeholder="Tell us about your event..."
                />
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-gold px-8 py-4 text-base font-semibold text-background shadow-lg shadow-gold/20 hover:bg-gold-light transition-colors"
              >
                <Ticket className="h-5 w-5" />
                Submit Booking Request
              </button>
            </form>
          )}

          <div className="mt-10 pt-8 border-t border-charcoal-light grid sm:grid-cols-2 gap-8 text-left">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-full bg-charcoal-lighter">
                <Mail className="h-6 w-6 text-gold" />
              </div>
              <div>
                <h3 className="font-serif font-bold text-foreground mb-1">Email</h3>
                <p className="text-foreground/70">booking@teekay.com</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-full bg-charcoal-lighter">
                <Phone className="h-6 w-6 text-gold" />
              </div>
              <div>
                <h3 className="font-serif font-bold text-foreground mb-1">Phone</h3>
                <p className="text-foreground/70">+1 (555) 123-4567</p>
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-6">
            <a
              href="https://www.instagram.com/comedianteekay?igsh=MXF0bTRweXJnamJ1aw%3D%3D&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/70 hover:text-gold transition-colors"
            >
              Instagram
            </a>
            <a
              href="https://www.facebook.com/share/196kXv3F6p/?mibextid=wwXIfr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/70 hover:text-gold transition-colors"
            >
              Facebook
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
