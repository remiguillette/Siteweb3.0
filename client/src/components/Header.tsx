import { useState } from "react";
import { Link } from "wouter";
import beaverLogo from "@assets/beaver.png";

interface HeaderProps {
  content: {
    navigation: { label: string; href: string }[];
    languageToggle: string;
    title: {
      firstName: string;
      lastName: string;
      group: string;
      groupEn: string;
    };
  };
  isEnglish: boolean;
}

export default function Header({ content, isEnglish }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-[#212529] shadow-md">
      <div className="container mx-auto px-4 py-6">
        <div className="flex justify-between items-center">
          {/* Logo and Title */}
          <div className="flex items-center">
            <img 
              src={beaverLogo} 
              alt="Beaver Logo" 
              className="h-50 w-60 mr-5"
            />
            <div className="min-w-[300px]">
              <h1 className="font-['Montserrat'] font-extrabold text-4xl md:text-5xl tracking-wide">
                <span className="text-[#0d6efd]">{content.title.firstName}</span>{" "}
                <span className="text-[#f89422]">{content.title.lastName}</span>
              </h1>
              <div className="flex flex-row">
                <p className="text-[#f89422] text-2xl font-semibold">{isEnglish ? "" : content.title.group}</p>
                <p className="text-[#f89422] text-2xl font-semibold">{isEnglish ? content.title.group : ""}</p>
              </div>
              <div className="flex flex-row">
                <p className="text-[#f89422] text-xl font-semibold">{isEnglish ? "" : content.title.groupEn}</p>
                <p className="text-[#f89422] text-xl font-semibold">{isEnglish ? content.title.groupEn : ""}</p>
              </div>
            </div>
          </div>

          {/* Navigation and Language Toggle */}
          <div className="flex items-center">
            <nav className={`${isMobileMenuOpen ? "absolute top-20 right-4 bg-[#212529] p-4 rounded shadow-lg z-50" : "hidden"} md:block md:static md:bg-transparent md:shadow-none md:p-0 md:mr-6`}>
              <ul className="flex flex-col md:flex-row md:space-x-6 space-y-3 md:space-y-0">
                {content.navigation.map((item, index) => (
                  <li key={index}>
                    <a 
                      href={item.href} 
                      className="text-white hover:text-[#f89422] transition"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <Link 
              href={isEnglish ? "/" : "/eng"}
              className="px-4 py-2 bg-transparent border border-[#f89422] text-[#f89422] rounded-md hover:bg-[#f89422] hover:text-white transition"
            >
              {content.languageToggle}
            </Link>

            <button 
              className="ml-4 text-white md:hidden"
              onClick={toggleMobileMenu}
              aria-label="Toggle mobile menu"
            >
              <i className="fas fa-bars text-2xl"></i>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
