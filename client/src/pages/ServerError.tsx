import { Link } from "wouter";

export default function ServerError() {
  return (
    <div className="h-screen w-full flex flex-col items-center justify-center bg-black text-[#f89422] px-4">
      <h1 className="text-6xl font-bold mb-6">500</h1>
      
      {/* Français */}
      <div className="max-w-md text-center mb-6 border-b border-[#f89422] pb-4">
        <h2 className="text-[#0d6efd] text-xl font-bold mb-2">Erreur Serveur</h2>
        <p className="text-[#f89422] mb-3">
          Une erreur inattendue s'est produite sur notre serveur.
          Veuillez réessayer plus tard ou contacter notre équipe de support.
        </p>
        <Link href="/" className="px-4 py-2 bg-[#f89422] text-black rounded hover:bg-opacity-90 inline-block">
          Page d'accueil
        </Link>
      </div>
      
      {/* Anglais */}
      <div className="max-w-md text-center mb-6 border-b border-[#f89422] pb-4">
        <h2 className="text-[#0d6efd] text-xl font-bold mb-2">Server Error</h2>
        <p className="text-[#f89422] mb-3">
          An unexpected error occurred on our server.
          Please try again later or contact our support team.
        </p>
        <Link href="/eng" className="px-4 py-2 bg-transparent border border-[#f89422] text-[#f89422] rounded hover:bg-[#f89422] hover:text-black inline-block">
          Home Page
        </Link>
      </div>
      
      {/* Espagnol */}
      <div className="max-w-md text-center">
        <h2 className="text-[#0d6efd] text-xl font-bold mb-2">Error del Servidor</h2>
        <p className="text-[#f89422] mb-3">
          Se ha producido un error inesperado en nuestro servidor.
          Por favor, inténtelo de nuevo más tarde o contacte con nuestro equipo de soporte.
        </p>
        <Link href="/" className="px-4 py-2 bg-transparent border border-[#f89422] text-[#f89422] rounded hover:bg-[#f89422] hover:text-black inline-block">
          Página de inicio
        </Link>
      </div>
    </div>
  );
}