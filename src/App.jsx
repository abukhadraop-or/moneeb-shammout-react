import React from 'react';
import NavBar from 'components/NavBar';
import Body from 'components/Body';
import Footer from 'components/Footer';
import GlobalStyle from './styles/global';

/**
 * Root component.
 *
 * @return {Element}
 */
function App() {
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
