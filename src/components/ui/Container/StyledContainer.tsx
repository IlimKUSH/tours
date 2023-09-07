import { Container, styled } from '@mui/material'
import theme from '../../../themes/default'

export const StyledContainer = styled(Container)({
  [theme.breakpoints.up('xl')]: {
    maxWidth: '1354px',
  },
})
