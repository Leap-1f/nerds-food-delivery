import { UpdateCategoryModal } from "@/components/Modals/UpdateCategoryModal";
import { UpdateFoodModal } from "@/components/Modals/UpdateFoodModal";
import { CategoryModal } from "@/components/modals";
import { FoodModal } from "@/components/modals";
import {
  Box,
  Stack,
  Typography,
  Button,
  Menu,
  MenuItem,
  Modal,
  Backdrop,
} from "@mui/material";
import { useEffect, useState } from "react";
export default function crud() {
  const [categories, setCategories] = useState([]);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [updateCat, setUpdateCat] = useState(false);
  const [updateMod, setUpdateMod] = useState(false);
  const [currnetId, setCurrentId] = useState("");
  const [catId, setCatId] = useState("");
  const [foodOpen, setFoodOpen] = useState(false);
  const [catName, setCatName] = useState("All Foods.");
  const [catOpen, setCatOpen] = useState(false);
  const [catItems, setCatItems] = useState([]);
  function numberWithCommas(x: number) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  function handleModelOpening(whatOpen: any) {
    whatOpen(true);
  }
  function handleModelClose(whatClose: any) {
    whatClose(false);
  }
  async function deleteCategory(catId: string) {
    const getCategories = await fetch("http://localhost:8080/category/delete", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: catId,
      }),
    });
  }
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

  async function getFoodItemsByCategory() {
    const getFoodItemsByCategory = await fetch(
      "http://localhost:8080/getFoodItemsByCategory",
      {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: catId,
        }),
      }
    )
      .then((response) => response.json())
      .then((response) => {
        if (response.status != 400 && response.length != 0) {
          setCatItems(response);
        } else {
          setCatItems([{ name: "Уучлаарай, Таны меню хоосон байна." }]);
        }
      });
  }
  async function getFood() {
    const getAllFood = await fetch("http://localhost:8080/getAllFood", {
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
    console.log(getAllFood);
    setCatItems(getAllFood);
  }

  useEffect(() => {
    getFood();
  }, []);
  useEffect(() => {
    getCategories();
  }, []);
  useEffect(() => {
    if (catId != "") {
      getFoodItemsByCategory();
    }
  }, [catId]);
  return (
    <Stack direction="row" sx={{ height: "100vh" }} spacing={3}>
      {/* category section */}
      <Stack direction="column" spacing={5} sx={{ width: "33%" }}>
        <Typography variant="h5" sx={{ fontWeight: "700" }}>
          Food Menu
        </Typography>
        {/* category map */}
        <Stack spacing={3} direction="column">
          {categories.map((el) => (
            <Button
              sx={{
                width: "14vw",
                display: "flex",
                height: "5vh",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "8px 16px",
                border: "1px solid var(--Stroke-01, #D6D8DB)",
                borderRadius: "8px",
                color: "black",
              }}
              onClick={() => {
                setCatId(el.id);
                setCatName(el.name);
              }}
            >
              <Typography>{el.name}</Typography>

              <Button
                sx={{ width: "fit-content" }}
                aria-controls={open ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={(e) => {
                  handleClick(e);
                  setCatId(el.id);
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <mask
                    id="mask0_73_5253"
                    style={{ maskType: "alpha" }}
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="0"
                    width="24"
                    height="24"
                  >
                    <rect width="24" height="24" fill="#D9D9D9" />
                  </mask>
                  <g mask="url(#mask0_73_5253)">
                    <path
                      d="M12 20C11.45 20 10.9792 19.8042 10.5875 19.4125C10.1958 19.0208 10 18.55 10 18C10 17.45 10.1958 16.9792 10.5875 16.5875C10.9792 16.1958 11.45 16 12 16C12.55 16 13.0208 16.1958 13.4125 16.5875C13.8042 16.9792 14 17.45 14 18C14 18.55 13.8042 19.0208 13.4125 19.4125C13.0208 19.8042 12.55 20 12 20ZM12 14C11.45 14 10.9792 13.8042 10.5875 13.4125C10.1958 13.0208 10 12.55 10 12C10 11.45 10.1958 10.9792 10.5875 10.5875C10.9792 10.1958 11.45 10 12 10C12.55 10 13.0208 10.1958 13.4125 10.5875C13.8042 10.9792 14 11.45 14 12C14 12.55 13.8042 13.0208 13.4125 13.4125C13.0208 13.8042 12.55 14 12 14ZM12 8C11.45 8 10.9792 7.80417 10.5875 7.4125C10.1958 7.02083 10 6.55 10 6C10 5.45 10.1958 4.97917 10.5875 4.5875C10.9792 4.19583 11.45 4 12 4C12.55 4 13.0208 4.19583 13.4125 4.5875C13.8042 4.97917 14 5.45 14 6C14 6.55 13.8042 7.02083 13.4125 7.4125C13.0208 7.80417 12.55 8 12 8Z"
                      fill="#1C1B1F"
                    />
                  </g>
                </svg>
              </Button>
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}
              >
                <MenuItem
                  onClick={() => {
                    handleModelOpening(setUpdateCat);
                    handleClose();
                  }}
                >
                  Edit Name
                </MenuItem>
                <MenuItem
                  onClick={() => {
                    handleClose();
                    deleteCategory(catId);
                  }}
                >
                  Delete Category
                </MenuItem>
              </Menu>
            </Button>
          ))}
          <Button
            sx={{
              width: "14vw",
              display: "flex",
              height: "5vh",
              justifyContent: "space-around",
              alignItems: "center",
              padding: "8px 16px",
              border: "1px solid var(--Stroke-01, #D6D8DB)",
              borderRadius: "8px",
              color: "black",
            }}
            onClick={() => {
              handleModelOpening(setCatOpen);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <mask
                id="mask0_73_4991"
                style={{ maskType: "alpha" }}
                maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                width="24"
                height="24"
              >
                <rect width="24" height="24" fill="#D9D9D9" />
              </mask>
              <g mask="url(#mask0_73_4991)">
                <path
                  d="M11 13H5V11H11V5H13V11H19V13H13V19H11V13Z"
                  fill="#5E6166"
                />
              </g>
            </svg>
            <Typography
              sx={{
                color: "var(--Text-TextHelper, #5E6166)",
                fontFamily: "Inter",
                fontSize: "16px",
                fontStyle: "normal",
                fontWeight: "400",
                lineHeight: "150%",
                letterSpacing: "-0.396px",
              }}
            >
              Create new category
            </Typography>
          </Button>
        </Stack>
      </Stack>
      {/* food section */}

      <Stack
        direction="column"
        spacing={6}
        sx={{ width: "80vw", bgcolor: "#ECEDF0" }}
      >
        {/* top section with category name and add food button */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            padding: "24px 12px",
          }}
        >
          <Typography variant="h6" sx={{ fontWeight: "600" }}>
            {catName}
          </Typography>
          <Button
            sx={{
              color: "white",
              width: "5vw",
              height: "4vh",
              bgcolor: "green ",
              transition: "200ms linear 50ms",
              fontSize: "12px",
              ":hover": {
                bgcolor: "green",
                width: "5.5vw",
                height: "4.5vh",
              },
            }}
            component="label"
            onClick={() => {
              handleModelOpening(setFoodOpen);
            }}
          >
            Add new food
          </Button>
        </Box>
        {/* food map */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gridTemplateRows: "repeat(3, 1fr)",
            gridColumnGap: "24px",
            gridRowGap: "60px",
            padding: "24px",
          }}
        >
          {catItems.map((item) => (
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              {item.id && (
                <Button
                  onClick={() => {
                    handleModelOpening(setUpdateMod);
                    setCurrentId(item.id);
                  }}
                >
                  Open Update Modal
                </Button>
              )}
              {item.id && (
                <Typography>{numberWithCommas(item.price)}₮</Typography>
              )}
              <Typography>{item.name}</Typography>
            </Box>
          ))}
        </Box>
      </Stack>
      <Box>
        <Modal
          open={updateCat}
          onClose={() => {
            handleModelClose(setUpdateCat);
          }}
          closeAfterTransition
          slots={{ backdrop: Backdrop }}
          slotProps={{
            backdrop: {
              timeout: 300,
            },
          }}
        >
          {UpdateCategoryModal(
            () => {
              handleModelClose(setUpdateCat);
            },
            updateCat,
            catId
          )}
        </Modal>
        <Modal
          open={catOpen}
          onClose={() => {
            handleModelClose(setCatOpen);
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
            handleModelClose(setCatOpen);
          }, catOpen)}
        </Modal>
        <Modal
          open={foodOpen}
          onClose={() => {
            handleModelClose(setFoodOpen);
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
            handleModelClose(setFoodOpen);
          }, foodOpen)}
        </Modal>
        <Modal
          open={updateMod}
          onClose={() => {
            handleModelClose(setUpdateMod);
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
              handleModelClose(setUpdateMod);
            },
            updateMod,
            currnetId
          )}
        </Modal>
      </Box>
    </Stack>
  );
}
