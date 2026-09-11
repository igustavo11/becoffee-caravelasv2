import CardapioPage from "@/components/cardapio/page";
import { Footer } from "@/components/landingPage/Footer";
import Hero from "@/components/landingPage/Hero";
import Navbar from "@/components/landingPage/Navbar";
import { Reserve } from "@/components/landingPage/Reserve";
import Services from "@/components/landingPage/Services";
import Testimonials from "@/components/landingPage/Testimonais";
import { JsonLd } from "@/components/seo/JsonLd";
import { cafeOrCoffeeShopJsonLd, websiteJsonLd } from "@/lib/site";

export default function Home() {
  return (
    <>
      <JsonLd data={cafeOrCoffeeShopJsonLd()} />
      <JsonLd data={websiteJsonLd()} />
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
