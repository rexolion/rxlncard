import React from 'react';

import './hero.css';
import HeroCard from './HeroCard/heroCard';
import HeroImage from './HeroImage/heroImage';

const Hero = () => (
    <section id="Hero" className="Hero-wrap">
        <HeroImage/>
        <HeroCard/>
    </section>
);

export default Hero;
