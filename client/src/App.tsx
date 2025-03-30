import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import English from "@/pages/English";
import SecuritePublique from "@/pages/SecuritePublique";
import ServiceCommunautaire from "@/pages/ServiceCommunautaire";
import SanteSSTPage from "@/pages/SanteSSTPage";
import ControleAnimalier from "@/pages/ControleAnimalier";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/eng" component={English} />
      <Route path="/securite-publique" component={SecuritePublique} />
      <Route path="/service-communautaire" component={ServiceCommunautaire} />
      <Route path="/sante-sst" component={SanteSSTPage} />
      <Route path="/controle-animalier" component={ControleAnimalier} />
      {/* Fallback to 404 */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router />
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;
