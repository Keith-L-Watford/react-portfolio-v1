import React from "react";
import ScreenShotOne from "./../../images/emp-trak.png";
import ScreenShotTwo from "./../../images/communitycanvas-screenshot.png";
import ScreenShotThree from "./../../images/todo-screenshot.png";
import ScreenShotFour from "./../../images/ResumeJuly2021.png";
import ScreenShotFive from "./../../images/Lighthouse-score.png";
import ScreenShotSix from "./../../images/fitty-track.png";

export default function Projects() {
  return (
    <div className="container is-fluid">
      <h4 className="content title">Projects</h4>

      <div className="tile is-ancestor" id="projects">
        <div className="tile is-parent">
          <article className="tile is-child box">
            <p className="titleProject">Employee Tracker</p>
            <p className="subtitle">JavaScript / Node.js / Inquire.js</p>
            <div className="content">
              <figure className="image is-5by3">
                <a
                  href="https://drive.google.com/file/d/192w8YIeB9--R8xIoa7k23jNV-_bAszaU/view"
                  target="_black"
                >
                  <img
                    src={ScreenShotOne}
                    alt="A screenshot the application"
                    className="image"
                  />
                </a>
              </figure>
              <p>
                A Node.js application that allows a user to create and delete
                employees, roles, and departments.
                <br />
                Click{" "}
                <a
                  href="https://github.com/Keith-L-Watford/employee-tracker"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  here
                </a>{" "}
                to see the repo. Click the photo see a video demo of the
                application.
              </p>
            </div>
          </article>
        </div>
        <div className="tile is-parent is-7">
          <article className="tile is-child box">
            <p className="titleProject">Weather Dashboard</p>
            <p className="subtitle">
              JavaScript / Express.js / Node.js / Handlebars.js / MySQL /
              Cloudinary / bcrypt / Bulma (css framework){" "}
            </p>
            <div className="content">
              <figure className="image is-5by3">
                <a
                  href="https://communitycanvas.herokuapp.com/"
                  target="_blank"
                >
                  <img
                    src={ScreenShotTwo}
                    alt="A screenshot of the daily weather application"
                    className="image"
                  />
                </a>
              </figure>
              <p>
                An application where users can upload photos of the art in their
                neighborhoods and also see street art from aroud the world.
                <br />
                Click{" "}
                <a
                  href="https://github.com/Keith-L-Watford/community-canvas"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  here
                </a>{" "}
                to see the repo. Click the photo see the application.{" "}
              </p>
            </div>
          </article>
        </div>
      </div>

      <div className="tile is-ancestor">
        <div className="tile is-parent is-7">
          <article className="tile is-child box">
            <p className="titleProject">Work Day Scheduler</p>
            <p className="subtitle">
              HTML / Bootstrap / JavaScript / moment.js
            </p>
            <div className="content">
              <figure className="image is-5by3">
                <a
                  href="https://keith-l-watford.github.io/weather-checker/"
                  target="_blank"
                >
                  <img
                    src={ScreenShotThree}
                    alt="A screenshot of the daily weather application"
                    className="image"
                  />
                </a>
              </figure>
              <p>
                {" "}
                A day planner utilizing moment.js and a lot of fun if/else
                statements.
                {/* <!-- *Current Project* --> */}
                <br />
                Click{" "}
                <a
                  href="https://github.com/Keith-L-Watford/day-planner"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  here
                </a>{" "}
                to see the repo. Click the photo see the application.{" "}
              </p>
            </div>
          </article>
        </div>
        <div className="tile is-parent">
          <article className="tile is-child box">
            <p className="titleProject">Resumé</p>
            <p className="subtitle">My current resumé</p>
            <div className="content">
              <figure className="image is-5by3">
                <a
                  href="https://drive.google.com/file/d/11G4YYp6QTQuL2ji_ZIDlnJe26fxs7H8X/view?usp=sharing"
                  target="_blank"
                >
                  <img
                    src={ScreenShotFour}
                    alt="A screenshot of my resume"
                    className="image"
                  />
                </a>
              </figure>
              <p>
                Click{" "}
                <a
                  href="https://drive.google.com/file/d/11G4YYp6QTQuL2ji_ZIDlnJe26fxs7H8X/view?usp=sharing"
                  target="_blank"
                >
                  here
                </a>{" "}
                or the image for a bigger version.
              </p>
            </div>
          </article>
        </div>
      </div>

      <div className="tile is-parent">
          <article className="tile is-child box">
            <p className="titleProject">Employee Tracker</p>
            <p className="subtitle">JavaScript / MongoDB / Progressive Web App</p>
            <div className="content">
              <figure className="image is-5by3">
                <a
                  href="https://budgety-app-wpa.herokuapp.com/"
                  target="_black"
                >
                  <img
                    src={ScreenShotFive}
                    alt="A screenshot of the progressive web application"
                    className="image"
                  />
                </a>
              </figure>
              <p>
                A progressive web application with offline functionality. 
                <br />
                Click{" "}
                <a
                  href="https://github.com/Keith-L-Watford/budget-tracker-pwa"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  here
                </a>{" "}
                to see the repo. Click the photo to see the
                application.
              </p>
            </div>
          </article>
        </div>
        <div className="tile is-parent is-7">
          <article className="tile is-child box">
            <p className="titleProject">Fitness Tracker</p>
            <p className="subtitle">
              JavaScript / Express.js / MongoDB 
            </p>
            <div className="content">
              <figure className="image is-5by3">
                <a
                  href="https://fitty-trak.herokuapp.com/"
                  target="_blank"
                >
                  <img
                    src={ScreenShotSix}
                    alt="A screenshot of the Fitness tracker application"
                    className="image"
                  />
                </a>
              </figure>
              <p>
                An application where users can upload photos of the art in their
                neighborhoods and also see street art from aroud the world.
                <br />
                Click{" "}
                <a
                  href="https://github.com/Keith-L-Watford/fitness-tracker"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  here
                </a>{" "}
                to see the repo. Click the photo see the application.{" "}
              </p>
            </div>
          </article>
        </div>
      


      
    </div>
  );
}
