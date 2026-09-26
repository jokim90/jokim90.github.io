import Hero from "@/components/Hero";
import Ticker from "@/components/Ticker";
import RaceCard from "@/components/RaceCard";
import Press from "@/components/PressList";
import Timeline from "@/components/Timeline";
import Education from "@/components/Education";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <>
      <Hero />
      <Ticker />
      <RaceCard />
      <Press />
      <Skills />
      <Timeline />
      <Education />
    </>
  );
}
