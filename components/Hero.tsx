import { CalendarDays, Ticket, Mic2 } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-charcoal to-background" />
      
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-32 text-center">
        <div className="mx-auto max-w-4xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-charcoal-light/50 px-4 py-1.5 backdrop-blur-sm">
            <span className="h-2 w-2 rounded-full bg-gold animate-pulse" />
            <span className="text-xs font-medium uppercase tracking-widest text-gold">
              Award-Winning Comedian
            </span>
          </div>

          <h1 className="font-serif text-5xl sm:text-6xl lg:text-8xl font-bold tracking-tight text-foreground mb-6">
            Laugh Beyond Limits
          </h1>

          <p className="mt-4 text-lg sm:text-xl text-foreground/70 max-w-2xl mx-auto mb-10">
            Experience the electrifying humor of Teekay, the comedian who blends wit, wisdom, and raw talent into an unforgettable night of entertainment.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#book"
              className="inline-flex items-center gap-2 rounded-full bg-gold px-8 py-4 text-base font-semibold text-background shadow-lg shadow-gold/20 hover:bg-gold-light transition-colors"
            >
              <Ticket className="h-5 w-5" />
              Book Me
            </a>
            <a
              href="#shows"
              className="inline-flex items-center gap-2 rounded-full border border-foreground/20 px-8 py-4 text-base font-semibold text-foreground hover:border-gold hover:text-gold transition-colors"
            >
              <CalendarDays className="h-5 w-5" />
              Upcoming Shows
            </a>
          </div>
        </div>

        <div className="mt-16 aspect-video max-w-5xl mx-auto rounded-2xl border border-charcoal-light bg-charcoal-lighter/50 overflow-hidden relative">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <div className="rounded-full border-2 border-gold/30 p-6 mb-4 mx-auto w-fit">
                <Mic2 className="h-16 w-16 text-gold mx-auto" />
              </div>
              <p className="text-foreground/40 text-sm font-medium uppercase tracking-widest">
                Comedy Image Placeholder
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
