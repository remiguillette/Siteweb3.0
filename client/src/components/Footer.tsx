import React from 'react';
import beaverLogo from '../../attached_assets/beaver.png';

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
            <h3 className="font-['Montserrat'] font-bold text-xl mb-2 text-[#f89422]">
              Rémi Guillette
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

          {/* Colonne de droite - vide */}
          <div></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;