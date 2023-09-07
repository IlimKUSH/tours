interface INavItem {
  title: string;
  path: string;
  submenu?: INavItem[];
}

export const NavItems: INavItem[] = [
  {
    title: "Одежда",
    path: "/clothes",
    submenu: [
      {
        title: "Рубашки",
        path: "/shirts",
      },
      {
        title: "Костюмы",
        path: "/suits",
      },
    ],
  },
  {
    title: "Обувь",
    path: "/shoes",
    submenu: [
      {
        title: "Кроссовки",
        path: "/sneakers",
      },
      {
        title: "Кеды",
        path: "/sneakers",
      },
      {
        title: "Лофферы",
        path: "/sneakers",
      },
      {
        title: "Сандали",
        path: "/sneakers",
      },
      {
        title: "Шлепки",
        path: "/sneakers",
      },
    ],
  },
  {
    title: "Аксессуары",
    path: "/accessories",
    submenu: [
      {
        title: "Кепки",
        path: "/caps",
      },
      {
        title: "Сумки",
        path: "/caps",
      },
      {
        title: "Шапки",
        path: "/caps",
      },
    ],
  },
  {
    title: "Бренды",
    path: "/brands",
  },
  {
    title: "Расчет стоимости",
    path: "/calculation",
  },
  {
    title: "Информация",
    path: "/info",
    submenu: [
      {
        title: "Наш блог",
        path: "/blog",
      },
      {
        title: "Наши контакты",
        path: "/contacts",
      },
      {
        title: "FAQ",
        path: "/faq",
      },
      {
        title: "Доставка",
        path: "/delivery",
      },
      {
        title: "Оплата",
        path: "/payment",
      },
    ],
  },
];
