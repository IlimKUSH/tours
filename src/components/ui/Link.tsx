import React, { ReactNode } from 'react'
import { Link as MyLink, LinkProps } from 'react-router-dom'

interface NavItemProps extends LinkProps {
  children: ReactNode
  path: string
}

export const Link: React.FC<NavItemProps> = ({ children, path, ...other }) => {
  return (
    <MyLink to={path} {...other}>
      {children}
    </MyLink>
  )
}
