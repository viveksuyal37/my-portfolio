import React from "react";
import SocialMediaLinks from "./SocialMediaLinks";
import HomeData from "./HomeData";
import ScrollDown from "./ScrollDown";
import "./Home.css";

const Home = () => {
  return (
    <section className="home section" id="home">
      <div className="home_container container grid">
        <div className="grid home_content">
          <SocialMediaLinks />
          <div className="home_img"></div>
          <HomeData />
        </div>
        <ScrollDown />
      </div>
    </section>
  );
};

export default Home;
