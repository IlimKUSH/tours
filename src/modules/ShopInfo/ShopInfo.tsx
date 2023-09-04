import { StyledContainer } from "../../components/ui/Container/StyledContainer";
import { Box, Grid, Typography } from "@mui/material";
import { ShopItems, textInfo } from "../../contstants/shop-items";
import styles from "./ShopInfo.module.scss";
import { FC } from "react";

// Определение типов для данных
interface IShopItem {
  image: React.ReactNode;
  title: string;
  text: string;
}

interface IShopText {
  title: string;
  text: string[];
}

const ShopInfo: FC = () => {
  return (
    <div className={styles.shopInfo}>
      <StyledContainer>
        <Grid container>
          <Grid item xl={7.2} lg={7.2} md={12} sm={12} xs={12}>
            {textInfo.map((item: IShopText, index: number) => (
              <Box className={styles.titleTextBox} key={index}>
                <Typography
                  variant="h2"
                  component="h2"
                  className={styles.title}
                >
                  {item.title}
                </Typography>
                {item.text.map((paragraph: string, idx: number) => (
                  <Typography className={styles.text} key={idx}>
                    {paragraph}
                  </Typography>
                ))}
              </Box>
            ))}
          </Grid>

          <Grid
            item
            xl={4.8}
            lg={4.8}
            md={12}
            sm={12}
            xs={12}
            sx={{
              display: "flex",
              justifyContent: {
                xl: "flex-end",
                lg: "flex-end",
                md: "center",
                sm: "center",
                xs: "center",
              },
            }}
          >
            <Box className={styles.squareBox}>
              {ShopItems.map(
                ({ image, title, text }: IShopItem, idx: number) => (
                  <Box key={idx} className={styles.descriptionBox}>
                    <Box>{image}</Box>
                    <Box className={styles.extraBox}>
                      <Typography className={styles.extraTitle}>
                        {title}
                      </Typography>
                      <Typography>{text}</Typography>
                    </Box>
                  </Box>
                )
              )}
            </Box>
          </Grid>
        </Grid>
      </StyledContainer>
    </div>
  );
};

export default ShopInfo;
