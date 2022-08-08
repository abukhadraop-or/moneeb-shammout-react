import React from 'react';
import NavBar from 'components/NavBar/nav-bar';
import Body from 'components/Body/body';
import Footer from 'components/Footer/footer';
import GlobalStyle from './App.style';

/**
 *  Creates root component.
 *
 * @return {Element}  react APP
 */ function App() {
  return (
    <>
      <GlobalStyle />
      <NavBar />
      <Body />
      <Footer />
    </>
  );
}
export default App;
