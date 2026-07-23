import PageLayout from "../../components/PageLayout";
import SectionHeader from "../../components/sections/SectionHeader";
import { Award, Mic, Globe } from "lucide-react";

const highlights = [
  {
    icon: Mic,
    title: "Stage Presence",
    description: "Over a decade commanding stages with unmatched energy and wit.",
  },
  {
    icon: Globe,
    title: "Global Reach",
    description: "Performances across 15 countries and counting.",
  },
  {
    icon: Award,
    title: "Award Winner",
    description: "Recognized by comedy festivals and industry leaders alike.",
  },
];

export default function AboutPage() {
  return (
    <PageLayout>
      <section className="pt-32 pb-24 bg-charcoal">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="About Teekay"
            subtitle="A decade of laughter, stories, and unforgettable moments."
          />

          <div className="grid lg:grid-cols-2 gap-12 mt-16">
            <div className="prose prose-invert max-w-none">
              <p className="text-lg text-foreground/80 leading-relaxed mb-6">
                Teekay is not just a comedian; he is a force of nature on stage. With over a decade of experience mesmerizing audiences worldwide, he brings a unique blend of observational humor, social commentary, and storytelling that resonates deeply with every crowd.
              </p>
              <p className="text-lg text-foreground/80 leading-relaxed mb-6">
                From sold-out theaters to international festivals, Teekay has earned a reputation for delivering performances that are both hilarious and thought-provoking. His style is premium yet relatable, making every show a luxurious escape into pure joy.
              </p>
              <p className="text-lg text-foreground/80 leading-relaxed">
                Whether performing for 50 people in an intimate club or 5,000 in a grand theater, Teekay&apos;s authenticity and charisma shine through, creating connections that last long after the final punchline.
              </p>
            </div>

            <div className="grid gap-6">
              {highlights.map(({ icon: Icon, title, description }, i) => (
                <div
                  key={i}
                  className="rounded-2xl border border-charcoal-light bg-background p-6 flex items-start gap-4"
                >
                  <div className="p-3 rounded-full bg-charcoal-lighter">
                    <Icon className="h-6 w-6 text-gold" />
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-foreground mb-1">{title}</h3>
                    <p className="text-foreground/70 text-sm leading-relaxed">{description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <span className="block text-4xl font-bold text-gold font-serif">10+</span>
              <span className="text-sm text-foreground/50 mt-1">Years Experience</span>
            </div>
            <div className="text-center">
              <span className="block text-4xl font-bold text-gold font-serif">500+</span>
              <span className="text-sm text-foreground/50 mt-1">Shows Performed</span>
            </div>
            <div className="text-center">
              <span className="block text-4xl font-bold text-gold font-serif">15</span>
              <span className="text-sm text-foreground/50 mt-1">Countries</span>
            </div>
            <div className="text-center">
              <span className="block text-4xl font-bold text-gold font-serif">1M+</span>
              <span className="text-sm text-foreground/50 mt-1">Fans Worldwide</span>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
