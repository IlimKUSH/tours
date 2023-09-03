import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { blogItems } from '../../contstants/blog-items'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { Box, useMediaQuery } from '@mui/material'
import { StyledContainer } from '../../components/ui/Container/StyledContainer'
import styles from './Blog.module.scss'

export default function Blog() {
  const sliderRef = React.useRef<Slider | null>(null)

  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 425,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }

  //   const handlePrevClick = (): void => {
  //     if (sliderRef.current) {
  //       ;(sliderRef.current as Slider).slickPrev()
  //     }
  //   }

  //   const handleNextClick = (): void => {
  //     if (sliderRef.current) {
  //       ;(sliderRef.current as Slider).slickNext()
  //     }
  //   }

  console.log(window.innerWidth)
  return (
    <StyledContainer sx={{ mt: 15, mb: 15 }}>
      <Box className={styles.containerBlogHeader}>
        <Typography variant='h2'>НАШ БЛОГ</Typography>
        <Typography variant='h4' className={styles.textUnderline}>
          <span>БОЛЬШЕ СТАТЕЙ &gt; </span>
        </Typography>
      </Box>

      <Slider {...settings} ref={sliderRef}>
        {blogItems.map((slide, index) => (
          <Box key={index}>
            <Card className={styles.cardBlog}>
              <CardMedia
                sx={{ height: 250, borderRadius: '5px' }}
                image={slide.image}
                title={slide.title}
              />
              <CardContent>
                <Typography gutterBottom variant='h4' component='div'>
                  {slide.title}
                </Typography>
                <Typography variant='body2' color='text.secondary'>
                  {slide.text}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size='large'>Узнать подробнее</Button>
                <Typography>{slide.date}</Typography>
              </CardActions>
            </Card>
          </Box>
        ))}
      </Slider>
    </StyledContainer>
  )
}
