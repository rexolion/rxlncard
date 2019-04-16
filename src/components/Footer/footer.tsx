import * as React from 'react';

import './footer.css';
import FooterContacts from './FooterContacts/footerContacts';
import FooterCopyrights from './FooterCopyrights/footerCopyrights';
import FooterGoto from './FooterGoto/footerGoto';

const Footer = () => (
    <section className="Footer">
            <FooterGoto/>
            <FooterContacts/>
            <FooterCopyrights/>
    </section>
);

export default Footer;
