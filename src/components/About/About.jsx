import React from "react";
import "./About.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import profile_img from "../../assets/dev.jpg";

const About = () => {
  return (
    <div className="about">
      <div className="about-title">
        <h1>About me</h1>
        <img src={theme_pattern} alt="theme" />
      </div>
      <div className="about-section">
        <div className="about-left">
          <img src={profile_img} alt="about" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
              cumque rerum dicta odio inventore veniam corrupti dolores facere
              expedita omnis?
            </p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Molestias numquam aut laboriosam. Quibusdam hic distinctio
              doloribus fugit assumenda inventore magni eos possimus ipsam?
            </p>
          </div>
          <div className="about-skills">
            <div className="about-skill">
              <p>HTML & CSS</p>
              <hr style={{ width: "50%" }} />
            </div>
            <div className="about-skill">
              <p>React JS</p>
              <hr style={{ width: "80%" }} />
            </div>
            <div className="about-skill">
              <p>JavaScript</p>
              <hr style={{ width: "40%" }} />
            </div>
            <div className="about-skill">
              <p>SpringBoot(JAVA)</p>
              <hr style={{ width: "90%" }} />
            </div>
          </div>
        </div>
        <div className="about-achievements">
          <div className="about-achievement">
            <h1>249</h1>
            <p>Rank in CCAT</p>
            <hr />
          </div>
          <div className="about-achievement">
            <h1>90+</h1>
            <p>Questions on Leeetcode</p>
            <hr />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
