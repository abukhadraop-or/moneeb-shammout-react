import React from 'react';
import NavBar from 'components/NavBar/nav-bar';
import Body from 'components/Body/body';
import Footer from 'components/Footer/footer';
import GlobalStyle from './styles/global.style';

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
