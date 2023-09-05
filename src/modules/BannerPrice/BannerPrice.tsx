import { BannerContainer } from "../../components/ui/Container/BannerContainer";
import styles from "./Price.module.scss";
import { Box, Typography } from "@mui/material";
import { StyledContainer } from "../../components/ui/Container/StyledContainer";
import theme from "../../themes/default";
import phone from "../../assets/images/big.png";
import Button from "../../components/ui/Button/Button";

const BannerPrice = () => {
  //   const isMiddleScreen: boolean = useMediaQuery("(max-width:1000px)");

  return (
    <div className={styles.priceBlock}>
      <BannerContainer maxWidth="xl">
        <Box className={styles.container}>
          <StyledContainer>
            <Box className={styles.titleBox}>
              <Typography
                variant="h1"
                component="h1"
                sx={{
                  color: theme.palette.white.main,
                  textAlign: { md: "left", sm: "center", xs: "center" },
                }}
              >
                Рассчитать стоимость
              </Typography>
            </Box>

            <Box className={styles.textMainBox}>
              <Typography
                className={styles.textMain}
                sx={{ color: theme.palette.white.main }}
              >
                Если вам не удалось найти то, что искали, вы всегда можете
                воспользоваться автоматическим расчетом стоимость заказа на
                маркетплейсе Poizon, включая комиссию сервиса и доставку.
              </Typography>
              <img className={styles.imagePhone} src={phone} alt="phone" />
            </Box>

            <Box className={styles.textBox}>
              <Typography
                className={styles.textFirst}
                sx={{ color: theme.palette.white.main }}
              >
                Подробная, пошаговая статья о том, как установить приложение
                Poizon
              </Typography>
              <Typography
                className={styles.textSecond}
                sx={{ color: theme.palette.white.main }}
              >
                Напишите нам в Telegram или WhatsApp какую вещь хотите купить
              </Typography>
            </Box>
            <Box className={styles.buttonBox}>
              <Button className={styles.button} withChevron={true}>
                Расчитать стоимость
              </Button>
            </Box>
          </StyledContainer>
        </Box>
      </BannerContainer>
    </div>
  );
};

export default BannerPrice;
