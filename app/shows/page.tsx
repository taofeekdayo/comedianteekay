import PageLayout from "../../components/PageLayout";
import SectionHeader from "../../components/sections/SectionHeader";
import { CalendarDays, MapPin, Ticket } from "lucide-react";

const shows = [
  { date: "Aug 15, 2026", title: "Laugh Factory Live", venue: "The Laugh Factory", location: "Los Angeles, CA" },
  { date: "Sep 02, 2026", title: "Comedy Cellar Special", venue: "Comedy Cellar", location: "New York, NY" },
  { date: "Oct 10, 2026", title: "Teekay & Friends", venue: "Royal Albert Hall", location: "London, UK" },
  { date: "Nov 05, 2026", title: "Stand-Up Spectacular", venue: "Sydney Opera House", location: "Sydney, AU" },
  { date: "Dec 12, 2026", title: "Year-End Gala", venue: "The Comedy Store", location: "London, UK" },
  { date: "Jan 20, 2027", title: "Global Comedy Fest", venue: "Madison Square Garden", location: "New York, NY" },
];

export default function ShowsPage() {
  return (
    <PageLayout>
      <section className="pt-32 pb-24 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Upcoming Shows"
            subtitle="Catch Teekay live at one of his upcoming performances."
          />

          <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {shows.map((show, index) => (
              <div
                key={index}
                className="group rounded-2xl border border-charcoal-light bg-charcoal overflow-hidden hover:border-gold/50 transition-all duration-300"
              >
                <div className="aspect-video bg-charcoal-lighter relative overflow-hidden flex items-center justify-center">
                  <CalendarDays className="h-12 w-12 text-gold/30" />
                  <div className="absolute top-4 left-4 rounded-full bg-gold/20 px-3 py-1 backdrop-blur-sm">
                    <span className="text-xs font-bold uppercase tracking-wider text-gold">{show.date}</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-xl font-bold text-foreground mb-2 group-hover:text-gold transition-colors">{show.title}</h3>
                  <div className="flex items-start gap-2 text-sm text-foreground/60 mb-1">
                    <MapPin className="h-4 w-4 mt-0.5 text-gold" />
                    <span>{show.venue}</span>
                  </div>
                  <div className="flex items-start gap-2 text-sm text-foreground/60 mb-6">
                    <MapPin className="h-4 w-4 mt-0.5 text-gold" />
                    <span>{show.location}</span>
                  </div>
                  <a
                    href="/contact"
                    className="inline-flex items-center gap-2 rounded-full border border-gold px-5 py-2.5 text-sm font-medium text-gold hover:bg-gold hover:text-background transition-colors w-full justify-center"
                  >
                    <Ticket className="h-4 w-4" />
                    Book Now
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
