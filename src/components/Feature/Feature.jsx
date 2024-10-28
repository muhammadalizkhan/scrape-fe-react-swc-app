import './Feature.css';

const Feature = () => {
  return (
    <section className="features-section">
      <div className="features-container">

        <div className="feature-card">
          <h3>Scrape millions of emails from any social media.</h3>
          <p>Easily extract emails from multiple social platforms, including Instagram, Facebook, LinkedIn, Twitter, and TikTok.</p>
          <div className="feature-users">
            <div className="user">
              <img src="path/to/user1.jpg" alt="User 1" />
              <span>Akram Sheikh</span>
            </div>
            <div className="user">
              <img src="path/to/user2.jpg" alt="User 2" />
              <span>Rabbi Hossain</span>
            </div>
            <div className="user">
              <img src="path/to/user3.jpg" alt="User 3" />
              <span>Nasim Uddin</span>
            </div>
          </div>
        </div>

        <div className="feature-card">
          <h3>Verify emails within one-click.</h3>
          <p>Instantly verify the legitimacy of scraped emails to ensure a high-quality lead list for your outreach campaigns.</p>
          <div className="feature-users">
            <div className="user">
              <img src="path/to/user4.jpg" alt="User 4" />
              <span>Nasim Uddin</span>
              <span className="status verified">Verified</span>
            </div>
            <div className="user">
              <img src="path/to/user5.jpg" alt="User 5" />
              <span>Rabbi Hossain</span>
              <span className="status invalid">Invalid</span>
            </div>
            <div className="user">
              <img src="path/to/user6.jpg" alt="User 6" />
              <span>Akram Sheikh</span>
              <span className="status verifying">Verifying...</span>
            </div>
          </div>
        </div>


        <div className="feature-card">
          <h3>Cold outreach leads in seconds.</h3>
          <p>Generate targeted cold outreach emails from verified lists with a high likelihood of inbox delivery.</p>
          <div className="feature-users">
            <div className="user">
              <img src="path/to/user7.jpg" alt="User 7" />
              <span>Akram Sheikh</span>
              <span className="status outreach">Looking to engage followers?</span>
            </div>
            <div className="user">
              <img src="path/to/user8.jpg" alt="User 8" />
              <span>Rabbi Hossain</span>
              <span className="status outreach">Looking to verify emails?</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Feature;