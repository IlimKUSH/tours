import { Container, styled } from "@mui/material";
import theme from "../../../themes/default";

export const BannerContainer = styled(Container)({
  [theme.breakpoints.up("xl")]: {
    maxWidth: "1541px",
    // padding: "0px",
  },
});
