import { Play } from "lucide-react";

const videos = [
  { title: "Laugh Beyond Limits - Live at the Apollo", duration: "12:34" },
  { title: "Teekay: The Special Experience", duration: "45:21" },
  { title: "Stand-Up Highlights 2025", duration: "08:15" },
];

export default function Videos() {
  return (
    <section id="videos" className="py-24 bg-charcoal">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Featured Videos
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Watch some of Teekay&apos;s most memorable performances.
          </p>
          <div className="h-1 w-20 bg-gold mx-auto mt-6" />
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {videos.map((video, index) => (
            <div
              key={index}
              className="group relative aspect-video rounded-2xl border border-charcoal-light bg-charcoal-lighter overflow-hidden hover:border-gold/50 transition-all duration-300"
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <Play className="h-12 w-12 text-gold/40 mx-auto mb-2" />
                  <p className="text-foreground/30 text-xs font-medium uppercase tracking-widest">
                    Video Placeholder
                  </p>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-background/90 to-transparent">
                <p className="text-sm font-medium text-foreground truncate">{video.title}</p>
                <p className="text-xs text-foreground/50 mt-1">{video.duration}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
