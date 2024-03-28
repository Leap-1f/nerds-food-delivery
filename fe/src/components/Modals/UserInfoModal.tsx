import React, { useState } from "react";
import {
  Box,
  Avatar,
  Typography,
  TextField,
  Stack,
  Alert,
} from "@mui/material";
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import LogoutIcon from "@mui/icons-material/Logout";
import RestoreIcon from "@mui/icons-material/Restore";

interface UserData {
  value: string | number;
  isEditing: boolean;
}

export const UserProfile = () => {
  const [userData, setUserData] = useState<{
    name: UserData;
    phone: UserData;
    email: UserData;
  }>({
    name: { value: "УгтахБаяр", isEditing: false },
    phone: { value: 80234566, isEditing: false },
    email: { value: "dashka.bagsh@gmail.com", isEditing: false },
  });

  const [focusedField, setFocusedField] = useState<
    keyof typeof userData | null
  >(null);
  const [save, setSave] = useState(false);

  const handleEdit = (field: keyof typeof userData) => {
    setUserData((prevData) => ({
      ...prevData,
      [field]: { ...prevData[field], isEditing: true },
    }));
    setFocusedField(field);
  };

  const handleChange = (
    field: keyof typeof userData,
    value: string | number
  ) => {
    setUserData((prevData) => ({
      ...prevData,
      [field]: { ...prevData[field], value: value },
    }));
  };

  const handleKeyDown = (
    event: React.KeyboardEvent<HTMLInputElement>,
    field: keyof typeof userData
  ) => {
    if (event.key === "Enter") {
      setUserData((prevData) => ({
        ...prevData,
        [field]: { ...prevData[field], isEditing: false },
      }));
      setSave(true);
      setFocusedField(null);
    }
  };

  return (
    <>
      {save && (
        <Alert severity="success">Таны мэдээлэл амжилттай шинэчлэгдлээ.</Alert>
      )}
      <Box
        display="flex"
        flexDirection="column"
        gap={"40px"}
        alignItems="center"
      >
        <Box mb={2} display="flex" alignItems="center" position={"relative"}>
          <Box
            sx={{
              borderRadius: "50%",
              bgcolor: "white",
              border: "1px solid #EEEFF2",
              p: "5px",
              position: "absolute",
              bottom: 0,
              zIndex: 1,
              right: 0,
            }}
          >
            <ModeEditOutlineOutlinedIcon color="primary" />
          </Box>
          <Avatar
            alt="Remy Sharp"
            src="/profile.jpg"
            sx={{ width: "120px", height: "120px" }}
          />
        </Box>
        <Typography variant="h4" sx={{ fontWeight: "bold", mb: 2 }}>
          {userData.name.value}
        </Typography>
      </Box>
      <Stack direction="column" mt={"40px"} alignItems={"center"}>
        {/* Text input fields */}
        <Stack
          direction="column"
          spacing={2}
          maxWidth="432px"
          alignItems={"center"}
        >
          {/* Name */}
          <Box
            sx={{
              bgcolor: "#F6F6F6",
              borderRadius: "4px",
              p: "8px 20px",
              display: "flex",
              gap: "8px",
              width: "432px",
              border:
                focusedField === "name"
                  ? "1px solid #D6D8DB"
                  : "1px solid #EEEFF2",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "50%",
                bgcolor: "white",
                px: "10px",
                border: "1px solid #EEEFF2",
              }}
            >
              <PersonOutlineOutlinedIcon sx={{ color: "black" }} />
            </Box>
            <TextField
              label="Таны нэр"
              variant="standard"
              InputProps={{
                disableUnderline: true,
                readOnly: !userData.name.isEditing,
                onChange: (e) => handleChange("name", e.target.value),
                onKeyDown: (e) => handleKeyDown(e, "name"),
                onFocus: () => setFocusedField("name"),
                onBlur: () => setFocusedField(null),
              }}
              value={userData.name.value as string}
              sx={{
                flex: 1,
              }}
            />
            {!userData.name.isEditing && (
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <ModeEditOutlineOutlinedIcon
                  color="primary"
                  onClick={() => handleEdit("name")}
                />
              </Box>
            )}
          </Box>
          {/* Phone number */}
          <Box
            sx={{
              bgcolor: "#F6F6F6",
              borderRadius: "4px",
              p: "8px 20px",
              display: "flex",
              gap: "8px",
              width: "100%",
              border:
                focusedField === "phone"
                  ? "1px solid #D6D8DB"
                  : "1px solid #EEEFF2",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "50%",
                bgcolor: "white",
                px: "10px",
                border: "1px solid #EEEFF2",
              }}
            >
              <PhoneOutlinedIcon sx={{ color: "black" }} />
            </Box>
            <TextField
              label="утасны дугаар"
              variant="standard"
              InputProps={{
                disableUnderline: true,
                readOnly: !userData.phone.isEditing,
                onChange: (e) => handleChange("phone", e.target.value),
                onKeyDown: (e) => handleKeyDown(e, "phone"),
                onFocus: () => setFocusedField("phone"),
                onBlur: () => setFocusedField(null),
              }}
              value={userData.phone.value as number}
              sx={{ flex: 1 }}
            />
            {!userData.phone.isEditing && (
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <ModeEditOutlineOutlinedIcon
                  color="primary"
                  onClick={() => handleEdit("phone")}
                />
              </Box>
            )}
          </Box>
          {/* Email */}
          <Box
            sx={{
              bgcolor: "#F6F6F6",
              borderRadius: "4px",
              p: "8px 20px",
              display: "flex",
              gap: "8px",
              width: "100%",
              border:
                focusedField === "email"
                  ? "1px solid #D6D8DB"
                  : "1px solid #EEEFF2",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "50%",
                bgcolor: "white",
                px: "10px",
                border: "1px solid #EEEFF2",
              }}
            >
              <EmailOutlinedIcon />
            </Box>
            <TextField
              label="Имэйл хаяг"
              variant="standard"
              InputProps={{
                disableUnderline: true,
                readOnly: !userData.email.isEditing,
                onChange: (ev) => handleChange("email", ev.target.value),
                onKeyDown: (ev) => handleKeyDown(ev, "email"),
                onFocus: () => setFocusedField("email"),
                onBlur: () => setFocusedField(null),
              }}
              value={userData.email.value as string}
              sx={{ width: "100%" }}
            />
            {!userData.email.isEditing && (
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <ModeEditOutlineOutlinedIcon
                  color="primary"
                  onClick={() => handleEdit("email")}
                />
              </Box>
            )}
          </Box>
        </Stack>
        <Stack
          direction={"column"}
          width={"432px"}
          gap={3}
          mt={3}
          pl={"20px"}
          alignItems={"flex-start"}
        >
          <Box display={"flex"} gap={1} height={"100%"} alignItems={"center"}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "50%",
                bgcolor: "white",
                p: "10px",
                border: "1px solid #EEEFF2",
              }}
            >
              <RestoreIcon sx={{ color: "black" }} />
            </Box>
            <Typography>Захиалгын түүх</Typography>
          </Box>
          <Box display={"flex"} gap={1} height={"100%"} alignItems={"center"}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "50%",
                bgcolor: "white",
                p: "10px",
                border: "1px solid #EEEFF2",
              }}
            >
              <LogoutIcon sx={{ color: "black" }} />
            </Box>
            <Typography>Гарах</Typography>
          </Box>
        </Stack>
      </Stack>
    </>
  );
};
