import React from 'react';
import beaverLogo from '../../../attached_assets/beaver.png';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-black py-12 border-t border-[#f89422]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Colonne de gauche - vide */}
          <div></div>

          {/* Colonne du milieu - contenu principal */}
          <div className="flex flex-col items-center">
            <img 
              src={beaverLogo} 
              alt="Logo Beaver" 
              className="h-20 w-20 mb-4"
              style={{ objectFit: "contain" }}
            />
            <h3 className="font-['Montserrat'] font-bold text-xl mb-2">
              <span className="text-[#0d6efd]">Rémi</span>{" "}
              <span className="text-[#f89422]">Guillette</span>
            </h3>
            <h3 className="font-['Montserrat'] font-bold text-xl mb-2 text-[#f89422]">
              Groupe
            </h3>
            <h3 className="font-['Montserrat'] font-bold text-xl mb-2 text-[#f89422]">
              Group
            </h3>
            <a 
              href="/politique" 
              className="text-[#f89422] text-sm hover:text-white transition-colors mt-4"
            >
              Politique de confidentialité
            </a>
          </div>

          {/* Colonne de droite - informations de contact */}
          <div className="flex flex-col items-center">
            <h3 className="font-['Montserrat'] font-bold text-xl mb-4 text-[#f89422]">Contact</h3>
            <address className="not-italic text-[#f89422] text-center">
              <p className="mb-2">6388 Hawkins Street</p>
              <p className="mb-2">Apt. 307</p>
              <p className="mb-2">Niagara Falls, Ontario</p>
              <p className="mb-2">L2G 1P3</p>
              <p className="mb-2">
                <i className="fas fa-phone-alt mr-2"></i>
                613 501-2160
              </p>
              <p>
                <i className="fas fa-envelope mr-2"></i>
                remiguillette@gmail.com
              </p>
            </address>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;