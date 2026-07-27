"use client";

import { useState } from "react";
import Image from "next/image";
import ImageLightbox from "./ImageLightbox";

const upcomingShow = {
  title: "Millionaire by 30",
  date: "2nd October",
  venue: "2927",
  location: "Doors open at 6PM",
  image: "/images/special/photo_2026-07-23_18-05-58.jpg",
};

export default function Shows() {
  const [lightboxOpen, setLightboxOpen] = useState(false);

  return (
    <section id="shows" className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Upcoming Shows
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Catch Teekay live at one of his upcoming performances.
          </p>
          <div className="h-1 w-20 bg-gold mx-auto mt-6" />
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="rounded-2xl border border-gold/30 bg-charcoal overflow-hidden hover:border-gold transition-all duration-300">
            <div
              className="aspect-video sm:aspect-[16/9] relative overflow-hidden bg-charcoal-lighter cursor-pointer"
              onClick={() => setLightboxOpen(true)}
            >
              <Image
                src={upcomingShow.image}
                alt={upcomingShow.title}
                fill
                className="object-contain p-6 transition-transform duration-300 group-hover:scale-105"
                priority
              />
            </div>
            <div className="p-6 sm:p-8 text-center">
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-foreground mb-3">
                {upcomingShow.title}
              </h3>
              <p className="text-foreground/70 mb-1">
                Date: {upcomingShow.date}
              </p>
              <p className="text-foreground/70 mb-1">
                Venue: {upcomingShow.venue}
              </p>
              <p className="text-foreground/70">{upcomingShow.location}</p>
            </div>
          </div>
        </div>
      </div>

      {lightboxOpen && (
        <ImageLightbox
          images={[upcomingShow.image]}
          initialIndex={0}
          onClose={() => setLightboxOpen(false)}
        />
      )}
    </section>
  );
}
