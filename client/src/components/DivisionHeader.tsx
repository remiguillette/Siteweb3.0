import beaverLogo from "@assets/beaver.png";
import { Link } from "wouter";

interface DivisionHeaderProps {
  firstName: string;
  lastName: string;
  group: string;
  homePath: string;
  homeLabel: string;
  languagePath: string;
  languageLabel: string;
}

export default function DivisionHeader({
  firstName,
  lastName,
  group,
  homePath,
  homeLabel,
  languagePath,
  languageLabel
}: DivisionHeaderProps) {
  return (
    <header className="py-4 bg-[#212529] border-b border-[#f89422]">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <img 
            src={beaverLogo} 
            alt="Beaver Logo" 
            className="h-20 w-20 mr-5"
            style={{ objectFit: "contain" }}
          />
          <div className="min-w-[300px]">
            <h1 className="font-['Montserrat'] font-extrabold text-4xl tracking-wide">
              <span className="text-[#0d6efd]">{firstName}</span>{" "}
              <span className="text-[#f89422]">{lastName}</span>
            </h1>
            <p className="text-[#f89422] text-2xl font-semibold whitespace-nowrap">{group}</p>
          </div>
        </div>
        <div>
          <Link 
            href={homePath} 
            className="text-[#f89422] hover:text-[#0d6efd] mr-4"
          >
            {homeLabel}
          </Link>
          <Link 
            href={languagePath}
            className="px-4 py-2 bg-transparent border border-[#f89422] text-[#f89422] rounded-md hover:bg-[#f89422] hover:text-white transition"
          >
            {languageLabel}
          </Link>
        </div>
      </div>
    </header>
  );
}