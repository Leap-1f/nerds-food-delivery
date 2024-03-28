import { Stack, Box, Typography, Button } from "@mui/material";
import Image from "next/image";
import { useState, useEffect } from "react";
export function OrderDetail(info: string, color: any, disabled: boolean) {
  const [cart, setCart] = useState([
    {
      name: "Main Pizza",
      price: 34800,
      desc: "Хулуу, төмс, лууван , сонгино, цөцгийн тос, самрын үр",
      img: "/image.png",
    },
    {
      name: "Main Pizza",
      price: 34800,
      desc: "Хулуу, төмс, лууван , сонгино, цөцгийн тос, самрын үр",
      img: "/image.png",
    },
    {
      name: "Main Pizza",
      price: 34800,
      desc: "Хулуу, төмс, лууван , сонгино, цөцгийн тос, самрын үр",
      img: "/image.png",
    },
  ]);
  const [totalPrice, setTotalPrice] = useState(0);
  function getCart() {
    /* insert localstorage and stuff here */
  }
  function numberWithCommas(x: number) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  function getTotal() {
    let total = 0;
    cart.forEach((obj) => {
      total += obj.price;
    });
    setTotalPrice(total);
  }
  useEffect(() => {
    getTotal();
  }, []);
  return (
    <Stack
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      direction="column"
      spacing={3}
    >
      <Stack direction="row" spacing={3}>
        <Box>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <circle cx="12" cy="12" r="12" fill={color} />
          </svg>
        </Box>
        <Stack direction="column">
          <Typography
            sx={{ fontSize: "14px", color: "#8B8E95", fontWeight: "400" }}
          >
            Алхам 2
          </Typography>
          <Typography variant="h6" sx={{ fontWeight: "300" }}>
            Захиалга баталгаажуулах
          </Typography>
          <Typography sx={{ fontWeight: "300", color: { color } }}>
            {info}
          </Typography>
        </Stack>
      </Stack>
      <Stack
        sx={{
          p: 3,
          borderRadius: 2,
          boxShadow: "0px 0px 20px 0px rgba(0, 0, 0, 0.05)",
          width: "25vw",
          height: "70vh",
        }}
      >
        {cart.map((item) => (
          <Stack
            sx={{
              width: "100%",
              height: "20%",
              borderBottom: "1px",
              borderTop: "1px",
              padding: "8px 0px",
              borderStyle: "solid",
              borderColor: "#D6D8DB",
              borderBottomColor: "#D6D8DB7F",
            }}
            direction="row"
            spacing={2}
          >
            <Image
              src={item.img}
              width={150}
              height={100}
              alt={item.name}
              style={{ objectFit: "cover" }}
            />
            <Stack>
              <Typography variant="h6">{item.name}</Typography>
              <Typography
                sx={{ color: "#18BA51", fontSize: "18px", fontWeight: "700" }}
              >
                {numberWithCommas(item.price)}₮
              </Typography>
              <Typography
                sx={{ fontSize: "16px", fontWeight: "300", color: "#767676" }}
              >
                {item.desc}
              </Typography>
            </Stack>
          </Stack>
        ))}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-around",
            marginTop: "auto",
          }}
        >
          <Stack direction="column">
            <Typography
              sx={{ fontSize: "18px", color: "#5E6166", fontWeight: "300" }}
            >
              Нийт төлөх дүн
            </Typography>
            <Typography
              sx={{ fontSize: "18px", color: "#121316", fontWeight: "700" }}
            >
              {numberWithCommas(totalPrice)}₮
            </Typography>
          </Stack>
          <Button
            sx={[
              {
                width: "50%",
                bgcolor: "#18BA51",
                color: "white",
                transition: "all 0.1s linear",
              },
              {
                "&:hover": {
                  bgcolor: "#18BA51",
                  color: "white",
                  transform: "scale(1.05)",
                },
              },
              {
                "&.Mui-disabled": {
                  bgcolor: "#EEEFF2",
                  color: "rgba(28, 32, 36, 0.24)",
                },
              },
            ]}
            variant="outlined"
            component="label"
            disabled={disabled}
          >
            Захиалах
          </Button>
        </Box>
      </Stack>
    </Stack>
  );
}
