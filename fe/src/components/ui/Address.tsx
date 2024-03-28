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
} from "@mui/material";
import { useState, useEffect } from "react";
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
  phoneNumber: string
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
  const [districtOpened, setDistrictOpened] = useState(false);
  const [areaOpened, setAreaOpened] = useState(false);
  const [apartmentOpened, setApartmentOpened] = useState(false);
  function seeOpen(thing: string, that: Function) {
    if (thing != "") {
      that(true);
    }
  }
  return (
    <Stack
      direction="column"
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      spacing={2}
    >
      <Stack direction="row" spacing={3}>
        <Box>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <circle cx="12" cy="12" r="12" fill={color} />
          </svg>
        </Box>
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
        spacing={2}
      >
        <Typography sx={{ fontSize: "14px" }}>Хаяг аа оруулна уу</Typography>
        <TextField
          id="DistrictSelect"
          value={district}
          onChange={(e) => {
            handleDistrict(e);
            seeOpen(district, setDistrictOpened);
          }}
          select
          style={
            districtOpened ? { backgroundColor: "#18BA51", color: "white" } : {}
          }
          label="Дүүрэг сонгоно уу"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <mask
                    id="mask0_1_1810"
                    style={{ maskType: "alpha" }}
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="0"
                    width="24"
                    height="24"
                  >
                    <rect width="24" height="24" fill="#D9D9D9" />
                  </mask>
                  <g mask="url(#mask0_1_1810)">
                    <path
                      d="M12 12C12.55 12 13.0208 11.8042 13.4125 11.4125C13.8042 11.0208 14 10.55 14 10C14 9.45 13.8042 8.97917 13.4125 8.5875C13.0208 8.19583 12.55 8 12 8C11.45 8 10.9792 8.19583 10.5875 8.5875C10.1958 8.97917 10 9.45 10 10C10 10.55 10.1958 11.0208 10.5875 11.4125C10.9792 11.8042 11.45 12 12 12ZM12 19.35C14.0333 17.4833 15.5417 15.7875 16.525 14.2625C17.5083 12.7375 18 11.3833 18 10.2C18 8.38333 17.4208 6.89583 16.2625 5.7375C15.1042 4.57917 13.6833 4 12 4C10.3167 4 8.89583 4.57917 7.7375 5.7375C6.57917 6.89583 6 8.38333 6 10.2C6 11.3833 6.49167 12.7375 7.475 14.2625C8.45833 15.7875 9.96667 17.4833 12 19.35ZM12 22C9.31667 19.7167 7.3125 17.5958 5.9875 15.6375C4.6625 13.6792 4 11.8667 4 10.2C4 7.7 4.80417 5.70833 6.4125 4.225C8.02083 2.74167 9.88333 2 12 2C14.1167 2 15.9792 2.74167 17.5875 4.225C19.1958 5.70833 20 7.7 20 10.2C20 11.8667 19.3375 13.6792 18.0125 15.6375C16.6875 17.5958 14.6833 19.7167 12 22Z"
                      fill="#373737"
                    />
                  </g>
                </svg>
              </InputAdornment>
            ),
          }}
          SelectProps={{
            onOpen: () => {
              setDistrictOpened(true);
            },
            onClose: () => {
              setDistrictOpened(false);
            },
          }}
          aria-placeholder="Дүүрэг сонгоно уу"
        >
          <MenuItem value="Баянзүрх дүүрэг">Баянзүрх дүүрэг</MenuItem>
          <MenuItem value="Хан-Уул дүүрэг">Хан-Уул дүүрэг</MenuItem>
          <MenuItem value="Баянгол дүүрэг">Баянгол дүүрэг</MenuItem>
          <MenuItem value="Сонгинохайрхан дүүрэг">
            Сонгинохайрхан дүүрэг
          </MenuItem>
          <MenuItem value="Чингэлтэй дүүрэг">Чингэлтэй дүүрэг</MenuItem>
        </TextField>
        <TextField
          id="AreaSelect"
          value={area}
          onChange={(e) => {
            handleArea(e);
            seeOpen(area, setAreaOpened);
          }}
          select
          label="Хороо сонгоно уу"
          style={
            areaOpened ? { backgroundColor: "#18BA51", color: "white" } : {}
          }
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <mask
                    id="mask0_1_1810"
                    style={{ maskType: "alpha" }}
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="0"
                    width="24"
                    height="24"
                  >
                    <rect width="24" height="24" fill="#D9D9D9" />
                  </mask>
                  <g mask="url(#mask0_1_1810)">
                    <path
                      d="M12 12C12.55 12 13.0208 11.8042 13.4125 11.4125C13.8042 11.0208 14 10.55 14 10C14 9.45 13.8042 8.97917 13.4125 8.5875C13.0208 8.19583 12.55 8 12 8C11.45 8 10.9792 8.19583 10.5875 8.5875C10.1958 8.97917 10 9.45 10 10C10 10.55 10.1958 11.0208 10.5875 11.4125C10.9792 11.8042 11.45 12 12 12ZM12 19.35C14.0333 17.4833 15.5417 15.7875 16.525 14.2625C17.5083 12.7375 18 11.3833 18 10.2C18 8.38333 17.4208 6.89583 16.2625 5.7375C15.1042 4.57917 13.6833 4 12 4C10.3167 4 8.89583 4.57917 7.7375 5.7375C6.57917 6.89583 6 8.38333 6 10.2C6 11.3833 6.49167 12.7375 7.475 14.2625C8.45833 15.7875 9.96667 17.4833 12 19.35ZM12 22C9.31667 19.7167 7.3125 17.5958 5.9875 15.6375C4.6625 13.6792 4 11.8667 4 10.2C4 7.7 4.80417 5.70833 6.4125 4.225C8.02083 2.74167 9.88333 2 12 2C14.1167 2 15.9792 2.74167 17.5875 4.225C19.1958 5.70833 20 7.7 20 10.2C20 11.8667 19.3375 13.6792 18.0125 15.6375C16.6875 17.5958 14.6833 19.7167 12 22Z"
                      fill="#373737"
                    />
                  </g>
                </svg>
              </InputAdornment>
            ),
          }}
          SelectProps={{
            onOpen: () => {
              setAreaOpened(true);
            },
            onClose: () => {
              setAreaOpened(false);
            },
          }}
          aria-placeholder="Дүүрэг сонгоно уу"
        >
          <MenuItem value="1-р хороо">1-р хороо</MenuItem>
          <MenuItem value="2-р хороо">2-р хороо</MenuItem>
          <MenuItem value="3-р хороо">3-р хороо</MenuItem>
          <MenuItem value="4-р хороо">4-р хороо</MenuItem>
          <MenuItem value="5-р хороо">5-р хороо</MenuItem>
          <MenuItem value="6-р хороо">6-р хороо</MenuItem>
          <MenuItem value="7-р хороо">7-р хороо</MenuItem>
        </TextField>
        <TextField
          id="ApartmentSelect"
          value={apartment}
          onChange={(e) => {
            handleApartment(e);
            seeOpen(apartment, setApartmentOpened);
          }}
          select
          label="Байр гудамж сонгоно уу"
          style={
            apartmentOpened
              ? { backgroundColor: "#18BA51", color: "white" }
              : {}
          }
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <mask
                    id="mask0_1_1810"
                    style={{ maskType: "alpha" }}
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="0"
                    width="24"
                    height="24"
                  >
                    <rect width="24" height="24" fill="#D9D9D9" />
                  </mask>
                  <g mask="url(#mask0_1_1810)">
                    <path
                      d="M12 12C12.55 12 13.0208 11.8042 13.4125 11.4125C13.8042 11.0208 14 10.55 14 10C14 9.45 13.8042 8.97917 13.4125 8.5875C13.0208 8.19583 12.55 8 12 8C11.45 8 10.9792 8.19583 10.5875 8.5875C10.1958 8.97917 10 9.45 10 10C10 10.55 10.1958 11.0208 10.5875 11.4125C10.9792 11.8042 11.45 12 12 12ZM12 19.35C14.0333 17.4833 15.5417 15.7875 16.525 14.2625C17.5083 12.7375 18 11.3833 18 10.2C18 8.38333 17.4208 6.89583 16.2625 5.7375C15.1042 4.57917 13.6833 4 12 4C10.3167 4 8.89583 4.57917 7.7375 5.7375C6.57917 6.89583 6 8.38333 6 10.2C6 11.3833 6.49167 12.7375 7.475 14.2625C8.45833 15.7875 9.96667 17.4833 12 19.35ZM12 22C9.31667 19.7167 7.3125 17.5958 5.9875 15.6375C4.6625 13.6792 4 11.8667 4 10.2C4 7.7 4.80417 5.70833 6.4125 4.225C8.02083 2.74167 9.88333 2 12 2C14.1167 2 15.9792 2.74167 17.5875 4.225C19.1958 5.70833 20 7.7 20 10.2C20 11.8667 19.3375 13.6792 18.0125 15.6375C16.6875 17.5958 14.6833 19.7167 12 22Z"
                      fill="#373737"
                    />
                  </g>
                </svg>
              </InputAdornment>
            ),
          }}
          SelectProps={{
            onOpen: () => {
              setApartmentOpened(true);
            },
            onClose: () => {
              setApartmentOpened(false);
            },
          }}
        >
          <MenuItem value="Нархан хотхон">Нархан хотхон</MenuItem>
          <MenuItem value="26-р байр">26-р байр</MenuItem>
          <MenuItem value="Хоймор хотхон">Хоймор хотхон</MenuItem>
          <MenuItem value="45-р байр">45-р байр</MenuItem>
          <MenuItem value="Зайсан хотхон ">Зайсан хотхон </MenuItem>
        </TextField>
      </Stack>
    </Stack>
  );
}
