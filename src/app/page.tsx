import Hero from "@/components/landingPage/Hero";
import Navbar from "@/components/landingPage/Navbar";
import Services from "@/components/landingPage/Services";
import Testimonials from "@/components/landingPage/Testimonais";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <Testimonials />
    </>
  );
}
