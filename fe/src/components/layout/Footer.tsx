import { Box, Stack } from "@mui/material";
import BlockWhiteIcon from "../icons/BlockWhiteIcon";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import Grid from "@mui/material/Grid";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import { BorderColor } from "@mui/icons-material";
export const Footer = () => {
  return (
    <Box sx={{ background: "#18BA51" }}>
      <Box
        sx={{
          px: 15,
          pt: "114px",
          pb: "109px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 5,
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", color: "#fff" }}>
          <Box sx={{ p: "7.18px" }}>
            <BlockWhiteIcon />
          </Box>
          <Box sx={{ fontSize: "20px" }}>Food Delivery</Box>
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{
              flexGrow: 1,
              display: { xs: "none", sm: "block" },
              color: "white",
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
              color: "white",
            }}
          >
            <Link href="./login">Холбоо барих</Link>
          </Typography>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{
              flexGrow: 1,
              display: { xs: "none", sm: "block" },
              color: "white",
            }}
          >
            <Link href="./login">Хоолны цэс</Link>
          </Typography>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{
              flexGrow: 1,
              display: { xs: "none", sm: "block" },
              color: "white",
            }}
          >
            <Link href="./login">Үйлчилгээний нөхцөл</Link>
          </Typography>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{
              flexGrow: 1,
              display: { xs: "none", sm: "block" },
              color: "white",
            }}
          >
            <Link href="./login">Хүргэлтийн бүс</Link>
          </Typography>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{
              flexGrow: 1,
              display: { xs: "none", sm: "block" },
              color: "white",
            }}
          >
            <Link href="./login">Хүргэлтийн бүс</Link>
          </Typography>
        </Box>
        <Stack spacing={2} direction={"row"}>
          <FacebookIcon sx={{ color: "white" }} />
          <InstagramIcon sx={{ color: "white" }} />
          <TwitterIcon sx={{ color: "white" }} />
        </Stack>
        <Box>h2!!</Box>
        <Box sx={{ color: "#fff", gap: 1 }}>
          <Box
            sx={{ justifyContent: "center", width: "full", display: "flex" }}
          >
            © 2024 Pinecone Foods LLC{" "}
          </Box>
          <Box>Зохиогчийн эрх хуулиар хамгаалагдсан.</Box>
        </Box>
      </Box>
    </Box>
  );
};
export default Footer;
