import {
  Box,
  Grid,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import classNames from "classnames";
import { footerContentLarge } from "../../contstants/footer-items";
import { FooterLogo } from "../../components/icons/footerLogo";
import PlayCircleFilledWhiteIcon from "@mui/icons-material/PlayCircleFilledWhite";
import styles from "./Footer.module.scss";
import { InputButton } from "../../components/icons/inputButton";

const FooterLarge = () => {
  return (
    <Box>
      <Grid container className={styles.gridContainer}>
        {Object.values(footerContentLarge).map((column, columnIndex) => (
          <Grid
            item
            xs={12}
            sm={4}
            md={3}
            lg={3}
            xl={3}
            key={columnIndex}
            className={styles.columnGrid}
          >
            {column.map((item, itemIndex) => (
              <Box key={itemIndex}>
                {item.iconsArray ? (
                  <Box className={styles.iconsBox}>
                    {item.iconsArray.map((icon, iconIndex) => (
                      <Link key={iconIndex} to={item.path}>
                        {icon.icons}
                      </Link>
                    ))}
                  </Box>
                ) : (
                  <Typography
                    className={classNames({
                      [styles.columnHead]: item.bold,
                      [styles.columnContent]: item.standard,
                      [styles.columnContentUnderline]: item.underline,
                      [styles.columnContentNumber]: item.number,
                      [styles.columnSubtitle]: item.subtitle,
                    })}
                  >
                    {item.path ? (
                      <Link to={item.path}>{item.label}</Link>
                    ) : (
                      item.label
                    )}
                  </Typography>
                )}
              </Box>
            ))}
          </Grid>
        ))}
        <Grid
          item
          xs={12}
          sm={12}
          md={3}
          lg={3}
          xl={3}
          className={styles.columnGrid}
        >
          <Box className={styles.newsBox}>
            <Box className={styles.newsTextBox}>
              <Typography className={styles.columnHead}>
                Подписка на новости
              </Typography>
              <Typography className={styles.columnContent}>
                Будьте в курсе скидок и новостей
              </Typography>
            </Box>
            <TextField
              variant="standard"
              label="Ваш email"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <InputButton />
                  </InputAdornment>
                ),
              }}
              InputLabelProps={{
                style: {
                  color: "#707076",
                  paddingLeft: "10px",
                  fontSize: "11px",
                },
              }}
            />
          </Box>
          <Typography className={styles.columnContentExtra}>
            Подписываясь на рассылку вы соглашатесь с обработкой персональных
            данных
          </Typography>
        </Grid>
      </Grid>

      <Grid container>
        <Grid item xs={9} sm={8} md={9} lg={9} xl={9}>
          {" "}
          <IconButton>
            <FooterLogo />
          </IconButton>
        </Grid>
        <Grid item xs={3} sm={4} md={3} lg={3} xl={3}>
          {" "}
          <Typography className={styles.footerBasementText}>
            Политика конфиденциальности
          </Typography>
          <Typography className={styles.footerBasementText}>
            Пользовательское соглашение
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default FooterLarge;
