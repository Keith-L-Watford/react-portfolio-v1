import React from 'react'
import '../styles/nav.css'

export default function Nav() {
    return(
        <ul>
            <li>About Me</li>
            <li>Projects</li>
            {/* Maybe resume will have its own section, maybe in projects. idk */}
            {/* <li>Resume</li> */}
            <li>Contact Me</li>
        </ul>
    );
}