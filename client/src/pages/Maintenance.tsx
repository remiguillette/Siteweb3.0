import { Link } from "wouter";

export default function Maintenance() {
  return (
    <div className="h-screen w-full flex flex-col items-center justify-center bg-black text-[#f89422] px-4">
      <svg className="w-24 h-24 mb-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="#f89422">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 14a3.5 3.5 0 005 0l4-4m0 0l-4-4m4 4h-7" />
      </svg>
      
      <h1 className="text-4xl font-bold mb-6 text-center">Maintenance en cours</h1>
      
      {/* Français */}
      <div className="max-w-md text-center mb-6 border-b border-[#f89422] pb-4">
        <h2 className="text-[#0d6efd] text-xl font-bold mb-2">Site en maintenance</h2>
        <p className="text-[#f89422] mb-3">
          Notre site est actuellement en maintenance. Nous travaillons à améliorer votre expérience.
          Veuillez revenir plus tard. Nous nous excusons pour tout inconvénient.
        </p>
      </div>
      
      {/* Anglais */}
      <div className="max-w-md text-center mb-6 border-b border-[#f89422] pb-4">
        <h2 className="text-[#0d6efd] text-xl font-bold mb-2">Site Under Maintenance</h2>
        <p className="text-[#f89422] mb-3">
          Our site is currently undergoing maintenance. We are working to improve your experience.
          Please check back later. We apologize for any inconvenience.
        </p>
      </div>
      
      {/* Espagnol */}
      <div className="max-w-md text-center">
        <h2 className="text-[#0d6efd] text-xl font-bold mb-2">Sitio en Mantenimiento</h2>
        <p className="text-[#f89422] mb-3">
          Nuestro sitio se encuentra actualmente en mantenimiento. Estamos trabajando para mejorar su experiencia.
          Por favor, vuelva más tarde. Pedimos disculpas por cualquier inconveniente.
        </p>
      </div>
    </div>
  );
}