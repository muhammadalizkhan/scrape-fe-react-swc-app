import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          LeadKit
        </div>
        <div className="navbar-links">
          <a href="#pricing">Pricing</a>
          <a href="#features">Features</a>
          <a href="#features">Services</a>
        </div>
        <div className="navbar-buttons">
          <button className="navbar-signin">Sign in</button>
          <button className="navbar-getstarted">Get started</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
