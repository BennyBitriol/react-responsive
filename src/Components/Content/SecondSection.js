import React from "react";
import { Row, Col, Input, Button } from "antd";
import "./Content.css";

const SecondSection = () => {
  return (
    <>
      <div className="grid">
        <div className="grid grid--equal-height grid--vertically-centered discover__heading-grid">
          <div className="grid__item">
            <div className="section-heading section-heading--mobile-up-align-left gutter-bottom--reset">
              <h1 className="heading--1 discover__heading">
                Discover why millions of entrepreneurs choose Shopify to build
                their business—from Hello World to IPO.
              </h1>
            </div>
          </div>
        </div>
        <span
          className="image lazyload-image discover__image-no-border discover__themes-image hide-theme-desktop-image"
          style={{ paddingBottom: "44%" }}
        >
          <span className="lazyload-image__placeholder">
            <img
              alt="A Shopify store theme showcasing a skin care business on desktop with a mobile version overlaid."
              data-sizes="100vw"
              data-srcset="https://cdn.shopify.com/shopifycloud/brochure/assets/home/desktop-refresh/sense-desktop-small-b78e5eb27373e527dba35b147124b432bbbaf54fb2c712fba5ba5f31d2209174.png 1x, https://cdn.shopify.com/shopifycloud/brochure/assets/home/desktop-refresh/sense-desktop-large-67906196fd75026657d121b52b29545a25e7f5bea3ad7b2fb619436ae6c285e7.png?quality=50 2x"
              class=" ls-is-cached lazyloaded"
              sizes="100vw"
              srcset="https://cdn.shopify.com/shopifycloud/brochure/assets/home/desktop-refresh/sense-desktop-small-b78e5eb27373e527dba35b147124b432bbbaf54fb2c712fba5ba5f31d2209174.png 1x, https://cdn.shopify.com/shopifycloud/brochure/assets/home/desktop-refresh/sense-desktop-large-67906196fd75026657d121b52b29545a25e7f5bea3ad7b2fb619436ae6c285e7.png?quality=50 2x"
            />
          </span>
        </span>
        <Row justify="center" align="middle">
          <Col flex="1 0 25%">
            <div class="grid__item grid__item--mobile-up-third gutter-bottom--mobile">
              <div
                class="carousel-nav-item discover__carousel-button js-is-active"
                aria-controls="carousel-items21"
                aria-roledescription="Slide"
                aria-label="1 of 3"
                data-state="0"
                role="group"
                aria-current="true"
              >
                <div class="discover__carousel-progress"></div>
                <h3 class="heading--3">Store builder</h3>
                <p class="color-black">
                  Bring your vision to life with our easy-to-use store creator.
                  No coding expertise required—just your next big idea.
                </p>
              </div>
              <a>
                Build the brand you want&nbsp;
                <span class="link__arrow">
                  <svg
                    class="icon link__arrow-inner"
                    aria-hidden="true"
                    focusable="false"
                  ></svg>
                </span>
              </a>
            </div>
          </Col>
          <Col flex="1 0 25%">
            <div class="grid__item grid__item--mobile-up-third gutter-bottom--mobile">
              <div
                class="carousel-nav-item discover__carousel-button"
                aria-controls="carousel-items21"
                aria-roledescription="Slide"
                aria-label="2 of 3"
                data-state="1"
                role="group"
              >
                <div class="discover__carousel-progress"></div>
                <h3 class="heading--3">Themes</h3>
                <p class="color-black">
                  Select from hundreds of customizable templates crafted by a
                  community of world-class designers.
                </p>
              </div>
              <a>
                Explore more Themes&nbsp;
                <span class="link__arrow">
                  <svg
                    class="icon link__arrow-inner"
                    aria-hidden="true"
                    focusable="false"
                  ></svg>
                </span>
              </a>
            </div>
          </Col>
          <Col flex="1 0 25%">
            <div class="grid__item grid__item--mobile-up-third gutter-bottom--mobile">
              <div
                class="carousel-nav-item discover__carousel-button js-is-active"
                aria-controls="carousel-items21"
                aria-roledescription="Slide"
                aria-label="3 of 3"
                data-state="2"
                role="group"
                aria-current="true"
              >
                <div class="discover__carousel-progress"></div>
                <h3 class="heading--3">App store</h3>
                <p class="color-black">
                  Add more features and functionality to your online store with
                  app extensions from trusted Shopify partners.
                </p>
              </div>
              <a>
                There’s an app for that&nbsp;
                <span class="link__arrow">
                  <svg
                    class="icon link__arrow-inner"
                    aria-hidden="true"
                    focusable="false"
                  ></svg>
                </span>
              </a>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default SecondSection;
