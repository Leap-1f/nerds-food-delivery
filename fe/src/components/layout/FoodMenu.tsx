import { Box, Typography, Modal, Backdrop } from "@mui/material";
import { useState } from "react";
import { FoodModal } from "../Modals";
export const FoodMenu = () => {
  const [modal, setModal] = useState(false);
  const [color, setColor] = useState({
    Breakfast: false,
    Soup: false,
    MainCourse: false,
    Desserts: false,
  });
  function handleClose(whatClose: any) {
    whatClose(false);
  }
  return (
    <Box
      sx={{
        width: "282px",
        display: "flex",
        gap: 5,
        flexDirection: "column",
        py: "24px",
        pr: 3,
        height: "100%",
      }}
    >
      <Typography variant="h6">Food menu</Typography>
      <Box>
        <Box
          onClick={() => {
            setColor((prevState: any) => ({
              ...prevState,
              Breakfast: true,
              Soup: false,
              MainCourse: false,
              Desserts: false,
            }));
          }}
          sx={{
            display: "flex",
            justifyContent: "space-between",
            bgcolor: `${color.Breakfast ? "#18BA51" : "white"}`,
            py: 1,
            px: 2,
            border: "1px solid #D6D8DB",
            borderRadius: 1,
            color: `${color.Breakfast ? "white" : "false"}`,
          }}
        >
          <Box>Breakfast</Box>
          <Box>
            <img src="FoodMenuButton.svg" alt="FoodMenuButton" />
          </Box>
        </Box>
      </Box>
      <Box>
        <Box
          onClick={() => {
            setColor((prevState: any) => ({
              ...prevState,
              Breakfast: false,
              Soup: true,
              MainCourse: false,
              Desserts: false,
            }));
          }}
          sx={{
            display: "flex",
            justifyContent: "space-between",
            bgcolor: `${color.Soup ? "#18BA51" : "white"}`,
            py: 1,
            px: 2,
            border: "1px solid #D6D8DB",
            borderRadius: 1,
            color: `${color.Soup ? "white" : "false"}`,
          }}
        >
          <Box>Soup</Box>
          <Box sx={{ color: "black" }}>
            <img src="FoodMenuButton.svg" alt="FoodMenuButton" />
          </Box>
        </Box>
      </Box>

      <Box
        onClick={() => {
          setColor((prevState: any) => ({
            ...prevState,
            Breakfast: false,
            Soup: false,
            MainCourse: true,
            Desserts: false,
          }));
        }}
        sx={{
          display: "flex",
          justifyContent: "space-between",
          bgcolor: `${color.MainCourse ? "#18BA51" : "white"}`,
          py: 1,
          px: 2,
          border: "1px solid #D6D8DB",
          borderRadius: 1,
          color: `${color.MainCourse ? "white" : "false"}`,
        }}
      >
        <Box>Maini course</Box>
        <Box sx={{ color: "black" }}>
          <img src="FoodMenuButton.svg" alt="FoodMenuButton" />
        </Box>
      </Box>

      <Box
        onClick={() => {
          setColor((prevState: any) => ({
            ...prevState,
            Breakfast: false,
            Soup: false,
            MainCourse: false,
            Desserts: true,
          }));
        }}
        sx={{
          display: "flex",
          justifyContent: "space-between",
          bgcolor: `${color.Desserts ? "#18BA51" : "white"}`,
          py: 1,
          px: 2,
          border: "1px solid #D6D8DB",
          borderRadius: 1,
          color: `${color.Desserts ? "white" : "false"}`,
        }}
      >
        <Box>Desserts</Box>
        <Box sx={{ color: "black" }}>
          <img src="FoodMenuButton.svg" alt="FoodMenuButton" />
        </Box>
      </Box>

      <Box
        onClick={() => {
          setModal(true);
        }}
        sx={{
          display: "flex",
          gap: 1,
          px: 2,
          py: 1,
          border: "1px solid #D6D8DB",
          borderRadius: 1,
        }}
      >
        <Box>
          <img src="Plus.svg" alt="Plus" />
        </Box>
        <Box>Create new category</Box>
      </Box>
      <Modal
        open={modal}
        onClose={() => {
          handleClose(setModal);
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
          handleClose(setModal);
        }, modal)}
      </Modal>
    </Box>
  );
};
export default FoodMenu;
