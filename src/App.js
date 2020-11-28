import About from './Components/About/About';
import Blog from './Components/Blog/Blog';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import Landing from './Components/Landing/Landing';
import Navbar from './Components/Navbar/Navbar';
import Clients from './Components/Work/Clients';
import Work from './Components/Work/Work';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Landing/>
      <Work/>
      <Clients/>
      <About/>
      <Blog/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
