import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import FeatureSection from "./components/FeatureSection";
import Pricing from "./components/Pricing";
import Footer from "./components/Footer";
import SustainableFashion from "./components/SustainableFashion";
import Budget from "./components/Budget";
import Target from "./components/Target";
import MarketingStrategies from "./components/MarketingStrategies";
import SuccessStory from "./components/SuccessStory";
import Conclusion from "./components/Conclusions";
import TeamMembers from "./components/TeamMembers";
import Benefits from "./components/Benefits";

const App = () => {
  return (
    <>
      <Navbar />

      <div className="max-w-7xl mx-auto pt-20 px-6">
        <HeroSection />
        <SustainableFashion />
        <FeatureSection />
        <Benefits />
        <Pricing />
        <Budget />
        <Target />

        <MarketingStrategies />

        <SuccessStory />
        <Conclusion />
        <TeamMembers />

        <Footer />
      </div>
    </>
  );
};

export default App;
