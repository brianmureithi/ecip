import './App.css';
import Navbar from './components/Navbar';
import BannerStart from './components/BannerStart';
import Banner from './components/Banner';
import About from './components/About';
import MoreInfo from './components/MoreInfo';
import Engagement from './components/Engagement';
import Footer from './components/Footer';

function App() {
  return (
    <div className="relative block min-h-screen pb-10 bg-white">
      <Navbar/>
      <BannerStart/>
      <Banner/>
      <About/>
      <MoreInfo/>
      <Engagement/>
      <Footer/>
      

   
      

    </div>
  );
}

export default App;
