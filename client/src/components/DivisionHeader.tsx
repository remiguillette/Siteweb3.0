import beaverLogo from "@assets/beaver.png";
import { Link } from "wouter";

interface DivisionHeaderProps {
  firstName: string;
  lastName: string;
  groupFr: string;
  groupEn: string;
  isEnglish: boolean;
  homePath: string;
  homeLabel: string;
  languagePath: string;
  languageLabel: string;
}

export default function DivisionHeader({
  firstName,
  lastName,
  groupFr,
  groupEn,
  isEnglish,
  homePath,
  homeLabel,
  languagePath,
  languageLabel
}: DivisionHeaderProps) {
  return (
    <header className="py-4 bg-black">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <img 
            src={beaverLogo} 
            alt="Beaver Logo" 
            className="h-50 w-60 mr-5"
            style={{ objectFit: "contain" }}
          />
          <div className="max-w-[480px]">
            <h1 className="font-['Montserrat'] font-extrabold text-4xl md:text-5xl tracking-wide">
              <span className="text-[#0d6efd]">{firstName}</span>{" "}
              <span className="text-[#f89422]">{lastName}</span>
            </h1>
            <p className="text-[#f89422] text-2xl font-semibold whitespace-nowrap">{groupFr}</p>
            <p className="text-[#f89422] text-xl font-semibold whitespace-nowrap">{groupEn}</p>
          </div>
        </div>
        <div>
          <Link 
            href={homePath} 
            className="text-[#f89422] hover:text-[#0d6efd] mr-4"
          >
            {homeLabel}
          </Link>
          <div className="flex items-center">
            <span className="text-[#f89422] mr-4 font-bold">
              Fier de l'Ontario / Proud of Ontario
            </span>
            <Link 
              href={languagePath}
            className="px-4 py-2 bg-transparent border border-[#f89422] text-[#f89422] rounded-md hover:bg-[#f89422] hover:text-white transition"
          >
            {languageLabel}
          </Link>
          </div>
        </div>
      </div>
    </header>
  );
}