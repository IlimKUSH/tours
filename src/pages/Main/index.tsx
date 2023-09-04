import React from 'react'
import Layout from '../../modules/Layout/Layout'
import BannerSlider from '../../modules/BannerSlider/BannerSlider'
import Blog from '../../modules/Blog/Blog'

export const Main = () => {
  return (
    <Layout>
      <h1>Main</h1>
      <BannerSlider />
      <Blog />
    </Layout>
  )
}
