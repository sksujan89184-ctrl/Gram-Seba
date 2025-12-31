import { Switch, Route } from "wouter";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/Home";
import Register from "@/pages/Register";
import SignIn from "@/pages/SignIn";
import JobPost from "@/pages/JobPost";
import WorkerFeed from "@/pages/WorkerFeed";
import Dashboard from "@/pages/Dashboard";
import JobDetails from "@/pages/JobDetails";
import BidManagement from "@/pages/BidManagement";
import AdminSettings from "@/pages/AdminSettings";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/register" component={Register} />
      <Route path="/signin" component={SignIn} />
      <Route path="/post-job" component={JobPost} />
      <Route path="/jobs" component={WorkerFeed} />
      <Route path="/jobs/:id" component={JobDetails} />
      <Route path="/bid-management" component={BidManagement} />
      <Route path="/admin/settings" component={AdminSettings} />
      <Route path="/dashboard" component={Dashboard} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
