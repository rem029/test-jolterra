import { HiOutlineChartBar } from "react-icons/hi";

import "../styles/header.css";

const Header = () => {
  return (
    <header>
      <div className="header__items">
        <div className="header__logo">
          <HiOutlineChartBar />
          <h1>Jolterra</h1>
        </div>

        <nav>
          <ul>
            <li>Pricing</li>
            <li>Home</li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
