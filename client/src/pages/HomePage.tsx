
import { Link } from "wouter";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-black text-[#f89422]">
      <main className="flex-grow">
        <section className="py-16 md:py-24 bg-black relative overflow-hidden">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold mb-8">Welcome</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Link href="/eng/ohs-service" className="p-6 border border-[#f89422] rounded-lg hover:bg-[#f89422] hover:text-black transition">
                OHS Service
              </Link>
              <Link href="/sante-sst" className="p-6 border border-[#f89422] rounded-lg hover:bg-[#f89422] hover:text-black transition">
                Santé et Sécurité au Travail
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
