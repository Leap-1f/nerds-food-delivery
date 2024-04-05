import {
  Box,
  Typography,
  Button,
  TextField,
  Stack,
  Fade,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  SelectChangeEvent,
  Switch,
  SwitchProps,
  FormControlLabel,
  styled,
} from "@mui/material";
import { useState, useEffect } from "react";
export function FoodModal(modalClose: Function, closed: boolean) {
  const [category, setCategory] = useState("");
  const [filledIn, setFilledIn] = useState(false);
  const [categories, setCategories] = useState([]);
  const [foodName, setFoodName] = useState("");
  const [foodDescription, setFoodDescription] = useState("");
  const [price, setPrice] = useState("");
  const [onSale, setOnSale] = useState(false);
  const [salePrice, setSalePrice] = useState("");
  const IOSSwitch = styled((props: SwitchProps) => (
    <Switch
      focusVisibleClassName=".Mui-focusVisible"
      disableRipple
      {...props}
    />
  ))(({ theme }) => ({
    width: 36,
    height: 20,
    padding: 0,
    "& .MuiSwitch-switchBase": {
      padding: 0,
      margin: 2,
      transitionDuration: "300ms",
      "&.Mui-checked": {
        transform: "translateX(16px)",
        color: "#fff",
        "& + .MuiSwitch-track": {
          backgroundColor:
            theme.palette.mode === "dark" ? "#2ECA45" : "#65C466",
          opacity: 1,
          border: 0,
        },
        "&.Mui-disabled + .MuiSwitch-track": {
          opacity: 0.5,
        },
      },
      "&.Mui-focusVisible .MuiSwitch-thumb": {
        color: "#18BA51",
        border: "6px solid #fff",
      },
      "&.Mui-disabled .MuiSwitch-thumb": {
        color:
          theme.palette.mode === "light"
            ? theme.palette.grey[100]
            : theme.palette.grey[900],
      },
      "&.Mui-disabled + .MuiSwitch-track": {
        opacity: theme.palette.mode === "light" ? 0.7 : 0.3,
      },
    },
    "& .MuiSwitch-thumb": {
      boxSizing: "border-box",
      width: 17,
      height: 17,
    },
    "& .MuiSwitch-track": {
      borderRadius: 26 / 2,
      backgroundColor: theme.palette.mode === "light" ? "#8B8E95" : "#8B8E95",
      opacity: 1,
      transition: theme.transitions.create(["background-color"], {
        duration: 500,
      }),
    },
  }));
  const handleCatChange = (event: SelectChangeEvent) => {
    setCategory(event.target.value as string);
  };
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
    setCategories(getCategories);
  }
  async function sendFoodItem() {
    let sendFoodItem = await fetch("http://localhost:8080/createFood", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: foodName,
        img: "Not implemented yet.",
        ingredient: foodDescription,
        price: parseInt(price),
        catId: category,
      }),
    }).then(async (response) => {
      if (response.status === 400) {
        /* add error modal */
      } else {
        /* add success modal */
      }
    });
  }

  function clearInfo() {
    setPrice("");
    setSalePrice("");
    setFoodDescription("");
    setFoodName("");
    setOnSale(false);
    setCategory("");
  }
  function checkFilledIn() {
    if (
      price != "" &&
      foodDescription != "" &&
      foodName != "" &&
      category != ""
    ) {
      setFilledIn(true);
    } else {
      setFilledIn(false);
    }
  }
  useEffect(() => {
    getCategories();
  }, []);
  useEffect(() => {
    checkFilledIn();
  }, [price, foodDescription, foodName, category]);

  const handleSaleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setOnSale(event.target.checked);
  };

  const VisuallyHiddenInput = styled("input")({
    clip: "rect(0 0 0 0)",
    clipPath: "inset(50%)",
    height: 1,
    overflow: "hidden",
    position: "absolute",
    bottom: 0,
    left: 0,
    whiteSpace: "nowrap",
    width: 1,
  });

  return (
    <Fade in={closed}>
      <Box
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
      >
        <Stack spacing={8}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              borderBottom: "1px",
              borderBottomColor: "#E0E0E0",
              borderStyle: "solid",
              padding: "0px 24px 16px",
              alignSelf: "stretch",
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
            <Typography sx={{ fontWeight: 700, fontSize: "24px" }} variant="h2">
              Create Food
            </Typography>
            <Button disabled></Button>
          </Box>
          <Stack spacing={6}>
            <TextField
              type="text"
              placeholder="Хоолны нэр"
              label="Хоолны нэр"
              value={foodName}
              sx={{ backgroundColor: "#F4F4F4" }}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                setFoodName(event.target.value);
              }}
            />
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">
                Хоолны ангилал
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                sx={{ backgroundColor: "#F4F4F4" }}
                value={category}
                label="Хоолны ангилал"
                onChange={handleCatChange}
              >
                {categories.map((item) => (
                  <MenuItem value={item.id}>{item.name}</MenuItem>
                ))}
              </Select>
            </FormControl>

            <TextField
              type="text"
              placeholder="Хоолны орц"
              label="Хоолны орц"
              value={foodDescription}
              sx={{ backgroundColor: "#F4F4F4" }}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                setFoodDescription(event.target.value);
              }}
            />
            <TextField
              type="number"
              placeholder="Хоолны үнэ"
              label="Хоолны үнэ"
              value={price}
              sx={{ backgroundColor: "#F4F4F4" }}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                setPrice(event.target.value);
              }}
            />
            <Stack spacing={0.5}>
              <FormControlLabel
                control={
                  <IOSSwitch sx={{ m: 1 }} onChange={handleSaleChange} />
                }
                label="Хямдралтай эсэх"
                checked={onSale}
                sx={{ width: "fit-content" }}
              />
              <TextField
                type="number"
                placeholder="Хямдралтай үнэ"
                disabled={!onSale}
                value={salePrice}
                sx={{ backgroundColor: "#F4F4F4" }}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                  setSalePrice(event.target.value);
                }}
              />
            </Stack>
            <Stack>
              <Typography variant="subtitle1">Хоолны зураг</Typography>
              <Box
                sx={{
                  border: "1px dashed var(--Border-BorderStrong02, #D6D7DC)",
                  width: "50%",
                  height: "100%",
                  borderRadius: "8px",
                  backgroundColor: "#BABCC41F",
                }}
              >
                <Stack
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    padding: "12px",
                  }}
                  spacing={2}
                >
                  <Typography sx={{ fontWeight: "700" }}>
                    Add image for the food
                  </Typography>
                  <Button
                    component="label"
                    role={undefined}
                    variant="contained"
                    tabIndex={-1}
                    sx={{
                      borderRadius: "8px",
                      backgroundColor: "#393939",
                      color: "white",
                    }}
                  >
                    Add Image
                    <VisuallyHiddenInput type="file" />
                  </Button>
                </Stack>
              </Box>
            </Stack>
          </Stack>
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              flexDirection: "row",
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
              disabled={!filledIn}
              onClick={() => {
                sendFoodItem();
                modalClose();
              }}
            >
              Continue
            </Button>
          </Box>
        </Stack>
      </Box>
    </Fade>
  );
}
