import React from 'react';

import Design from './Design/design';
import DesignDetails from './DesignDetails/designDetails';
import Divider from './Divider/divider';
import Footer from './Footer/footer';
import Frontend from './Frontend/frontend';
import FrontendPara from './FrontendPara/FrontendPara';
import Hero from './Hero/hero';
import './normalize.css';
import Projects from './Projects/projects';
import SEO from './SEO/seo';

export interface LayoutProps {
}

export interface LayoutState {

}

class Layout extends React.Component<LayoutProps, LayoutState> {
  public render(): JSX.Element {
    return (
      <>
          <SEO keywords={['gatsby', 'application', 'react']} />
          <Hero/>
          <Frontend/>
          <FrontendPara/>
          <Design/>
          <Divider size="md"/>
          <DesignDetails/>
          <Divider size="lg"/>
          <Projects/>
          <Footer/>
      </>
    );
  }
}

export default Layout;
