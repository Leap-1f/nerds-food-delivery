import Box from "@mui/material/Box";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import { useGlobalContext } from "../utils/Context";



export const FoodCart = () => {
  const {searchQuery, setSearchQuery} = useGlobalContext();
  console.log(searchQuery);
  
  const cart = [
    {
      name: "Өглөөний хоол",
      price: "14,000₮",
      dsprice: "16,800₮",
      discount: "20%",
      img: "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg",
    },
    {
      name: "Зайрмаг",
      price: "4,000₮",
      dsprice: "5,800₮",
      discount: "20%",
      img: "https://redroserestaurant.softinfinitytechnology.com/wp-content/uploads/2021/10/from-the-us-russia-to-india-an-ice-cream-bowl-has-a-long-political-history.jpg",
    },
    {
      name: "Өглөөний хоол",
      price: "24,000₮",
      dsprice: "28,800₮",
      discount: "20%",
      img: "https://www.jigsawexplorer.com/puzzles/subjects/skillet-breakfast-436x300.jpg",
    },

    {
      name: "Өглөөний хоол",
      price: "14,000₮",
      dsprice: "16,800₮",
      discount: "20%",
      img: "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg",
    },
  ];
  const saleMeals = [
    {
      img: "./star.svg",
      name: "Хямдралтай",
      seeAll: "Бүгд харах",
      img2: "./seeAll.svg",
      category: "Breakfast",
    },
    {
      img: "./star.svg",
      name: "Үндсэн хоол",
      seeAll: "Бүгд харах",
      img2: "./seeAll.svg",
      category: "Soup",
    },
    {
      img: "./star.svg",
      name: "Салад ба зууш",
      seeAll: "Бүгд харах",
      img2: "./seeAll.svg",
      category: "MainFood",
    },
    {
      img: "./star.svg",
      name: "Амттан",
      seeAll: "Бүгд харах",
      img2: "./seeAll.svg",
      category: "Dessert",
    },
  ];
const filteredCart = cart.filter((item) =>
  searchQuery
    ? item.name.toLowerCase().includes(searchQuery.toLowerCase())
    : true
);

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
        }}
      >
        {saleMeals.map((el) => (
          <Box
            sx={{
              height: "30%",
              gap: "24px",
              margin: "0px, auto",
              marginTop: "3%",
            }}
          >
            <Box
              sx={{
                maxWidth: "1250px",
                marginLeft: "auto",
                marginRight: "auto",
                gap: "26px",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  maxWidth: "1250px",
                  marginLeft: "auto",
                  marginRight: "auto",
                  marginTop: "2%",
                }}
              >
                <img
                  src={el.img}
                  alt=""
                  style={{ width: "32px", height: "32px" }}
                />
                <p
                  style={{
                    width: "85%",
                    height: "10%",
                    fontWeight: "700",
                    fontSize: "22px",
                    lineHeight: "33px",
                    color: "#272727",
                  }}
                >
                  {el.name}
                </p>
                <Link href="/menu">
                  <Box
                    sx={{
                      width: "8%",
                      height: "10%",
                      gap: "2px",
                      display: "flex",
                      justifyContent: "space-between",
                      cursor: "pointer",
                    }}
                  >
                    <p
                      style={{
                        fontWeight: "500",
                        fontSize: "14px",
                        lineHeight: "16px",
                        alignItems: "center",
                        color: "#18BA51",
                      }}
                    >
                      {el.seeAll}
                    </p>
                    <img src={el.img2} alt="" />
                  </Box>
                </Link>
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                marginLeft: "auto",
                marginRight: "auto",
                marginTop: "2%",
              }}
            >
              {filteredCart.map((el) => (
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
        ))}
      </Box>
    </Box>
  );
};
