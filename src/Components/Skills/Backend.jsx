import React from "react";

const Backend = () => {
  return (
    <div className="skills_content">
      <h3 className="skills_title">Backend</h3>

      <div className="skills_box">
        <div className="skills_group">
          
          <div className="skills_data">
          <i className="fa-regular fa-circle-check"></i>
            <div>
              <h3 className="skills_name">NodeJS</h3>
              <span className="skills_level">Intermediate</span>
            </div>
          </div>
          <div className="skills_data">
          <i className="fa-regular fa-circle-check"></i>
            <div>
              <h3 className="skills_name">Express</h3>
              <span className="skills_level">Intermediate</span>
            </div>
          </div>
        </div>

        <div className="skills_group">

          <div className="skills_data">
          <i className="fa-regular fa-circle-check"></i>
            <div>
              <h3 className="skills_name">Firebase</h3>
              <span className="skills_level">Basic</span>
            </div>
          </div>
          <div className="skills_data">
          <i className="fa-regular fa-circle-check"></i>
            <div>
              <h3 className="skills_name">Sanity</h3>
              <span className="skills_level">Basic</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Backend;
