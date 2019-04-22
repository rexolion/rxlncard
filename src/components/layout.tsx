import React, { RefObject } from 'react';

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

export interface LayoutRef {
  projRef: RefObject<HTMLElement>;
}

class Layout extends React.Component<LayoutProps, LayoutRef> {
  public projRef: RefObject<HTMLDivElement> = React.createRef<HTMLDivElement>();

  constructor(props: LayoutProps) {
    super(props);

  }

  public scrollToProjects = () => {
    if (this.projRef.current !== null) {
      this.projRef.current.scrollIntoView();
    }
  }

  public render(): JSX.Element {
    return (
      <>
          <SEO keywords={['gatsby', 'application', 'react']} />
          <Hero/>
          <Frontend scrollToProjects={this.scrollToProjects} />
          <FrontendPara/>
          <Design scrollToProjects={this.scrollToProjects} />
          <Divider size="md"/>
          <DesignDetails/>
          <Divider size="md"/>
          <Projects projRef={this.projRef}/>
          <Footer />
      </>
    );
  }
}

export default Layout;
