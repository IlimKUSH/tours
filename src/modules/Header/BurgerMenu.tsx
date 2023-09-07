import { Box, Drawer, IconButton, List, ListItemButton } from "@mui/material";
import DragHandleIcon from "@mui/icons-material/DragHandle";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { NavItems } from "../../contstants/nav-items";
import styles from "./Header.module.scss";

const BurgerMenu = () => {
  const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <Box>
      {["left"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Drawer
            open={openDrawer}
            onClose={() => setOpenDrawer(false)}
            anchor={anchor}
            sx={{
              "& .MuiDrawer-paper": {
                backgroundColor: "#121214",
              },
            }}
          >
            <List>
              <ListItemButton>
                <Box className={styles.anchorBox}>
                  {NavItems.map(({ title, path }, idx) => (
                    <Link key={idx} className={styles.link} to={path}>
                      {title}
                    </Link>
                  ))}
                </Box>
              </ListItemButton>
            </List>
          </Drawer>
          <IconButton onClick={() => setOpenDrawer(!openDrawer)}>
            <DragHandleIcon sx={{ fill: "white", fontSize: "35px" }} />
          </IconButton>
        </React.Fragment>
      ))}
    </Box>
  );
};

export default BurgerMenu;
