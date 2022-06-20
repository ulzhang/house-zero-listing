import './App.css';
import Carousel from './components/Carousel';
import Video from './components/Video';
import Header from './components/Header';
import Footer from './components/Footer';
import Title from './components/Title';
import Map from './components/Map';
import Content from './components/Content';
import Table from './components/Table';

function App() {
  return (
    <>
    <div className="bg-white">
      <Header />
      <div className="container mx-auto " >
        <Title />
        <Carousel />
        <Content />
        <div className="flex py-2.5">
          <Map/>
          <Table />
        </div>
        <Video />
      </div>
    </div>
    <Footer />
    </>

  );
}

export default App;
