import { lazy, PropsWithChildren, Suspense, useEffect, useState } from "react";
import About from "./About";
import Career from "./Career";
import Contact from "./Contact";
import Cursor from "./Cursor";
import Landing from "./Landing";
import Navbar from "./Navbar";
import SocialIcons from "./SocialIcons";
import WhatIDo from "./WhatIDo";
import Work from "./Work";
import Achievements from "./Achievements";

import setSplitText from "./utils/splitText";

const TechStack = lazy(() => import("./TechStack"));

const MainContainer = ({ children }: PropsWithChildren) => {
  const [isDesktopView, setIsDesktopView] = useState(false);

  useEffect(() => {
    const checkIsDesktop = () => window.innerWidth > 1024;

    const resizeHandler = () => {
      setSplitText();
      setIsDesktopView(checkIsDesktop());
    };

    // Set initial state and split text on mount
    resizeHandler();

    window.addEventListener("resize", resizeHandler);
    return () => window.removeEventListener("resize", resizeHandler);
  }, []);

  return (
    <div className="container-main">
      <Cursor />
      <Navbar />
      <SocialIcons />
      {isDesktopView && children}
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <div className="container-main">
            <Landing>{!isDesktopView && children}</Landing>
            <About />
            <WhatIDo />
            <Career />
            <Achievements/>
            <Work />

            {/* Show TechStack on all screen sizes now */}
            <Suspense fallback={<div>Loading....</div>}>
              <TechStack />
            </Suspense>

            <Contact />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContainer;
