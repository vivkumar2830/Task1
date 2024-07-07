import React from "react";
import "./Projects.css";
import Spin from "react-reveal/Spin";
import doctor from "../../assets/docs/doctor.jpeg";
import chat from "../../assets/docs/chat.jpeg";
import githbu from "../../assets/docs/githbu.jpeg";

const Projects = () => {
  return (
    <>
      <div className="continer project" id="projects">
        <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
          TOP RECENT PROJECTS
        </h2>
        <hr />
        <p className="pb-3 text-center">
        I have worked on various projects that leverage cutting-edge web technologies. 
        These include using React for dynamic and responsive front-end development, and MongoDB, 
        Express, and Node.js for robust and scalable back-end solutions. By integrating these 
        technologies, I have successfully built full-stack applications that are both efficient 
        and user-friendly.
        </p>
        {/* card design */}
        <div className="row" id="ads">
          <Spin>
            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">Full stack</span>
                  <img
                    src={doctor}
                    alt="project1"
                  />
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">Node</span>
                  <span className="card-detail-badge">Express</span>
                  <span className="card-detail-badge">React</span>
                  <span className="card-detail-badge">Mongodb</span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h6 className="text-uppercase">
                      Doctor Appointment Booking
                    </h6>
                  </div>
                  <a
                    className="ad-btn"
                    href="https://doctor-appointment-c0oi.onrender.com/"
                  >
                    View
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">Backend App</span>
                  <img
                    src={chat}
                    alt="project2"
                  />
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">React Native</span>
                  <span className="card-detail-badge">Node</span>
                  <span className="card-detail-badge">Socket</span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h5 className="text-uppercase">Chat App</h5>
                  </div>
                  <a
                    className="ad-btn"
                    href="https://chat-app-vk-voz8.onrender.com/"
                  >
                    View
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">Fronted</span>
                  <img
                    src={githbu}
                    alt="project1"
                  />
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">HTML</span>
                  <span className="card-detail-badge">CSS</span>

                  <span className="card-detail-badge">JavaScript</span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h5 className="text-uppercase">Dev Detective</h5>
                  </div>
                  <a className="ad-btn" href="https://vivkumar2830.github.io/Dev-Detective/">
                    View
                  </a>
                </div>
              </div>
            </div>
          </Spin>
        </div>
      </div>
    </>
  );
};

export default Projects;
