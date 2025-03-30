import DivisionHeader from "@/components/DivisionHeader";
import Footer from "@/components/Footer";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen flex flex-col bg-black text-[#f89422]">
      <DivisionHeader 
        firstName="Rémi"
        lastName="Guillette"
        groupFr="Cabinet-conseil en sécurité publique"
        groupEn="Public Safety Consulting Firm"
        isEnglish={true}
        homePath="/eng"
        homeLabel="Home"
        languagePath="/politique-confidentialite"
        languageLabel="Français"
      />

      <main className="flex-grow">
        <section className="py-16 md:py-24 bg-black">
          <div className="container mx-auto px-4">
            <h1 className="font-['Montserrat'] font-bold text-4xl md:text-5xl mb-8 text-center">
              Privacy Policy
            </h1>

            <div className="max-w-3xl mx-auto space-y-6">
              <section>
                <h2 className="font-['Montserrat'] font-bold text-2xl mb-4">Introduction</h2>
                <p className="mb-4">
                  Protecting your personal data is a priority for Rémi Guillette Group. This privacy policy explains how we collect, use, and protect your information.
                </p>
              </section>

              <section>
                <h2 className="font-['Montserrat'] font-bold text-2xl mb-4">Data Collection</h2>
                <p className="mb-4">
                  We collect only the necessary information required to provide our services. This may include:
                </p>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li>Contact information (name, email, phone number)</li>
                  <li>Business information</li>
                  <li>Service preferences</li>
                </ul>
              </section>

              <section>
                <h2 className="font-['Montserrat'] font-bold text-2xl mb-4">Data Usage</h2>
                <p className="mb-4">
                  We use your information to:
                </p>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li>Provide and improve our services</li>
                  <li>Communicate with you about our services</li>
                  <li>Comply with legal obligations</li>
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