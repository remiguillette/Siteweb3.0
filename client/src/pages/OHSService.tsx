import { enContent } from "@/lib/data";
import { Link } from "wouter";
import DivisionHeader from "@/components/DivisionHeader";

export default function OHSService() {
  return (
    <div className="min-h-screen flex flex-col bg-black text-[#f89422]">
      <DivisionHeader 
        firstName="Rémi"
        lastName="Guillette"
        groupFr="Santé et Sécurité au Travail SST"
        groupEn="Occupational Health and Safety (OHS)"
        isEnglish={true}
        homePath="/eng"
        homeLabel="Home"
        languagePath="/sante-sst"
        languageLabel="Français"
      />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-black relative overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="flex flex-col items-center text-center">
              <h2 className="font-['Montserrat'] font-bold text-4xl md:text-5xl mb-6">
                <span className="text-[#0d6efd]">Occupational</span>{" "}
                <span className="text-[#f89422]">Health &</span>{" "}
                <span className="text-[#f89422]">Safety</span>
              </h2>
              <p className="text-[#f89422] text-lg mb-8 max-w-2xl">
                Our team of Occupational Health and Safety (OHS) experts helps companies 
                create safe working environments, comply with regulatory standards, 
                and promote employee well-being.
              </p>

            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-16 bg-black">
          <div className="container mx-auto px-4">
            <h2 className="font-['Montserrat'] font-bold text-3xl md:text-4xl mb-12 text-center">
              <span className="text-[#f89422]">Our Services</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-black border border-[#f89422] p-8 rounded-lg hover:shadow-xl transition">
                <div className="w-14 h-14 bg-black border border-[#f89422] rounded-lg flex items-center justify-center mb-6">
                  <i className="fas fa-clipboard-list text-[#f89422] text-2xl"></i>
                </div>
                <h3 className="font-['Montserrat'] font-bold text-xl mb-4 text-[#f89422]">
                  Risk Assessment
                </h3>
                <p className="text-[#f89422]">
                  Identification and evaluation of workplace occupational hazards.
                </p>
              </div>

              <div className="bg-black border border-[#f89422] p-8 rounded-lg hover:shadow-xl transition">
                <div className="w-14 h-14 bg-black border border-[#f89422] rounded-lg flex items-center justify-center mb-6">
                  <i className="fas fa-file-alt text-[#f89422] text-2xl"></i>
                </div>
                <h3 className="font-['Montserrat'] font-bold text-xl mb-4 text-[#f89422]">
                  Policy Development
                </h3>
                <p className="text-[#f89422]">
                  Creation of health and safety policies and procedures that comply with regulations.
                </p>
              </div>

              <div className="bg-black border border-[#f89422] p-8 rounded-lg hover:shadow-xl transition">
                <div className="w-14 h-14 bg-black border border-[#f89422] rounded-lg flex items-center justify-center mb-6">
                  <i className="fas fa-user-hard-hat text-[#f89422] text-2xl"></i>
                </div>
                <h3 className="font-['Montserrat'] font-bold text-xl mb-4 text-[#f89422]">
                  Employee Training
                </h3>
                <p className="text-[#f89422]">
                  Comprehensive training programs on workplace safety, first aid, and emergency management.
                </p>
              </div>

              <div className="bg-black border border-[#f89422] p-8 rounded-lg hover:shadow-xl transition">
                <div className="w-14 h-14 bg-black border border-[#f89422] rounded-lg flex items-center justify-center mb-6">
                  <i className="fas fa-search text-[#f89422] text-2xl"></i>
                </div>
                <h3 className="font-['Montserrat'] font-bold text-xl mb-4 text-[#f89422]">
                  Audits and Inspections
                </h3>
                <p className="text-[#f89422]">
                  Regular audits to assess compliance with safety standards and identify areas for improvement.
                </p>
              </div>

              <div className="bg-black border border-[#f89422] p-8 rounded-lg hover:shadow-xl transition">
                <div className="w-14 h-14 bg-black border border-[#f89422] rounded-lg flex items-center justify-center mb-6">
                  <i className="fas fa-chart-line text-[#f89422] text-2xl"></i>
                </div>
                <h3 className="font-['Montserrat'] font-bold text-xl mb-4 text-[#f89422]">
                  Incident Management
                </h3>
                <p className="text-[#f89422]">
                  Incident tracking system, root cause analysis, and prevention strategies.
                </p>
              </div>

              <div className="bg-black border border-[#f89422] p-8 rounded-lg hover:shadow-xl transition">
                <div className="w-14 h-14 bg-black border border-[#f89422] rounded-lg flex items-center justify-center mb-6">
                  <i className="fas fa-heartbeat text-[#f89422] text-2xl"></i>
                </div>
                <h3 className="font-['Montserrat'] font-bold text-xl mb-4 text-[#f89422]">
                  Wellness Programs
                </h3>
                <p className="text-[#f89422]">
                  Initiatives to promote physical and mental health of employees in the workplace.
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