import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { Stack, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import Image from "next/image";
import { useGlobalContext } from "../utils/Context";
import { Fragment } from "react";

type Anchor = "right";

interface Tprops {
  open: boolean;
  onClose: () => void;
}

export default function SideBarModal({ open, onClose }: Tprops) {
  const { selectedMeal } = useGlobalContext();
  const [state, setState] = React.useState({
    right: open, // Initialize right property based on open prop
  });

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event &&
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

  const list = (anchor: Anchor) => (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "100vh",
      }}
    >
      {/* Rest of your component */}
    </Box>
  );

  return (
    <div>
      {(["right"] as const).map((anchor) => (
        <Fragment key={anchor}>
          <Typography
            onClick={toggleDrawer(anchor, true)}
            sx={{ color: "black" }}
            variant="h6"
            noWrap
            component="div"
          >
            Сагс
          </Typography>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </Fragment>
      ))}
    </div>
  );
}
