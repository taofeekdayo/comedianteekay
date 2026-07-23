import { Mail, Phone } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-background">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
          Book Teekay
        </h2>
        <p className="text-lg text-foreground/70 max-w-2xl mx-auto mb-10">
          Whether it&apos;s a corporate gala, private party, or sold-out theater, Teekay delivers a comedy experience that transcends the ordinary.
        </p>

        <div className="rounded-2xl border border-charcoal-light bg-charcoal p-8 sm:p-12">
          <div className="grid sm:grid-cols-2 gap-8 text-left mb-10">
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

          <a
            href="mailto:booking@teekay.com"
            className="inline-flex items-center gap-2 rounded-full bg-gold px-10 py-4 text-base font-semibold text-background shadow-lg shadow-gold/20 hover:bg-gold-light transition-colors"
          >
            Book Me Now
          </a>
        </div>
      </div>
    </section>
  );
}
