import React from "react";
import "./Content.css";

const ThirdSection = () => {
  return (
    <>
      <div className="grid grid--equal-height grid--vertically-centered">
        <div className="grid__item grid__item--tablet-up-half grid__item--tablet-up-push-half sell__image-grid-item gutter-bottom--mobile">
          <div className="sell__image-container">
            <span
              className="image lazyload-image sell__image"
              style={{ maxWidth: "398px", maxHeight: "482px" }}
            >
              <span
                className="lazyload-image__placeholder"
                style={{ paddingBottom: "121.1055%" }}
              >
                <img
                  alt="An illustration of an online sunglasses store. The image is surrounded by emojis and icons for sales channels including Instagram, TikTok, Shop, and Google."
                  data-sizes="100vw"
                  data-srcset="https://cdn.shopify.com/shopifycloud/brochure/assets/home/desktop-refresh/sell-small-a7aadbd394716dd8df2b1959769a24827ac97161b67013f4926bb0dee7133ee9.png 1x, https://cdn.shopify.com/shopifycloud/brochure/assets/home/desktop-refresh/sell-large-b1d708a1d1b26bb0e8f42fea19b248f453e532f0c552f85603e1f26f783c711c.png?quality=50 2x"
                  className=" ls-is-cached lazyloaded"
                  sizes="100vw"
                  srcset="https://cdn.shopify.com/shopifycloud/brochure/assets/home/desktop-refresh/sell-small-a7aadbd394716dd8df2b1959769a24827ac97161b67013f4926bb0dee7133ee9.png 1x, https://cdn.shopify.com/shopifycloud/brochure/assets/home/desktop-refresh/sell-large-b1d708a1d1b26bb0e8f42fea19b248f453e532f0c552f85603e1f26f783c711c.png?quality=50 2x"
                />
              </span>
            </span>
          </div>
        </div>
        <div className="grid__item grid__item--tablet-up-half grid__item--tablet-up-pull-half sell__text-container">
          <div className="section-heading section-heading--mobile-up-align-left gutter-bottom--reset">
            <h2 className="section-heading__heading heading--1 heading--2">
              Connect with customers everywhere
            </h2>
          </div>
          <p>
            Sell online, in person, or both with the marketing tools, social
            integrations, and sales channels you need to get your products in
            front of customers—and out the door.
          </p>
          <a>
            Marketing made easy&nbsp;
            <span className="link__arrow">
              <svg
                className="icon link__arrow-inner"
                aria-hidden="true"
                focusable="false"
              ></svg>
            </span>
          </a>
        </div>
      </div>
    </>
  );
};

export default ThirdSection;
