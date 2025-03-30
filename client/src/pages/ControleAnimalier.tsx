import { frContent } from "@/lib/data";
import { Link } from "wouter";
import DivisionHeader from "@/components/DivisionHeader";
import Footer from "@/components/Footer";

export default function ControleAnimalier() {
  return (
    <div className="min-h-screen flex flex-col bg-black text-[#f89422]">
      <DivisionHeader 
        firstName="Rémi"
        lastName="Guillette"
        groupFr="Contrôle Animalier"
        groupEn="Animal Control"
        isEnglish={false}
        homePath="/"
        homeLabel="Accueil"
        languagePath="/eng/animal-control"
        languageLabel="English"
      />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-black relative overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="flex flex-col items-center text-center">
              <h2 className="font-['Montserrat'] font-bold text-4xl md:text-5xl mb-6">
                <span className="text-[#0d6efd]">Contrôle</span>{" "}
                <span className="text-[#f89422]">animalier</span>
              </h2>
              <p className="text-[#f89422] text-lg mb-8 max-w-2xl">
                Notre service de contrôle animalier s'engage à assurer la sécurité publique et le bien-être 
                animal à travers des interventions professionnelles, des programmes éducatifs et des 
                initiatives de protection des animaux.
              </p>

            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-16 bg-black">
          <div className="container mx-auto px-4">
            <h2 className="font-['Montserrat'] font-bold text-3xl md:text-4xl mb-12 text-center">
              <span className="text-[#f89422]">Nos services</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-black border border-[#f89422] p-8 rounded-lg hover:shadow-xl transition">
                <div className="w-14 h-14 bg-black border border-[#f89422] rounded-lg flex items-center justify-center mb-6">
                  <i className="fas fa-paw text-[#f89422] text-2xl"></i>
                </div>
                <h3 className="font-['Montserrat'] font-bold text-xl mb-4 text-[#f89422]">
                  Gestion des animaux errants
                </h3>
                <p className="text-[#f89422]">
                  Capture et relocalisation humaine des animaux errants ou abandonnés.
                </p>
              </div>

              <div className="bg-black border border-[#f89422] p-8 rounded-lg hover:shadow-xl transition">
                <div className="w-14 h-14 bg-black border border-[#f89422] rounded-lg flex items-center justify-center mb-6">
                  <i className="fas fa-exclamation-triangle text-[#f89422] text-2xl"></i>
                </div>
                <h3 className="font-['Montserrat'] font-bold text-xl mb-4 text-[#f89422]">
                  Interventions d'urgence
                </h3>
                <p className="text-[#f89422]">
                  Réponse rapide aux situations impliquant des animaux dangereux ou en détresse.
                </p>
              </div>

              <div className="bg-black border border-[#f89422] p-8 rounded-lg hover:shadow-xl transition">
                <div className="w-14 h-14 bg-black border border-[#f89422] rounded-lg flex items-center justify-center mb-6">
                  <i className="fas fa-balance-scale text-[#f89422] text-2xl"></i>
                </div>
                <h3 className="font-['Montserrat'] font-bold text-xl mb-4 text-[#f89422]">
                  Enquêtes sur la maltraitance
                </h3>
                <p className="text-[#f89422]">
                  Investigation des signalements de négligence ou de maltraitance animale.
                </p>
              </div>
              <div className="bg-black border border-[#f89422] p-8 rounded-lg hover:shadow-xl transition">
                <div className="w-14 h-14 bg-black border border-[#f89422] rounded-lg flex items-center justify-center mb-6">
                  <i className="fas fa-id-card text-[#f89422] text-2xl"></i>
                </div>
                <h3 className="font-['Montserrat'] font-bold text-xl mb-4 text-[#f89422]">
                  Permis et licences
                </h3>
                <p className="text-[#f89422]">
                  Gestion des permis pour animaux de compagnie et application des réglementations locales.
                </p>
              </div>

              <div className="bg-black border border-[#f89422] p-8 rounded-lg hover:shadow-xl transition">
                <div className="w-14 h-14 bg-black border border-[#f89422] rounded-lg flex items-center justify-center mb-6">
                  <i className="fas fa-clinic-medical text-[#f89422] text-2xl"></i>
                </div>
                <h3 className="font-['Montserrat'] font-bold text-xl mb-4 text-[#f89422]">
                  Cliniques de vaccination
                </h3>
                <p className="text-[#f89422]">
                  Organisation de cliniques de vaccination à bas coût pour les animaux domestiques.
                </p>
              </div>

              <div className="bg-black border border-[#f89422] p-8 rounded-lg hover:shadow-xl transition">
                <div className="w-14 h-14 bg-black border border-[#f89422] rounded-lg flex items-center justify-center mb-6">
                  <i className="fas fa-graduation-cap text-[#f89422] text-2xl"></i>
                </div>
                <h3 className="font-['Montserrat'] font-bold text-xl mb-4 text-[#f89422]">
                  Éducation publique
                </h3>
                <p className="text-[#f89422]">
                  Programmes éducatifs sur la responsabilité des propriétaires d'animaux et le bien-être animal.
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