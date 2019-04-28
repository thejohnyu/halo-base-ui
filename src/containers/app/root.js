// TODO:

// 1. Add holy-grail layout.
// 2. Add holy-grail wrappers in pages.
// 3. Add holy-grail components in here.

import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';

// Components
import NavBar from '../navbar';

const AppWrapper = styled.div`
  margin: 0 auto;
  display: flex;
  min-height: 100%;
  padding: 0 0px;
  flex-direction: column;
`

const Root = () => (
  <AppWrapper>
    <Helmet titleTemplate="%s - Fasting" defaultTitle="Fasting-Webapp">
      <meta name="description" content="Fasting" />
    </Helmet>
    <NavBar />
  </AppWrapper>
)

export default Root;