"use client";

import { useState } from "react";
import { Menu, X, Mic2 } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-charcoal-light">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Mic2 className="h-8 w-8 text-gold" />
            <span className="font-serif text-2xl font-bold tracking-wider text-gold">
              TEEKAY
            </span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <a href="#home" className="text-sm font-medium text-foreground hover:text-gold transition-colors">Home</a>
            <a href="#about" className="text-sm font-medium text-foreground hover:text-gold transition-colors">About</a>
            <a href="#shows" className="text-sm font-medium text-foreground hover:text-gold transition-colors">Shows</a>
            <a href="#videos" className="text-sm font-medium text-foreground hover:text-gold transition-colors">Videos</a>
            <a href="#gallery" className="text-sm font-medium text-foreground hover:text-gold transition-colors">Gallery</a>
            <a href="#contact" className="text-sm font-medium text-foreground hover:text-gold transition-colors">Contact</a>
            <a
              href="#contact"
              className="rounded-full border border-gold px-5 py-2 text-sm font-medium text-gold hover:bg-gold hover:text-background transition-colors"
            >
              Book Me
            </a>
          </div>

          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden py-4 border-t border-charcoal-light">
            <div className="flex flex-col gap-4">
              <a href="#home" className="text-sm font-medium text-foreground hover:text-gold" onClick={() => setIsOpen(false)}>Home</a>
              <a href="#about" className="text-sm font-medium text-foreground hover:text-gold" onClick={() => setIsOpen(false)}>About</a>
              <a href="#shows" className="text-sm font-medium text-foreground hover:text-gold" onClick={() => setIsOpen(false)}>Shows</a>
              <a href="#videos" className="text-sm font-medium text-foreground hover:text-gold" onClick={() => setIsOpen(false)}>Videos</a>
              <a href="#gallery" className="text-sm font-medium text-foreground hover:text-gold" onClick={() => setIsOpen(false)}>Gallery</a>
              <a href="#contact" className="text-sm font-medium text-foreground hover:text-gold" onClick={() => setIsOpen(false)}>Contact</a>
              <a
                href="#contact"
                className="rounded-full border border-gold px-5 py-3 text-sm font-medium text-gold hover:bg-gold hover:text-background transition-colors text-center"
                onClick={() => setIsOpen(false)}
              >
                Book Me
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
