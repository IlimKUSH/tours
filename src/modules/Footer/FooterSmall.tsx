import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { IconButton, Box, TextField, InputAdornment } from "@mui/material";
import { FooterLogo } from "../../components/icons/footerLogo";
import { footerContentSmall } from "../../contstants/footer-items";
import styles from "./Footer.module.scss";
import { InputButton } from "../../components/icons/inputButton";

export default function FooterSmall() {
  return (
    <Box className={styles.containerSmall}>
      <IconButton sx={{ mb: "25px" }}>
        <FooterLogo />
      </IconButton>

      {Object.values(footerContentSmall).map((column, columnIndex) => (
        <Box sx={{ mb: "21px" }}>
          <Accordion key={columnIndex} className={styles.accordionBox}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{ fill: "white" }} />}
              aria-controls={`panel${columnIndex}-content`}
            >
              <Typography className={styles.columnHead}>
                {column.find((item) => item.bold)?.label}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Box className={styles.accordionItems}>
                {column
                  .filter((item) => !item.bold) // Фильтруем элементы без bold
                  .map((item, itemIndex) => (
                    <Typography
                      className={styles.columnContent}
                      key={itemIndex}
                    >
                      {item.label}
                    </Typography>
                  ))}
              </Box>
            </AccordionDetails>
          </Accordion>
        </Box>
      ))}

      <Box className={styles.iconsBoxSmall}>
        {footerContentSmall.column3
          .find((item) => item.iconsArray)
          ?.iconsArray.map((icon, iconIndex) => (
            <Box key={iconIndex}>{icon.icons}</Box>
          ))}
      </Box>

      <Box className={styles.newsBoxSmall}>
        <Box className={styles.newsTextBox}>
          <Typography
            className={styles.columnHead}
            sx={{ textAlign: "center" }}
          >
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
      <Box className={styles.textExtraBox}>
        <Typography className={styles.columnContentExtraSmall}>
          Подписываясь на рассылку вы соглашатесь с обработкой персональных
          данных
        </Typography>
        <Typography className={styles.footerBasementText}>
          Политика конфиденциальности
        </Typography>
        <Typography className={styles.footerBasementText}>
          Пользовательское соглашение
        </Typography>
      </Box>
    </Box>
  );
}
