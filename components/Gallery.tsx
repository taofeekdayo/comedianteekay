"use client";

import { useState } from "react";
import Image from "next/image";
import ImageLightbox from "./ImageLightbox";

const galleryImages = [
  { src: "/images/hero/photo_2026-07-23_18-02-46.jpg", width: 853, height: 1280 },
  { src: "/images/hero/photo_2026-07-23_18-02-35.jpg", width: 853, height: 1280 },
  { src: "/images/hero/photo_2026-07-23_18-02-24.jpg", width: 1024, height: 1280 },
  { src: "/images/hero/photo_2026-07-23_18-02-19.jpg", width: 853, height: 1280 },
  { src: "/images/special/photo_2026-07-23_18-05-58.jpg", width: 1024, height: 1280 },
  { src: "/images/hero/photo_2026-07-23_18-01-30.jpg", width: 654, height: 1280 },
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

          <div className="columns-1 md:columns-2 lg:columns-3 gap-4">
            {galleryImages.map((img, i) => (
              <button
                key={i}
                onClick={() => setLightboxIndex(i)}
                className="mb-4 break-inside-avoid rounded-xl border border-charcoal-light shadow-lg shadow-black/20 overflow-hidden relative group bg-charcoal-lighter focus:outline-none focus:ring-2 focus:ring-gold"
              >
                <Image
                  src={img.src}
                  alt={`Gallery image ${i + 1}`}
                  width={img.width}
                  height={img.height}
                  loading="lazy"
                  className="w-full h-auto object-contain group-hover:scale-105 transition-transform duration-500 animate-fade-in"
                />
              </button>
            ))}
          </div>
        </div>
      </section>

      {lightboxIndex !== null && (
        <ImageLightbox
          images={galleryImages.map((img) => img.src)}
          initialIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
        />
      )}
    </>
  );
}
