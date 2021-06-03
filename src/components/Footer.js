import { HiOutlineChartBar } from "react-icons/hi";

import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillYoutube,
  AiFillLinkedin,
} from "react-icons/ai";

import { BiRss } from "react-icons/bi";

import { FaFacebook } from "react-icons/fa";

import "../styles/footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__logo">
        <HiOutlineChartBar />
        <h4>Jolterra</h4>
      </div>
      <div className="footer__links">
        <a href="https://jolterra.netlify.app/">Home</a>
        <a href="https://jolterra.netlify.app/">About</a>
        <a href="https://jolterra.netlify.app/">Docs</a>
        <a href="https://jolterra.netlify.app/">Prices</a>
      </div>
      <div className="footer__social">
        <AiFillGithub />
        <FaFacebook />
        <AiOutlineTwitter />
        <AiFillYoutube />
        <AiFillLinkedin />
        <span>@</span>
        <BiRss />
      </div>
      <div className="footer__copyright">
        <span>
          © Copyright 2021 Jolterra. Powered with ♥ by
          <a href="https://jolterra.netlify.app/">Jolterra</a>
        </span>
      </div>
    </div>
  );
};

export default Footer;
