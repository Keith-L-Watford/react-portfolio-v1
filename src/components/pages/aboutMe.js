import React from "react";
import Headshot from './../../images/headshot.jpg';
import '../../styles/pages.css';

export default function AboutMe() {
  return (
    <div >
      

      <h4 className="content title" >Hello!</h4>

      <figure className="image is-182x182">
  <img className="is-rounded" src={Headshot} />
</figure>

      <br />
      <div className="columns">
        <div className="column subtitle" id="sentenceOne">
          I am driven Theatre Artist / Preschool Teacher's Assistant turned
          Full-Stack Web Developer.
        </div>
        <br />
        <div className="column subtitle" id="sentenceTwo">
          I am well versed in team collaboration to formulate and conceptualize
          a goal or product.
        </div>
        <br />
        <div className="column subtitle" id="sentenceThree">
          I am highly organized and focused on creating clean and logical code.
        </div>
        <br />
        <div className="column subtitle" id="sentenceFour">I am a team-player experienced in HTML, CSS, and JavaScript.</div>
      </div>
    </div>
  );
}
