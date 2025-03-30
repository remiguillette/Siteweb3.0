import { enContent } from "@/lib/data";
import { Link } from "wouter";
import DivisionHeader from "@/components/DivisionHeader";
import Footer from "@/components/Footer";

export default function AnimalControl() {
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
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Stray Animal Management */}
              <div className="bg-black border border-[#f89422] p-6 rounded-lg">
                <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mb-4 border border-[#f89422]">
                  <i className="fas fa-dog text-[#f89422]"></i>
                </div>
                <h3 className="text-[#f89422] text-xl mb-4">Stray Animal Management</h3>
                <p className="text-[#f89422]">
                  Professional handling and care for stray animals, including capture, shelter, and rehabilitation services.
                </p>
              </div>

              {/* Emergency Response */}
              <div className="bg-black border border-[#f89422] p-6 rounded-lg">
                <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mb-4 border border-[#f89422]">
                  <i className="fas fa-ambulance text-[#f89422]"></i>
                </div>
                <h3 className="text-[#f89422] text-xl mb-4">Emergency Response</h3>
                <p className="text-[#f89422]">
                  24/7 emergency response for urgent animal-related incidents and situations requiring immediate attention.
                </p>
              </div>

              {/* Cruelty Investigations */}
              <div className="bg-black border border-[#f89422] p-6 rounded-lg">
                <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mb-4 border border-[#f89422]">
                  <i className="fas fa-search text-[#f89422]"></i>
                </div>
                <h3 className="text-[#f89422] text-xl mb-4">Cruelty Investigations</h3>
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