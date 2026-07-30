"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { Ticket } from "lucide-react";

type FormData = {
  name: string;
  email: string;
  eventType: string;
  eventDate: string;
  venue: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormData, string>>;

const whatsappNumber = "0209927972";
const normalizedWhatsAppNumber = "233" + whatsappNumber.slice(1);
const whatsappMessage = encodeURIComponent("Hello Teekay, I visited your website and I'm interested in booking you for an event.");
const whatsappLink = `https://wa.me/${normalizedWhatsAppNumber}?text=${whatsappMessage}`;

export default function Contact() {
  const searchParams = useSearchParams();
  const [submitted] = useState(() => searchParams.get("submitted") === "true");
  const [error] = useState(() => searchParams.get("error") === "true" ? "Something went wrong. Please try again." : null);
  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
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
    const validation = validate();
    setErrors(validation);
    if (Object.keys(validation).length > 0) {
      e.preventDefault();
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
              <p className="text-foreground/70">Thank you for your booking request. Your request has been sent successfully. Teekay&apos;s management team will contact you shortly.</p>
            </div>
          ) : error ? (
            <div className="py-12">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-500/20 mb-6">
                <svg className="h-8 w-8 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-serif text-2xl font-bold text-foreground mb-2">Submission Failed</h3>
              <p className="text-foreground/70">{error}</p>
              <form action="/contact" method="GET" className="mt-6 inline-block">
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 rounded-full bg-gold px-8 py-3 text-base font-semibold text-background hover:bg-gold-light transition-colors"
                >
                  Try Again
                </button>
              </form>
            </div>
          ) : (
            <form
              action="https://formsubmit.co/comedianteekay@gmail.com"
              method="POST"
              onSubmit={handleSubmit}
              className="text-left space-y-6"
            >
              <input type="hidden" name="_subject" value="New Booking Request from Website" />
              <input type="text" name="_honeypot" style={{ display: "none" }} />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_next" value="/contact?submitted=true" />
              <input type="hidden" name="_error" value="/contact?error=true" />

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

          <div className="mt-10 pt-8 border-t border-charcoal-light flex flex-col items-center gap-4 text-left">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full border border-gold px-5 py-2.5 text-sm font-medium text-gold hover:bg-gold hover:text-background transition-colors"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.273.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Chat on WhatsApp
            </a>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-6">
            <a
              href="https://www.instagram.com/comedianteekay?igsh=MXF0bTRweXJnamJ1aw%3D%3D&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/70 hover:text-gold transition-colors text-sm"
            >
              Instagram
            </a>
            <a
              href="https://www.facebook.com/share/196kXv3F6p/?mibextid=wwXIfr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/70 hover:text-gold transition-colors text-sm"
            >
              Facebook
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
