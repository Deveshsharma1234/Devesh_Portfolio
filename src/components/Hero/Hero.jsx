import React from "react";
import "./Hero.css";
import profile_img from "../../assets/dev.jpg";
const Hero = () => {
  return (
    <>
      <div className="hero">
        <img src={profile_img} alt="profile" />
        <h1>
          <span>I'am Devesh Sharma, Full-Stack Developer based in India</span>
        </h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id illo
          tempora quos voluptatum velit porro similique, ullam temporibus
          facilis eos debitis, hic animi sint! Voluptatem?
        </p>
        <div className="hero-action">
          <div className="hero-connect">Connect With Me</div>
          <div className="hero-resume">My Resume</div>
        </div>
      </div>
    </>
  );
};

export default Hero;
