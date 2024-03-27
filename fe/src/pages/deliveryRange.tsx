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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 22 22"
            fill="none"
          >
            <path
              d="M8.18645 2.60351C9.15292 -0.00834179 12.8471 -0.00833988 13.8136 2.60351L14.8427 5.38482C15.1466 6.20598 15.794 6.85341 16.6152 7.15727L19.3965 8.18645C22.0083 9.15292 22.0083 12.8471 19.3965 13.8136L16.6152 14.8427C15.794 15.1466 15.1466 15.794 14.8427 16.6152L13.8136 19.3965C12.8471 22.0083 9.15292 22.0083 8.18644 19.3965L7.15727 16.6152C6.85341 15.794 6.20598 15.1466 5.38482 14.8427L2.60351 13.8136C-0.00834179 12.8471 -0.00833988 9.15292 2.60351 8.18645L5.38482 7.15727C6.20598 6.85341 6.85341 6.20598 7.15727 5.38482L8.18645 2.60351Z"
              fill="#18BA51"
            />
          </svg>
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
