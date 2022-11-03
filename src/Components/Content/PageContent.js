import React, { Component } from "react";
import FirstSection from "./FirstSection";
import SecondSection from "./SecondSection";
import ThirdSection from "./ThirdSection";
import FourthSection from "./FourthSection";
import SixthSection from "./SixthSection";
import SeventhSection from "./SeventhSection";
import "../../App.css";
import "../Content/Content.css";
class PageContent extends Component {
  render() {
    return (
      <>
        <section className="section bg-color hero_section">
          <FirstSection />
        </section>
        <section className="section">
          <SecondSection />
        </section>
        <section className="section">
          <ThirdSection />
        </section>
        <section className="section">
          <FourthSection />
        </section>
        <section
          className="section help__section"
          style={{ backgroundColor: "#fbf7ed" }}
        >
          <SixthSection />
        </section>
        <section className="section">
          <SeventhSection />
        </section>
      </>
    );
  }
}

export default PageContent;
