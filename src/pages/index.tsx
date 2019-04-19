import React from 'react';

import { Provider } from 'react-redux';
import Layout from '../components/layout';
import Store from '../components/Store/store';

const IndexPage = () => (
  <Provider store={Store}>
  <Layout/>
  </Provider>
);

export default IndexPage;
