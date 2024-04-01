import { Box } from "@mui/material";

export const ErrorMessage = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        mt: "10%",
      }}
    >
      {" "}
      <Box
        sx={{
          border: "2px  solid blueviolet",
          width: "384px",
          display: "flex",
          columnGap: "7%",
          borderRadius: "10px",
          justifyContent: "center",
          py: "6px",
          color: " #670E13",
        }}
      >
        <Box>!</Box>
        <Box>Алдаа гарлаа дахин оролдно уу</Box>
      </Box>
    </Box>
  );
};
