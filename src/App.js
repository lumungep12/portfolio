import Header from './Components/Header/Header';
import Landing from './Components/Landing/Landing';
import About from './Components/About/About';
import Work from './Components/Work/Work';
import Pricing from './Components/Pricing/Pricing';
import Form from './Components/Contact/Form';
import Footer from './Components/Footer/Footer';

import './index.css'

function App() {
  return (
    <div className="App">
      <Header />
      <Landing/>
      <About />
      <Work/>
      <Pricing />
      <Form />
      <Footer />
    </div>
  );
}

export default App;
