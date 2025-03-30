import { frContent } from "@/lib/data";
import { Link } from "wouter";
import DivisionHeader from "@/components/DivisionHeader";

export default function SecuritePublique() {
  return (
    <div className="min-h-screen flex flex-col bg-black text-[#f89422]">
      <DivisionHeader 
        firstName="Rémi"
        lastName="Guillette"
        group="Cabinet-conseil en sécurité publique"
        homePath="/"
        homeLabel="Accueil"
        languagePath="/eng/public-safety"
        languageLabel="English"
      />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-black relative overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="flex flex-col items-center text-center">
              <h2 className="font-['Montserrat'] font-bold text-4xl md:text-5xl mb-6">
                <span className="text-[#0d6efd]">Cabinet-conseil</span>{" "}
                <span className="text-[#f89422]">en sécurité</span>{" "}
                <span className="text-[#f89422]">publique</span>
              </h2>
              <p className="text-[#f89422] text-lg mb-8 max-w-2xl">
                Notre cabinet-conseil offre une expertise pointue en matière de sécurité publique, 
                aidant les organisations gouvernementales et privées à développer des stratégies efficaces 
                pour assurer la sécurité des citoyens et des communautés.
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
              <span className="text-[#f89422]">Nos services en sécurité publique</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-black border border-[#f89422] p-8 rounded-lg hover:shadow-xl transition">
                <div className="w-14 h-14 bg-black border border-[#f89422] rounded-lg flex items-center justify-center mb-6">
                  <i className="fas fa-shield-alt text-[#f89422] text-2xl"></i>
                </div>
                <h3 className="font-['Montserrat'] font-bold text-xl mb-4 text-[#f89422]">
                  Analyse de risques
                </h3>
                <p className="text-[#f89422]">
                  Évaluation complète des menaces potentielles et développement de stratégies pour minimiser les risques.
                </p>
              </div>

              <div className="bg-black border border-[#f89422] p-8 rounded-lg hover:shadow-xl transition">
                <div className="w-14 h-14 bg-black border border-[#f89422] rounded-lg flex items-center justify-center mb-6">
                  <i className="fas fa-users text-[#f89422] text-2xl"></i>
                </div>
                <h3 className="font-['Montserrat'] font-bold text-xl mb-4 text-[#f89422]">
                  Formation des intervenants
                </h3>
                <p className="text-[#f89422]">
                  Programmes de formation spécialisés pour les forces de l'ordre et les intervenants d'urgence.
                </p>
              </div>

              <div className="bg-black border border-[#f89422] p-8 rounded-lg hover:shadow-xl transition">
                <div className="w-14 h-14 bg-black border border-[#f89422] rounded-lg flex items-center justify-center mb-6">
                  <i className="fas fa-city text-[#f89422] text-2xl"></i>
                </div>
                <h3 className="font-['Montserrat'] font-bold text-xl mb-4 text-[#f89422]">
                  Planification urbaine sécuritaire
                </h3>
                <p className="text-[#f89422]">
                  Consultation sur la conception d'environnements urbains sécuritaires et la prévention du crime par l'aménagement.
                </p>
              </div>

              <div className="bg-black border border-[#f89422] p-8 rounded-lg hover:shadow-xl transition">
                <div className="w-14 h-14 bg-black border border-[#f89422] rounded-lg flex items-center justify-center mb-6">
                  <i className="fas fa-clipboard-check text-[#f89422] text-2xl"></i>
                </div>
                <h3 className="font-['Montserrat'] font-bold text-xl mb-4 text-[#f89422]">
                  Audit de sécurité
                </h3>
                <p className="text-[#f89422]">
                  Évaluation des systèmes de sécurité existants et recommandations pour améliorer leur efficacité.
                </p>
              </div>

              <div className="bg-black border border-[#f89422] p-8 rounded-lg hover:shadow-xl transition">
                <div className="w-14 h-14 bg-black border border-[#f89422] rounded-lg flex items-center justify-center mb-6">
                  <i className="fas fa-bullhorn text-[#f89422] text-2xl"></i>
                </div>
                <h3 className="font-['Montserrat'] font-bold text-xl mb-4 text-[#f89422]">
                  Communication de crise
                </h3>
                <p className="text-[#f89422]">
                  Stratégies pour une communication efficace pendant les situations d'urgence et les crises de sécurité publique.
                </p>
              </div>

              <div className="bg-black border border-[#f89422] p-8 rounded-lg hover:shadow-xl transition">
                <div className="w-14 h-14 bg-black border border-[#f89422] rounded-lg flex items-center justify-center mb-6">
                  <i className="fas fa-book text-[#f89422] text-2xl"></i>
                </div>
                <h3 className="font-['Montserrat'] font-bold text-xl mb-4 text-[#f89422]">
                  Politiques et réglementations
                </h3>
                <p className="text-[#f89422]">
                  Assistance dans l'élaboration de politiques et de réglementations pour améliorer la sécurité publique.
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