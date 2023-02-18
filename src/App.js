import './App.css';
import Navbar from './components/Navbar';
import BannerStart from './components/BannerStart';
import Banner from './components/Banner';

function App() {
  return (
    <div className="relative">
      <Navbar/>
      <BannerStart/>
      <Banner/>

    </div>
  );
}

export default App;
