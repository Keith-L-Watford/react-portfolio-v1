import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../../styles/contact.css';

export default function Contact() {
    return(
        <div>
            <h3>Contact Me</h3>
            <li class="li"><i class="fas fa-phone"></i><a href="tel:856-556-5208">(856) 556-5208</a>
                            </li>
                            <li class="li"><a href="mailto:keith.l.watford@gmail.com">
                                {/* <i class="fas fa-envelope"></i> */}
                                <FontAwesomeIcon icon={["fas", "fa-envelope"]} />
                                Email</a></li>
                            <li class="li"><a href="https://github.com/Keith-L-Watford" target="_blank" rel="noreferrer"> <i
                                        class="fab fa-github"> </i>GitHub</a></li>
                            <li class="li"><a href="https://www.linkedin.com/in/keith-watford-5654b8208/"
                                    target="_blank" rel="noreferrer"><i class="fab fa-linkedin"></i>LinkedIn</a></li>

<div>
    <FontAwesomeIcon icon={['fab', 'apple']} />
    <FontAwesomeIcon icon={['fab', 'microsoft']} />
    <FontAwesomeIcon icon={['fab', 'google']} />

    <FontAwesomeIcon icon="check-square" />
    With Coffee Checked, these companies always know their coffee is hot and ready!
  </div>

        </div>

        
    );
}