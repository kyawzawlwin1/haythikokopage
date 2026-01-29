import { Route, Switch } from "wouter";
import Header from "./features/static/components/Header";
import Footer from "./features/static/components/Footer";
import HomePage from "./features/static/pages/HomePage";
import ProjectPage from "./features/static/pages/ProjectPage";
import ExpertisePage from "./features/static/pages/ExpertisePage";
import AboutPage from "./features/static/pages/AboutPage";

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
