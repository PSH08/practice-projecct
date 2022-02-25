import './App.css';
import React from 'react';
import Header from "./component/Header"
import Content from "./component/Content"
import ContentTop from "./component/ContentTop"
import Footer from "./component/Footer"
import FTop from "./component/FooterTop"
import FBanner from './component/FooterBanner';

function App() {
  return (
    <>
      <Header />
      <ContentTop />
      <Content />
      <FTop />
      <FBanner />
      <Footer />
    </>
  );
}

export default App;
