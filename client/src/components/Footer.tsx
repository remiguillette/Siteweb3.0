import React from 'react';
import beaverLogo from '../../attached_assets/beaver.png';

interface FooterProps {
  content: {
    company: {
      name: {
        firstName: string;
        lastName: string;
        group: string;
      };
      description: string;
      socialMedia: {
        facebook: string;
        twitter: string;
        linkedin: string;
      };
    };
    quickLinks: {
      title: string;
      links: {
        label: string;
        href: string;
      }[];
    };
    contact: {
      title: string;
      address: string[];
      phone: string;
      email: string;
    };
    copyright: string;
  };
  showLogo?: boolean;
}

export const Footer: React.FC<FooterProps> = ({ content, showLogo = false }) => {
  return (
    <footer className="bg-black py-12 border-t border-[#f89422]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {/* Column 1: Empty */}
          <div></div>

          {/* Column 2: Center Content */}
          <div className="flex flex-col items-center">
            <img 
              src={beaverLogo} 
              alt="Beaver Logo" 
              className="h-20 w-20 mb-4"
              style={{ objectFit: "contain" }}
            />
            <h3 className="font-['Montserrat'] font-bold text-xl mb-2 text-[#f89422]">
              Rémi Guillette
            </h3>
            <h3 className="font-['Montserrat'] font-bold text-xl mb-2 text-[#f89422]">
              Groupe
            </h3>
            <h3 className="font-['Montserrat'] font-bold text-xl mb-2 text-[#f89422]">
              Group
            </h3>
            <a href="/politique" className="text-[#f89422] hover:text-white transition-colors mt-4">
              Politique de confidentialité
            </a>
          </div>

          {/* Column 3: Empty */}
          <div></div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="font-['Montserrat'] font-bold text-xl mb-4 text-[#f89422]">
              {content.quickLinks.title}
            </h3>
            <nav>
              {content.quickLinks.links.map((link, index) => (
                <a 
                  key={index} 
                  href={link.href} 
                  className="block text-[#f89422] mb-2 hover:text-white transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Column 3: Contact Info */}
          <div id="contact">
            {showLogo && (
              <div className="flex items-center justify-center mb-4">
                <img 
                  src={beaverLogo} 
                  alt="Beaver Logo" 
                  className="h-20 w-20 mr-3"
                  style={{ objectFit: "contain" }}
                />
              </div>
            )}
            <h3 className="font-['Montserrat'] font-bold text-xl mb-4 text-[#f89422]">
              {content.contact.title}
            </h3>
            <address className="not-italic text-[#f89422]">
              {content.contact.address.map((line, index) => (
                <p key={index} className="mb-2">{line}</p>
              ))}
              <p className="mb-2">
                <i className="fas fa-phone-alt mr-2 text-[#f89422]"></i>
                {content.contact.phone}
              </p>
              <p>
                <i className="fas fa-envelope mr-2 text-[#f89422]"></i>
                {content.contact.email}
              </p>
            </address>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;