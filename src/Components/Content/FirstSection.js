import React, { Component } from "react";
import { Row, Col, Grid, Input, Button } from "antd";
import "./Content.css";

const FirstSection = () => {
  return (
    <Row justify="center" align="middle">
      <Col
        flex="1 0 25%"
        style={{ paddingLeft: "5%" }}
        className="inner-content hero__text-container"
      >
        <h1 className="hero__heading">
          If you can dream it, you can sell it with Shopify
        </h1>
        <p className="text-white hero__subhead">
          Build your business here. Take it anywhere.
        </p>
        <Input size="large" style={{ width: "50%" }} />
        <Button
          size="large"
          style={{
            backgroundColor: "#008060",
            color: "#ffffff",
            borderColor: "#008060",
            borderRadius: "4px",
          }}
        >
          Start free trial
        </Button>
        <p className="text-minor text-white">
          Try Shopify free for 3 days, no credit card required. By entering your
          email, you agree to receive marketing emails from Shopify.
        </p>
      </Col>
      <Col flex="1 0 25%" className="inner-content hero__media-container">
        <span
          className="image lazyload-image"
          style={{ maxWidth: "781px", maxHeight: "652px" }}
        >
          <span
            className="lazyload-image__placeholder"
            style={{ paddingBottom: "83.4827%" }}
          >
            <img
              alt="Two people are in a warehouse, with products neatly stacked on shelves behind them. The two people are colleagues and are excitedly discussing a product at a table while looking at a computer screen."
              data-sizes="100vw"
              data-srcset="https://cdn.shopify.com/shopifycloud/brochure/assets/home/desktop-refresh/hero-small-fb5c6e3ede460f1cc7c19b5066f086cf59a5f68ea42ac778602a8486bf66be3f.png 1x, https://cdn.shopify.com/shopifycloud/brochure/assets/home/desktop-refresh/hero-large-f5f7bd926fa6c43a0c97bf1714f7e5227a18bb6952a6599208b2c8b2cab514d4.png?quality=50 2x"
              class=" lazyloaded"
              sizes="100vw"
              srcset="https://cdn.shopify.com/shopifycloud/brochure/assets/home/desktop-refresh/hero-small-fb5c6e3ede460f1cc7c19b5066f086cf59a5f68ea42ac778602a8486bf66be3f.png 1x, https://cdn.shopify.com/shopifycloud/brochure/assets/home/desktop-refresh/hero-large-f5f7bd926fa6c43a0c97bf1714f7e5227a18bb6952a6599208b2c8b2cab514d4.png?quality=50 2x"
            ></img>
          </span>
        </span>
      </Col>
    </Row>
  );
};

export default FirstSection;
