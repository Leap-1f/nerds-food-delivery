import {
  Stack,
  Box,
  Typography,
  FormControl,
  InputLabel,
  Select,
  SelectChangeEvent,
  MenuItem,
  InputAdornment,
  TextField,
  Menu,
  RadioGroup,
  Radio,
} from "@mui/material";
import CircleIcon from "../icons/CircleIcon";
import { useState, useEffect } from "react";
import AddressIcon from "../icons/AddressIcon";
export function Address(
  info: string,
  color: any,
  selectDistrict: Function,
  district: string,
  selectArea: Function,
  area: string,
  selectApartment: Function,
  apartment: string,
  selectDescription: Function,
  description: string,
  selectPhoneNumber: Function,
  phoneNumber: string,
  selectCardOrCredit: Function,
  cardOrCredit: string
) {
  const handleDistrict = (event: SelectChangeEvent) => {
    selectDistrict(event.target.value as string);
  };
  const handleArea = (event: SelectChangeEvent) => {
    selectArea(event.target.value as string);
  };
  const handleApartment = (event: SelectChangeEvent) => {
    selectApartment(event.target.value as string);
  };
  const handleCardOrCredit = (event: React.ChangeEvent<HTMLInputElement>) => {
    selectCardOrCredit(event.target.value);
  };
  const [districtOpened, setDistrictOpened] = useState(false);
  const [areaOpened, setAreaOpened] = useState(false);
  const [apartmentOpened, setApartmentOpened] = useState(false);
  /* checks if its not empty and sets it as open and changes the background color */
  useEffect(() => {
    if (district != "") {
      setDistrictOpened(true);
    }
  }, [district]);
  useEffect(() => {
    if (area != "") {
      setAreaOpened(true);
    }
  }, [area]);
  useEffect(() => {
    if (apartment != "") {
      setApartmentOpened(true);
    }
  }, [apartment]);

  return (
    <Stack
      direction="column"
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      spacing={2}
    >
      <Stack direction="row" spacing={3}>
        <Box>{CircleIcon(color)}</Box>
        <Stack direction="column">
          <Typography
            sx={{ fontSize: "14px", color: "#8B8E95", fontWeight: "400" }}
          >
            Алхам 1
          </Typography>
          <Typography variant="h6" sx={{ fontWeight: "300" }}>
            Хаягийн мэдээлэл оруулах
          </Typography>
          <Typography sx={{ fontWeight: "300", color: { color } }}>
            {info}
          </Typography>
        </Stack>
      </Stack>
      <Stack
        sx={{
          p: 3,
          borderRadius: 2,
          boxShadow: "0px 0px 20px 0px rgba(0, 0, 0, 0.05)",
          width: "25vw",
          height: "70vh",
        }}
        direction="column"
      >
        <Stack spacing={5} direction="column">
          {/* this is the dropdown section */}
          <Stack direction="column" spacing={2}>
            <Typography sx={{ fontSize: "14px", fontWeight: "300" }}>
              Хаяг аа оруулна уу
            </Typography>

            <Select
              displayEmpty={true}
              renderValue={(value) =>
                value?.length
                  ? Array.isArray(value)
                    ? value.join(", ")
                    : value
                  : "Дүүрэг сонгоно уу"
              }
              onSelect={() => {
                setDistrictOpened(true);
              }}
              onOpen={() => {
                setDistrictOpened(true);
              }}
              onClose={() => {
                if (district != "") {
                } else {
                  setDistrictOpened(false);
                }
              }}
              value={district}
              onChange={handleDistrict}
              style={
                districtOpened
                  ? { backgroundColor: "#18BA51", color: "white" }
                  : {}
              }
              startAdornment={
                <InputAdornment position="start">
                  {AddressIcon(districtOpened)}
                </InputAdornment>
              }
            >
              <MenuItem value="Баянзүрх дүүрэг">Баянзүрх дүүрэг</MenuItem>
              <MenuItem value="Хан-Уул дүүрэг">Хан-Уул дүүрэг</MenuItem>
              <MenuItem value="Баянгол дүүрэг">Баянгол дүүрэг</MenuItem>
              <MenuItem value="Сонгинохайрхан дүүрэг">
                Сонгинохайрхан дүүрэг
              </MenuItem>
              <MenuItem value="Чингэлтэй дүүрэг">Чингэлтэй дүүрэг</MenuItem>
            </Select>
            <Select
              displayEmpty={true}
              renderValue={(value) =>
                value?.length
                  ? Array.isArray(value)
                    ? value.join(", ")
                    : value
                  : "Хороо сонгоно уу"
              }
              onSelect={() => {
                setAreaOpened(true);
              }}
              onOpen={() => {
                setAreaOpened(true);
              }}
              onClose={() => {
                if (area != "") {
                } else {
                  setAreaOpened(false);
                }
              }}
              value={area}
              onChange={handleArea}
              style={
                areaOpened ? { backgroundColor: "#18BA51", color: "white" } : {}
              }
              startAdornment={
                <InputAdornment position="start">
                  {AddressIcon(areaOpened)}
                </InputAdornment>
              }
            >
              <MenuItem value="1-р хороо">1-р хороо</MenuItem>
              <MenuItem value="2-р хороо">2-р хороо</MenuItem>
              <MenuItem value="3-р хороо">3-р хороо</MenuItem>
              <MenuItem value="4-р хороо">4-р хороо</MenuItem>
              <MenuItem value="5-р хороо">5-р хороо</MenuItem>
              <MenuItem value="5-р хороо">6-р хороо</MenuItem>
              <MenuItem value="6-р хороо">7-р хороо</MenuItem>
            </Select>
            <Select
              displayEmpty={true}
              renderValue={(value) =>
                value?.length
                  ? Array.isArray(value)
                    ? value.join(", ")
                    : value
                  : "Байр гудамж сонгоно уу"
              }
              onSelect={() => {
                setApartmentOpened(true);
              }}
              onOpen={() => {
                setApartmentOpened(true);
              }}
              onClose={() => {
                if (apartment != "") {
                } else {
                  setApartmentOpened(false);
                }
              }}
              value={apartment}
              onChange={handleApartment}
              style={
                apartmentOpened
                  ? { backgroundColor: "#18BA51", color: "white" }
                  : {}
              }
              startAdornment={
                <InputAdornment position="start">
                  {AddressIcon(apartmentOpened)}
                </InputAdornment>
              }
            >
              <MenuItem value="Нархан хотхон">Нархан хотхон</MenuItem>
              <MenuItem value="26-р байр">26-р байр</MenuItem>
              <MenuItem value="Хоймор хотхон">Хоймор хотхон</MenuItem>
              <MenuItem value="45-р байр">45-р байр</MenuItem>
              <MenuItem value="Зайсан хотхон">Зайсан хотхон</MenuItem>
            </Select>
          </Stack>
          {/* this is the addition info and phone number section and card or cash*/}
          <Stack direction="column" spacing={4}>
            <Stack direction="column" spacing={0.5}>
              <Typography
                sx={{ fontSize: "14px", color: "black", fontWeight: "300" }}
              >
                Нэмэлт мэдээлэл
              </Typography>
              <TextField
                placeholder="Орц, давхар, орцны код ..."
                multiline
                rows={4}
                sx={{ bgcolor: "#F7F7F8" }}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                  selectDescription(event.target.value);
                }}
                value={description}
              ></TextField>
            </Stack>
            <Stack direction="column" spacing={0.5}>
              <Typography
                sx={{ fontSize: "14px", color: "black", fontWeight: "300" }}
              >
                Утасны дугаар*
              </Typography>
              <TextField
                placeholder="Утасны дугаараа оруулна уу"
                sx={{ bgcolor: "#F7F7F8" }}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                  selectPhoneNumber(event.target.value);
                }}
                type="number"
                inputProps={{
                  max: 99999999,
                  min: 70000000,
                }}
                value={phoneNumber}
              ></TextField>
            </Stack>
            <Stack direction="column" spacing={0.5}>
              <Typography
                sx={{ fontSize: "14px", color: "black", fontWeight: "300" }}
              >
                Төлбөр төлөх
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-around",
                  flexDirection: "row",
                }}
              >
                <Stack
                  direction="row"
                  spacing={1}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Radio
                    checked={cardOrCredit === "cash"}
                    onChange={handleCardOrCredit}
                    value="cash"
                    name="radio-buttons"
                  />
                  <Typography
                    sx={{
                      fontSize: "16px",
                      fontWeight: "300",
                      color: "8B8E95",
                    }}
                  >
                    Бэлнээр
                  </Typography>
                </Stack>
                <Stack
                  direction="row"
                  spacing={1}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Radio
                    checked={cardOrCredit === "credit"}
                    onChange={handleCardOrCredit}
                    value="credit"
                    name="radio-buttons"
                  />
                  <Typography
                    sx={{
                      fontSize: "16px",
                      fontWeight: "300",
                      color: "8B8E95",
                    }}
                  >
                    Картаар
                  </Typography>
                </Stack>
              </Box>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
}
