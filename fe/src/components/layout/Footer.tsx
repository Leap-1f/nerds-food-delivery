import { Box, Stack } from "@mui/material";
import BlockWhiteIcon from "../icons/BlockWhiteIcon";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import { Divider } from "@mui/material";
export const Footer = () => {
  return (
    <Box sx={{ background: "#18BA51", pt: "114px", pb: "109px", px: 15 }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 5,
          width: "1200px",
          mx: "auto",
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
          <Link href="/login">
            <Typography
              variant="h6"
              noWrap
              sx={{
                flexGrow: 1,
                display: { xs: "none", sm: "block" },
                color: "white",
              }}
            >
              Нүүр
              <Divider
                sx={{ backgroundColor: "white", height: "2px" }}
              ></Divider>
            </Typography>
          </Link>
          <Link href="/">
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
              Холбоо барих
              <Divider
                sx={{ backgroundColor: "white", height: "2px" }}
              ></Divider>
            </Typography>
          </Link>
          <Link href="/menu">
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
              Хоолны цэс
              <Divider
                sx={{ backgroundColor: "white", height: "2px" }}
              ></Divider>
            </Typography>
          </Link>
          <Link href="/delivery">
            <Typography
              variant="h6"
              noWrap
              sx={{
                flexGrow: 1,
                display: { xs: "none", sm: "block" },
                color: "white",
              }}
            >
              Үйлчилгээний нөхцөл
              <Divider
                sx={{ backgroundColor: "white", height: "2px" }}
              ></Divider>
            </Typography>
          </Link>
          <Link href="/deliveryRange">
            <Typography
              variant="h6"
              noWrap
              sx={{
                flexGrow: 1,
                display: { xs: "none", sm: "block" },
                color: "white",
              }}
            >
              Хүргэлтийн бүс
              <Divider
                sx={{ backgroundColor: "white", height: "2px" }}
              ></Divider>
            </Typography>
          </Link>
          <Link href="/privacyPolicy">
            <Typography
              variant="h6"
              noWrap
              sx={{
                flexGrow: 1,
                display: { xs: "none", sm: "block" },
                color: "white",
              }}
            >
              Нууцлалын бодлого
              <Divider
                sx={{ backgroundColor: "white", height: "2px" }}
              ></Divider>
            </Typography>
          </Link>
        </Box>
        <Stack spacing={2} direction={"row"}>
          <Link href={"https://www.facebook.com"}>
            <FacebookIcon sx={{ color: "white" }} />
          </Link>
          <Link href={"https://www.instagram.com/"}>
            <InstagramIcon sx={{ color: "white" }} />
          </Link>
          <Link href={"https://twitter.com/"}>
            <TwitterIcon sx={{ color: "white" }} />
          </Link>
        </Stack>
        <Box sx={{ width: "100%" }}>
          <Divider sx={{ backgroundColor: "white", height: "2px" }}></Divider>
        </Box>
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
