import React from "react";

const InfoBoxes = () => {
  return (
    <div className="about_info grid">

      <div className="about_box">
      <i className="fa-solid fa-award about_icon"></i>
        <h3 className="about_box_title">Experience</h3>
        <span className="about_box_subtitle">6+ months</span>
      </div>

      <div className="about_box">
      <i className="fa-solid fa-briefcase about_icon"></i>
        <h3 className="about_box_title">Completed</h3>
        <span className="about_box_subtitle">10+ projects</span>
      </div>

      <div className="about_box">
      <i className="fa-solid fa-headset about_icon"></i>
        <h3 className="about_box_title">Support</h3>
        <span className="about_box_subtitle">Mon to Sat</span>
      </div>

    </div>
  );
};

export default InfoBoxes;
