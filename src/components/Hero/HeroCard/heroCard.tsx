import * as React from 'react';

import './heroCard.css';
import HeroCardDetails from './HeroCardDetails/heroCardDetails';
import HeroCardGreet from './HeroCardGreet/heroCardGreet';
import HeroCardName from './HeroCardName/heroCardName';

const HeroCard = () => (
        <section className="Card center">
                <HeroCardGreet />
                <HeroCardName />
                <HeroCardDetails />
        </section>
);

export default HeroCard;
