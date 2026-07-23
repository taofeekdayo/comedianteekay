import PageLayout from "../../components/PageLayout";
import SectionHeader from "../../components/sections/SectionHeader";

const galleryImages = [
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

export default function GalleryPage() {
  return (
    <PageLayout>
      <section className="pt-32 pb-24 bg-charcoal">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Gallery"
            subtitle="Glimpses from the stage, the crowd, and the moments that make every show special."
          />

          <div className="mt-16 grid grid-cols-2 md:grid-cols-3 gap-4">
            {galleryImages.map((aspect, i) => (
              <div
                key={i}
                className={`${aspect} rounded-xl border border-charcoal-light bg-charcoal-lighter/50 overflow-hidden relative group`}
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-foreground/20 text-xs font-medium uppercase tracking-widest">Image</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
