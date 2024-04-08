import { Box, Stack, Button, Modal, Backdrop, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import { FoodModal } from "@/components/modals/FoodModal";
import { CategoryModal } from "@/components/modals/CategoryModal";
import { UpdateFoodModal } from "@/components/modals/UpdateFoodModal";

interface FoodItem {
  name: string;
  ingredient: string;
  image: string;
  _id: string;
  price: string; 
}

export default function testing() {
  const [catopen, setcatopen] = useState(false);
  const [foodopen, setfoodopen] = useState(false);
  const [updateopen, setupdateopen] = useState(false);
  const [foods, setFoods] = useState<FoodItem[]>([]);
  const [currentId, setCurrentId] = useState("");

  function handleOpening(whatOpen: any) {
    whatOpen(true);
  }

  function handleClose(whatClose: any) {
    whatClose(false);
  }
  async function getFood() {
    const getAllFood = await fetch("http://localhost:8080/food", {
      method: "GET",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((response) => {
        return response;
      });
    setFoods(getAllFood);
  }

  useEffect(() => {
    getFood();
  }, []);
  return (
    <Box
      sx={{
        height: "50vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Stack spacing={2}>
        <Button
          onClick={() => {
            handleOpening(setcatopen);
          }}
        >
          Open Category Modal
        </Button>
        <Button
          onClick={() => {
            handleOpening(setfoodopen);
          }}
        >
          Open Food Modal
        </Button>
      </Stack>
      <Stack direction="row" spacing={3}>
        {foods.map((fart) => (
          <Stack spacing={2} direction="column">
            <Typography>{fart.name}</Typography>
            <Typography>{fart.ingredient}</Typography>
            <Typography>{fart.image}</Typography>
            <Typography>{fart._id}</Typography>

            <Typography>{fart.price}</Typography>
            <Button
              onClick={() => {
                handleOpening(setupdateopen);
                setCurrentId(fart._id);
              }}
            >
              Open Update Modal
            </Button>
          </Stack>
        ))}
      </Stack>
      <Modal
        open={catopen}
        onClose={() => {
          handleClose(setcatopen);
        }}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 300,
          },
        }}
      >
        {CategoryModal(() => {
          handleClose(setcatopen);
        }, catopen)}
      </Modal>
      <Modal
        open={foodopen}
        onClose={() => {
          handleClose(setfoodopen);
        }}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 300,
          },
        }}
      >
        {FoodModal(() => {
          handleClose(setfoodopen);
        }, foodopen)}
      </Modal>
      <Modal
        open={updateopen}
        onClose={() => {
          handleClose(setupdateopen);
        }}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 300,
          },
        }}
      >
        {UpdateFoodModal(
          () => {
            handleClose(setupdateopen);
          },
          updateopen,
          currentId
        )}
      </Modal>
    </Box>
  );
}
