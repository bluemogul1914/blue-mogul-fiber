import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import Business from "@/pages/Business";
import Privacy from "@/pages/Privacy";
import Terms from "@/pages/Terms";
import ChatWidget from "@/components/ChatWidget";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/business" component={Business} />
      <Route path="/privacy" component={Privacy} />
      <Route path="/terms" component={Terms} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Router />
        <ChatWidget />
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
