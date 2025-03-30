
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
                  We only collect information necessary to provide our consulting services. This information may include:
                </p>
                <ul className="list-disc pl-6 mb-4">
                  <li>Name and contact information</li>
                  <li>Professional information</li>
                  <li>Communication data</li>
                </ul>
              </section>

              <section>
                <h2 className="font-['Montserrat'] font-bold text-2xl mb-4">Data Usage</h2>
                <p className="mb-4">
                  Your data is used exclusively for:
                </p>
                <ul className="list-disc pl-6 mb-4">
                  <li>Providing our consulting services</li>
                  <li>Communicating with you</li>
                  <li>Improving our services</li>
                </ul>
              </section>

              <section>
                <h2 className="font-['Montserrat'] font-bold text-2xl mb-4">Data Protection</h2>
                <p className="mb-4">
                  We implement appropriate security measures to protect your data against unauthorized access, modification, disclosure, or destruction.
                </p>
              </section>

              <section>
                <h2 className="font-['Montserrat'] font-bold text-2xl mb-4">Your Rights</h2>
                <p className="mb-4">
                  You have the right to access your data, modify it, or request its deletion. For any inquiries regarding your personal data, please contact us.
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
