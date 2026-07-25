import { Suspense } from "react";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Shows from "../components/Shows";
import Videos from "../components/Videos";
import Gallery from "../components/Gallery";
import Testimonials from "../components/Testimonials";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="bg-background">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Shows />
        <Videos />
        <Gallery />
        <Testimonials />
        <Suspense fallback={<div className="min-h-[200px]" />}>
          <Contact />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}
