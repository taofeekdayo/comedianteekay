import { Mic2 } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-charcoal border-t border-charcoal-light">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Mic2 className="h-8 w-8 text-gold" />
              <span className="font-serif text-2xl font-bold tracking-wider text-gold">
                TEEKAY
              </span>
            </div>
            <p className="text-foreground/60 max-w-sm">
              Award-winning stand-up comedian bringing laughter beyond limits. Experience comedy elevated to an art form.
            </p>
          </div>

          <div>
            <h4 className="font-serif font-bold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#about" className="text-foreground/60 hover:text-gold transition-colors text-sm">About</a></li>
              <li><a href="#shows" className="text-foreground/60 hover:text-gold transition-colors text-sm">Shows</a></li>
              <li><a href="#videos" className="text-foreground/60 hover:text-gold transition-colors text-sm">Videos</a></li>
              <li><a href="#gallery" className="text-foreground/60 hover:text-gold transition-colors text-sm">Gallery</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif font-bold text-foreground mb-4">Connect</h4>
            <div className="flex flex-col gap-3">
              <a href="#" className="text-foreground/60 hover:text-gold transition-colors text-sm">Instagram</a>
              <a href="#" className="text-foreground/60 hover:text-gold transition-colors text-sm">YouTube</a>
              <a href="#" className="text-foreground/60 hover:text-gold transition-colors text-sm">Twitter</a>
              <a href="#" className="text-foreground/60 hover:text-gold transition-colors text-sm">Facebook</a>
            </div>
          </div>
        </div>

        <div className="border-t border-charcoal-light pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-foreground/40">
            &copy; 2026 Teekay. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-foreground/40">
            <a href="#" className="hover:text-gold transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gold transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
