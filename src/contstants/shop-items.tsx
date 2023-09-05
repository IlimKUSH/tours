import { DeliveryIcon } from "../components/icons/delivery";
import { PersonsIcon } from "../components/icons/persons";
import { SimpleIcon } from "../components/icons/simple";

interface IShopItem {
  image: React.ReactNode;
  title: string;
  text: string;
}

interface IShopText {
  title: string;
  text: string[];
}

export const ShopItems: IShopItem[] = [
  {
    image: <DeliveryIcon />,
    title: "Бесплатная доставка до России",
    text: "Доставим вам заказ абсолютно бесплатно до России",
  },
  {
    image: <PersonsIcon />,
    title: "мы Работаем без посредников",
    text: "Между нами и клиентом нет третьего лишнего",
  },
  {
    image: <SimpleIcon />,
    title: "простота в заказе и использовании",
    text: "Для заказа с Poizon не нужно никаких приложений",
  },
];

export const textInfo: IShopText[] = [
  {
    title: "О интернет-магазине xwear",
    text: [
      "Команда XWEAR предоставляет услугу доставки только оригинальных товаров cкрупнейшего китайского маркетплейса Poizon, чтобы наши клиенты экономилиболее 40% на каждой покупке.",
      "Работаем без посредников, благодаря чему можем предоставлять лучшую цену. Быстрая, бесплатная доставка.",
      "Сайт, на котором можно будет удобно оформить покупку, не скачивая китайское мобильное приложение Poizon, с удобной фильтрацией огромного количества товаров, а так же с возможностью сразу увидеть окончательную цену товара.",
    ],
  },
];
