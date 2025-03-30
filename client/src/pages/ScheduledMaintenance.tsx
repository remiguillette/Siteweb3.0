import { Link } from "wouter";

export default function ScheduledMaintenance() {
  return (
    <div className="h-screen w-full flex flex-col items-center justify-center bg-black text-[#f89422] px-4">
      <svg className="w-24 h-24 mb-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="#f89422">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
      
      <h1 className="text-4xl font-bold mb-6 text-center">Maintenance Planifiée</h1>
      
      {/* Français */}
      <div className="max-w-md text-center mb-6 border-b border-[#f89422] pb-4">
        <h2 className="text-[#0d6efd] text-xl font-bold mb-2">Maintenance planifiée</h2>
        <p className="text-[#f89422] mb-3">
          Notre site sera en maintenance entre 22h et 4h.
          Veuillez revenir plus tard. Nous nous excusons pour tout inconvénient.
        </p>
      </div>
      
      {/* Anglais */}
      <div className="max-w-md text-center mb-6 border-b border-[#f89422] pb-4">
        <h2 className="text-[#0d6efd] text-xl font-bold mb-2">Scheduled Maintenance</h2>
        <p className="text-[#f89422] mb-3">
          Our site will be undergoing maintenance between 10 PM and 4 AM.
          Please check back later. We apologize for any inconvenience.
        </p>
      </div>
      
      {/* Espagnol */}
      <div className="max-w-md text-center">
        <h2 className="text-[#0d6efd] text-xl font-bold mb-2">Mantenimiento Programado</h2>
        <p className="text-[#f89422] mb-3">
          Nuestro sitio estará en mantenimiento entre las 22h y las 4h.
          Por favor, vuelva más tarde. Pedimos disculpas por cualquier inconveniente.
        </p>
      </div>
    </div>
  );
}