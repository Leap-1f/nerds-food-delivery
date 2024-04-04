import React from "react";
import {
  Typography,
  InputBase,
  Box,
  styled,
  alpha,
  Grid,
  Stack,
  Modal,
  Fade,
  Button,
  Backdrop,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import BlockIcon from "../icons/BlockIcon";
import BasketIcon from "../icons/BasketIcon";
import VectorIcon from "../icons/VectorIcon";
import Link from "next/link";
import { useState } from "react";
import { LoginModal } from "../Modals";
import { Interface } from "readline";
import { tree } from "next/dist/build/templates/app-page";

import { useGlobalContext } from "../utils/Context";
import SideBarModal from "../Modals/SidebarModal";

const style = {
  position: "absolute" as "absolute",
  top: "40%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  maxWidth: 450,
  maxHeight: 550,
  bgcolor: "background.paper",
  boxShadow: 24,
  borderRadius: "12px",
};

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  border: 1,
  width: "220px",
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),

    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    [theme.breakpoints.up("sm")]: {
      width: "auto",
      "&:focus": {
        width: "auto",
      },
    },
  },
}));

export default function Header() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [color, setColor] = useState({
    nuur: false,
    hool: false,
    hurgelt: false,
    sags: false,
    newtreg: false,
  });
  const { color, setColor } = useGlobalContext();

  return (
    <Box sx={{ mx: "auto", maxWidth: "1248px" }}>
      <Grid
        container
        direction={"row"}
        justifyContent={"space-between"}
        sx={{ px: 3, py: 1 }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
          <BlockIcon />
          <Stack direction={"row"} spacing={1}>
            <Link href="/">
              <Typography
                onClick={() => {
                  setColor((prevState: any) => ({
                    ...prevState,
                    nuur: true,
                    hool: false,
                    hurgelt: false,
                    sags: false,
                    newtreg: false,
                  }));
                }}
                variant="h6"
                noWrap
                component="div"
                sx={{
                  color: color.nuur ? "green" : "black",
                  p: 2,
                }}
              >
                Нүүр
              </Typography>
            </Link>
            <Link href="/menu">
              <Typography
                onClick={() => {
                  setColor((prevState: any) => ({
                    ...prevState,
                    nuur: false,
                    hool: true,
                    hurgelt: false,
                    sags: false,
                    newtreg: false,
                  }));
                }}
                variant="h6"
                noWrap
                component="div"
                sx={{
                  flexGrow: 1,
                  display: { xs: "none", sm: "block" },
                  color: color.hool ? "green" : "black",
                  p: 2,
                }}
              >
                Хоолны цэс
              </Typography>
            </Link>

            <Link href="/deliveryRange">
              <Typography
                onClick={() => {
                  setColor((prevState: any) => ({
                    ...prevState,
                    nuur: false,
                    hool: false,
                    hurgelt: true,
                    sags: false,
                    newtreg: false,
                  }));
                }}
                variant="h6"
                noWrap
                component="div"
                sx={{
                  flexGrow: 1,
                  display: { xs: "none", sm: "block" },
                  color: color.hurgelt ? "green" : "black",
                  p: 2,
                }}
              >
                Хүргэлтийн бүс
              </Typography>
            </Link>
          </Stack>
        </Box>
        <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
          <Search sx={{ border: "1px solid black" }}>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Хайх"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>

          <Box
            sx={{
              px: 2,
              display: "flex",
              py: 1,
              gap: "8px",
              alignItems: "center",
              p: 2,
            }}
          >
            <BasketIcon />

            <Typography
              onClick={() => {
                setColor((prevState: any) => ({
                  ...prevState,
                  nuur: false,
                  hool: false,
                  hurgelt: false,
                  sags: true,
                  newtreg: false,
                }));
              }}
              variant="h6"
              noWrap
              component="div"
              sx={{
                flexGrow: 1,
                display: { xs: "none", sm: "block" },
                color: color.sags ? "green" : "black",
              }}
            >
              <SideBarModal />
            </Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              px: 2,
              py: 1,
              gap: "8px",
              alignItems: "center",
              p: 2,
            }}
          >
            <VectorIcon />
            <Typography
              onClick={() => {
                handleOpen();

                setColor((prevState) => ({
                  ...prevState,
                  nuur: false,
                  hool: false,
                  hurgelt: false,
                  sags: false,
                  newtreg: true,
                }));
              }}
              variant="h6"
              noWrap
              component="div"
              sx={{
                flexGrow: 1,
                display: { xs: "none", sm: "block" },
                color: color.newtreg ? "green" : "black",
                '&:hover': {
                  cursor:'pointer'
                },
              }}
            >
              {" "}
              Нэвтрэх
            </Typography>
            <Modal
              aria-labelledby="transition-modal-title"
              aria-describedby="transition-modal-description"
              open={open}
              onClose={handleClose}
              closeAfterTransition
              slots={{ backdrop: Backdrop }}
              slotProps={{
                backdrop: {
                  timeout: 500,
                },
              }}
            >
              <Fade in={open}>
                <Box sx={style}>
                  <LoginModal></LoginModal>
                </Box>
              </Fade>
            </Modal>
          </Box>
        </Box>
      </Grid>
    </Box>
  );
}
