import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import BlockIcon from "../icons/BlockIcon";
import BasketIcon from "../icons/BasketIcon";
import VectorIcon from "../icons/VectorIcon";
import { Grid, Stack } from "@mui/material";
import Link from "next/link";
<<<<<<< HEAD
import { useState } from "react";
import { Interface } from "readline";
import { tree } from "next/dist/build/templates/app-page";


=======
import { useGlobalContext } from "../utils/Context";
import SideBarModal from "../Modals/SidebarModal";
>>>>>>> footer
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
  const { color, setColor } = useGlobalContext();

  return (
    <Box sx={{ mx: "auto", width: "1248px" }}>
      <Grid
        container
        direction={"row"}
        justifyContent={"space-between"}
        sx={{ px: 3, py: 1 }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
          <BlockIcon />
          <Stack direction={"row"} spacing={1}>
            <Link href="/login">
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
<<<<<<< HEAD

            <Link href="/orderTest">
              <Typography
                onClick={() => {
                  setColor((prevState) => ({
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
                Сагс
              </Typography>
            </Link>
=======
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
>>>>>>> footer
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
            <Link href="/login">
              <Typography
                onClick={() => {
                  setColor((prevState: any) => ({
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
                }}
              >
                Нэвтрэх
              </Typography>
            </Link>
          </Box>
        </Box>
      </Grid>
    </Box>
  );
}
