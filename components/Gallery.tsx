import Image from "next/image";

const galleryImages = [
  "/images/events/photo_2026-07-23_18-05-19.jpg",
  "/images/hero/photo_2026-07-23_18-02-46.jpg",
  "/images/events/photo_2026-07-23_18-05-43.jpg",
  "/images/hero/photo_2026-07-23_18-02-35.jpg",
  "/images/events/photo_2026-07-23_18-05-48.jpg",
  "/images/hero/photo_2026-07-23_18-02-24.jpg",
  "/images/hero/photo_2026-07-23_18-02-19.jpg",
  "/images/events/photo_2026-07-23_18-05-58.jpg",
  "/images/hero/photo_2026-07-23_18-01-30.jpg",
];

const galleryAspects = [
  "aspect-square",
  "aspect-video",
  "aspect-square",
  "aspect-video",
  "aspect-square",
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
          {galleryImages.map((src, i) => (
            <div
              key={i}
              className={`${galleryAspects[i]} rounded-xl border border-charcoal-light bg-charcoal-lighter/50 overflow-hidden relative group`}
            >
              <Image
                src={src}
                alt={`Gallery image ${i + 1}`}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
