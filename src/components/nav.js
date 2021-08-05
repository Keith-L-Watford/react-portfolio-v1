import React from "react";
import "../styles/nav.css";

export default function Nav() {
  return (
    // <ul>
    //     <li>About Me</li>
    //     <li>Projects</li>
    //     {/* Maybe resume will have its own section, maybe in projects. idk */}
    //     {/* <li>Resume</li> */}
    //     <li>Contact Me</li>
    // </ul>
    <aside className="mdc-drawer">
      <div className="mdc-drawer__header">
        {/* <h3 className="mdc-drawer__title">Mail</h3>
        <h6 className="mdc-drawer__subtitle">email@material.io</h6> */}
      </div>
      <div className="mdc-drawer__content">
        <nav className="mdc-list">
          <a
            className="mdc-list-item mdc-list-item--activated"
            href="#"
            aria-current="page"
          >
            <span className="mdc-list-item__ripple"></span>
            <i className="material-icons mdc-list-item__graphic" aria-hidden="true">
                {/* change me */}
              inbox
            </i>
            <span className="mdc-list-item__text">About Me</span>
          </a>
          <a className="mdc-list-item" href="#">
            <span className="mdc-list-item__ripple"></span>
            <i className="material-icons mdc-list-item__graphic" aria-hidden="true">
                  {/* change me */}
              send
            </i>
            <span className="mdc-list-item__text">Projects</span>
          </a>
          <a className="mdc-list-item" href="#">
            <span className="mdc-list-item__ripple"></span>
            <i className="material-icons mdc-list-item__graphic" aria-hidden="true">
                  {/* change me */}
              drafts
            </i>
            <span className="mdc-list-item__text">Contact</span>
          </a>
        </nav>
      </div>
    </aside>
  );
}
