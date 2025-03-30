import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import DivisionsSection from "@/components/DivisionsSection";
import ServicesSection from "@/components/ServicesSection";
import Footer from "@/components/Footer";
import { frContent } from "@/lib/data";

export default function Home() {
  return (
    <div className="bg-[#121212] text-white min-h-screen flex flex-col">
      <Header 
        content={frContent.header}
        isEnglish={false} 
      />
      <main className="flex-grow">
        <HeroSection content={frContent.hero} />
        <DivisionsSection content={frContent.divisions} />
        <ServicesSection content={frContent.services} />
      </main>
      <Footer content={frContent.footer} />
    </div>
  );
}
