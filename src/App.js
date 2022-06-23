import './App.css';
import Carousel from './components/Carousel';
import Video from './components/Video';
import Header from './components/Header';
import Footer from './components/Footer';
import Title from './components/Title';
import Map from './components/Map';
import Table from './components/Table';
import AboutHouseZero from './components/AboutHouseZero';
import AboutIcon from './components/AboutIcon';
import Realtor from './components/Realtor';

function App() {
  return (
    <div className="bg-white">
      <div className="bg-white md:mx-auto md:container">
        <Header />
        <div className="container mx-auto px-6" >
          <Title />
          <Carousel />
          <AboutHouseZero />
          <div className="grid grid-cols-1 md:grid-cols-2 py-2.5">
            <Map/>
            <Table />
          </div>
          {/* <Realtor /> */}
          <Video />
          <AboutIcon />
        </div>
      </div>
          <Footer />
    </div>

  );
}

export default App;
