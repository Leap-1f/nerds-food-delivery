import React from "react";
import OrderModal from "@/components/modals/OrderModal";
import { Box, Stack } from "@mui/material";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import { useState, useEffect } from "react";

interface FoodItem {
  name: string;
  price: number;
  discountedPrice?: number;
  image: string;
  category: string;
}

export default function Menu() {
  const [foodItems, setFoodItems] = useState<FoodItem[]>([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [breakfast, setBreakfast] = useState<FoodItem[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const foodResponse = await fetch("http://localhost:8080/food");
        const foodData: FoodItem[] = await foodResponse.json();
        setFoodItems(foodData);
        console.log("testing: ", foodData);

        const res = await fetch("http://localhost:8080/category/breakfast");
        const data: any = await res.json();
        setBreakfast(data.foodId);
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    };
    fetchData();
  }, []);

  const saleMeals = [
    {
      category: "Breakfast",
    },
    {
      category: "Soup",
    },
    {
      category: "MainFood",
    },
    {
      category: "Dessert",
    },
  ];
  const handleCategorySelect = (foodId: any) => {
    setSelectedCategory(foodId);
  };

  const filteredData = foodItems
    .concat(selectedCategory === "Breakfast" ? breakfast : [])
    .filter(
      (el) => selectedCategory === "" || el.category === selectedCategory
    );
  console.log(breakfast);

  return (
    <Box>
      {/* Updated maxWidth value */}
      <Box
        sx={{
          maxWidth: "1248px",
          margin: "0px auto",
          marginLeft: "auto",
          marginRight: "auto",
          marginTop: "2%",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        {saleMeals.map((el) => (
          <Box
            sx={{
              width: "20%",
              height: "43px",
              border: "1px solid gray",
              borderRadius: "8px",
              borderColor: "#D6D8DB",
              textAlign: "center",
              alignContent: "center",
              cursor: "pointer",
              backgroundColor:
                selectedCategory === el.category ? "#18BA51" : "transparent",
            }}
            onClick={() => handleCategorySelect(el.category)}
          >
            <button
              style={{
                fontSize: "18",
                fontWeight: "500",
                color: "#000000",
              }}
            >
              {el.category}
            </button>
          </Box>
        ))}
      </Box>
      <Box
        sx={{
          maxWidth: "1248px",
          marginLeft: "auto",
          marginRight: "auto",
          marginTop: "7%",
          display: "flex",
          justifyContent: "space-between",
          gap: "5px",
          flexWrap: "wrap",
          rowGap: "35px",
        }}
      >
        {filteredData.map((el) => (
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              width: "23%",
              height: "270px",
            }}
          >
            <Box
              sx={{
                position: "relative",
                width: "100%",
                height: "70%",
              }}
            >
              <img
                src={el.image}
                style={{
                  objectFit: "cover",
                  height: "100%",
                  width: "100%",
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
                {el.discountedPrice}
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                height: "30%",
              }}
            >
              <Typography fontSize={16} color={"black"} fontWeight={600}>
                {el.name}
              </Typography>
              <CardActions sx={{ gap: 2, fontSize: 16, padding: 0 }}>
                <Typography color="green">{el.price}</Typography>
                <Typography
                  sx={{ textDecoration: "line-through" }}
                  color="text.secondary"
                >
                  {el.discountedPrice}
                </Typography>
              </CardActions>
            </Box>
          </Box>
        ))}
      </Box>

      <Stack direction={"row"} justifyContent={"center"}>
        <OrderModal></OrderModal>
      </Stack>
    </Box>
  );
}
