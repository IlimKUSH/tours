import { useMediaQuery } from "@mui/material";
import { StyledContainer } from "../../components/ui/Container/StyledContainer";
import styles from "./Footer.module.scss";
import FooterLarge from "./FooterLarge";
import FooterSmall from "./FooterSmall";

const Footer = () => {
  const isSmallScreen: boolean = useMediaQuery("(max-width:600px)");

  return (
    <footer className={styles.footer}>
      <StyledContainer>
        {isSmallScreen ? <FooterSmall /> : <FooterLarge />}
      </StyledContainer>
    </footer>
  );
};

export default Footer;
