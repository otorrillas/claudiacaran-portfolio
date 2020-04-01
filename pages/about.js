import React from "react";

import Header from '../components/header'
import Description from "../components/description";
import Portrait from "../components/portrait";
import Section from "../components/sections/section";
import SocialSection from "../components/sections/section-social";
import ServicesSection from "../components/sections/section-services";
import Biography from "../components/sections/section-biography";
import Awards from "../components/sections/section-awards";
import Clients from "../components/sections/section-clients";
import CopyrightSection from "../components/sections/section-copyright";
import "./about.css";
import useBackgroundColor from "../lib/useBackgroundColor";

function About() {
  useBackgroundColor("#F4F1EF");

  return (
    <>
    <Header />
    <div className="About">
      <Portrait />
      <Description />
      <div className="col1">
        <Section title="Contact">studio@claudiacaran.com</Section>
        <SocialSection />
        <CopyrightSection />
      </div>
      <div className="col2">
        <Biography />
      </div>
      <div className="col3">
        <ServicesSection />
        <Awards />
        <Clients />
      </div>
    </div>
    </>
  );
}

export default About;
