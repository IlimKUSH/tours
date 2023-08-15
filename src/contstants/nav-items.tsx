interface INavItem {
  title: string
  path: string
}

export const NavItems: INavItem[] = [
  {
    title: 'Одежда',
    path: '/clothes',
  },
  {
    title: 'Обувь',
    path: '/shoes',
  },
  {
    title: 'Аксессуары',
    path: '/accessories',
  },
  {
    title: 'Бренды',
    path: '/brands',
  },
  {
    title: 'Расчет стоимости',
    path: '/calculation',
  },
  {
    title: 'Информация',
    path: '/info',
  },
]
