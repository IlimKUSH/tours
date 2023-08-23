import { forwardRef } from "react";
import cx from "classnames";
import {
  Button as MUIButton,
  ButtonProps,
  CircularProgress,
} from "@mui/material";
import { lighten } from "@mui/material/styles";
import { Chevron } from "../../icons/chevron";
import styles from "./Button.module.scss";

interface IButtonProps extends Omit<ButtonProps, "component"> {
  buttonType?: "primary" | "secondary";
  loading?: boolean;
  progressStyles?: any;
  component?: "button" | "label";
  withChevron?: boolean;
}

const Button: React.ForwardRefRenderFunction<
  HTMLButtonElement,
  IButtonProps
> = (props, ref) => {
  const {
    variant = "contained",
    buttonType = "primary",
    sx,
    loading = false,
    disabled = false,
    progressStyles,
    children,
    withChevron = false,
    ...rest
  } = props;

  const renderSwitch = (param: string) => {
    switch (param) {
      case "primary":
        return "#121214";
      case "secondary":
        return "#00BDFF";
      default:
        return "#121214";
    }
  };

  const buttonStyles =
    variant === "contained"
      ? {
          backgroundColor: renderSwitch(buttonType),
          color: "#fff",
        }
      : {
          borderColor: renderSwitch(buttonType),
          color: renderSwitch(buttonType),
        };

  const mergedStyles = { ...buttonStyles, ...sx };

  const buttonStandardCN = cx(styles.button, {
    [styles.standard]: variant === "text",
  });

  return (
    <MUIButton
      className={buttonStandardCN}
      ref={ref}
      sx={mergedStyles}
      disabled={loading || disabled}
      variant={variant}
      {...rest}
    >
      {loading ? (
        <CircularProgress
          color="inherit"
          style={{ width: "28px", height: "28px", ...progressStyles }}
        />
      ) : (
        children
      )}
      {withChevron && <Chevron color={variant === "text" ? "#000" : "#fff"} />}
    </MUIButton>
  );
};

export default forwardRef<HTMLButtonElement, IButtonProps>(Button);
