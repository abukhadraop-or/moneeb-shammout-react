import React from 'react';
import NavBar from 'Components/NavBar/NavBar';
import Body from 'Components/Body/Body';
import Footer from 'Components/Footer/Footer';
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
