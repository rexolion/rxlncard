import * as React from 'react';

import './footerContactItem.css';

export interface FooterContactItemProps {
  link: string;
  children: object;

}

const FooterContactItem:React.SFC<FooterContactItemProps> = ({ link, children }) => (
    <a href={link}>
                <div className="Footer-contacts-item">
                    {children}
                </div>
    </a>
);

export default FooterContactItem;
