import FrontImage from './dr.physio/assets/FrontImage';
import Contact from './dr.physio/Contact';
import Footer from './dr.physio/Footer';
import Home from './dr.physio/Home';
import Iastm from './dr.physio/Iastm';
import NavBar from './dr.physio/NavBar';
import NavigationBar from './dr.physio/NavigationBar';
import Services from './dr.physio/Services';
import Testimonials from './dr.physio/Testimonials';
function App() {
  return (
    <div>
      {/* <NavigationBar/> */}
      <NavBar/>
      {/* <FrontImage/> */}
      <Home/>
      <Services/>
      {/* <Testimonials/> */}
      <Contact/>
      <Footer/>
      {/* <Iastm/> */}
    </div>
  );
}

export default App;
