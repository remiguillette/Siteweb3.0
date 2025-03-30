import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import NotFound from "@/pages/not-found";
import ServerError from "@/pages/ServerError";
import Maintenance from "@/pages/Maintenance";
import ScheduledMaintenance from "@/pages/ScheduledMaintenance";
import Home from "@/pages/Home";
import English from "@/pages/English";
import SecuritePublique from "@/pages/SecuritePublique";
import ServiceCommunautaire from "@/pages/ServiceCommunautaire";
import SanteSSTPage from "@/pages/SanteSSTPage";
import ControleAnimalier from "@/pages/ControleAnimalier";
import PublicSafety from "@/pages/PublicSafety";
import CommunityService from "@/pages/CommunityService";
import OHSService from "@/pages/OHSService";
import AnimalControl from "@/pages/AnimalControl";

function Router() {
  return (
    <Switch>
      {/* French Routes */}
      <Route path="/" component={Home} />
      <Route path="/securite-publique" component={SecuritePublique} />
      <Route path="/service-communautaire" component={ServiceCommunautaire} />
      <Route path="/sante-sst" component={SanteSSTPage} />
      <Route path="/controle-animalier" component={ControleAnimalier} />
      
      {/* English Routes */}
      <Route path="/eng" component={English} />
      <Route path="/eng/public-safety" component={PublicSafety} />
      <Route path="/eng/community-service" component={CommunityService} />
      <Route path="/eng/ohs-service" component={OHSService} />
      <Route path="/eng/animal-control" component={AnimalControl} />
      
      {/* Error Pages */}
      <Route path="/404" component={NotFound} />
      <Route path="/500" component={ServerError} />
      <Route path="/maintenance" component={Maintenance} />
      <Route path="/scheduled-maintenance" component={ScheduledMaintenance} />
      
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
