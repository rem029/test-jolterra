// import logoJolterra from "./logo-jolterra.svg";
// import {
//   AiFillGithub,
//   AiOutlineTwitter,
//   AiFillYoutube,
//   AiFillLinkedin,
// } from "react-icons/ai";

// import { HiOutlineChartBar } from "react-icons/h1";

// import { BiRss } from "react-icons/bi";

// import { FaFacebook } from "react-icons/fa";

// import featured from "./assets/images/feature.svg";
// import featured2 from "./assets/images/feature2.svg";
// import featured3 from "./assets/images/feature3.svg";
import SectionMain from "./components/ui/SectionMain";
import Header from "./components/Header";
import Intro from "./components/Intro";

import SectionServices from "./components/ui/SectionServices";
import Services from "./components/Services";

import SectionCallOut from "./components/ui/SectionCallOut";
import CallOut from "./components/CallOut";

import SectionFooter from "./components/ui/SectionFooter";
import Footer from "./components/Footer";

import HelloJolterra from "./components/HelloJolterra";

import "./App.css";
import React, { useState } from "react";

function App() {
  const [clicked, setClicked] = useState(false);

  const onClick = (e) => {
    e.preventDefault();
    console.log("clicked");
    setClicked(true);
  };

  return (
    <div className="App">
      {clicked ? (
        <React.Fragment>
          <SectionMain>
            <Header />
            <Intro />
          </SectionMain>
          <SectionServices>
            <Services />
          </SectionServices>
          <SectionCallOut>
            <CallOut />
          </SectionCallOut>
          <SectionFooter>
            <Footer />
          </SectionFooter>
        </React.Fragment>
      ) : (
        <HelloJolterra onClick={onClick} />
      )}
    </div>
  );
}

export default App;
