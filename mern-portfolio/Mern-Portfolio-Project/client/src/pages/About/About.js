import React from "react";
import "./About.css";
import Jump from "react-reveal/Jump";
import Vivek from "../../assets/docs/vivek.jpeg";

const About = () => {
  return (
    <>
      <Jump>
        <div className="about" id="about">
          <div className="row">
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-img">
              <img
                src={Vivek}
                alt="profile_pic"
              />
            </div>
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-content">
              <h1>About me</h1>
              <p>
              👋 Hello, I'm Vivek! 🌐 My journey in web development started in December 2022, 
              and since then, I've been on a mission to stay at the forefront of this ever-evolving 
              field. I have hands-on experience with a wide range of web technologies, including 
              HTML5, CSS3, JavaScript, and more. I'm also proficient in using popular front-end
               frameworks like React and Bootstrap. Additionally, I have backend skills, including 
               MongoDB, Express, Node.js, and React.js.✍🏻
              </p>
            </div>
          </div>
        </div>
      </Jump>
    </>
  );
};

export default About;
