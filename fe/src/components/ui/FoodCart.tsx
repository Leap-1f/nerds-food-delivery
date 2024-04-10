import Box from "@mui/material/Box";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import { useEffect, useState } from "react";
import { useGlobalContext } from "../utils/Context";
import OrderModal from "../modals/OrderModal";
import { Meal } from "../utils/Context";
import SideBarModal from "../modals/SidebarModal";

export const FoodCart = () => {
  const { food, setFood, selectedMeal, setSelectedMeal, quantity, setQuantity, open, setOpen, sideBarOpen, setSideBarOpen } = useGlobalContext();

  const handleOpen = (meal: Meal) => {
    setSelectedMeal(meal);
    setOpen(true);
    handleOpenSideBar();
  };

  const handleClose = () => {
    setOpen(false);
    handleCloseSideBar();
  };

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleOpenSideBar = () => {
    setSideBarOpen(true);
  };

  const handleCloseSideBar = () => {
    setSideBarOpen(false);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:8080/food/", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) {
          throw new Error("Failed to fetch data from the server");
        }

        const data = await response.json();
        setFood(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

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

  return (
    <Box>
      <Box
        sx={{
          bgcolor: "white",
          gap: "24px",
          margin: "0px auto",
          maxWidth: "100%",
          marginTop: "5%",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: "1rem",
            justifyContent: "space-between",
          }}
        >
          {food.map((el, i) => (
            <Box
              key={i}
              sx={{
                display: "flex",
                flexDirection: "column",
                width: "20%",
                "@media (max-width: 768px)": {
                  width: "45%",
                },
                height: "250px",
              }}
              onClick={() => handleOpen(el)}
            >
              <Box
                sx={{
                  position: "relative",
                  width: "100%",
                  marginBottom: "0.5rem",
                  height: "70%",
                }}
              >
                <img
                  src={el.img}
                  style={{
                    objectFit: "cover",
                    width: "100%",
                    height: "100%",
                    maxWidth: "100%",
                    borderRadius: "10px",
                  }}
                />
              </Box>
              <Box style={{ height: "30%" }}>
                <Typography
                  variant="subtitle1"
                  fontWeight="bold"
                  color="text.primary"
                  marginBottom="0.5rem"
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
      <OrderModal
        open={open}
        onClose={handleClose}
        meal={selectedMeal}
        quantity={quantity}
        onIncrement={handleIncrement}
        onDecrement={handleDecrement}
      />
      <SideBarModal open={sideBarOpen} onClose={() => setSideBarOpen(false)} />
    </Box>
  );
};
