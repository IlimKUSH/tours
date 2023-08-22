import { FC } from "react";
import { Box, Typography } from "@mui/material";
import { StyledContainer } from "../Container/StyledContainer";
import styles from "./BannerSlide.module.scss";
import Button from "../Button/Button";
import { LeftButton } from "../../icons/leftButton";
import { RightButton } from "../../icons/rightButton";

interface IBannerSlideProps {
  image: string;
  title: string;
  text: string;
  handlePrevClick: () => void;
  handleNextClick: () => void;
}

const BannerSlide: FC<IBannerSlideProps> = ({
  image,
  title,
  text,
  handlePrevClick,
  handleNextClick,
}) => {
  return (
    <Box className={styles.bannerSlide}>
      <Box
        className={styles.backgroundImage}
        style={{ backgroundImage: `url(${image})` }}
      ></Box>
      <StyledContainer>
        <Box className={styles.bannerTitleBox}>
          <Typography variant="h1" component="h1">
            {title}
          </Typography>
        </Box>
        <Box className={styles.bannerTextBox}>
          <Typography className={styles.bannerText}>{text}</Typography>
        </Box>
        <Button className={styles.button} withChevron={true}>
          Перейти в каталог
        </Button>

        <Box className={styles.prevNextBox}>
          <LeftButton onClick={handlePrevClick} />
          <RightButton onClick={handleNextClick} />
        </Box>
      </StyledContainer>
    </Box>
  );
};

export default BannerSlide;
