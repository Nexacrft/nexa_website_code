import Landing from "./components/Landing";
import { ReactLenis } from "@studio-freight/react-lenis";
import OurWork from "./components/OurWork";
import Services from "./utils/services/Services";
import Projects from "./components/Projects";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";

function App() {
  return (
    <ReactLenis root>
      <Landing />
      <OurWork />
      <Services />
      <Projects />
      <AboutUs />
      <ContactUs />
    </ReactLenis>
  );
}

export default App;
