import { Box, Container, Typography } from "@mui/material";

export const NotFound = () => {
  return (
    <Container>
      {" "}
      <Box
        sx={{
          border: "2px solid blueviolet",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          rowGap: "30%",
          p: "30px",
          width:'auto'
        }}
      >
        <img src="./error.svg" className=" max-w-[70px]" alt="" />
        <Typography sx={{ p: "20px", color: "#808080" }}>
          Уучлаарай, систем ачааллахад алдаа гарлаа.
        </Typography>
      </Box>
    </Container>
  );
};
