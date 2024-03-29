import { Container, Box, Modal, Button, Typography } from "@mui/material";
import * as React from "react";
import { Cancel } from "@mui/icons-material";
import { red } from "@mui/material/colors";

export const ErrorModal = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const style = {
    top: "30%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 354,
    maxHeight: 300,
    bgcolor: "background.paper",
    p: 2,
    pb: 5,
    borderRadius: "14px",
  };
  const color = red[400];

  return (
   
      <Box sx={style}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {" "}
          <Cancel
            style={{
              color: color,
              fontSize: "45",
            }}
          ></Cancel>
          <Typography
            id="modal-modal-description"
            sx={{
              mt: 2,
              textAlign: "center",
              maxWidth: "204px",
              fontWeight: 500,
            }}
          >
            Уучлаарай, систем ачааллахад алдаа гарлаа.
          </Typography>
        </Box>
      </Box>
   
  );
};
