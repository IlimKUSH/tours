import { TelegramIcon } from "../components/icons/telegram";
import { VKIcon } from "../components/icons/vkicon";
import { WhatsappIcon } from "../components/icons/whatsapp";

interface IFooterItem {
  label?: string;
  path?: string;
  standard?: boolean;
  bold?: boolean;
  underline?: boolean;
  number?: boolean;
  subtitle?: boolean;
  iconsArray?: object[];
  icons?: React.ReactNode;
}

interface IFooterContent {
  column1: IFooterItem[];
  column2: IFooterItem[];
  column3: IFooterItem[];
}

export const footerContentLarge: IFooterContent = {
  column1: [
    { label: "Каталог", path: "", bold: true },
    { label: "Одежда", path: "", standard: true },
    { label: "Обувь", path: "", standard: true },
    { label: "Аксессуары", path: "", standard: true },
  ],
  column2: [
    { label: "Информация", path: "", bold: true },
    { label: "Блог", path: "", standard: true },
    { label: "Контакты", path: "", standard: true },
    { label: "Доставка", path: "", standard: true },
    { label: "Оплата", path: "", standard: true },
    { label: "FAQ", path: "", standard: true },
  ],
  column3: [
    { label: "Контакты", path: "", bold: true },
    { label: "info@xwear.info", path: "", underline: true },
    { label: "+7 993 608 38 85", number: true },
    { label: "Мессенджеры", subtitle: true },
    {
      iconsArray: [{ icons: <TelegramIcon /> }, { icons: <WhatsappIcon /> }],
    },
    { label: "Наши соц.сети", subtitle: true },
    {
      iconsArray: [{ icons: <VKIcon /> }],
    },
  ],
};

export const footerContentSmall: IFooterContent = {
  column1: [
    { label: "Каталог", path: "", bold: true },
    { label: "Одежда", path: "", standard: true },
    { label: "Обувь", path: "", standard: true },
    { label: "Аксессуары", path: "", standard: true },
  ],

  column2: [
    { label: "Информация", path: "", bold: true },
    { label: "Блог", path: "", standard: true },
    { label: "Контакты", path: "", standard: true },
    { label: "Доставка", path: "", standard: true },
    { label: "Оплата", path: "", standard: true },
    { label: "FAQ", path: "", standard: true },
  ],

  column3: [
    { label: "Контакты", path: "", bold: true },
    { label: "info@xwear.info", path: "", underline: true },
    { label: "+7 993 608 38 85", number: true },

    {
      iconsArray: [
        { icons: <TelegramIcon /> },
        { icons: <WhatsappIcon /> },
        { icons: <VKIcon /> },
      ],
    },
  ],
};
