import { HiOutlineChartBar } from "react-icons/hi";

import "../styles/footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__logo">
        <HiOutlineChartBar />
        <h1>Jolterra</h1>
      </div>
      <div className="footer__links">
        <a href="http://rem029.github.io/test-jolterra">Links</a>
        <a href="http://rem029.github.io/test-jolterra">Links</a>
        <a href="http://rem029.github.io/test-jolterra">Links</a>
      </div>
      <div className="footer__icons">icons</div>
      <div className="footer__copyright">copyright</div>
    </div>
  );
};

export default Footer;
