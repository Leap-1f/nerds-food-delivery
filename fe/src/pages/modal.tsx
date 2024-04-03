import { Box, Stack, Button, Modal, Backdrop } from "@mui/material";
import { useState } from "react";
import { FoodModal } from "@/components/Modals/FoodModal";
import { CategoryModal } from "@/components/Modals/CategoryModal";
export default function testing() {
  const [catopen, setcatopen] = useState(false);
  const [foodopen, setfoodopen] = useState(false);
  function handleOpening(whatOpen: any) {
    whatOpen(true);
  }
  function handleClose(whatClose: any) {
    whatClose(false);
  }
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
    </Box>
  );
}
