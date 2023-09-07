import { LogoIcon } from "../../components/icons/logo";
import { NavItems } from "../../contstants/nav-items";
import { SearchIcon } from "../../components/icons/search";
import { StarIcon } from "../../components/icons/star";
import { ProfileIcon } from "../../components/icons/profile";
import { ShoppingIcon } from "../../components/icons/shopping";
import { Link } from "../../components/ui/Link";
import { Box, IconButton, MenuItem } from "@mui/material";
import styles from "./Header.module.scss";
import { StyledContainer } from "../../components/ui/Container/StyledContainer";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useMediaQuery } from "@mui/material";
import BurgerMenu from "./BurgerMenu";

const Header = () => {
  const isMiddleScreen: boolean = useMediaQuery("(max-width:1000px)");
  return (
    <Box component="header" className={styles.header}>
      <StyledContainer>
        <Box component="nav" className={styles.nav}>
          <Box className={styles.logoForBigScreen}>
            <LogoIcon />
          </Box>

          {isMiddleScreen ? (
            <Box className={styles.burgerBox}>
              <IconButton className={styles.logoIcon}>
                <LogoIcon />
              </IconButton>
              <IconButton className={styles.searchIconForSmallScreen}>
                <SearchIcon />
              </IconButton>
              <Box className={styles.burgerMenu}>
                <BurgerMenu />
              </Box>
            </Box>
          ) : (
            <Box className={styles.links}>
              {NavItems.map(({ title, path, submenu }, index) => (
                <Box key={index} className={styles.menuItem}>
                  <Box className={styles.menuTitle}>
                    <Link to={path} className={styles.link}>
                      {title}
                    </Link>
                    {submenu && submenu.length > 0 ? (
                      <KeyboardArrowDownIcon className={styles.arrowIcon} />
                    ) : null}
                  </Box>

                  {submenu && submenu.length > 0 && (
                    <Box className={styles.submenu}>
                      {submenu.map((subItem, subIndex) => (
                        <MenuItem key={subIndex} className={styles.submenuItem}>
                          <Link
                            to={subItem.path}
                            className={styles.subMenuLink}
                          >
                            {subItem.title}
                          </Link>
                        </MenuItem>
                      ))}
                    </Box>
                  )}
                </Box>
              ))}
            </Box>
          )}
          <Box className={styles.icons}>
            <IconButton className={styles.searchIconForBigScreen}>
              <SearchIcon />
            </IconButton>
            <IconButton>
              <StarIcon />
            </IconButton>
            <IconButton>
              <ProfileIcon />
            </IconButton>
            <IconButton>
              <ShoppingIcon />
            </IconButton>
          </Box>
        </Box>
      </StyledContainer>
    </Box>
  );
};

export default Header;
