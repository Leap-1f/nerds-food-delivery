import { FoodCart } from "@/components/ui";
import { Box, Stack } from "@mui/material";
import { useState, useEffect } from "react";
export default function Search() {
  interface FoodItem {
    id: string;
    name: string;
    price: number;
  }
  const [food, setFood] = useState(Array<FoodItem>);
  async function searchFood() {
    const searchFood = await fetch("http://localhost:8080/food/search", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: wow,
      }),
    })
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        return response;
      })
      .then((response) => setFood(response));
  }
  useEffect(() => {
    searchFood();
  }, [wow]);
  return (
    <Stack direction="row" spacing={2}>
      {food.map((item) => (
        <Box>{item.name}</Box>
      ))}
    </Stack>
  );
}
