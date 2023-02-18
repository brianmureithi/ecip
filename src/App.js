import './App.css';
import Navbar from './components/Navbar';
import BannerStart from './components/BannerStart';
import Banner from './components/Banner';
import About from './components/About';

function App() {
  return (
    <div className="relative">
      <Navbar/>
      <BannerStart/>
      <Banner/>
      <About/>
      

    </div>
  );
}

export default App;
