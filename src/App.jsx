import React from 'react'
import Header from './components/Header.jsx'
import TopPart from './components/TopPart.jsx'
import Picture from './components/Picture.jsx'
import BelowNavIMG from './images/bNavPic.JPG'
import BeforeFooterIMG from './images/bf.PNG'
import MoreMotorCycles from './components/MoreMotorCycles.jsx'
import FreshRecommendations from './components/FreshRecommendations.jsx'
import LoadMoreBtn from './components/LoadMoreBtn.jsx'
import BeforeFooterLists from './components/BeforeFooterLists.jsx'
import Footer from './components/Footer.jsx'
import './App.css';

const App = () => {
  return (
    <>
      <Header />
      <TopPart />
      <Picture img={BelowNavIMG} className="img" />
      <MoreMotorCycles topText="More on Motorcycles" />
      <FreshRecommendations topText="Fresh Recommendations"/>
      <LoadMoreBtn />
      <Picture img={BeforeFooterIMG} className="img" />
      <BeforeFooterLists />
      <Footer />
    </>
  );
}

export default App;
