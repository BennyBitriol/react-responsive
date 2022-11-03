import React from "react";
import "./Content.css";

const SixthSection = () => {
  return (
    <>
      <div class="grid grid--bleed grid--equal-height grid--vertically-centered">
        <div class="grid__item help__image-container hide--desktop">
          <span
            class="image lazyload-image help__image"
            style={{ maxWidth: "1172px", maxHeight: "793px" }}
          >
            <span
              class="lazyload-image__placeholder"
              style={{ paddingBottom: "67.6621%" }}
            >
              {/* <img
                alt="A man works from his laptop at a kitchen counter, with fresh produce and other groceries behind him."
                data-sizes="100vw"
                data-srcset="https://cdn.shopify.com/shopifycloud/brochure/assets/home/desktop-refresh/help-mobile-small-304a187a65c69e4987d80f0ccaffc3bf7c3265ec8e430a3fc2a7e03a7f9e79f6.jpg 1x, https://cdn.shopify.com/shopifycloud/brochure/assets/home/desktop-refresh/help-mobile-large-9344bd7fd14be35cf7535c14c65f976f400737ac6367c2a2f8f8e2754323751d.jpg?quality=50 2x"
                class="lazyload"
              /> */}
              <img
                sizes="100vw"
                srcset="https://cdn.shopify.com/shopifycloud/brochure/assets/home/desktop-refresh/help-mobile-small-304a187a65c69e4987d80f0ccaffc3bf7c3265ec8e430a3fc2a7e03a7f9e79f6.jpg 1x, https://cdn.shopify.com/shopifycloud/brochure/assets/home/desktop-refresh/help-mobile-large-9344bd7fd14be35cf7535c14c65f976f400737ac6367c2a2f8f8e2754323751d.jpg?quality=50 2x"
                alt="A man works from his laptop at a kitchen counter, with fresh produce and other groceries behind him."
              />
            </span>
          </span>
        </div>
        <div class="grid__item grid__item--desktop-up-half help__content-container">
          <div class="section-heading section-heading--mobile-up-align-left">
            <h2 class="section-heading__heading heading--1 help__heading">
              The help you need, when you need it
            </h2>
          </div>
          <div class="grid grid--equal-height">
            <div class="grid__item grid__item--tablet-up-half help__card gutter-bottom--mobile">
              <p class="help__card-heading">Shopify Blog</p>
              <p>
                Get all the marketing and business strategy tips you need to
                help you run an online business.
              </p>
              <a
                data-event-page="homepage"
                data-event-category="homepage"
                data-event-action="click-link"
                data-event-label="blog"
                class="link link--secondary"
                href="/blog"
              >
                Read&nbsp;
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
            </div>{" "}
            <div class="grid__item grid__item--tablet-up-half help__card gutter-bottom--mobile">
              <p class="help__card-heading">Online Courses</p>
              <p>
                Learn from the best with instant access to lessons from
                successful entrepreneurs around the world.
              </p>
              <a
                data-event-page="homepage"
                data-event-category="homepage"
                data-event-action="click-link"
                data-event-label="courses"
                class="link link--secondary"
                href="https://www.shopify.com/learn"
              >
                Learn&nbsp;
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
            </div>{" "}
            <div class="grid__item grid__item--tablet-up-half help__card gutter-bottom--mobile">
              <p class="help__card-heading">Our Community</p>
              <p>
                Connect with a community of brands, partners, and fellow
                merchants who understand Shopify.
              </p>
              <a
                data-event-page="homepage"
                data-event-category="homepage"
                data-event-action="click-link"
                data-event-label="community"
                class="link link--secondary"
                href="https://community.shopify.com/c/shopify-community/ct-p/en"
              >
                Connect&nbsp;
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
            </div>{" "}
            <div class="grid__item grid__item--tablet-up-half help__card gutter-bottom--mobile">
              <p class="help__card-heading">Help Center</p>
              <p>
                Find answers in a flash with your dedicated resource for
                articles and videos from our Support team.
              </p>
              <a
                data-event-page="homepage"
                data-event-category="homepage"
                data-event-action="click-link"
                data-event-label="help-center"
                class="link link--secondary"
                href="https://help.shopify.com/en"
              >
                Get Help&nbsp;
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
        </div>
      </div>
      <img
        class="image help__image picture--cover hide--mobile hide--tablet"
        sizes="100vw"
        srcset="https://cdn.shopify.com/shopifycloud/brochure/assets/home/desktop-refresh/help-desktop-small-ac17139030bd6ceb35da7e7c39764c3b567db454a8bdc23ea305d2e93aad28ef.jpg 1x, https://cdn.shopify.com/shopifycloud/brochure/assets/home/desktop-refresh/help-desktop-large-7b4181456946fcf2798175f73360178fc0c5c6014e6ed0b9cd1f88ae28bbe51a.jpg?quality=50 2x"
        alt="A man works from his laptop at a kitchen counter, with fresh produce and other groceries behind him."
      />
    </>
  );
};

export default SixthSection;
