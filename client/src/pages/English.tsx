import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import DivisionsSection from "@/components/DivisionsSection";
import ServicesSection from "@/components/ServicesSection";
import Footer from "@/components/Footer";
import { enContent } from "@/lib/data";

export default function English() {
  return (
    <div className="bg-[#121212] text-white min-h-screen flex flex-col">
      <Header 
        content={enContent.header}
        isEnglish={true} 
      />
      <main className="flex-grow">
        <HeroSection content={enContent.hero} />
        <DivisionsSection content={enContent.divisions} />
        <ServicesSection content={enContent.services} />
      </main>
      <Footer content={enContent.footer} />
    </div>
  );
}
