import React from "react";
import OrderModal from "@/components/modals/OrderModal";
import { FoodCart, InfoCard } from "@/components/ui/index";
import { Box, Stack } from "@mui/material";

export default function Menu() {
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
          maxWidth: "1250px",
          width: "1616px",
          margin: "0px, auto",
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
            }}
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
      <Box>
        {saleMeals.map((el) => (
          <Box
            sx={{
              height: "30%",
              gap: "24px",
              margin: "0px, auto",
              marginTop: "2%",
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
                  width: "1616px",
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
                <Box
                  sx={{
                    width: "8%",
                    height: "10%",
                    gap: "2px",
                    display: "flex",
                    justifyContent: "space-between",
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
              </Box>
            </Box>
            <Box sx={{ marginTop: "20px" }}>
              <FoodCart></FoodCart>
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
