import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title">Scrape, Verify, Send.</h1>
        <p className="hero-subtitle">
          The Unlimited suite of tools to grow your business and find
          new millions of leads at scale, 10x faster.
        </p>
        <button className="hero-button">Start For Free</button>
        
        <div className="hero-partners">
          <p>As seen on:</p>
          <div className="hero-partner-logos">
            <img src="/path/to/liveblocks-logo.png" alt="Liveblocks logo" />
            <img src="/path/to/payload-logo.png" alt="Payload logo" />
            <img src="/path/to/chatbase-logo.png" alt="Chatbase logo" />
            <img src="/path/to/startups-logo.png" alt="Startups logo" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
