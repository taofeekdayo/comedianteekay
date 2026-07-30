import PageLayout from "../../components/PageLayout";
import SectionHeader from "../../components/sections/SectionHeader";

const videos = [
  {
    title: " Teekay's performance at OB Ampnsah's Bukom Arenas show",
    duration: "1:34",
    src: "/videos/video_2026-07-23_18-06-03.mp4",
    poster: "/images/hero/photo_2026-07-23_18-02-46.jpg",
  },
  {
    title: "Teekay cracked bones at Okokobioko's special",
    duration: "1:24",
    src: "/videos/Teekay cracked bones at Okokobioko's special.mp4",
    poster: "/images/hero/photo_2026-07-23_18-02-35.jpg",
  },
];

export default function VideosPage() {
  return (
    <PageLayout>
      <section className="pt-32 pb-24 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Featured Videos"
            subtitle="Watch some of Teekay's most memorable performances."
          />

          <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {videos.map((video, index) => (
              <div
                key={index}
                className="group relative aspect-video rounded-2xl border border-charcoal-light bg-charcoal-lighter overflow-hidden hover:border-gold/50 transition-all duration-300"
              >
                <video
                  controls
                  className="absolute inset-0 w-full h-full object-contain bg-charcoal-lighter"
                  poster={video.poster}
                  preload="metadata"
                >
                  <source src={video.src} type="video/mp4" />
                </video>
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-background/90 to-transparent">
                  <p className="text-sm font-medium text-foreground truncate">
                    {video.title}
                  </p>
                  <p className="text-xs text-foreground/50 mt-1">
                    {video.duration}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
