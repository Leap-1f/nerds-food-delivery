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
  // Initialize and add the map
  let map;
  async function initMap(): Promise<void> {
    // The location of Uluru
    const position = { lat: -25.344, lng: 131.031 };

    // Request needed libraries.
    //@ts-ignore
    const { Map } = (await google.maps.importLibrary(
      "maps"
    )) as google.maps.MapsLibrary;
    const { AdvancedMarkerElement } = (await google.maps.importLibrary(
      "marker"
    )) as google.maps.MarkerLibrary;

    // The map, centered at Uluru
    map = new Map(document.getElementById("map") as HTMLElement, {
      zoom: 4,
      center: position,
      mapId: "DEMO_MAP_ID",
    });

    // The marker, positioned at Uluru
    const marker = new AdvancedMarkerElement({
      map: map,
      position: position,
      title: "Uluru",
    });
  }

  initMap();

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
        direction="row"
        spacing={3}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
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
        <Box></Box>
      </Stack>
    </Stack>
  );
}
