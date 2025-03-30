
import DivisionHeader from "@/components/DivisionHeader";
import Footer from "@/components/Footer";

export default function PolitiqueConfidentialite() {
  return (
    <div className="min-h-screen flex flex-col bg-black text-[#f89422]">
      <DivisionHeader 
        firstName="Rémi"
        lastName="Guillette"
        groupFr="Cabinet-conseil en sécurité publique"
        groupEn="Public Safety Consulting Firm"
        isEnglish={false}
        homePath="/"
        homeLabel="Accueil"
        languagePath="/eng/privacy-policy"
        languageLabel="English"
      />

      <main className="flex-grow">
        <section className="py-16 md:py-24 bg-black">
          <div className="container mx-auto px-4">
            <h1 className="font-['Montserrat'] font-bold text-4xl md:text-5xl mb-8 text-center">
              Politique de confidentialité
            </h1>
            
            <div className="max-w-3xl mx-auto space-y-6">
              <section>
                <h2 className="font-['Montserrat'] font-bold text-2xl mb-4">Introduction</h2>
                <p className="mb-4">
                  La protection de vos données personnelles est une priorité pour le Groupe Rémi Guillette. Cette politique de confidentialité explique comment nous collectons, utilisons et protégeons vos informations.
                </p>
              </section>

              <section>
                <h2 className="font-['Montserrat'] font-bold text-2xl mb-4">Protection des données</h2>
                <p className="mb-4">
                  Nous prenons très au sérieux la protection de vos données personnelles. Nous mettons en œuvre des mesures de sécurité appropriées pour protéger vos informations contre tout accès non autorisé ou toute utilisation abusive.
                </p>
              </section>

              <section>
                <h2 className="font-['Montserrat'] font-bold text-2xl mb-4">Vos droits</h2>
                <p className="mb-4">
                  Conformément à la réglementation en vigueur, vous disposez des droits suivants :
                </p>
                <ul className="list-disc pl-6 mb-4">
                  <li>Droit d'accès à vos données</li>
                  <li>Droit de rectification</li>
                  <li>Droit à l'effacement</li>
                  <li>Droit à la limitation du traitement</li>
                  <li>Droit à la portabilité des données</li>
                </ul>
              </section>
            </div>
          </div>
        </section>
      </main>

      <Footer isEnglish={false} />
    </div>
  );
}
