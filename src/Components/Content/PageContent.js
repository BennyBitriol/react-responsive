import React, { Component } from "react";
import FirstSection from "./FirstSection";
import SecondSection from "./SecondSection";
import ThirdSection from "./ThirdSection";
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
      </>
    );
  }
}

export default PageContent;
