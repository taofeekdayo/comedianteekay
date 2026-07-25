import PageLayout from "../../components/PageLayout";
import SectionHeader from "../../components/sections/SectionHeader";
import { Mail } from "lucide-react";

export default function ContactPage() {
  return (
    <PageLayout>
      <section className="pt-32 pb-24 bg-background">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Book Teekay"
            subtitle="Whether it's a corporate gala, private party, or sold-out theater, Teekay delivers a comedy experience that transcends the ordinary."
          />

          <div className="mt-16 rounded-2xl border border-charcoal-light bg-charcoal p-8 sm:p-12">
            <div className="flex flex-col items-center gap-4 mb-10">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-charcoal-lighter">
                  <Mail className="h-6 w-6 text-gold" />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-foreground mb-1">Email</h3>
                  <p className="text-foreground/70">comedianteekay@gmail.com</p>
                </div>
              </div>
            </div>

            <a
              href="mailto:comedianteekay@gmail.com"
              className="inline-flex items-center gap-2 rounded-full bg-gold px-10 py-4 text-base font-semibold text-background shadow-lg shadow-gold/20 hover:bg-gold-light transition-colors"
            >
              Book Me Now
            </a>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
