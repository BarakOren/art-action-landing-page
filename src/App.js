import LandingPage from "./landingpage";
import ThankYouPage from "./thankyou";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ArtActionLogo from "./logo";
import { createGlobalStyle } from "styled-components";
import rtlPlugin from 'stylis-plugin-rtl';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: black;
    font-family: Open-Sans, Helvetica, Sans-Serif;


  }
`;
 

const App = () => {
  return (
    <>
    <GlobalStyle stylisPlugins={[rtlPlugin]} />
    <ArtActionLogo />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/thank-you" element={<ThankYouPage />} />
      </Routes>
    </>
  );
};

export default App;
