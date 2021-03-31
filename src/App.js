import React from 'react';
import styled from 'styled-components';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Landing from './pages/landing';
import GlobalInsight from './pages/globalInsight';
import ScrollToTop from './static/component/ScrollToTop';
import Header from './static/component/Header';
import Footer from './static/component/Footer';

const RouterContainer = styled.div`
// except header
  /* padding-top: 60px; */
`;

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTop />
        <Header />
        <RouterContainer>
          <Route path='/' render={() => <Landing />} />
          <Route path='/global' render={() => <GlobalInsight />} />
        </RouterContainer>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default React.memo(App);

