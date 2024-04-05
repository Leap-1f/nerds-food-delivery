import GreenCircle from "@/components/icons/GreenStar";
import { Box, Stack, Typography } from "@mui/material";
import { useState, useEffect } from "react";
export default function map() {
  const [locations, setLocations] = useState([
    "Нархан хотхон",
    "26-р байр",
    "26-р байр",
    "45-р байр",
    "3-р байр",
    "Хоймор хотхон",
    "Хоймор хотхон",
  ]);
  return (
    <Stack
      sx={{
        height: "80vh",
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
      }}
    >
      <Box>{/* Map API here, Will work on later!. -T */}</Box>

      <Stack
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Stack
          direction="row"
          sx={{ alignItems: "center", marginBottom: "32px" }}
          spacing={1}
        >
          {GreenCircle()}
          <Typography variant="h5">Хүргэлтийн бүс дэх хаягууд</Typography>
        </Stack>
        <Stack direction="row" spacing={3}>
          <Box>
            <Stack direction="row" spacing={3}>
              <Stack
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  boxShadow: "0px 0px 20px 0px rgba(0, 0, 0, 0.05)",
                  padding: "24px",
                  borderRadius: "16px",
                }}
              >
                <Typography
                  variant="h5"
                  sx={{
                    borderBottom: "1px solid var(--Brand-Green, #18BA51)",
                    padding: "16px 0px",
                  }}
                >
                  А бүс
                </Typography>
                <Stack spacing={2} direction="row" sx={{ paddingTop: "16px" }}>
                  <Box>
                    {locations.map((items) => (
                      <Typography
                        variant="h6"
                        sx={{ paddingRight: "256px", fontWeight: 400 }}
                      >
                        {items}
                      </Typography>
                    ))}
                  </Box>
                  <Box>
                    {locations.map((items) => (
                      <Typography
                        variant="h6"
                        sx={{ paddingRight: "256px", fontWeight: 400 }}
                      >
                        {items}
                      </Typography>
                    ))}
                  </Box>
                </Stack>
              </Stack>
              <Stack
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  boxShadow: "0px 0px 20px 0px rgba(0, 0, 0, 0.05)",
                  padding: "24px",
                  borderRadius: "16px",
                }}
              >
                <Typography
                  variant="h5"
                  sx={{
                    borderBottom: "1px solid var(--Brand-Green, #18BA51)",
                    padding: "16px 0px",
                  }}
                >
                  Б бүс
                </Typography>
                <Stack spacing={2} direction="row" sx={{ paddingTop: "16px" }}>
                  <Box>
                    {locations.map((items) => (
                      <Typography
                        variant="h6"
                        sx={{ paddingRight: "256px", fontWeight: 400 }}
                      >
                        {items}
                      </Typography>
                    ))}
                  </Box>
                  <Box>
                    {locations.map((items) => (
                      <Typography
                        variant="h6"
                        sx={{ paddingRight: "256px", fontWeight: 400 }}
                      >
                        {items}
                      </Typography>
                    ))}
                  </Box>
                </Stack>
              </Stack>
            </Stack>
          </Box>
        </Stack>
        <Box></Box>
      </Stack>
    </Stack>
  );
}
