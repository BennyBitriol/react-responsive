import React from "react";
import "./Content.css";
import { Button } from "antd";

const SeventhSection = () => {
  return (
    <>
      <div class="grid">
        <div class="grid__item bottom-signup__container">
          <div class="section-heading gutter-bottom--reset">
            <h2 class="section-heading__heading bottom-signup__heading">
              Grow your business here
            </h2>
            <p class="section-heading__subhead color-gray-70 bottom-signup__subhead gutter-bottom">
              Whether you want to sell products down the street or around the
              world, we have all the tools you need.
            </p>
          </div>{" "}
          <form
            class="marketing-button-wrapper"
            action="https://accounts.shopify.com/store-signup/setup"
            accept-charset="UTF-8"
            method="post"
            __bizdiag="523100033"
            __biza="W___"
          >
            <Button
              size={"large"}
              style={{
                backgroundColor: "#008060",
                color: "#ffffff",
                borderColor: "#008060",
                borderRadius: "4px",
              }}
            >
              Start free trial
            </Button>
          </form>
        </div>
      </div>
    </>
  );
};

export default SeventhSection;
