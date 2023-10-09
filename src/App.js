import './App.css';
import About from './components/about/about';
import Intro from './components/introduction/introduction';
import Navbar from './components/navbar/navbar';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <About/>
    </div>
  );
}

export default App;
