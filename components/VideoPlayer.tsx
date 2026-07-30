"use client";

import { useRef } from "react";

type VideoPlayerProps = {
  src: string;
  poster: string;
};

export default function VideoPlayer({ src, poster }: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  const toggleFullscreen = () => {
    const video = videoRef.current;
    if (!video) return;

    const target = video as HTMLVideoElement & {
      webkitRequestFullscreen?: () => void;
      mozRequestFullScreen?: () => void;
      msRequestFullscreen?: () => void;
    };

    if (target.requestFullscreen) {
      target.requestFullscreen().catch((err) => {
        console.error("Fullscreen request failed:", err);
      });
    } else if (typeof target.webkitRequestFullscreen === "function") {
      target.webkitRequestFullscreen();
    } else if (typeof target.mozRequestFullScreen === "function") {
      target.mozRequestFullScreen();
    } else if (typeof target.msRequestFullscreen === "function") {
      target.msRequestFullscreen();
    } else {
      console.warn("Fullscreen API is not supported in this browser.");
    }
  };

  return (
    <div className="group relative aspect-video rounded-2xl border border-charcoal-light bg-charcoal-lighter overflow-hidden hover:border-gold/50 transition-all duration-300">
      <video
        ref={videoRef}
        controls
        className="absolute inset-0 w-full h-full object-contain bg-charcoal-lighter"
        poster={poster}
        preload="metadata"
      >
        <source src={src} type="video/mp4" />
      </video>
      <button
        type="button"
        onClick={toggleFullscreen}
        className="absolute top-3 right-3 z-10 p-2 rounded-full bg-black/50 hover:bg-black/70 text-white transition-colors"
        aria-label="Fullscreen"
        title="Fullscreen"
      >
        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
        </svg>
      </button>
    </div>
  );
}
