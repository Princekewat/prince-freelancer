import Booking from "@/components/Booking";
import Hero from "@/components/Hero";
import Projects from "@/components/Project";
import Reviews from "@/components/Reviews";
import Services from "@/components/Service";
import Skills from "@/components/Skills";
import Team from "@/components/Team";

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <Skills />
      <Team />
      <Projects />
      <Reviews />
      <Booking />
    </main>
  );
}
