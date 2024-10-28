import './StatsSection.css';

const StatsSection = () => {
  return (
    <section className="stats-section">
      <div className="stats-container">
        <h2 className="stats-heading">Trusted by Businesses Worldwide</h2>
        <p className="stats-subheading">Our platform has helped millions of businesses increase their reach and improve lead generation.</p>
        
        <div className="stats-grid">
          <div className="stat-item">
            <h3 className="stat-number">10M+</h3>
            <p className="stat-description">Emails Scraped</p>
          </div>
          
          <div className="stat-item">
            <h3 className="stat-number">5M+</h3>
            <p className="stat-description">Emails Verified</p>
          </div>
          <div className="stat-item">
            <h3 className="stat-number">100K+</h3>
            <p className="stat-description">Successful Campaigns</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;