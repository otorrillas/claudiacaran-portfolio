import React from "react";
import Router from 'next/router'
import {
  motion,
  useViewportScroll,
  useSpring,
  useTransform
} from "framer-motion";

import ArrowLogo from "../public/Arrow.svg";
import HomeLogo from "../public/Home.svg";

import "./nav-buttons.css";

function scrollToTop () {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

function NavButtons() {
  const { scrollYProgress } = useViewportScroll();
  const opacity = useSpring(
    useTransform(scrollYProgress, progress => (progress > 0.1 ? 1 : 0))
  );


  function onTopClick() {
   scrollToTop()
  }

  function onHomeClick() {
    Router.push(`/studio`);
  }
  return (
    <motion.div
      style={{
        opacity
      }}
    >
      <motion.button
        onClick={onTopClick}
        className="icon-button scroll-button"
        whileHover={{ scale: 1.5 }}
      >
        <ArrowLogo />
      </motion.button>
      <motion.button
        onClick={onHomeClick}
        className="icon-button home-button"
        whileHover={{ scale: 1.5 }}
      >
        <HomeLogo />
      </motion.button>
    </motion.div>
  );
}

export default NavButtons;
