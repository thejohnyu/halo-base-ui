// TODO:

// 1. Add holy-grail layout.
// 2. Add holy-grail wrappers in pages.
// 3. Add holy-grail components in here.

import React from 'react';
import { Helmet } from 'react-helmet';
import { Switch, Route } from 'react-router-dom';

// Components
import NavBar from '../navbar';
import Home from '../public/home';
import Footer from '../public/footer';
import LeftSideBar from '../leftsidebar';
import RightSideBar from '../rightsidebar';

// Holy Grail Components --> HGL.${wrapperName}

import { HolyGrailLayout as HGL } from '../../layout';

const Root = () => (
  <HGL.AppWrapper>
    <Helmet defaultTitle="Halo - Official Site">
      <meta name="description" content="Halo" />
    </Helmet>
    <HGL.NavBarWrapper>
      <NavBar />
    </HGL.NavBarWrapper>
    <HGL.LeftSideBarWrapper>
      <LeftSideBar />
    </HGL.LeftSideBarWrapper>
    <HGL.MainWrapper>
      <Switch >
        <Route exact path="/" component={Home} />
      </Switch>
    </HGL.MainWrapper>
    <HGL.RightSideBarWrapper>
      <RightSideBar />
    </HGL.RightSideBarWrapper>
    <HGL.FooterWrapper>
      <Footer />
    </HGL.FooterWrapper>
  </HGL.AppWrapper>
)

export default Root;