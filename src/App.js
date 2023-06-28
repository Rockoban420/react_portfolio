import './App.css';
import {
  Navbar,
  AboutMe,
  Work,
  Banner,
  Contact,
} from './components';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <AboutMe />
      <Work />
      <Contact />
    </div>
  );
}

export default App;
