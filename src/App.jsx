import { React } from 'reuse/Packages';
import NavBar from 'Components/NavBar/NavBar';
import Body from 'Components/Body/Body';
import Footer from 'Components/Footer/Footer';
import GlobalStyle from './App.style';

/**
 * @description creates root compnenet
 *
 * @returns react APP
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
