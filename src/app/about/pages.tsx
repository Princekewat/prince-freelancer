import Hero from "@/components/Hero";
import Services from "@/components/Service";
import Skills from "@/components/Skills";
import Projects from "@/components/Project";
import Reviews from "@/components/Reviews";
import Booking from "@/components/Booking";

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <Skills />
      <Projects />
      <Reviews />
      <Booking />
    </main>
  );
}