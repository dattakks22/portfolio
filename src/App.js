import NavBar from "./components/NavBAr/navbar";
import Home from './components/Home/home';
import Skills from './components/Skill/skill';
import Work from './components/Works/work';
import Contect from "./components/Contect/contect";
import Footer from "./components/Footer/footer"

function App() {
  return (
    <div className="App">
      <><NavBar/>
      <Home/>
      <Skills/>
      <Work/>
      <Contect/>
      <Footer/></>
      
    </div>
  );
}

export default App;
