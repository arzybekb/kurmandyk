import { useRef } from "react";
import Main from "./components/Main/Main";
import Questions from "./components/Questions/Questions";
import Navbar from "./components/navbar/Navbar";
import Slider from "./components/slide/Slide";
import AboutVideoPlayer from "./components/video/AboutVideoPlayer";
import Footer from "./components/Footer/Footer";
import About from "./components/About/About";

function App() {
  const componentRefs = {
    component1: useRef(null),
    component2: useRef(null),
    component3: useRef(null),
    component4: useRef(null),
    component5: useRef(null),
  };

  const scrollToComponent = (componentName) => {
    componentRefs[componentName].current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div>
      <Navbar scroll={scrollToComponent} />
      <Main refOf={componentRefs.component1} />
      <AboutVideoPlayer refOf={componentRefs.component2}/>
      <Questions refOf={componentRefs.component3} />
      <Slider refOf={componentRefs.component4}/>
      <About refOf={componentRefs.component5}/>
      <Footer />
    </div>
  );
}

export default App;
