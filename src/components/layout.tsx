import React from 'react';

import Header from './Header/header';
import './layout.css';

export interface LayoutProps {
  children: JSX.Element[];
}

export interface LayoutState {

}

class Layout extends React.Component<LayoutProps, LayoutState> {
  public render(): JSX.Element {
    return (
      <>
        <Header/>
        <div
          style={{
            margin: '0 auto',
            maxWidth: 960,
            padding: '0px 1.0875rem 1.45rem',
            paddingTop: 0,
          }}
        >
          <main>{this.props.children}</main>
          <footer>
            © {new Date().getFullYear()}, Built with
            {' '}
            <a href="https://www.gatsbyjs.org">Gatsby</a>
          </footer>
        </div>
      </>
    );
  }
}

export default Layout;
