import { Switch, Route } from "wouter";
import { Toaster } from "./components/ui/toaster";
import { TooltipProvider } from "./components/ui/tooltip";
import NotFound from "./pages/not-found";

import { DesktopModified } from "./pages/DesktopModified";
import { AboutPage } from "./pages/AboutPage";

function Router() {
  return (
    <Switch>
      {/* Landing page */}
      <Route path="/" component={DesktopModified} />
      {/* About page */}
      <Route path="/about" component={AboutPage} />
      {/* Fallback to 404 */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <TooltipProvider>
      <Toaster />
      <Router />
    </TooltipProvider>
  );
}

export default App;
