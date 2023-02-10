import React from "react";
import Card from "./Card";
import Work from "./PortfolioData";
import "./Portfolio.css";

const Portfolio = () => {
  return (
    <section className="section container" id="portfolio">
      <h2 className="section_title">Portfolio</h2>
      <span className="section_subtitle">My recent work</span>

      <div className="portfolio_container">
        {Work &&
          Work.map((work) => {
           return <Card work={work} key={work.id}/>;
          })}
      </div>
    </section>
  );
};

export default Portfolio;
