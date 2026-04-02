import { Route, Switch } from "wouter";

import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import ProjectPage from "./pages/ProjectPage";
import ExpertisePage from "./pages/ExpertisePage";
import AboutPage from "./pages/AboutPage";

const App = () => {
  return (
    <div className="flex flex-col min-h-screen text-white">
      <Header />

      <main className="flex-grow">
        <div className="min-h-screen">
          <Switch>
            <Route path="/" component={HomePage} />
            <Route path="/portfolio" component={ProjectPage} />
            <Route path="/expertise" component={ExpertisePage} />
            <Route path="/about" component={AboutPage} />
          </Switch>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default App;
