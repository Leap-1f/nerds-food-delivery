import Box from "@mui/material/Box";
import CardActions from "@mui/material/CardActions";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

export const FoodCart = () => {

  return (
    <Box
      sx={{
        backgroundColor: "white",
        gap: "14px",
        padding: "30px",
      }}
    >
      <Box sx={{ height: 246 }}>
        <Box sx={{ maxWidth: 282 }}>
          <CardMedia
            sx={{ height: 186 }}
            image="./Image.png"
            title="green iguana"
          />
          <Typography fontSize={16} padding={1} color={"black"}>
            Өглөөний хоол
          </Typography>
          <CardActions sx={{ gap: 2, fontSize: 16 }}>
            <Typography color="green">14,800₮</Typography>
            <Typography color="text.secondary">16,800₮</Typography>
          </CardActions>
        </Box>
      </Box>
    </Box>
  );
};
