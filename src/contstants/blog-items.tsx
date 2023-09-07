import blogImgFirst from '../assets/images/blogImg1.png'
import blogImgSecond from '../assets/images/blogImg2.png'
import blogImgThird from '../assets/images/blogImg3.png'

function formatDateToRussian(date: Date): string {
  const months = [
    'января',
    'февраля',
    'марта',
    'апреля',
    'мая',
    'июня',
    'июля',
    'августа',
    'сентября',
    'октября',
    'ноября',
    'декабря',
  ]

  const day = date.getDate()
  const month = months[date.getMonth()]
  const year = date.getFullYear()

  return `${day} ${month} ${year}`
}

const currentDate = new Date()
const formattedDate = formatDateToRussian(currentDate)

interface IBlogItems {
  image: string
  title: string
  text: string
  date: string
}
export const blogItems: IBlogItems[] = [
  {
    image: blogImgFirst,
    title: 'Делаем скидки на всю женскую одежду осеннего сезона',
    text: 'Мы запускаем акцию. Готовься к осени с лета. На протяжении всего лета покупайте женские осенние вещи со скидками.',
    date: formattedDate,
  },
  {
    image: blogImgSecond,
    title: 'Джинсы для всех друзей. Скидки на большие покупки',
    text: 'Мы запускаем акцию. Готовься к осени с лета. На протяжении всего лета покупайте женские осенние вещи со скидками.',
    date: formattedDate,
  },
  {
    image: blogImgThird,
    title: 'Джинсы для всех друзей. Скидки на большие покупки',
    text: 'Мы запускаем акцию. Готовься к осени с лета. На протяжении всего лета покупайте женские осенние вещи со скидками.',
    date: formattedDate,
  },
  {
    image: blogImgFirst,
    title: 'Делаем скидки на всю женскую одежду осеннего сезона',
    text: 'Мы запускаем акцию. Готовься к осени с лета. На протяжении всего лета покупайте женские осенние вещи со скидками.',
    date: formattedDate,
  },
  {
    image: blogImgThird,
    title: 'Джинсы для всех друзей. Скидки на большие покупки',
    text: 'Мы запускаем акцию. Готовься к осени с лета. На протяжении всего лета покупайте женские осенние вещи со скидками.',
    date: formattedDate,
  },
  {
    image: blogImgSecond,
    title: 'Джинсы для всех друзей. Скидки на большие покупки',
    text: 'Мы запускаем акцию. Готовься к осени с лета. На протяжении всего лета покупайте женские осенние вещи со скидками.',
    date: formattedDate,
  },
  {
    image: blogImgThird,
    title: 'Джинсы для всех друзей. Скидки на большие покупки',
    text: 'Мы запускаем акцию. Готовься к осени с лета. На протяжении всего лета покупайте женские осенние вещи со скидками.',
    date: formattedDate,
  },
  {
    image: blogImgSecond,
    title: 'Джинсы для всех друзей. Скидки на большие покупки',
    text: 'Мы запускаем акцию. Готовься к осени с лета. На протяжении всего лета покупайте женские осенние вещи со скидками.',
    date: formattedDate,
  },
  {
    image: blogImgFirst,
    title: 'Делаем скидки на всю женскую одежду осеннего сезона',
    text: 'Мы запускаем акцию. Готовься к осени с лета. На протяжении всего лета покупайте женские осенние вещи со скидками.',
    date: formattedDate,
  },
]
