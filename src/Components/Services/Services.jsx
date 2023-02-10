import { useState } from "react";
import "./Services.css";

const Services = () => {
   const[toggleModal, setModal]= useState(0);

  return (
    <section className="services section" id="services">
      <h2 className="section_title">Services</h2>
      <span className="section_subtitle">My offerings !</span>

      <div className="services_container container grid">
        <div className="services_content">
          <div>
            <i className="uil uil-arrow services_icon"></i>
            <h3 className="services_title">
              Product <br />
              Developer
            </h3>
          </div>

          <span className="services_button" onClick={()=>{setModal(1)}}>
            View More{" "}
            <i className="uil uil-arrow-right services_button_icon"></i>
          </span>

          <div className={toggleModal === 1 ?`services_modal active_modal`:`services_modal`}>
            <div className="services_modal_content">
              <i className="uil uil-times services_modal_close" onClick={()=>{setModal(0)}}></i>

              <h3 className="services_modal_title">Product Developer</h3>
              <p className="services_modal_desc">Providing quality work to clients or organisation. </p>

              <ul className="services_modal_services grid">
                <li className="services_modal_service">
                  <i className="uil uil-check-circle services_modal_icon"></i>
                  <p className="services_modal_info">
                    I develop web pages.
                  </p>
                </li>

                <li className="services_modal_service">
                  <i className="uil uil-check-circle services_modal_icon"></i>
                  <p className="services_modal_info">
                    Api integration at frontend.
                  </p>
                </li>

                <li className="services_modal_service">
                  <i className="uil uil-check-circle services_modal_icon"></i>
                  <p className="services_modal_info">
                    Clean, scalable and reusable code.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="services_content">
          <div>
            <i className="uil uil-edit services_icon"></i>
            <h3 className="services_title">
              Api <br />
              Developer
            </h3>
          </div>

          <span className="services_button" onClick={()=>{setModal(2)}}>
            View More
            <i className="uil uil-arrow-right services_button_icon"></i>
          </span>

          <div className={toggleModal === 2 ?"services_modal active_modal":"services_modal"}>
            <div className="services_modal_content">
              <i className="uil uil-times services_modal_close" onClick={()=>{setModal(0)}}></i>

              <h3 className="services_modal_title">Api Developer</h3>
              <p className="services_modal_desc">Providing quality work to clients or organisation.</p>

              <ul className="services_modal_services grid">
                <li className="services_modal_service">
                  <i className="uil uil-check-circle services_modal_icon"></i>
                  <p className="services_modal_info">
                    I develop backend endpoints.
                  </p>
                </li>

                <li className="services_modal_service">
                  <i className="uil uil-check-circle services_modal_icon"></i>
                  <p className="services_modal_info">Password hashing.</p>
                </li>

                <li className="services_modal_service">
                  <i className="uil uil-check-circle services_modal_icon"></i>
                  <p className="services_modal_info">
                    Authorization/Authentication using JWT.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
