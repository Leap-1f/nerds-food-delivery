import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { Stack } from "@mui/material";
import { Typography } from "@mui/material";
import { useState, KeyboardEvent, MouseEvent, Fragment } from "react";
import CloseIcon from "@mui/icons-material/Close";
import Image from "next/image";

type Anchor = "right";

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
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "100vh",
      }}
    >
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
              <Image
                src={"/pizza.png"}
                alt="PizzaPhoto"
                style={{ height: "100%" }}
              />
            </Box>
            <Box
              sx={{
                gap: 1,
                display: "flex",
                flexDirection: "column",
                width: "50%",
              }}
            >
              <Stack
                direction={"row"}
                style={{
                  justifyContent: "space-between",
                }}
              >
                <Box sx={{ gap: "2px" }}>
                  <Typography variant="h6">Main Pizza</Typography>
                  <Box sx={{ color: "green" }}>34,800₮</Box>
                </Box>
                <Box sx={{ p: "5px", alignContent: "center" }}>
                  <CloseIcon sx={{ height: "30px", width: "30px" }} />
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
      <Box
        sx={{
          display: "flex",
          gap: "10px",
          px: 4,
          pt: "10px",
          pb: 5,
        }}
      >
        <Box
          width={"50%"}
          sx={{
            display: "flex",

            flexDirection: "column",
          }}
        >
          <Box>Нийт төлөх дүн</Box>
          <Typography variant="h6">34,800₮</Typography>
        </Box>
        <Box width={"50%"} sx={{ display: "flex", alignContent: "center" }}>
          <Box
            sx={{
              bgcolor: "#18BA51",
              px: 2,
              py: 1,
              borderRadius: "4px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
              color: "white",
            }}
          >
            Захиалах
          </Box>
        </Box>
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
