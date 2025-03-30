import { Link } from "wouter";
import { frContent } from "@/lib/data";

export default function Home() {
  return (
    <div className="bg-black text-[#f89422] min-h-screen flex flex-col">
      {/* Simple Header with Language Toggle */}
      <header className="bg-black shadow-md">
        <div className="container mx-auto px-4 py-6">
          <div className="flex justify-between items-center">
            {/* Logo and Title */}
            <div>
              <h1 className="font-['Montserrat'] font-bold text-3xl md:text-4xl">
                <span className="text-[#0d6efd]">{frContent.header.title.firstName}</span>{" "}
                <span className="text-[#f89422]">{frContent.header.title.lastName}</span>
              </h1>
              <p className="text-[#f89422] text-xl">{frContent.header.title.group}</p>
              <p className="text-[#f89422] text-lg">{frContent.header.title.groupEn}</p>
            </div>

            {/* Language Toggle Only */}
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="z-10">
                <h2 className="font-['Montserrat'] font-bold text-4xl md:text-5xl mb-6">
                  <span className="text-[#0d6efd]">{frContent.hero.title.part1}</span>{" "}
                  <span className="text-[#f89422]">{frContent.hero.title.part2}</span>{" "}
                  <span className="text-[#f89422]">{frContent.hero.title.part3}</span>
                </h2>
                <p className="text-[#f89422] text-lg mb-8">
                  {frContent.hero.description}
                </p>
                <div className="flex flex-wrap gap-4">
                  <a 
                    href={frContent.hero.buttons.primary.href} 
                    className="px-6 py-3 bg-[#f89422] text-black rounded-md hover:bg-opacity-90 transition"
                  >
                    {frContent.hero.buttons.primary.label}
                  </a>
                  <a 
                    href={frContent.hero.buttons.secondary.href} 
                    className="px-6 py-3 bg-transparent border border-[#f89422] text-[#f89422] rounded-md hover:bg-[#f89422] hover:text-black transition"
                  >
                    {frContent.hero.buttons.secondary.label}
                  </a>
                </div>
              </div>
              <div className="relative">
                <img 
                  src={frContent.hero.image.src} 
                  alt={frContent.hero.image.alt} 
                  className="rounded-lg shadow-2xl w-full"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Divisions Section */}
        <section id={frContent.divisions.id} className="py-16 bg-black">
          <div className="container mx-auto px-4">
            <h2 className="font-['Montserrat'] font-bold text-3xl md:text-4xl mb-12 text-center">
              <span className="text-[#f89422]">{frContent.divisions.title}</span>
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {frContent.divisions.divisions.map((division, index) => (
                <div 
                  key={index} 
                  className="bg-black border border-[#f89422] p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition transform hover:-translate-y-1"
                >
                  <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4 border border-[#f89422]">
                    <i className={`${division.icon} text-[#f89422] text-2xl`}></i>
                  </div>
                  <h3 className="mb-2">
                    <span className="text-[#0d6efd]">{division.firstName}</span>{" "}
                    <span className="text-[#f89422]">{division.lastName}</span>
                  </h3>
                  <p className="text-[#f89422] font-medium">{division.name}</p>
                </div>
              ))}
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

      {/* Footer */}
      <footer className="bg-black py-12 border-t border-[#f89422]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Company Info */}
            <div className="md:col-span-1 text-center md:text-left">
              <h3 className="font-['Montserrat'] font-bold text-xl mb-4">
                <span className="text-[#0d6efd]">{frContent.footer.company.name.firstName}</span>{" "}
                <span className="text-[#f89422]">{frContent.footer.company.name.lastName}</span>{" "}
                <span className="text-[#f89422]">{frContent.footer.company.name.group}</span>
              </h3>
              <p className="text-[#f89422] mb-4">
                {frContent.footer.company.description}
              </p>
              <div className="flex justify-center md:justify-start space-x-4">
                <a href={frContent.footer.company.socialMedia.facebook} className="text-[#f89422] hover:text-[#0d6efd] transition">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href={frContent.footer.company.socialMedia.twitter} className="text-[#f89422] hover:text-[#0d6efd] transition">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href={frContent.footer.company.socialMedia.linkedin} className="text-[#f89422] hover:text-[#0d6efd] transition">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
            
            {/* Quick Links */}
            <div className="md:col-span-1 text-center">
              <h3 className="font-['Montserrat'] font-bold text-xl mb-4 text-[#f89422]">
                {frContent.footer.quickLinks.title}
              </h3>
              <ul className="space-y-2">
                {frContent.footer.quickLinks.links.map((link, index) => (
                  <li key={index}>
                    <a href={link.href} className="text-[#f89422] hover:text-[#0d6efd] transition">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Contact Info */}
            <div id="contact" className="md:col-span-1 text-center md:text-right">
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
          
          <div className="border-t border-[#f89422] mt-10 pt-6 text-center">
            <p className="text-[#f89422]">
              &copy; {new Date().getFullYear()} {frContent.footer.copyright}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
