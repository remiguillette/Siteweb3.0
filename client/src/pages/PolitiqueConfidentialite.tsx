export default function PolitiqueConfidentialite() {
  return (
    <div className="min-h-screen bg-[#1a1a1a] text-white py-20 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="font-['Montserrat'] font-bold text-4xl mb-8">Politique de confidentialité</h1>
        <div>
          <section>
            <h2 className="font-['Montserrat'] font-bold text-2xl mb-4">Collecte des données</h2>
            <p className="mb-4">
              Nous collectons uniquement les données nécessaires pour vous fournir nos services et améliorer votre expérience sur notre site. Ces données peuvent inclure :
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Vos informations de contact (nom, email)</li>
              <li>Les données de navigation</li>
              <li>Les préférences de communication</li>
            </ul>
          </section>

          <section>
            <h2 className="font-['Montserrat'] font-bold text-2xl mb-4">Utilisation des données</h2>
            <p className="mb-4">
              Vos données sont utilisées exclusivement pour :
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Vous fournir nos services</li>
              <li>Améliorer votre expérience utilisateur</li>
              <li>Communiquer avec vous concernant nos services</li>
              <li>Respecter nos obligations légales</li>
            </ul>
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
    </div>
  )
}