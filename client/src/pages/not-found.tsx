import { Link } from "wouter";

export default function NotFound() {
  return (
    <div className="h-screen w-full flex flex-col items-center justify-center bg-black text-[#f89422] px-4">
      <h1 className="text-6xl font-bold mb-6">404</h1>
      
      {/* Français */}
      <div className="max-w-md text-center mb-6 border-b border-[#f89422] pb-4">
        <h2 className="text-[#0d6efd] text-xl font-bold mb-2">Page non trouvée</h2>
        <p className="text-[#f89422] mb-3">
          La page que vous recherchez n'existe pas ou a été déplacée.
          Veuillez vérifier l'URL ou retourner à la page d'accueil.
        </p>
        <Link href="/" className="px-4 py-2 bg-[#f89422] text-black rounded hover:bg-opacity-90 inline-block">
          Page d'accueil
        </Link>
      </div>
      
      {/* Anglais */}
      <div className="max-w-md text-center mb-6 border-b border-[#f89422] pb-4">
        <h2 className="text-[#0d6efd] text-xl font-bold mb-2">Page Not Found</h2>
        <p className="text-[#f89422] mb-3">
          The page you are looking for does not exist or has been moved.
          Please check the URL or return to the home page.
        </p>
        <Link href="/eng" className="px-4 py-2 bg-transparent border border-[#f89422] text-[#f89422] rounded hover:bg-[#f89422] hover:text-black inline-block">
          Home Page
        </Link>
      </div>
      
      {/* Espagnol */}
      <div className="max-w-md text-center">
        <h2 className="text-[#0d6efd] text-xl font-bold mb-2">Página No Encontrada</h2>
        <p className="text-[#f89422] mb-3">
          La página que busca no existe o ha sido trasladada.
          Por favor, compruebe la URL o vuelva a la página de inicio.
        </p>
        <Link href="/" className="px-4 py-2 bg-transparent border border-[#f89422] text-[#f89422] rounded hover:bg-[#f89422] hover:text-black inline-block">
          Página de inicio
        </Link>
      </div>
    </div>
  );
}
