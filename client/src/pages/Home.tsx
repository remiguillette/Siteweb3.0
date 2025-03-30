
import { Link } from "wouter";
import { frContent } from "@/lib/data";
import DivisionHeader from "@/components/DivisionHeader";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-black">
      <DivisionHeader 
        firstName="Rémi"
        lastName="Guillette"
        groupFr="Cabinet-conseil en sécurité publique"
        groupEn="Public Safety Consulting Firm"
        isEnglish={false}
        homePath="/"
        homeLabel="Accueil"
        languagePath="/eng"
        languageLabel="English"
      />

      <main className="flex-grow">
        {/* Language Toggle Only */}
        <div className="flex items-center gap-2">
          <span className="text-[#f89422] font-bold">Fier de l'Ontario / Proud of Ontario</span>
          <Link 
            href="/eng"
            className="px-4 py-2 bg-transparent border border-[#f89422] text-[#f89422] rounded-md hover:bg-[#f89422] hover:text-black transition"
          >
            {frContent.header.languageToggle}
          </Link>
        </div>

        {/* Hero Section */}
        <section className="py-12">
          {/* Add your hero section content here */}
        </section>
      </main>

      <Footer isEnglish={false} />
    </div>
  );
}
