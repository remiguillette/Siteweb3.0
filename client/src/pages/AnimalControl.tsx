
import { Link } from "wouter";
import DivisionHeader from "@/components/DivisionHeader";
import Footer from "@/components/Footer";

export default function AnimalControl() {
  return (
    <div className="min-h-screen flex flex-col bg-black text-[#f89422]">
      <DivisionHeader 
        firstName="Rémi"
        lastName="Guillette"
        groupFr="Contrôle animalier"
        groupEn="Animal Control"
        isEnglish={true}
        homePath="/eng"
        homeLabel="Home"
        languagePath="/controle-animalier"
        languageLabel="Français"
      />
      
      <main className="flex-grow">
        <section className="py-16 md:py-24 bg-black relative overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="flex flex-col items-center text-center">
              <h2 className="font-['Montserrat'] font-bold text-4xl md:text-5xl mb-6">
                <span className="text-[#f89422]">Our services</span>
              </h2>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 bg-black">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Stray Animal Management */}
              <div className="bg-black border border-[#f89422] p-8 rounded-lg hover:shadow-xl transition">
                <div className="w-14 h-14 bg-black border border-[#f89422] rounded-lg flex items-center justify-center mb-6">
                  <i className="fas fa-dog text-[#f89422] text-2xl"></i>
                </div>
                <h3 className="font-['Montserrat'] font-bold text-xl mb-4 text-[#f89422]">
                  Stray Animal Management
                </h3>
                <p className="text-[#f89422]">
                  Professional handling and care for stray animals, including capture, shelter, and rehabilitation services.
                </p>
              </div>

              {/* Emergency Response */}
              <div className="bg-black border border-[#f89422] p-8 rounded-lg hover:shadow-xl transition">
                <div className="w-14 h-14 bg-black border border-[#f89422] rounded-lg flex items-center justify-center mb-6">
                  <i className="fas fa-exclamation-triangle text-[#f89422] text-2xl"></i>
                </div>
                <h3 className="font-['Montserrat'] font-bold text-xl mb-4 text-[#f89422]">
                  Emergency Response
                </h3>
                <p className="text-[#f89422]">
                  24/7 emergency response for urgent animal-related incidents and situations requiring immediate attention.
                </p>
              </div>

              {/* Cruelty Investigations */}
              <div className="bg-black border border-[#f89422] p-8 rounded-lg hover:shadow-xl transition">
                <div className="w-14 h-14 bg-black border border-[#f89422] rounded-lg flex items-center justify-center mb-6">
                  <i className="fas fa-balance-scale text-[#f89422] text-2xl"></i>
                </div>
                <h3 className="font-['Montserrat'] font-bold text-xl mb-4 text-[#f89422]">
                  Cruelty Investigations
                </h3>
                <p className="text-[#f89422]">
                  Thorough investigation of reported animal cruelty cases and enforcement of animal welfare laws.
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
