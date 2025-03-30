import { frContent } from "@/lib/data";
import { Link } from "wouter";
import DivisionHeader from "@/components/DivisionHeader";
import Footer from "@/components/Footer";

export default function ServiceCommunautaire() {
  return (
    <div className="min-h-screen flex flex-col bg-black text-[#f89422]">
      <DivisionHeader 
        firstName="Rémi"
        lastName="Guillette"
        groupFr="Service communautaire francophone"
        groupEn="Francophone Community Services"
        isEnglish={false}
        homePath="/"
        homeLabel="Accueil"
        languagePath="/eng/community-service"
        languageLabel="English"
      />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-black relative overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="flex flex-col items-center text-center">
              <h2 className="font-['Montserrat'] font-bold text-4xl md:text-5xl mb-6">
                <span className="text-[#0d6efd]">Service</span>{" "}
                <span className="text-[#f89422]">communautaire</span>{" "}
                <span className="text-[#f89422]">francophone</span>
              </h2>
              <p className="text-[#f89422] text-lg mb-8 max-w-2xl">
                Notre service communautaire francophone est dédié à renforcer, soutenir et développer 
                les communautés francophones à travers des programmes culturels, éducatifs et sociaux qui 
                célèbrent et préservent la richesse de la langue et de la culture françaises.
              </p>

            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-16 bg-black">
          <div className="container mx-auto px-4">
            <h2 className="font-['Montserrat'] font-bold text-3xl md:text-4xl mb-12 text-center">
              <span className="text-[#f89422]">Nos services communautaires</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-black border border-[#f89422] p-8 rounded-lg hover:shadow-xl transition">
                <div className="w-14 h-14 bg-black border border-[#f89422] rounded-lg flex items-center justify-center mb-6">
                  <i className="fas fa-handshake text-[#f89422] text-2xl"></i>
                </div>
                <h3 className="font-['Montserrat'] font-bold text-xl mb-4 text-[#f89422]">
                  Services d'intégration
                </h3>
                <p className="text-[#f89422]">
                  Aide aux nouveaux arrivants francophones pour leur intégration dans la communauté.
                </p>
              </div>

              <div className="bg-black border border-[#f89422] p-8 rounded-lg hover:shadow-xl transition">
                <div className="w-14 h-14 bg-black border border-[#f89422] rounded-lg flex items-center justify-center mb-6">
                  <i className="fas fa-hands-helping text-[#f89422] text-2xl"></i>
                </div>
                <h3 className="font-['Montserrat'] font-bold text-xl mb-4 text-[#f89422]">
                  Soutien communautaire
                </h3>
                <p className="text-[#f89422]">
                  Services d'aide sociale, programmes de mentorat et initiatives de développement communautaire.
                </p>
              </div>

              <div className="bg-black border border-[#f89422] p-8 rounded-lg hover:shadow-xl transition">
                <div className="w-14 h-14 bg-black border border-[#f89422] rounded-lg flex items-center justify-center mb-6">
                  <i className="fas fa-user-friends text-[#f89422] text-2xl"></i>
                </div>
                <h3 className="font-['Montserrat'] font-bold text-xl mb-4 text-[#f89422]">
                  Services aux personnes avancées en âge
                </h3>
                <p className="text-[#f89422]">
                  Programmes adaptés et soutien personnalisé pour les membres francophones avancés en âge de notre communauté.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Other sections... */}
      </main>
      <Footer />
    </div>
  );
}