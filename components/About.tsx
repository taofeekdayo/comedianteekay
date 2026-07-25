import Image from "next/image";

const portraitImage = "/images/hero/photo_2026-07-23_18-02-04.jpg";

export default function About() {
  return (
    <section id="about" className="py-24 bg-charcoal">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              About Teekay
            </h2>
            <div className="h-1 w-20 bg-gold mb-8" />
            <p className="text-lg text-foreground/70 mb-6 leading-relaxed">
              Teekay is not just a comedian; he is a force of nature on stage. With over a decade of experience mesmerizing audiences worldwide, Teekay brings a unique blend of observational humor, social commentary, and storytelling that resonates deeply with every crowd.
            </p>
            <p className="text-lg text-foreground/70 mb-8 leading-relaxed">
              From sold-out theaters to international festivals, Teekay has earned a reputation for delivering performances that are both hilarious and thought-provoking. His style is premium yet relatable, making every show a luxurious escape into pure joy.
            </p>
            <div className="flex items-center gap-6">
              <div className="text-center">
                <span className="block text-3xl font-bold text-gold font-serif">10+</span>
                <span className="text-sm text-foreground/50">Years Experience</span>
              </div>
              <div className="h-12 w-px bg-charcoal-light" />
              <div className="text-center">
                <span className="block text-3xl font-bold text-gold font-serif">500+</span>
                <span className="text-sm text-foreground/50">Shows Performed</span>
              </div>
              <div className="h-12 w-px bg-charcoal-light" />
              <div className="text-center">
                <span className="block text-3xl font-bold text-gold font-serif">15</span>
                <span className="text-sm text-foreground/50">Countries</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[3/4] rounded-2xl border border-charcoal-light bg-charcoal-lighter overflow-hidden relative">
              <Image
                src={portraitImage}
                alt="Teekay portrait"
                fill
                className="object-contain p-2"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gold/10 rounded-2xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
}
