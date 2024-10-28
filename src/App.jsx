import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import ReachSection from "./components/ReachSection/ReachSection";
import "./App.css";
import Pricing from "./components/Pricing/Pricing";

export default function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <ReachSection />
      <Pricing />
    </div>
  );
}
