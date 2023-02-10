import React from "react";
import Frontend from "./Frontend";
import Backend from "./Backend";
import "./Skills.css";

const Skills = () => {
  return (
    <section className="skills_section section" id="skills">
      <h2 className="section_title">Skills</h2>
      <span className="section_subtitle">Opted Technologies</span>
      <div className="skills_container container grid">
        <Frontend />
        <Backend />
      </div>
    </section>
  );
};

export default Skills;
