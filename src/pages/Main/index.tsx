import React from "react";
import Layout from "../../modules/Layout/Layout";
import BannerSlider from "../../modules/BannerSlider/BannerSlider";
import PriceBanner from "../../modules/PriceBanner/PriceBanner";

export const Main = () => {
  return (
    <Layout>
      <h1>Main</h1>
      <BannerSlider />
      {/* <PriceBanner /> */}
    </Layout>
  );
};
