import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import { ReactLenis } from "@studio-freight/react-lenis";
import { Analytics } from "@vercel/analytics/react";

import Landing from "./components/Landing";
import OurWork from "./components/OurWork";
import Services from "./utils/services/Services";

// Lazy loaded components
const Projects = lazy(() => import("./components/Projects"));
const AboutUs = lazy(() => import("./components/AboutUs"));
const ContactUs = lazy(() => import("./components/ContactUs"));
const ExtraProjects = lazy(() => import("./components/ExtraProjects"));
const NotFound = lazy(() => import("./components/NotFound")); // create this file

function App() {
  return (
    <Router>
      <ReactLenis root>
        <Routes>
          {/* Home route */}
          <Route
            path="/"
            element={
              <>
                <Landing />
                <OurWork />
                <Services />

                <Suspense fallback={<div>Loading Projects...</div>}>
                  <Projects />
                </Suspense>

                <Suspense fallback={<div>Loading About Us...</div>}>
                  <AboutUs />
                </Suspense>

                <Suspense fallback={<div>Loading Contact...</div>}>
                  <ContactUs />
                </Suspense>

                <Analytics />
              </>
            }
          />

          {/* Extra Projects route */}
          <Route
            path="/projectsextra"
            element={
              <Suspense fallback={<div>Loading Extra Projects...</div>}>
                <ExtraProjects />
              </Suspense>
            }
          />

          {/* 404 - Not Found route */}
          <Route
            path="*"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <NotFound />
              </Suspense>
            }
          />
        </Routes>
      </ReactLenis>
    </Router>
  );
}

export default App;
