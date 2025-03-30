
import { Link } from "wouter";
import DivisionHeader from "@/components/DivisionHeader";
import Footer from "@/components/Footer";

export default function ServicesSociauxCulturels() {
  return (
    <div className="min-h-screen flex flex-col bg-black text-[#f89422]">
      <DivisionHeader 
        firstName="Rémi"
        lastName="Guillette"
        groupFr="Services sociaux et culturels"
        groupEn="Social and Cultural Services"
        isEnglish={false}
        homePath="/"
        homeLabel="Accueil"
        languagePath="/eng/social-cultural-services"
        languageLabel="English"
      />
      
      <main className="flex-grow">
        <section className="py-16 md:py-24 bg-black relative overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="flex flex-col items-center text-center">
              <h2 className="font-['Montserrat'] font-bold text-4xl md:text-5xl mb-6">
                <span className="text-[#0d6efd]">Services</span>{" "}
                <span className="text-[#f89422]">sociaux et</span>{" "}
                <span className="text-[#f89422]">culturels</span>
              </h2>
              <p className="text-[#f89422] text-lg mb-8 max-w-2xl">
                Nos services sociaux et culturels sont dédiés à enrichir la vie communautaire 
                à travers des programmes éducatifs, culturels et sociaux qui célèbrent 
                et préservent notre héritage francophone.
              </p>
            </div>
          </div>
        </section>

        <section id="services" className="py-16 bg-black">
          <div className="container mx-auto px-4">
            <h2 className="font-['Montserrat'] font-bold text-3xl md:text-4xl mb-12 text-center">
              <span className="text-[#f89422]">Nos services</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-black border border-[#f89422] p-8 rounded-lg hover:shadow-xl transition">
                <div className="w-14 h-14 bg-black border border-[#f89422] rounded-lg flex items-center justify-center mb-6">
                  <i className="fas fa-book-open text-[#f89422] text-2xl"></i>
                </div>
                <h3 className="font-['Montserrat'] font-bold text-xl mb-4 text-[#f89422]">
                  Programmes éducatifs
                </h3>
                <p className="text-[#f89422]">
                  Cours de français, clubs de lecture et ateliers éducatifs pour tous les âges.
                </p>
              </div>

              <div className="bg-black border border-[#f89422] p-8 rounded-lg hover:shadow-xl transition">
                <div className="w-14 h-14 bg-black border border-[#f89422] rounded-lg flex items-center justify-center mb-6">
                  <i className="fas fa-theater-masks text-[#f89422] text-2xl"></i>
                </div>
                <h3 className="font-['Montserrat'] font-bold text-xl mb-4 text-[#f89422]">
                  Événements culturels
                </h3>
                <p className="text-[#f89422]">
                  Festivals, concerts, pièces de théâtre et expositions artistiques célébrant la culture francophone.
                </p>
              </div>

              <div className="bg-black border border-[#f89422] p-8 rounded-lg hover:shadow-xl transition">
                <div className="w-14 h-14 bg-black border border-[#f89422] rounded-lg flex items-center justify-center mb-6">
                  <i className="fas fa-users text-[#f89422] text-2xl"></i>
                </div>
                <h3 className="font-['Montserrat'] font-bold text-xl mb-4 text-[#f89422]">
                  Soutien communautaire
                </h3>
                <p className="text-[#f89422]">
                  Services d'aide sociale, programmes de mentorat et initiatives de développement communautaire.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
