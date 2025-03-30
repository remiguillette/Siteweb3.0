import { Link } from "wouter";

export default function NotFound() {
  return (
    <div className="h-screen w-full flex flex-col items-center justify-center bg-black text-[#f89422]">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p className="text-xl mb-8">Page non trouvée / Page not found</p>
      <div className="flex space-x-4">
        <Link href="/" className="px-4 py-2 bg-[#f89422] text-black rounded hover:bg-opacity-90">
          Page d'accueil
        </Link>
        <Link href="/eng" className="px-4 py-2 bg-transparent border border-[#f89422] text-[#f89422] rounded hover:bg-[#f89422] hover:text-black">
          Home Page
        </Link>
      </div>
    </div>
  );
}
