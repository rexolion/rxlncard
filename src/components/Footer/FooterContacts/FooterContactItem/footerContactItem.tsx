import * as React from 'react';

import './footerContactItem.css';

export interface FooterContactItemProps {
  link: string;
  children: object;

}

const FooterContactItem:React.SFC<FooterContactItemProps> = ({ link, children }) => (
    <a href={link}>
                <li className="Footer-contacts-item">
                    {children}
                </li>
    </a>
);

export default FooterContactItem;
