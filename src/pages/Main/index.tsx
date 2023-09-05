
import Layout from "../../modules/Layout/Layout";
import BannerSlider from "../../modules/BannerSlider/BannerSlider";
import BannerPrice from "../../modules/BannerPrice/BannerPrice";
import ShopInfo from "../../modules/ShopInfo/ShopInfo";


export const Main = () => {
  return (
    <Layout>
      <h1>Main</h1>
      <BannerSlider />
      <Blog />
    </Layout>
  )
}
