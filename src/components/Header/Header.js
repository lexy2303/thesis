import icon from '../../assets/images/main-vinyl.png';

import './index.css';

const Header = () => {
  return (
    <div className="header">
      <div className="header-container">
        <img 
          className="main-icon"
          alt="icon"
          src={icon}
        />
        <div className="header-box">
          <h1 className="text fade-in main-title">SPIN CITY RECORDS</h1>
          <div className="text fade-in header-subtitle">Your classic record shop. Sell your old vinyls to us.</div>
        </div>
      </div>
    </div>
  )
}

export default Header;
