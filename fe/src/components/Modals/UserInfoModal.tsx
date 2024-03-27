import {
  Box,
  Avatar,
  Typography,
  TextField,
  InputAdornment,
  Stack,
} from "@mui/material";
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import { useState } from "react";

export const UserProfile = () => {
  const [userData, setUserData] = useState({
    name: "УгтахБаяр",
    phone: 80234566,
    email: "dashka.bagsh@gmail.com"
  })


  return (
    <>
    <Box display="flex" flexDirection="column" alignItems="center">
      <Box mb={2} display="flex" alignItems="center">
        <Avatar
          alt="Remy Sharp"
          src="/profile.jpg"
          sx={{ width: "120px", height: "120px" }}
        />
        <ModeEditOutlineOutlinedIcon color="primary" />
      </Box>
      <Typography variant="h4" sx={{ fontWeight: "bold", mb: 2 }}>
        УгтахБаяр
      </Typography>
    </Box>
    <Stack direction="column" alignItems="center">
        {/* Text input fields */}
        <Stack direction="column" spacing={2} width="100%">
          {/* Name */}
          <TextField
            label="Таны нэр"
            variant="standard"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Avatar
                    sx={{ bgcolor: "white", border: "1px solid #EEEFF2" }}
                  >
                    <PersonOutlineOutlinedIcon sx={{ color: "black" }} />
                  </Avatar>
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end">
                  <ModeEditOutlineOutlinedIcon color="primary" />
                </InputAdornment>
              ),
              disableUnderline: true
            }}
            InputLabelProps={{ shrink: true }} // Ensure label stays at the top
            sx={{
              backgroundColor: "#F6F6F6",
            }}
            value={userData.name}
          />
          {/* Phone number */}
          <TextField
            label="утасны дугаар"
            variant="standard"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Avatar
                    sx={{ bgcolor: "white", border: "1px solid #EEEFF2" }}
                  >
                    <PhoneOutlinedIcon sx={{ color: "black" }} />
                  </Avatar>
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end">
                  <ModeEditOutlineOutlinedIcon color="primary" />
                </InputAdornment>
              ),
              disableUnderline: true
            }}
            InputLabelProps={{ shrink: true }}
            sx={{
              backgroundColor: "#F6F6F6"
            }}
            value={userData.phone}
          />
          {/* Email */}
          <Box sx={{bgcolor: '#F6F6F6', borderRadius: '4px', p: '8px 20px', display: 'flex'}}>
            <Box><EmailOutlinedIcon/></Box>
          <TextField
            label="Имэйл хаяг"
            variant="standard"
            InputProps={{
              
              disableUnderline: true
            }}
            value={userData.email}
          />
          </Box>
        </Stack>
      </Stack>
    </>
  );
};
