
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
                  La protection de vos données personnelles est une priorité pour Rémi Guillette Groupe. Cette politique de confidentialité explique comment nous collectons, utilisons et protégeons vos informations.
                </p>
              </section>

              <section>
                <h2 className="font-['Montserrat'] font-bold text-2xl mb-4">Collecte de données</h2>
                <p className="mb-4">
                  Nous ne collectons que les informations nécessaires à la fourniture de nos services de consultation. Ces informations peuvent inclure :
                </p>
                <ul className="list-disc pl-6 mb-4">
                  <li>Nom et coordonnées</li>
                  <li>Informations professionnelles</li>
                  <li>Données de communication</li>
                </ul>
              </section>

              <section>
                <h2 className="font-['Montserrat'] font-bold text-2xl mb-4">Utilisation des données</h2>
                <p className="mb-4">
                  Vos données sont utilisées exclusivement pour :
                </p>
                <ul className="list-disc pl-6 mb-4">
                  <li>Fournir nos services de consultation</li>
                  <li>Communiquer avec vous</li>
                  <li>Améliorer nos services</li>
                </ul>
              </section>

              <section>
                <h2 className="font-['Montserrat'] font-bold text-2xl mb-4">Protection des données</h2>
                <p className="mb-4">
                  Nous mettons en œuvre des mesures de sécurité appropriées pour protéger vos données contre l'accès, la modification, la divulgation ou la destruction non autorisés.
                </p>
              </section>

              <section>
                <h2 className="font-['Montserrat'] font-bold text-2xl mb-4">Vos droits</h2>
                <p className="mb-4">
                  Vous avez le droit d'accéder à vos données, de les modifier ou de les supprimer. Pour toute demande concernant vos données personnelles, veuillez nous contacter.
                </p>
              </section>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>/section>

              <section>
                <h2 className="font-['Montserrat'] font-bold text-2xl mb-4">Collecte des données</h2>
                <p className="mb-4">
                  Nous collectons uniquement les informations nécessaires pour vous fournir nos services de consultation. Ces informations peuvent inclure :
                </p>
                <ul className="list-disc pl-6 mb-4">
                  <li>Nom et coordonnées</li>
                  <li>Informations professionnelles</li>
                  <li>Données de communication</li>
                </ul>
              </section>

              <section>
                <h2 className="font-['Montserrat'] font-bold text-2xl mb-4">Utilisation des données</h2>
                <p className="mb-4">
                  Vos données sont utilisées exclusivement pour :
                </p>
                <ul className="list-disc pl-6 mb-4">
                  <li>Fournir nos services de consultation</li>
                  <li>Communiquer avec vous</li>
                  <li>Améliorer nos services</li>
                </ul>
              </section>

              <section>
                <h2 className="font-['Montserrat'] font-bold text-2xl mb-4">Protection des données</h2>
                <p className="mb-4">
                  Nous mettons en œuvre des mesures de sécurité appropriées pour protéger vos données contre tout accès non autorisé, modification, divulgation ou destruction.
                </p>
              </section>

              <section>
                <h2 className="font-['Montserrat'] font-bold text-2xl mb-4">Vos droits</h2>
                <p className="mb-4">
                  Vous avez le droit d'accéder à vos données, de les modifier ou de les supprimer. Pour toute demande concernant vos données personnelles, veuillez nous contacter.
                </p>
              </section>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
