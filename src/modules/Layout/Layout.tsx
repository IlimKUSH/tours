import React, { FC, PropsWithChildren } from 'react'
import { Box } from '@mui/material'
import Header from '../Header/Header'
import styles from './Layout.module.scss'

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Box>
      <Header />
      <Box component='main' className={styles.main}>
        {children}
      </Box>
    </Box>
  )
}

export default Layout
