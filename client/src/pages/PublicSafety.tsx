import { enContent } from "@/lib/data";
import { Link } from "wouter";

export default function PublicSafety() {
  return (
    <div className="min-h-screen flex flex-col bg-black text-[#f89422]">
      {/* Header */}
      <header className="py-4 bg-black border-b border-[#f89422]">
        <div className="container mx-auto px-4 flex justify-center items-center">
          <h1 className="font-['Montserrat'] font-bold text-2xl md:text-3xl">
            <span className="text-[#0d6efd]">Rémi</span>{" "}
            <span className="text-[#f89422]">Guillette</span>{" "}
            <span className="text-[#f89422]">Group</span>
          </h1>
          <div className="ml-auto">
            <Link href="/eng" className="text-[#f89422] hover:text-[#0d6efd] mr-4">
              Home
            </Link>
            <Link href="/securite-publique" className="text-[#f89422] hover:text-[#0d6efd]">
              Français
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
                <span className="text-[#0d6efd]">Public Safety</span>{" "}
                <span className="text-[#f89422]">Consulting</span>{" "}
                <span className="text-[#f89422]">Firm</span>
              </h2>
              <p className="text-[#f89422] text-lg mb-8 max-w-2xl">
                Our consulting firm offers specialized expertise in public safety, 
                helping government and private organizations develop effective strategies 
                to ensure the safety of citizens and communities.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <a 
                  href="#contact" 
                  className="px-6 py-3 bg-[#f89422] text-black rounded-md hover:bg-opacity-90 transition"
                >
                  Contact Us
                </a>
                <a 
                  href="#services" 
                  className="px-6 py-3 bg-transparent border border-[#f89422] text-[#f89422] rounded-md hover:bg-[#f89422] hover:text-black transition"
                >
                  Our Services
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-16 bg-black">
          <div className="container mx-auto px-4">
            <h2 className="font-['Montserrat'] font-bold text-3xl md:text-4xl mb-12 text-center">
              <span className="text-[#f89422]">Our Public Safety Services</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-black border border-[#f89422] p-8 rounded-lg hover:shadow-xl transition">
                <div className="w-14 h-14 bg-black border border-[#f89422] rounded-lg flex items-center justify-center mb-6">
                  <i className="fas fa-shield-alt text-[#f89422] text-2xl"></i>
                </div>
                <h3 className="font-['Montserrat'] font-bold text-xl mb-4 text-[#f89422]">
                  Risk Analysis
                </h3>
                <p className="text-[#f89422]">
                  Comprehensive assessment of potential threats and development of strategies to minimize risks.
                </p>
              </div>

              <div className="bg-black border border-[#f89422] p-8 rounded-lg hover:shadow-xl transition">
                <div className="w-14 h-14 bg-black border border-[#f89422] rounded-lg flex items-center justify-center mb-6">
                  <i className="fas fa-users text-[#f89422] text-2xl"></i>
                </div>
                <h3 className="font-['Montserrat'] font-bold text-xl mb-4 text-[#f89422]">
                  First Responder Training
                </h3>
                <p className="text-[#f89422]">
                  Specialized training programs for law enforcement and emergency responders.
                </p>
              </div>

              <div className="bg-black border border-[#f89422] p-8 rounded-lg hover:shadow-xl transition">
                <div className="w-14 h-14 bg-black border border-[#f89422] rounded-lg flex items-center justify-center mb-6">
                  <i className="fas fa-city text-[#f89422] text-2xl"></i>
                </div>
                <h3 className="font-['Montserrat'] font-bold text-xl mb-4 text-[#f89422]">
                  Safe Urban Planning
                </h3>
                <p className="text-[#f89422]">
                  Consultation on designing safe urban environments and crime prevention through environmental design.
                </p>
              </div>

              <div className="bg-black border border-[#f89422] p-8 rounded-lg hover:shadow-xl transition">
                <div className="w-14 h-14 bg-black border border-[#f89422] rounded-lg flex items-center justify-center mb-6">
                  <i className="fas fa-clipboard-check text-[#f89422] text-2xl"></i>
                </div>
                <h3 className="font-['Montserrat'] font-bold text-xl mb-4 text-[#f89422]">
                  Security Audits
                </h3>
                <p className="text-[#f89422]">
                  Evaluation of existing security systems and recommendations for improving their effectiveness.
                </p>
              </div>

              <div className="bg-black border border-[#f89422] p-8 rounded-lg hover:shadow-xl transition">
                <div className="w-14 h-14 bg-black border border-[#f89422] rounded-lg flex items-center justify-center mb-6">
                  <i className="fas fa-bullhorn text-[#f89422] text-2xl"></i>
                </div>
                <h3 className="font-['Montserrat'] font-bold text-xl mb-4 text-[#f89422]">
                  Crisis Communication
                </h3>
                <p className="text-[#f89422]">
                  Strategies for effective communication during emergencies and public safety crises.
                </p>
              </div>

              <div className="bg-black border border-[#f89422] p-8 rounded-lg hover:shadow-xl transition">
                <div className="w-14 h-14 bg-black border border-[#f89422] rounded-lg flex items-center justify-center mb-6">
                  <i className="fas fa-book text-[#f89422] text-2xl"></i>
                </div>
                <h3 className="font-['Montserrat'] font-bold text-xl mb-4 text-[#f89422]">
                  Policy Development
                </h3>
                <p className="text-[#f89422]">
                  Assistance in developing policies and regulations to enhance public safety.
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
                {enContent.footer.contact.title}
              </h3>
              <address className="not-italic text-[#f89422]">
                {enContent.footer.contact.address.map((line, index) => (
                  <p key={index} className="mb-2">{line}</p>
                ))}
                <p className="mb-2">
                  <i className="fas fa-phone-alt mr-2 text-[#f89422]"></i>
                  {enContent.footer.contact.phone}
                </p>
                <p>
                  <i className="fas fa-envelope mr-2 text-[#f89422]"></i>
                  {enContent.footer.contact.email}
                </p>
              </address>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}