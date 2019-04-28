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
import Home from '../public/home';
import Footer from '../public/footer';
import LeftSideBar from '../leftsidebar';
import RightSideBar from '../rightsidebar';

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
    <LeftSideBar />
    <Switch >

      <Route exact path="/" component={Home} />

    </Switch>
    <RightSideBar />
    <Footer />
  </AppWrapper>
)

export default Root;