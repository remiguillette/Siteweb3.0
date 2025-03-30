import { frContent } from "@/lib/data";
import { Link } from "wouter";

export default function ControleAnimalier() {
  return (
    <div className="min-h-screen flex flex-col bg-black text-[#f89422]">
      {/* Header */}
      <header className="py-4 bg-black border-b border-[#f89422]">
        <div className="container mx-auto px-4 flex justify-center items-center">
          <h1 className="font-['Montserrat'] font-bold text-2xl md:text-3xl">
            <span className="text-[#0d6efd]">Rémi</span>{" "}
            <span className="text-[#f89422]">Guillette</span>{" "}
            <span className="text-[#f89422]">Groupe</span>
          </h1>
          <div className="ml-auto">
            <Link href="/" className="text-[#f89422] hover:text-[#0d6efd] mr-4">
              Accueil
            </Link>
            <Link href="/eng" className="text-[#f89422] hover:text-[#0d6efd]">
              English
            </Link>
          </div>
        </div>
      </header>
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-black relative overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="flex flex-col items-center text-center">
              <h2 className="font-['Montserrat'] font-bold text-4xl md:text-5xl mb-6">
                <span className="text-[#0d6efd]">Service de</span>{" "}
                <span className="text-[#f89422]">contrôle</span>{" "}
                <span className="text-[#f89422]">animalier</span>
              </h2>
              <p className="text-[#f89422] text-lg mb-8 max-w-2xl">
                Notre service de contrôle animalier s'engage à assurer la sécurité publique et le bien-être 
                animal à travers des interventions professionnelles, des programmes éducatifs et des 
                initiatives de protection des animaux.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <a 
                  href="#contact" 
                  className="px-6 py-3 bg-[#f89422] text-black rounded-md hover:bg-opacity-90 transition"
                >
                  Contactez-nous
                </a>
                <a 
                  href="#services" 
                  className="px-6 py-3 bg-transparent border border-[#f89422] text-[#f89422] rounded-md hover:bg-[#f89422] hover:text-black transition"
                >
                  Nos services
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-16 bg-black">
          <div className="container mx-auto px-4">
            <h2 className="font-['Montserrat'] font-bold text-3xl md:text-4xl mb-12 text-center">
              <span className="text-[#f89422]">Nos services animaliers</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-black border border-[#f89422] p-8 rounded-lg hover:shadow-xl transition">
                <div className="w-14 h-14 bg-black border border-[#f89422] rounded-lg flex items-center justify-center mb-6">
                  <i className="fas fa-paw text-[#f89422] text-2xl"></i>
                </div>
                <h3 className="font-['Montserrat'] font-bold text-xl mb-4 text-[#f89422]">
                  Gestion des animaux errants
                </h3>
                <p className="text-[#f89422]">
                  Capture humaine et relocalisation des animaux errants ou abandonnés.
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
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-black py-12 border-t border-[#f89422]">
        <div className="container mx-auto px-4">
          <div className="text-center">
            {/* Contact Info Only */}
            <div id="contact">
              <h3 className="font-['Montserrat'] font-bold text-xl mb-4 text-[#f89422]">
                {frContent.footer.contact.title}
              </h3>
              <address className="not-italic text-[#f89422]">
                {frContent.footer.contact.address.map((line, index) => (
                  <p key={index} className="mb-2">{line}</p>
                ))}
                <p className="mb-2">
                  <i className="fas fa-phone-alt mr-2 text-[#f89422]"></i>
                  {frContent.footer.contact.phone}
                </p>
                <p>
                  <i className="fas fa-envelope mr-2 text-[#f89422]"></i>
                  {frContent.footer.contact.email}
                </p>
              </address>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}