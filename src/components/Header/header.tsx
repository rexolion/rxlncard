import { graphql, Link, StaticQuery } from 'gatsby';
import React from 'react';

interface HeaderProps {
  siteTitle: string;
}

const HeaderComponent: React.FunctionComponent<HeaderProps> = ({ siteTitle }) => (
  <header
    style={{
      background: 'rebeccapurple',
      marginBottom: '1.45rem',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
  </header>
);

const Header = () => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <HeaderComponent siteTitle={data.site.siteMetadata.title} />
        </>
    )}
  />
);

HeaderComponent.defaultProps = {
  siteTitle: '',
};

export default Header;
