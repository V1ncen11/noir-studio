import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Portfolio from "@/components/Portfolio";
import About from "@/components/About";
import Clients from "@/components/Clients";
import Services from "@/components/Services";
import Team from "@/components/Team";
import FAQ from "@/components/FAQ";
import Instagram from "@/components/Instagram";
import Footer from "@/components/Footer";
import Preloader from "@/components/Preloader";
import CustomCursor from "@/components/CustomCursor";

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Preloader />
      <CustomCursor />
      <Navbar />
      <Hero />
      <Portfolio />
      <About />
      <Clients />
      <Services />
      <Team />
      <FAQ />
      <Instagram />
      <Footer />
    </main>
  );
}
