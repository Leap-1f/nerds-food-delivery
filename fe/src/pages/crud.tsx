import { Box, Stack, Typography, Button } from "@mui/material";
import { useEffect, useState } from "react";
export default function crud() {
  async function getCategories() {
    const getCategories = await fetch("http://localhost:8080/getCategories", {
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
  }

  return (
    <Stack direction="row">
      <Stack direction="column" spacing={5}>
        <Typography>Food Menu</Typography>
        <Stack></Stack>
      </Stack>
      <Box></Box>
    </Stack>
  );
}
