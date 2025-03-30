import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Route, Router } from "wouter";
import HomePage from "@/pages/HomePage";
import OHSService from "@/pages/OHSService";
import AnimalControl from "@/pages/AnimalControl";
import PrivacyPolicy from "@/pages/PrivacyPolicy";
import PolitiqueConfidentialite from "@/pages/PolitiqueConfidentialite";
import PublicSafety from "@/pages/PublicSafety";
import SecuritePublique from "@/pages/SecuritePublique";
import ServicesSanteSecurite from "@/pages/ServicesSanteSecurite";
import { Toaster } from "@/components/ui/toaster";


const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Route path="/" component={HomePage} />
        <Route path="/eng/ohs-service" component={OHSService} />
        <Route path="/eng/animal-control" component={AnimalControl} />
        <Route path="/eng/privacy-policy" component={PrivacyPolicy} />
        <Route path="/politique-confidentialite" component={PolitiqueConfidentialite} />
        <Route path="/eng/public-safety" component={PublicSafety} />
        <Route path="/securite-publique" component={SecuritePublique} />
        <Route path="/sante-sst" component={ServicesSanteSecurite} />
      </Router>
      <Toaster/>
    </QueryClientProvider>
  );
}