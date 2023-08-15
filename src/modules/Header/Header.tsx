import React from 'react'
import { LogoIcon } from '../../components/icons/logo'
import { NavItems } from '../../contstants/nav-items'
import { SearchIcon } from '../../components/icons/search'
import { StarIcon } from '../../components/icons/star'
import { ProfileIcon } from '../../components/icons/profile'
import { ShoppingIcon } from '../../components/icons/shopping'
import { Link } from '../../components/ui/Link'
import { Box } from '@mui/material'
import styles from './Header.module.scss'

const Header = () => {
  return (
    <Box component='header' className={styles.header}>
      <Box component='nav' className={styles.nav}>
        <LogoIcon />
        <Box className={styles.links}>
          {NavItems.map(({ title, path }, index) => (
            <Link key={index} to={path} className={styles.link}>
              {title}
            </Link>
          ))}
        </Box>
        <Box className={styles.icons}>
          <SearchIcon />
          <StarIcon />
          <ProfileIcon />
          <ShoppingIcon />
        </Box>
      </Box>
    </Box>
  )
}

export default Header
