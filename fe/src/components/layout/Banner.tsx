import { Box, Typography, Divider } from "@mui/material";
import { url } from "inspector";
import { URL } from "next/dist/compiled/@edge-runtime/primitives/url";

export const Banner = () => {
  return (
    <>
      <Box sx={{ bgcolor: "#18BA51", width: "100vw" }}>
        <Box
          sx={{
            mx: "auto",
            height: "70vh",
            backgroundColor: "#18BA51",
            display: "flex",
            backgroundImage: `url("./banner.svg")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            p: "20px",
          }}
        >
          <Box
            sx={{
              width: "50%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box sx={{ maxWidth: "450px" }}>
              <Typography
                sx={{
                  color: "#FFFFFF",
                  fontSize: "70px",
                  fontWeight: 500,
                  letterSpacing: "0.55px",
                  lineHeight: "60px",
                }}
              >
                Pinecone Food delivery
              </Typography>
              <Divider sx={{ my: "33px", background: "white" }}></Divider>
              <Typography
                sx={{
                  color: "#FFFFFF",
                  fontSize: "27px",
                  fontWeight: 200,
                  letterSpacing: "0.22px",
                  lineHeight: "29px",
                  fontFamily: "Comfortaa",
                }}
              >
                Horem ipsum dolor sit amet, consectetur adipiscing elit.
              </Typography>
            </Box>
          </Box>

          <Box sx={{ Width: "50%" }}>
            <Box
              sx={{
                width: "100%",
                position: "relative",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                src="/coverImg.png"
                alt="Food delivery image"
                className="w-3/4"
              />
              <img
                src="/coverImg2.png"
                className="absolute top-1/2 right-1/4 w-1/4"
              ></img>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};
