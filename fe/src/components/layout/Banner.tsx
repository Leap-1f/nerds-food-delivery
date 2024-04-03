import { Box, Typography, Divider } from "@mui/material";
import { url } from "inspector";
import { URL } from "next/dist/compiled/@edge-runtime/primitives/url";

export const Banner = () => {
  return (
    <>
      <Box
        sx={{
          mx: "auto",
          max: "100wh",
          height: "100vh",
          backgroundColor: "#18BA51",
          display: "flex",
          minHeight: "100vh",
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

        <Box sx={{ Width: "50%", position: "relative" }}>
          <Box
            sx={{
              width: "1000px",
              position: "relative",
              marginTop: "20%",
            }}
          >
            {" "}
            <img
              src="/coverImg.png"
              alt="Food delivery image"
              className=" absolute w-[920px] max-[1200px]:w-[620px] max-[930px]:w-[420px]  max-[930px]:mt-[150px] "
            />
            <img
              src="/coverImg2.png"
              className="absolute max-w-[400px] left-[53%] top-[370px] max-[1200px]:w-[220px]  max-[1200px]:left-[38%] max-[1200px]:top-[300px] max-[930px]:left-[26%] max-[930px]:top-[220px]  max-[930px]:mt-[150px]   max-[930px]:w-[120px]"
            ></img>
          </Box>
        </Box>
      </Box>
    </>
  );
};
