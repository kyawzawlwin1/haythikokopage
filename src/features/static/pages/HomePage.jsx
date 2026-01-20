import React from "react";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <div className="flex flex-col min-h-screen mx-auto w-full">
      {" "}
      <Header />
      <main className="flex-grow flex flex-col space-y-20">
        <HeroSection />
      </main>
      <Footer className="" />
    </div>
  );
};

export default HomePage;
