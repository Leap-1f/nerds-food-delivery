import { Box } from "@mui/material";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";

export const MockData = () => {
  const data = [
    {
      name: "Өглөөний хоол",
      category: "Breakfast",
      price: "14,000₮",
      dsprice: "16,800₮",
      discount: "20%",
      img: "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg",
    },
    {
      name: "Зайрмаг",
      category: "Breakfast",
      price: "4,000₮",
      dsprice: "5,800₮",
      discount: "20%",
      img: "https://redroserestaurant.softinfinitytechnology.com/wp-content/uploads/2021/10/from-the-us-russia-to-india-an-ice-cream-bowl-has-a-long-political-history.jpg",
    },
    {
      name: "Өглөөний хоол",
      category: "Breakfast",
      price: "24,000₮",
      dsprice: "28,800₮",
      discount: "20%",
      img: "https://www.jigsawexplorer.com/puzzles/subjects/skillet-breakfast-436x300.jpg",
    },

    {
      name: "Амттан",
      category: "Breakfast",
      price: "14,000₮",
      dsprice: "16,800₮",
      discount: "20%",
      img: "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg",
    },
    {
      name: "Aмттан",
      category: "Dessert",
      price: "12,000₮",
      dsprice: "16,800₮",

      img: "https://www.kateskitchenkc.com/wp-content/uploads/2023/10/traditional-full-american-breakfast-eggs-pancakes-with-bacon-and-toast.jpg_s1024x1024wisk20cz03ui5Oqyz8Ys_pG0bVWsgoz_v_E5Oct4x-0C-sAjME.jpg",
    },
    {
      name: "Aмттан",
      category: "Dessert",
      price: "12,000₮",
      dsprice: "16,800₮",

      img: "https://www.foodandwine.com/thmb/ckc6L6xKox0WfpfO6dMkuVGPQOY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Angel-Food-Cake-with-Three-Berry-Compote-FT-RECIPE0323-541a780b871441e0ab14383ee38acc44.jpg",
    },
    {
      name: "Өглөөний хоол",
      category: "Breakfast",
      price: "24,000₮",
      dsprice: "28,800₮",

      img: "https://www.jigsawexplorer.com/puzzles/subjects/skillet-breakfast-436x300.jpg",
    },
    {
      name: "Өглөөний хоол",
      category: "Breakfast",
      price: "14,000₮",
      dsprice: "16,800₮",
      img: "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg",
    },
  ];
  return (
    <Box>
      <Box
        sx={{
          bgcolor: "white",
          gap: "24px",
          margin: "0px auto",
          width: "100%",
          maxWidth: "1250px",
          marginTop: "5%",
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
        }}
      >
        {data.map((el) => (
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              width: "20%",
            }}
          >
            <Box
              sx={{
                position: "relative",
                width: "100%",
                height: "60%",
              }}
            >
              <img
                src={el.img}
                style={{
                  objectFit: "cover",
                  height: "100%",
                  width: "100%",
                  maxHeight: "100%",
                  maxWidth: "100%",
                  border: "1px",
                  borderRadius: "10px",
                }}
              />
              <Typography
                border={1}
                borderRadius={5}
                width={60}
                bgcolor="#18BA51"
                color={"white"}
                justifyContent={"center"}
                align="center"
                position={"absolute"}
                top="10%"
                right="5%"
                borderColor={"white"}
              >
                {el.discount}
              </Typography>
            </Box>
            <Box>
              <Typography
                fontSize={16}
                color={"black"}
                fontWeight={600}
                paddingTop={3}
              >
                {el.name}
              </Typography>
              <CardActions sx={{ gap: 2, fontSize: 16, padding: 0 }}>
                <Typography color="green">{el.price}</Typography>
                <Typography
                  sx={{ textDecoration: "line-through" }}
                  color="text.secondary"
                >
                  {el.dsprice}
                </Typography>
              </CardActions>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};
