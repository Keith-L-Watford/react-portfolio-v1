import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer() {
    return(
            <div class="tile is-parent is-12">
    <article class="tile is-child box">
        
        <nav class="breadcrumb is-centered" aria-label="breadcrumbs">
            <ul>
                <li class="li"><i class="fas fa-phone"></i><a href="tel:856-556-5208">(856) 556-5208</a>
                </li>
                <li class="li"><a href="mailto:keith.l.watford@gmail.com"><i
                            class="fas fa-envelope"></i>Email</a></li>
                <li class="li"><a href="https://github.com/Keith-L-Watford" target="_blank"> <i
                            class="fab fa-github"> </i>GitHub</a></li>
                <li class="li"><a href="https://www.linkedin.com/in/keith-watford-5654b8208/"
                        target="_blank"><i class="fab fa-linkedin"></i>LinkedIn</a></li>


            </ul>
        </nav>

    </article>
</div>
    );
}