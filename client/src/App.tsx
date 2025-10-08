import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Home from "@/pages/Home";
import OverviewDetail from "@/pages/OverviewDetail";
import Team from "@/pages/Team";
import TeamMemberDetail from "@/pages/TeamMemberDetail";
import WorkPackages from "@/pages/WorkPackages";
import WorkPackageDetail from "@/pages/WorkPackageDetail";
import Publications from "@/pages/Publications";
import Results from "@/pages/Results";
import Contact from "@/pages/Contact";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/overview/:id" component={OverviewDetail} />
      <Route path="/team" component={Team} />
      <Route path="/team/:id" component={TeamMemberDetail} />
      <Route path="/work-packages" component={WorkPackages} />
      <Route path="/work-packages/:id" component={WorkPackageDetail} />
      <Route path="/publications" component={Publications} />
      <Route path="/results" component={Results} />
      <Route path="/contact" component={Contact} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-1">
            <Router />
          </main>
          <Footer />
        </div>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
