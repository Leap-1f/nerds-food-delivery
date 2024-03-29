import {
  Button,
  Typography,
  Stack,
  Dialog,
  Box,
  DialogTitle,
  IconButton,
} from "@mui/material";
import { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import CloseIcon from "@mui/icons-material/Close";

interface Meal {
  img: string;
  name: string;
  price: number;
  ingredients: string;
}

const meal: Meal[] = [
  {
    img: "./pepperoni.jpeg",
    name: "Pepperoni",
    price: 34800,
    ingredients: "Хулуу, төмс, лууван , сонгино, цөцгийн тос, самрын үр",
  },
];

const OrderModal = () => {
  const [quantity, setQuantity] = useState(1);
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div>
      <Button onClick={handleOpen}>Open Modal</Button>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          sx: {
            borderRadius: "16px",
            bgcolor: "white",
            p: "2rem",
            display: "flex",
            gap: "2rem",
            flexDirection: "row",
            maxWidth: "45% !important",
            margin: "0px auto",
          },
        }}
      >
        {/* Image */}
        <Box sx={{ flex: "55%" }}>
          <img
            src="./pepperoni.jpeg"
            alt="pepperoni pizza"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </Box>
        {/* Text */}
        <Stack sx={{ flex: "45%", gap: "10px" }}>
          <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
            <IconButton onClick={handleClose}>
              <CloseIcon />
            </IconButton>
          </Box>
          <Stack sx={{ gap: "32px" }}>
            <Box>
              <DialogTitle variant="h4" sx={{ fontWeight: "bold", p: 0 }}>
                {meal[0].name}
              </DialogTitle>
              <Typography
                variant="h6"
                sx={{ pl: "24px", fontWeight: "bold", p: 0 }}
                color={"primary"}
              >
                {meal[0].price}₮
              </Typography>
            </Box>
            <Box>
              <Typography
                variant="h6"
                sx={{ fontWeight: "bold", marginBottom: 1 }}
              >
                Орц
              </Typography>
              <Box sx={{ bgcolor: "#F6F6F6", p: "8px", borderRadius: "8px" }}>
                <Typography
                  component={"p"}
                  sx={{
                    fontSize: "1rem",
                    color: "#767676",
                  }}
                >
                  {meal[0].ingredients}
                </Typography>
              </Box>
            </Box>
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              Тоо
            </Typography>
            <Box
              display={"flex"}
              alignItems={"center"}
              justifyContent={"space-between"}
            >
              <IconButton
                onClick={handleDecrement}
                sx={{
                  borderRadius: "8px",
                  bgcolor: "#18BA51 !important",
                  color: "white",
                }}
              >
                <RemoveIcon />
              </IconButton>
              <span>{quantity}</span>
              <IconButton
                onClick={handleIncrement}
                sx={{
                  borderRadius: "8px",
                  bgcolor: "#18BA51 !important",
                  color: "white",
                }}
              >
                <AddIcon />
              </IconButton>
            </Box>
            <Button
              variant="contained"
              disableElevation
              sx={{ bgcolor: "#18BA51 !important", color: "white" }}
            >
              Сагслах
            </Button>
          </Stack>
        </Stack>
      </Dialog>
    </div>
  );
};

export default OrderModal;
