import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import BlockIcon from "../icons/BlockIcon";
import BasketIcon from "../icons/BasketIcon";
import VectorIcon from "../icons/VectorIcon";
import { Grid, Stack } from "@mui/material";
import { borderColor } from "@mui/system";
import Link from "next/link";
const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  border: 1,
  borderColor: "error.main",
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",

  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
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
    // vertical padding + font size from searchIcon
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

export default function SearchAppBar() {
  return (
    <Box sx={{ p: 2 }}>
      <Box sx={{ px: "107px" }}>
        <Grid container direction={"row"} justifyContent={"space-between"}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
            <BlockIcon />
            <Stack direction={"row"} spacing={1}>
              <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{
                  color: "black",
                  p: 2,
                }}
              >
                <Link href="./login">Нүүр</Link>
              </Typography>
              <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{
                  flexGrow: 1,
                  display: { xs: "none", sm: "block" },
                  color: "black",
                  p: 2,
                }}
              >
                <Link href="/menu">Хоолны цэс</Link>
              </Typography>
              <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{
                  flexGrow: 1,
                  display: { xs: "none", sm: "block" },
                  color: "black",
                  p: 2,
                }}
              >
                <Link href="../deliveryRange">Хүргэлтийн бүс</Link>
              </Typography>
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
                variant="h6"
                noWrap
                component="div"
                sx={{
                  flexGrow: 1,
                  display: { xs: "none", sm: "block" },
                  color: "black",
                }}
              >
                <Link href="./OrderHistory">Сагс</Link>
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
                variant="h6"
                noWrap
                component="div"
                sx={{
                  flexGrow: 1,
                  display: { xs: "none", sm: "block" },
                  color: "black",
                }}
              >
                <Link href="./login">Нэвтрэх</Link>
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Box>
    </Box>
  );
}
