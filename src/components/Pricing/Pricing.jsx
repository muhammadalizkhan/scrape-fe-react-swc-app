import { Check, X } from 'lucide-react';
import './Pricing.css';
import { useState } from 'react';

export default function Pricing() {
  const [isYearly, setIsYearly] = useState(false);

  const pricingPlans = [
    {
      name: "Basic",
      price: 49,
      features: {
        emailScrape: "1,000 Email Scrape",
        emailVerifications: "2,000 Email Verifications",
        emailSent: "5,000 Email Sent Monthly",
        contactList: "2,000 Contact List",
        domainAttach: "1 Domain Attach",
        included: [
          "No Social Accounts Needed",
          "No Proxies Needed",
          "No charge for duplicates",
          "Export Contacts to CSV",
          "Email Editor",
          "Default Domains For Emails"
        ],
        excluded: [
          "Premium Support",
          "API Access"
        ]
      }
    },
    {
      name: "Growth",
      price: 99,
      features: {
        emailScrape: "3,000 Email Scrape",
        emailVerifications: "6,000 Email Verifications",
        emailSent: "15,000 Email Sent Monthly",
        contactList: "6,000 Contact List",
        domainAttach: "3 Domains Attach",
        included: [
          "No Social Accounts Needed",
          "No Proxies Needed",
          "No charge for duplicates",
          "Export Contacts to CSV",
          "Email Editor",
          "Default Domains For Emails",
          "Premium Support"
        ],
        excluded: [
          "API Access"
        ]
      }
    },
    {
      name: "Business",
      price: 299,
      features: {
        emailScrape: "10,000 Email Scrape",
        emailVerifications: "15,000 Email Verifications",
        emailSent: "50,000 Email Sent Monthly",
        contactList: "15,000 Contact List",
        domainAttach: "30 Domains Attach",
        included: [
          "No Social Accounts Needed",
          "No Proxies Needed",
          "No charge for duplicates",
          "Export Contacts to CSV",
          "Email Editor",
          "Default Domains For Emails",
          "Premium Support",
          "API Access"
        ],
        excluded: []
      }
    },
    {
      name: "Enterprise",
      price: 499,
      features: {
        emailScrape: "Unlimited Email Scrape",
        emailVerifications: "Unlimited Email Verifications",
        emailSent: "Unlimited Email Sent Monthly",
        contactList: "Unlimited Contact List",
        domainAttach: "Unlimited Domains Attach",
        included: [
          "No Social Accounts Needed",
          "No Proxies Needed",
          "No charge for duplicates",
          "Export Contacts to CSV",
          "Email Editor",
          "Default Domains For Emails",
          "Premium Support",
          "API Access"
        ],
        excluded: []
      }
    }
  ];

  return (
    <div className="pricing-section">
      <div className="pricing-container">
        <div className="pricing-header">
          <h1>Pricing</h1>
          <p>Start for free and scale as you grow.</p>
          
          <div className="toggle-container">
            <button 
              className={`toggle-button ${!isYearly ? 'active' : ''}`}
              onClick={() => setIsYearly(false)}
            >
              Monthly
            </button>
            <button 
              className={`toggle-button ${isYearly ? 'active' : ''}`}
              onClick={() => setIsYearly(true)}
            >
              Yearly
            </button>
          </div>
        </div>

        <div className="pricing-grid">
          {pricingPlans.map((plan, index) => (
            <div key={index} className="pricing-card">
              <div className="pricing-card-header">
                <h3>{plan.name}</h3>
                <div className="price">
                  <span className="currency">$</span>
                  <span className="amount">{plan.price}</span>
                  <span className="period">/month</span>
                </div>
              </div>

              <div className="features-list">
                <div className="main-features">
                  <p>{plan.features.emailScrape}</p>
                  <p>{plan.features.emailVerifications}</p>
                  <p>{plan.features.emailSent}</p>
                  <p>{plan.features.contactList}</p>
                  <p>{plan.features.domainAttach}</p>
                </div>

                <div className="additional-features">
                  {plan.features.included.map((feature, idx) => (
                    <div key={idx} className="feature included">
                      <Check size={16} className="feature-icon" />
                      <span>{feature}</span>
                    </div>
                  ))}
                  
                  {plan.features.excluded.map((feature, idx) => (
                    <div key={idx} className="feature excluded">
                      <X size={16} className="feature-icon" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button className="get-started-button">
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}