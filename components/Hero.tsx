import Image from "next/image";
import { CalendarDays, Ticket } from "lucide-react";

const heroImage = "/images/hero/photo_2026-07-23_18-02-13.jpg";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden pt-16">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-charcoal to-background" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-0 w-full">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="order-2 lg:order-1 text-center lg:text-left animate-fade-in-up">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-charcoal-light/50 px-4 py-1.5 backdrop-blur-sm">
              <span className="h-2 w-2 rounded-full bg-gold animate-pulse" />
              <span className="text-xs font-medium uppercase tracking-widest text-gold">
                Award-Winning Comedian
              </span>
            </div>

            <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-foreground mb-6">
              Laugh Beyond Limits
            </h1>

            <p className="text-lg sm:text-xl text-foreground/70 mb-8 max-w-xl mx-auto lg:mx-0">
              Ghanaian stand-up comedian delivering unforgettable performances for corporate events, comedy specials and private shows.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a
                href="#contact"
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

          <div className="order-1 lg:order-2 flex justify-center lg:justify-end animate-fade-in-up" style={{ animationDelay: "0.15s" }}>
            <div className="relative w-full max-w-md lg:max-w-lg xl:max-w-xl">
              <div className="absolute -inset-4 rounded-full bg-gold/20 blur-3xl opacity-70" />
              <div className="relative aspect-[3/4] lg:aspect-[4/5] rounded-2xl overflow-hidden shadow-[0_0_60px_rgba(212,175,55,0.25)]">
                <Image
                  src={heroImage}
                  alt="Teekay portrait"
                  fill
                  priority
                  className="object-contain animate-float"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
