import React from 'react';
import NavBar from 'components/NavBar/NavBar';
import Body from 'components/Body/Body';
import Footer from 'components/Footer/Footer';
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
