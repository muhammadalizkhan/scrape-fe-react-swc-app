import './Hero.css';
import { ChevronRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title">Scrape, Verify, Send.</h1>
        <p className="hero-subtitle">
          The unlimited suite of tools to grow your business and find new millions of leads at scale, 10x faster.
        </p>
        <button className="hero-button">
          Start For Free <ChevronRight className="hero-icon" />
        </button>
        
        <div className="hero-partners">
          <div className="hero-partner-logos">
            <img src="src/assets/Images/logofour.png" alt="Chatbase" />
            <img src="src/assets/Images/logofive.png" alt="Aplpin" />
            <img src="src/assets/Images/logothree.png" alt="Opal" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
