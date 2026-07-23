const galleryImages = [
  "aspect-square",
  "aspect-video",
  "aspect-square",
  "aspect-video",
  "aspect-square",
  "aspect-square",
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Gallery
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Glimpses from the stage, the crowd, and the moments that make every show special.
          </p>
          <div className="h-1 w-20 bg-gold mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {galleryImages.map((aspect, i) => (
            <div
              key={i}
              className={`${aspect} rounded-xl border border-charcoal-light bg-charcoal-lighter/50 overflow-hidden relative group`}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-foreground/20 text-xs font-medium uppercase tracking-widest">
                  Image
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
