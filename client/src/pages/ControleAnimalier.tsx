
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
        isEnglish={true}
        homePath="/eng"
        homeLabel="Home"
        languagePath="/controle-animalier"
        languageLabel="Français"
      />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-black relative overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="flex flex-col items-center text-center">
              <h2 className="font-['Montserrat'] font-bold text-4xl md:text-5xl mb-6">
                <span className="text-[#0d6efd]">Animal</span>{" "}
                <span className="text-[#f89422]">Control</span>
              </h2>
              <p className="text-[#f89422] text-lg mb-8 max-w-2xl">
                Our animal control service is committed to ensuring public safety and animal welfare 
                through professional interventions, educational programs, and animal protection 
                initiatives.
              </p>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 bg-black">
          <div className="container mx-auto px-4">
            <h2 className="font-['Montserrat'] font-bold text-3xl md:text-4xl mb-12 text-center">
              <span className="text-[#f89422]">Our Services</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-black border border-[#f89422] p-8 rounded-lg hover:shadow-xl transition">
                <div className="w-14 h-14 bg-black border border-[#f89422] rounded-lg flex items-center justify-center mb-6">
                  <i className="fas fa-dog text-[#f89422] text-2xl"></i>
                </div>
                <h3 className="font-['Montserrat'] font-bold text-xl mb-4 text-[#f89422]">
                  Stray Animal Management
                </h3>
                <p className="text-[#f89422]">
                  Investigation of reports of neglect or animal abuse.
                </p>
              </div>

              <div className="bg-black border border-[#f89422] p-8 rounded-lg hover:shadow-xl transition">
                <div className="w-14 h-14 bg-black border border-[#f89422] rounded-lg flex items-center justify-center mb-6">
                  <i className="fas fa-exclamation-triangle text-[#f89422] text-2xl"></i>
                </div>
                <h3 className="font-['Montserrat'] font-bold text-xl mb-4 text-[#f89422]">
                  Emergency Response
                </h3>
                <p className="text-[#f89422]">
                  Quick response to situations involving dangerous or distressed animals.
                </p>
              </div>

              <div className="bg-black border border-[#f89422] p-8 rounded-lg hover:shadow-xl transition">
                <div className="w-14 h-14 bg-black border border-[#f89422] rounded-lg flex items-center justify-center mb-6">
                  <i className="fas fa-balance-scale text-[#f89422] text-2xl"></i>
                </div>
                <h3 className="font-['Montserrat'] font-bold text-xl mb-4 text-[#f89422]">
                  Abuse Investigations
                </h3>
                <p className="text-[#f89422]">
                  Investigation of reports of neglect or animal abuse.
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
