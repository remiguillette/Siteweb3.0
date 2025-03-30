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
                <h2 className="font-['Montserrat'] font-bold text-2xl mb-4">Collecte de données</h2>
                <p className="mb-4">
                  Nous collectons uniquement les informations nécessaires à la fourniture de nos services. Cela peut inclure :
                </p>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li>Informations de contact (nom, courriel, numéro de téléphone)</li>
                  <li>Informations d'entreprise</li>
                  <li>Préférences de service</li>
                </ul>
              </section>

              <section>
                <h2 className="font-['Montserrat'] font-bold text-2xl mb-4">Utilisation des données</h2>
                <p className="mb-4">
                  Nous utilisons vos informations pour :
                </p>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li>Fournir et améliorer nos services</li>
                  <li>Communiquer avec vous concernant nos services</li>
                  <li>Respecter nos obligations légales</li>
                </ul>
              </section>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}