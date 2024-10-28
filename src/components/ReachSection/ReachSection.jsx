import './ReachSection.css';
import { BarChart3, Zap, Bell, Mail, LineChart, Globe } from 'lucide-react';

export default function ReachSection() {
  const features = [
    {
      icon: <BarChart3 size={24} className="feature-icon" />,
      title: "Scarp Leads at Scale",
      description: "Effortlessly extract leads from diverse social media platforms. Extract From Instagram, Facebook, LinkedIn, Twitter and TikTok"
    },
    {
      icon: <Zap size={24} className="feature-icon" />,
      title: "Faster Time to Inbox",
      description: "Our ensures the accuracy and legitimacy of scraped emails, guaranteeing a high-quality lead database for your business."
    },
    {
      icon: <Bell size={24} className="feature-icon" />,
      title: "Reach at Best Time",
      description: "Run Campaigns, send perfectly-timed and targeted emails automatically to verified leads. Instantly scales your outreach campaigns."
    },
    {
      icon: <Mail size={24} className="feature-icon" />,
      title: "Cool Email Editor",
      description: "Elevate your email marketing game Effortlessly with our editor, designed for crafting impactful and compelling messages."
    },
    {
      icon: <LineChart size={24} className="feature-icon" />,
      title: "Dynamic and Detailed Reports",
      description: "Gain valuable insights into the performance of your campaigns. Optimize strategies seamlessly with detailed analytics."
    },
    {
      icon: <Globe size={24} className="feature-icon" />,
      title: "Attach Your Domains",
      description: "Securely link your domains for seamless email sending, enhancing deliverability and establishing a professional online presence."
    }
  ];

  return (
    <div className="reach-section">
      <div className="reach-container">
        <div className="reach-header">
          <h1>
            Reach humans,
            <br />
            not spam folders.
          </h1>
        </div>
        
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="icon-wrapper">
                {feature.icon}
              </div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}