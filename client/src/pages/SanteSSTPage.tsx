import { frContent } from "@/lib/data";
import { Link } from "wouter";

export default function SanteSSTPage() {
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
                <span className="text-[#0d6efd]">Service en</span>{" "}
                <span className="text-[#f89422]">Santé et Sécurité</span>{" "}
                <span className="text-[#f89422]">au Travail (SST)</span>
              </h2>
              <p className="text-[#f89422] text-lg mb-8 max-w-2xl">
                Notre équipe d'experts en santé et sécurité au travail (SST) aide les entreprises 
                à créer des environnements de travail sûrs, à respecter les normes réglementaires 
                et à promouvoir le bien-être des employés.
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
              <span className="text-[#f89422]">Nos services en SST</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-black border border-[#f89422] p-8 rounded-lg hover:shadow-xl transition">
                <div className="w-14 h-14 bg-black border border-[#f89422] rounded-lg flex items-center justify-center mb-6">
                  <i className="fas fa-clipboard-list text-[#f89422] text-2xl"></i>
                </div>
                <h3 className="font-['Montserrat'] font-bold text-xl mb-4 text-[#f89422]">
                  Évaluation des risques
                </h3>
                <p className="text-[#f89422]">
                  Identification et évaluation des risques professionnels sur le lieu de travail.
                </p>
              </div>

              <div className="bg-black border border-[#f89422] p-8 rounded-lg hover:shadow-xl transition">
                <div className="w-14 h-14 bg-black border border-[#f89422] rounded-lg flex items-center justify-center mb-6">
                  <i className="fas fa-file-alt text-[#f89422] text-2xl"></i>
                </div>
                <h3 className="font-['Montserrat'] font-bold text-xl mb-4 text-[#f89422]">
                  Développement de politiques
                </h3>
                <p className="text-[#f89422]">
                  Création de politiques et procédures de santé et sécurité conformes aux réglementations.
                </p>
              </div>

              <div className="bg-black border border-[#f89422] p-8 rounded-lg hover:shadow-xl transition">
                <div className="w-14 h-14 bg-black border border-[#f89422] rounded-lg flex items-center justify-center mb-6">
                  <i className="fas fa-user-hard-hat text-[#f89422] text-2xl"></i>
                </div>
                <h3 className="font-['Montserrat'] font-bold text-xl mb-4 text-[#f89422]">
                  Formation des employés
                </h3>
                <p className="text-[#f89422]">
                  Programmes de formation complets sur la sécurité au travail, les premiers soins et la gestion des urgences.
                </p>
              </div>

              <div className="bg-black border border-[#f89422] p-8 rounded-lg hover:shadow-xl transition">
                <div className="w-14 h-14 bg-black border border-[#f89422] rounded-lg flex items-center justify-center mb-6">
                  <i className="fas fa-search text-[#f89422] text-2xl"></i>
                </div>
                <h3 className="font-['Montserrat'] font-bold text-xl mb-4 text-[#f89422]">
                  Audits et inspections
                </h3>
                <p className="text-[#f89422]">
                  Audits réguliers pour évaluer la conformité aux normes de sécurité et identifier les domaines d'amélioration.
                </p>
              </div>

              <div className="bg-black border border-[#f89422] p-8 rounded-lg hover:shadow-xl transition">
                <div className="w-14 h-14 bg-black border border-[#f89422] rounded-lg flex items-center justify-center mb-6">
                  <i className="fas fa-chart-line text-[#f89422] text-2xl"></i>
                </div>
                <h3 className="font-['Montserrat'] font-bold text-xl mb-4 text-[#f89422]">
                  Gestion des incidents
                </h3>
                <p className="text-[#f89422]">
                  Système de suivi des incidents, analyse des causes profondes et stratégies de prévention.
                </p>
              </div>

              <div className="bg-black border border-[#f89422] p-8 rounded-lg hover:shadow-xl transition">
                <div className="w-14 h-14 bg-black border border-[#f89422] rounded-lg flex items-center justify-center mb-6">
                  <i className="fas fa-heartbeat text-[#f89422] text-2xl"></i>
                </div>
                <h3 className="font-['Montserrat'] font-bold text-xl mb-4 text-[#f89422]">
                  Programmes de bien-être
                </h3>
                <p className="text-[#f89422]">
                  Initiatives pour promouvoir la santé physique et mentale des employés au travail.
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