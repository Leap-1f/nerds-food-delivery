import { Button, Typography, Stack, Dialog, Box, DialogTitle, IconButton } from "@mui/material";
import { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import CloseIcon from "@mui/icons-material/Close";
import SideBarModal from "./SidebarModal";

interface TMeal {
  img: string;
  name: string;
  price: number;
  ingredient: string;
}

interface OrderModalProps {
  open: boolean;
  onClose: () => void;
  meal: TMeal | null;
  quantity: number;
  onIncrement: () => void;
  onDecrement: () => void;
}
const OrderModal = ({ open, onClose, meal, quantity, onIncrement, onDecrement }: OrderModalProps) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      PaperProps={{
        sx: {
          borderRadius: "16px",
          bgcolor: "white",
          p: "2rem",
          display: "flex",
          gap: "1.5rem",
          flexDirection: "row",
          maxWidth: "60% !important",
          margin: "0px auto",
        },
      }}
    >
      {/* Image */}
      <Box sx={{ flex: "55%" }}>
        <img
          src={meal?.img || ""}
          alt={meal?.name || ""}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </Box>
      {/* Text */}
      <Stack sx={{ flex: "45%", gap: "10px" }}>
        <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
          <IconButton onClick={onClose}>
            <CloseIcon />
          </IconButton>
        </Box>
        <Stack sx={{ gap: "1rem" }}>
          <Box>
            <DialogTitle variant="h4" sx={{ fontWeight: "bold", p: 0 }}>
              {meal?.name || ""}
            </DialogTitle>
            <Typography
              variant="h6"
              sx={{ pl: "24px", fontWeight: "bold", p: 0 }}
              color={"primary"}
            >
              {meal?.price || ""}₮
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
                {meal?.ingredient || ""}
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
              onClick={onDecrement}
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
              onClick={onIncrement}
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
            onClick={onClose}
          >
            Сагслах
          </Button>
        </Stack>
      </Stack>
    </Dialog>
  );
};

export default OrderModal;
