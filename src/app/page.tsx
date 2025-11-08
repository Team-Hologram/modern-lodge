import Hero from "@/components/home/Hero";
import FeaturedLodges from "@/components/home/FeaturedLodges";
import Experiences from "@/components/home/Experiences";
import Testimonials from "@/components/home/Testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedLodges />
      <Experiences />
      <Testimonials />
    </>
  );
}