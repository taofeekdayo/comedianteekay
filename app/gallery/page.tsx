"use client";

import { useState } from "react";
import Image from "next/image";
import ImageLightbox from "../../components/ImageLightbox";
import PageLayout from "../../components/PageLayout";
import SectionHeader from "../../components/sections/SectionHeader";

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

export default function GalleryPage() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  return (
    <PageLayout>
      <section className="pt-32 pb-24 bg-charcoal">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Gallery"
            subtitle="Glimpses from the stage, the crowd, and the moments that make every show special."
          />

          <div className="mt-16 grid grid-cols-2 md:grid-cols-3 gap-4">
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
    </PageLayout>
  );
}
