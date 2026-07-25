"use client";

import { useState } from "react";
import Image from "next/image";
import ImageLightbox from "../../components/ImageLightbox";
import PageLayout from "../../components/PageLayout";
import SectionHeader from "../../components/sections/SectionHeader";

const galleryImages = [
  { src: "/images/hero/photo_2026-07-23_18-02-46.jpg", width: 853, height: 1280 },
  { src: "/images/hero/photo_2026-07-23_18-02-35.jpg", width: 853, height: 1280 },
  { src: "/images/hero/photo_2026-07-23_18-02-24.jpg", width: 1024, height: 1280 },
  { src: "/images/hero/photo_2026-07-23_18-02-19.jpg", width: 853, height: 1280 },
  { src: "/images/special/photo_2026-07-23_18-05-58.jpg", width: 1024, height: 1280 },
  { src: "/images/hero/photo_2026-07-23_18-01-30.jpg", width: 654, height: 1280 },
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

          <div className="mt-16 columns-1 md:columns-2 lg:columns-3 gap-4">
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
    </PageLayout>
  );
}
