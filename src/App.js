import "./index.css";
import Header from "./Components/Header/Header";
import Hero from "./Components/Hero/Hero";
import Companies from "./Components/Companies/Companies";
import Residencies from "./Components/Residencies/Residencies";
import Value from "./Components/Value/Value";
import "./App.css";
import Contact from "./Components/Contact/Contact";
import GetStarted from "./Components/Getstarted/GetStarted";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <div className="white-gradient" />
      <Header />
      <Hero />
      <Companies />
      <Residencies />
      <Value />
      <Contact/>
      <GetStarted />
      <Footer />
    </div>
  );
}

export default App;
