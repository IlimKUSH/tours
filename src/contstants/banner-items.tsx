import firstBanner from "../assets/images/bannerman.png";
import smallBannerFirst from "../assets/images/smallbanner.png";

interface IBannerItem {
  image: string;
  title: string;
  text: string;
  smallImage: string;
}

export const bannerItems: IBannerItem[] = [
  {
    image: firstBanner,
    title: "Широкий ассортимент Одежды",
    text:
      "Одежда от известные брендов у нас в каталоге. Только качественные вещи.",
    smallImage: smallBannerFirst,
  },
  {
    image: firstBanner,
    title: "2",
    text:
      "Одежда от известные брендов у нас в каталоге. Только качественные вещи.",
    smallImage: smallBannerFirst,
  },
  {
    image: firstBanner,
    title: "3",
    text:
      "Одежда от известные брендов у нас в каталоге. Только качественные вещи.",
    smallImage: smallBannerFirst,
  },
];
