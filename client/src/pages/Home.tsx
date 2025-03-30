import { Link } from "wouter";
import { frContent } from "@/lib/data";
import beaverLogo from "@assets/beaver.png";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="bg-black text-[#f89422] min-h-screen flex flex-col">
      {/* Simple Header with Language Toggle */}
      <header className="bg-black shadow-md">
        <div className="container mx-auto px-4 py-6">
          <div className="flex justify-between items-center">
            {/* Logo and Title */}
            <div className="flex items-center">
              <img 
                src={beaverLogo} 
                alt="Beaver Logo" 
                className="h-50 w-60 mr-5"
                style={{ objectFit: "contain" }}
              />
              <div className="min-w-[300px]">
                <h1 className="font-['Montserrat'] font-extrabold text-4xl md:text-5xl tracking-wide">
                  <span className="text-[#0d6efd]">{frContent.header.title.firstName}</span>{" "}
                  <span className="text-[#f89422]">{frContent.header.title.lastName}</span>
                </h1>
                <p className="text-[#f89422] text-2xl font-semibold whitespace-nowrap">{frContent.header.title.group}</p>
                <p className="text-[#f89422] text-xl font-semibold whitespace-nowrap">{frContent.header.title.groupEn}</p>
              </div>
            </div>

            {/* Language Toggle Only */}
            <div className="flex items-center">
              <span className="text-[#f89422] mr-4 font-bold">Fier de l'Ontario / Proud of Ontario</span>
              <Link 
                href="/eng"
                className="px-4 py-2 bg-transparent border border-[#f89422] text-[#f89422] rounded-md hover:bg-[#f89422] hover:text-black transition"
              >
              {frContent.header.languageToggle}
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
                <span className="text-[#0d6efd]">{frContent.hero.title.part1}</span>{" "}
                <span className="text-[#f89422]">{frContent.hero.title.part2}</span>{" "}
                <span className="text-[#f89422]">{frContent.hero.title.part3}</span>
              </h2>
              <p className="text-[#f89422] text-lg mb-8 max-w-2xl">
                {frContent.hero.description}
              </p>

            </div>
          </div>
        </section>

        {/* Divisions Section */}
        <section id={frContent.divisions.id} className="py-16 bg-black">
          <div className="container mx-auto px-4">
            <h2 className="font-['Montserrat'] font-bold text-3xl md:text-4xl mb-12 text-center">
              <span className="text-[#f89422]">{frContent.divisions.title}</span>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Link href="/securite-publique" className="no-underline">
                <div className="bg-black border border-[#f89422] p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition transform hover:-translate-y-1">
                  <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4 border border-[#f89422]">
                    <i className="fas fa-shield-alt text-[#f89422] text-2xl"></i>
                  </div>
                  <h3 className="mb-2">
                    <span className="text-[#0d6efd]">Cabinet-conseil</span>{" "}
                    <span className="text-[#f89422]">en sécurité publique</span>
                  </h3>
                </div>
              </Link>

              <Link href="/service-communautaire" className="no-underline">
                <div className="bg-black border border-[#f89422] p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition transform hover:-translate-y-1">
                  <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4 border border-[#f89422]">
                    <i className="fas fa-users text-[#f89422] text-2xl"></i>
                  </div>
                  <h3 className="mb-2">
                    <span className="text-[#0d6efd]">Service</span>{" "}
                    <span className="text-[#f89422]">communautaire francophone</span>
                  </h3>
                </div>
              </Link>

              <Link href="/sante-sst" className="no-underline">
                <div className="bg-black border border-[#f89422] p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition transform hover:-translate-y-1">
                  <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4 border border-[#f89422]">
                    <i className="fas fa-heartbeat text-[#f89422] text-2xl"></i>
                  </div>
                  <h3 className="mb-2">
                    <span className="text-[#0d6efd]">Service</span>{" "}
                    <span className="text-[#f89422]">en Santé sécurité au Travail SST</span>
                  </h3>
                </div>
              </Link>

              <Link href="/controle-animalier" className="no-underline">
                <div className="bg-black border border-[#f89422] p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition transform hover:-translate-y-1">
                  <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4 border border-[#f89422]">
                    <i className="fas fa-paw text-[#f89422] text-2xl"></i>
                  </div>
                  <h3 className="mb-2">
                    <span className="text-[#0d6efd]">Service</span>{" "}
                    <span className="text-[#f89422]">de contrôle Animalier</span>
                  </h3>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id={frContent.services.id} className="py-16 bg-black">
          <div className="container mx-auto px-4">
            <h2 className="font-['Montserrat'] font-bold text-3xl md:text-4xl mb-12 text-center">
              <span className="text-[#f89422]">{frContent.services.title}</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {frContent.services.services.map((service, index) => (
                <div key={index} className="bg-black border border-[#f89422] p-8 rounded-lg hover:shadow-xl transition">
                  <div className="w-14 h-14 bg-black border border-[#f89422] rounded-lg flex items-center justify-center mb-6">
                    <i className={`${service.icon} text-[#f89422] text-2xl`}></i>
                  </div>
                  <h3 className="font-['Montserrat'] font-bold text-xl mb-4 text-[#f89422]">
                    {service.title}
                  </h3>
                  <p className="text-[#f89422]">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}