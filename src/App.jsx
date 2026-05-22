import { Route, Switch } from "wouter";

import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ServicesPage from "./pages/ServicesPage";
import ProjectPage from "./pages/ProjectPage";

const App = () => {
  return (
    <div className="flex flex-col min-h-screen text-white">
      <Header />

      <main className="flex-grow">
        <div className="min-h-screen ">
          <Switch>
            <Route path="/" component={HomePage} />
            <Route path="/projects" component={ProjectPage} />
            <Route path="/services" component={ServicesPage} />
            <Route path="/about" component={AboutPage} />
          </Switch>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default App;
