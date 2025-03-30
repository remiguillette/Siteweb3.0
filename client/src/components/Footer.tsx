import React from 'react';
import beaverLogo from '../../attached_assets/beaver.png';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-black py-12 border-t border-[#f89422]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Colonne 1: Vide */}
          <div></div>

          {/* Colonne 2: Centre avec logo et texte */}
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

          {/* Colonne 3: Contact */}
          <div>
            <h3 className="font-['Montserrat'] font-bold text-xl mb-4 text-[#f89422]">
              Contact
            </h3>
            <address className="not-italic text-[#f89422]">
              <p className="mb-2">123 Rue Principale</p>
              <p className="mb-2">Montréal, QC H3Z 2Y7</p>
              <p className="mb-2">Canada</p>
              <p className="mb-2">
                <i className="fas fa-phone-alt mr-2 text-[#f89422]"></i>
                +1 (514) 555-1234
              </p>
              <p>
                <i className="fas fa-envelope mr-2 text-[#f89422]"></i>
                info@remiguillette.com
              </p>
            </address>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;