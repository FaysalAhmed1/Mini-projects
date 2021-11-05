import Contact from "./Pages/Contact/Contact";
import Footer from "./Pages/Footer/Footer";
import Landing from "./Pages/Landing/Landing";
import Portfolio from "./Pages/Portfolio/Portfolio";
import Projects from "./Pages/Projects/Projects";
import Services from "./Pages/Services/Services";
import Topbar from "./Pages/Topbar/Topbar";
import "./app.css";

function App() {
  return (
    <div className="app">
      <Topbar></Topbar>
      <Landing></Landing>
      <Portfolio></Portfolio>
      <Projects></Projects>
      <Services></Services>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}

export default App;
