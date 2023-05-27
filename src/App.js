import { useRef } from "react";
import Main from "./components/Main/Main";
import Questions from "./components/Questions/Questions";
import Navbar from "./components/navbar/Navbar";
import Slider from "./components/slide/Slide";
import AboutVideoPlayer from "./components/video/AboutVideoPlayer";
import Footer from "./components/Footer/Footer";

function App() {
  const componentRefs = {
    component1: useRef(null),
    component2: useRef(null),
    component3: useRef(null),
  };

  const scrollToComponent = (componentName) => {
    componentRefs[componentName].current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div>
      <Navbar scroll={scrollToComponent} />
      <Main refOf={componentRefs.component1} />
      <AboutVideoPlayer />
      <Questions refOf={componentRefs.component2} />
      <Slider />
      <Footer />
    </div>
  );
}

export default App;
