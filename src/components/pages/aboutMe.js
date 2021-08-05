import React from "react";
import '../../styles/pages.css';

export default function AboutMe() {
  return (
    <div >
      <h4 className="content title" >Hello!</h4>

      <br />
      <div className="columns">
        <div className="column" id="sentenceOne">
          I am driven Theatre Artist / Preschool Teacher's Assistant turned
          Full-Stack Web Developer.
        </div>
        <br />
        <div className="column" id="sentenceTwo">
          I am well versed in team collaboration to formulate and conceptualize
          a goal or product.
        </div>
        <br />
        <div className="column" id="sentenceThree">
          I am highly organized and focused on creating clean and logical code.
        </div>
        <br />
        <div className="column" id="sentenceFour">I am a team-player experienced in HTML, CSS, and JavaScript.</div>
      </div>
    </div>
  );
}
