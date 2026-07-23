import { Star } from "lucide-react";

const testimonials = [
  {
    quote: "Teekay had the entire room rolling. His timing is impeccable and his wit is razor-sharp. A truly world-class performance.",
    name: "Sarah Johnson",
    role: "VIP Guest, The Comedy Store",
  },
  {
    quote: "I laughed so hard I cried. Teekay knows how to command a room like no other. We booked him for our annual gala and it was the best decision we made.",
    name: "Michael Chen",
    role: "Event Director, Global Tech Summit",
  },
  {
    quote: "Refined, hilarious, and incredibly engaging. Teekay brings an elegance to comedy that is rare and absolutely captivating.",
    name: "Elena Rodriguez",
    role: "Entertainment Editor, Luxe Magazine",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-charcoal">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            What People Say
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Hear from audiences and event organizers who have experienced Teekay live.
          </p>
          <div className="h-1 w-20 bg-gold mx-auto mt-6" />
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="rounded-2xl border border-charcoal-light bg-background p-8 relative"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-gold text-gold" />
                ))}
              </div>
              <p className="text-foreground/80 mb-6 leading-relaxed">
                &ldquo;{item.quote}&rdquo;
              </p>
              <div>
                <p className="font-serif font-bold text-foreground">{item.name}</p>
                <p className="text-sm text-foreground/50">{item.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
