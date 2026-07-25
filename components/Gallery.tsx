"use client";

import { useState } from "react";
import Image from "next/image";
import ImageLightbox from "./ImageLightbox";

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

export default function Gallery() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  return (
    <>
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
              <button
                key={i}
                onClick={() => setLightboxIndex(i)}
                className="aspect-video rounded-xl border border-charcoal-light shadow-lg shadow-black/20 overflow-hidden relative group focus:outline-none focus:ring-2 focus:ring-gold"
              >
                <Image
                  src={src}
                  alt={`Gallery image ${i + 1}`}
                  fill
                  loading="lazy"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                />
              </button>
            ))}
          </div>
        </div>
      </section>

      {lightboxIndex !== null && (
        <ImageLightbox
          images={galleryImages}
          initialIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
        />
      )}
    </>
  );
}
