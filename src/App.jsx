import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import ReachSection from "./components/ReachSection/ReachSection";
import Pricing from "./components/Pricing/Pricing";
import "./App.css";

export default function App() {
  return (
    <div className="app">
      <Navbar />
      <main className="main-content">
        <Hero />
        <ReachSection />
        <Pricing />
      </main>
    </div>
  );
}