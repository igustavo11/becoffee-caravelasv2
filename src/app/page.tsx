import CardapioPage from "@/components/cardapio/page";
import { Footer } from "@/components/landingPage/Footer";
import Hero from "@/components/landingPage/Hero";
import Navbar from "@/components/landingPage/Navbar";
import { Reserve } from "@/components/landingPage/Reserve";
import Services from "@/components/landingPage/Services";
import Testimonials from "@/components/landingPage/Testimonais";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <CardapioPage />
      <Testimonials />
      <Reserve />
      <Footer />
    </>
  );
}
