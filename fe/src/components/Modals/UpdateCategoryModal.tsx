import { Box, Stack, TextField, Button, Typography, Fade } from "@mui/material";
import { useState, useEffect } from "react";
export function UpdateCategoryModal(
  modalClose: Function,
  closed: boolean,
  catId: string
) {
  const [categoryName, setCategoryName] = useState("");
  const [valid, setValid] = useState(false);
  function validateName() {
    if (categoryName != "") {
      setValid(true);
    } else {
      setValid(false);
    }
  }
  function clearInfo() {
    setCategoryName("");
    setValid(false);
  }
  async function getCategoryName() {
    let categoryName = await fetch("http://localhost:8080/getCatName", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: catId,
      }),
    })
      .then((response) => response.json())
      .then((response) => {
        return response;
      });
    setCategoryName(categoryName);
  }
  async function sendCategoryInfo() {
    let createCategory = await fetch("http://localhost:8080/updateCategory", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: catId,
        name: categoryName,
      }),
    });
  }
  useEffect(() => {
    getCategoryName();
  }, [closed]);
  useEffect(() => {
    validateName();
  }, [categoryName]);
  return (
    <Fade in={closed}>
      <Stack
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "30%",
          bgcolor: "background.paper",
          boxShadow: 24,
          p: 4,
          borderRadius: 4,
        }}
        spacing={3}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            borderBottom: "1px solid var(--border-border-subtle-01, #E0E0E0)",
            paddingBottom: "16px",
          }}
        >
          <Button
            onClick={() => {
              modalClose();
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M18 6L6 18M6 6L18 18"
                stroke="#161616"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </Button>
          <Typography variant="h4" sx={{ fontWeight: 700, fontSize: "24px" }}>
            Update category
          </Typography>
          <Button disabled></Button>
        </Box>
        <TextField
          type="text"
          label="Category name"
          sx={{ backgroundColor: "#F4F4F4" }}
          placeholder="Enter category name"
          value={categoryName}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            setCategoryName(event.target.value);
          }}
        />
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-end",
            gap: "16px",
            borderTop: "1px solid var(--border-border-subtle-01, #E0E0E0)",
            paddingTop: "16px",
          }}
        >
          <Button
            sx={{
              color: "black",
              fontWeight: "700",
            }}
            onClick={() => {
              clearInfo();
            }}
          >
            Clear
          </Button>

          <Button
            sx={{
              backgroundColor: "#393939",
              color: "white",

              fontWeight: "700",
              borderRadius: "8px",
            }}
            role={undefined}
            tabIndex={-1}
            variant="contained"
            component="label"
            disabled={!valid}
            onClick={() => {
              sendCategoryInfo();
              modalClose();
            }}
          >
            Continue
          </Button>
        </Box>
      </Stack>
    </Fade>
  );
}
