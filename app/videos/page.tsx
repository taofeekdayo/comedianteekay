import PageLayout from "../../components/PageLayout";
import SectionHeader from "../../components/sections/SectionHeader";
import { Play } from "lucide-react";

const videos = [
  { title: "Laugh Beyond Limits - Live at the Apollo", duration: "12:34" },
  { title: "Teekay: The Special Experience", duration: "45:21" },
  { title: "Stand-Up Highlights 2025", duration: "08:15" },
  { title: "Late Night Set - Full Performance", duration: "28:00" },
  { title: "Best of Teekay: Roast Edition", duration: "18:45" },
  { title: "Festival Headliner - Full Set", duration: "52:10" },
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
                className="group relative aspect-video rounded-2xl border border-charcoal-light bg-charcoal-lighter overflow-hidden hover:border-gold/50 transition-all duration-300 cursor-pointer"
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <Play className="h-12 w-12 text-gold/40 mx-auto mb-2" />
                    <p className="text-foreground/30 text-xs font-medium uppercase tracking-widest">Video Placeholder</p>
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
    </PageLayout>
  );
}
