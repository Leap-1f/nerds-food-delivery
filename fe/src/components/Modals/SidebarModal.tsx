import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { Stack } from "@mui/material";
import { Typography } from "@mui/material";
import { useState, KeyboardEvent, MouseEvent, Fragment } from "react";
import ImageList from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import Image from "next/image";
type Anchor = "top" | "left" | "bottom" | "right";
import FoodImage from "../../../public/Image (1).png";

export default function SideBarModal() {
  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer =
    (anchor: Anchor, open: boolean) => (event: KeyboardEvent | MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as KeyboardEvent).key === "Tab" ||
          (event as KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

  const list = (anchor: Anchor) => (
    <Box
      sx={{ width: 586 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <Stack
        direction={"row"}
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          px: 3,
          pt: "26px",
        }}
      >
        <ArrowBackIosNewIcon
          sx={{ width: "48px", height: "48px", px: "6px", py: "2px" }}
        />
        <Typography variant="h6">Таны сагс</Typography>
        <Box sx={{ width: "48px" }}></Box>
      </Stack>
      <Box sx={{ px: 3, py: "27px" }}>
        <Stack direction={"row"} sx={{ p: 2, gap: 2 }}>
          <Box sx={{ width: "50%" }}>
            <img src="asdf.png" alt="" style={{ height: "100%" }} />
          </Box>
          <Box
            sx={{
              gap: 1,
              display: "flex",
              flexDirection: "column",
              width: "50%",
            }}
          >
            <Stack direction={"row"}>
              <Box sx={{ gap: "2px" }}>
                <Typography variant="h6">Main Pizza</Typography>
                <Box sx={{ color: "green" }}>34,800₮</Box>
              </Box>
              <Box sx={{ p: "5px" }}>
                <CloseIcon />
              </Box>
            </Stack>
            <Box>Хулуу, төмс, лууван , сонгино, цөцгийн тос, самрын үр </Box>
            <Box sx={{ display: "flex", gap: 1 }}>
              <Box
                sx={{
                  p: "30px",
                  background: "#18BA51",
                  borderRadius: "10px",
                  width: "45px",
                  justifyContent: "center",
                  alignItems: "center",
                  display: "flex",
                  height: "40px",
                  color: "white",
                }}
              >
                -
              </Box>
              <Box
                sx={{
                  p: "30px",
                  borderRadius: "10px",
                  width: "45px",
                  justifyContent: "center",
                  alignItems: "center",
                  display: "flex",
                  height: "40px",
                }}
              >
                1
              </Box>
              <Box
                sx={{
                  p: "30px",
                  background: "#18BA51",
                  borderRadius: "10px",
                  width: "45px",
                  justifyContent: "center",
                  alignItems: "center",
                  display: "flex",
                  height: "40px",
                  color: "white",
                }}
              >
                +
              </Box>
            </Box>
          </Box>
        </Stack>
      </Box>
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
