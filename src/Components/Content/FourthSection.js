import React from "react";
import "./Content.css";

const FourthSection = () => {
  return (
    <>
      <div class="grid grid--equal-height grid--vertically-centered">
        <div class="grid__item grid__item--tablet-up-half grid__item--desktop-up-7">
          <div class="manage__image-container gutter-bottom--mobile">
            <span
              class="image lazyload-image"
              style={{ maxWidth: "677px", maxHeight: "449px" }}
            >
              <span
                class="lazyload-image__placeholder"
                style={{ paddingBottom: "66.322%" }}
              >
                <img
                  alt="An illustration of the Shopify admin shows merchants successfully adding photos and videos to their product listings."
                  data-sizes="100vw"
                  data-srcset="https://cdn.shopify.com/shopifycloud/brochure/assets/home/desktop-refresh/manage-small-6b3e63485d8e7fda3a9b55feae5f234056786d870d0152d308a75b1debd3bace.png 1x, https://cdn.shopify.com/shopifycloud/brochure/assets/home/desktop-refresh/manage-large-b73354762084c131bbf3d45a32e40275c1dcf492381a7c334410229715c4e5b5.png?quality=50 2x"
                  class=" lazyloaded"
                  sizes="100vw"
                  srcset="https://cdn.shopify.com/shopifycloud/brochure/assets/home/desktop-refresh/manage-small-6b3e63485d8e7fda3a9b55feae5f234056786d870d0152d308a75b1debd3bace.png 1x, https://cdn.shopify.com/shopifycloud/brochure/assets/home/desktop-refresh/manage-large-b73354762084c131bbf3d45a32e40275c1dcf492381a7c334410229715c4e5b5.png?quality=50 2x"
                />
                <img
                  sizes="100vw"
                  srcset="https://cdn.shopify.com/shopifycloud/brochure/assets/home/desktop-refresh/manage-small-6b3e63485d8e7fda3a9b55feae5f234056786d870d0152d308a75b1debd3bace.png 1x, https://cdn.shopify.com/shopifycloud/brochure/assets/home/desktop-refresh/manage-large-b73354762084c131bbf3d45a32e40275c1dcf492381a7c334410229715c4e5b5.png?quality=50 2x"
                  alt="An illustration of the Shopify admin shows merchants successfully adding photos and videos to their product listings."
                />
              </span>
            </span>
          </div>
        </div>
        <div class="grid__item grid__item--tablet-up-half grid__item--desktop-up-5 manage__text-container">
          <div class="section-heading section-heading--mobile-up-align-left gutter-bottom--reset">
            <h2 class="section-heading__heading heading--1 heading--2">
              Everything you need to succeed
            </h2>
          </div>{" "}
          <p>
            Manage inventory, track payments, and view real-time business
            insights from a single dashboard. We’ve built all the tools you
            need, so you can focus on building your business.
          </p>
          <a
            data-event-page="homepage"
            data-event-category="homepage"
            data-event-action="click-link"
            data-event-label="manage"
            class="link link--secondary"
            href="/manage"
          >
            Do more from day one&nbsp;
            <span class="link__arrow">
              <svg
                class="icon link__arrow-inner"
                aria-hidden="true"
                focusable="false"
              >
                {" "}
              </svg>
            </span>
          </a>
        </div>
      </div>
    </>
  );
};

export default FourthSection;
