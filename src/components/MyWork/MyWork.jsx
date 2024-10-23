import React from "react";
import "./MyWork.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import mywork_data from "../../assets/mywork_data";
const MyWork = () => {
  return (
    <div>
      <div className="myWork">
        <div className="myWork-title">
          <h1>My-Work</h1>
          <img src={theme_pattern} alt="theme" />
        </div>
        <div className="myWork-container">
          {mywork_data.map((work, index) => {
            return (
              <div key={index} className="work-format">
                <h3>{work.w_no}</h3>
                <h2>{work.w_name}</h2>
                {console.log(work.w_img)}
                <div className="work-image">
                  <img src={work.w_img} alt={work.w_name} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MyWork;
