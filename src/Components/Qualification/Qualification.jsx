import React from "react";
import "./Qualification.css";

const Qualification = () => {
  return (
    <section className="qualification section">
      <h2 className="section_title">Qualification</h2>
      <span className="section_subtitle">My journey</span>

      <div className="qualification_container conatiner">

        <div className="qualification_tabs">
          <div className="qualification_button qualification_active btn-flex">
            <i className="fa-solid fa-user-graduate qualification_icon"></i>
           {" "} Education
          </div>
          {/* <div className="qualification_button  btn-flex">
            <i className="fa-solid fa-briefcase qualification_icon"></i>
           {" "} Experience
          </div> */}
        </div>

        <div className="qualification_items">
          <div className="qualification_content">

            <div className="qualification_data">
              <div>
                <h3 className="qualification_title">BCA</h3>
                <span className="qualification_subtitle">Amrpali - Institute</span>
                <div className="qualification_year">
                <i className="fa-regular fa-calendar"></i> 2016-2019
                </div>
              </div>
              {/* <div>
                <span className="qualification_rounder"></span>
                <span className="qualifiction_line"></span>
              </div> */}
            </div>

            <div className="qualification_data">
              <div className="empty_div"></div>
              {/* <div>
                <span className="qualification_rounder"></span>
                <span className="qualifiction_line"></span>
              </div> */}
              <div>
                <h3 className="qualification_title">Intermediate</h3>
                <span className="qualification_subtitle">KVM - Haldwani</span>
                <div className="qualification_year">
                <i className="fa-regular fa-calendar"></i> 2015
                </div>
              </div>
            </div>

            <div className="qualification_data">
          
              <div>
            
                <h3 className="qualification_title">Web Development</h3>
                {/* <span className="qualification_subtitle"></span> */}
                <div className="qualification_year">
                <i className="fa-regular fa-calendar"></i> 2022 - Present
                </div>
              </div>
              {/* <div>
                <span className="qualification_rounder"></span>
                <span className="qualifiction_line"></span>
              </div> */}
            </div>

            {/* <div className="qualification_data">
              <div></div>
              <div>
                <span className="qualification_rounder"></span>
                <span className="qualifiction_line"></span>
              </div>
              <div>
                <h3 className="qualification_title">Git</h3>
                <span className="qualification_subtitle"></span>
                <div className="qualification_year">
                <i className="fa-regular fa-calendar"></i> 2023
                </div>
              </div>
            </div> */}

          </div>


          {/* <div className="qualification_content">

            <div className="qualification_data">
              <div>
                <h3 className="qualification_title">N/A</h3>
                <span className="qualification_subtitle"></span>
                <div className="qualification_year">
                <i className="fa-regular fa-calendar"></i>
                </div>
              </div>
              <div>
                <span className="qualification_rounder"></span>
                <span className="qualifiction_line"></span>
              </div>
            </div>

            <div className="qualification_data">
              <div></div>
              <div>
                <span className="qualification_rounder"></span>
                <span className="qualifiction_line"></span>
              </div>
              <div>
                <h3 className="qualification_title">Intermediate</h3>
                <span className="qualification_subtitle">KVM - Haldwani</span>
                <div className="qualification_year">
                <i className="fa-regular fa-calendar"></i> 2015
                </div>
              </div>
            </div>

            <div className="qualification_data">
              <div>
                <h3 className="qualification_title">Web Development</h3>
                <span className="qualification_subtitle"></span>
                <div className="qualification_year">
                <i className="fa-regular fa-calendar"></i> 2022 - Present
                </div>
              </div>
              <div>
                <span className="qualification_rounder"></span>
                <span className="qualifiction_line"></span>
              </div>
            </div> 


          </div> */}


        </div>

      </div>
    </section>
  );
};

export default Qualification;
