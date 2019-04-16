import * as React from 'react';

import './footerContacts.css';

const FooterContacts = () => (
    <ul className="Footer-contacts">
              <a href="https://twitter.com/rexolion" className="Footer-contacts-anchor">
                <li className="Footer-contacts-item">
                    <img alt="Twitter" src="assets/twitter.svg"/>
                </li>
              </a>
              <a href="https://linkedin.com/rexolion">
                <li className="Footer-contacts-item">
                    <img alt="LinkedIn" src="assets/linkedin.svg"/>
                </li>
              </a>
              <a href="https://dribbble.com/rexolion">
                <li className="Footer-contacts-item">
                    <img alt="Dribbble" src="assets/dribbble.svg"/>
                </li>
              </a>
              <a href="https://facebook.com/rexolion">
                <li className="Footer-contacts-item">
                    <img alt="Facebook" src="assets/facebook.svg"/>
                </li>
              </a>
    </ul>
);

export default FooterContacts;
