import React, { useState, useEffect } from "react";
import {
  Box,
  Avatar,
  Typography,
  TextField,
  Stack,
  Button,
  Alert,
} from "@mui/material";
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import LogoutIcon from "@mui/icons-material/Logout";
import RestoreIcon from "@mui/icons-material/Restore";
import { Dialog, DialogTitle, DialogActions } from "@mui/material";
import { jwtDecode } from "jwt-decode";
import { useGlobalContext } from "../utils/Context";

interface UserData {
  value: string | number;
  isEditing: boolean;
}

export const UserProfile = () => {
  const { auth, userId } = useGlobalContext();
  const [userData, setUserData] = useState<{
    name: UserData;
    phone: UserData;
    email: UserData;
  }>({
    name: { value: "", isEditing: false },
    phone: { value: "", isEditing: false },
    email: { value: "", isEditing: false },
  });

  console.log(userId);

  useEffect(() => {
    const userInfo = async () => {
      if (userId) {
        try {
          const response = await fetch(`http://localhost:8080/user/info`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ userId }),
          });

          if (response.ok) {
            const data = await response.json();
            setUserData({
              name: { value: data.name, isEditing: false },
              phone: { value: data.phoneNumber, isEditing: false },
              email: { value: data.email, isEditing: false },
            });
            console.log(data.name);
          } else {
            console.error("Error parsing user info:", response.status);
          }
        } catch (error) {
          console.error("Error fetching user info:", error);
        }
      }
    };

    userInfo();
  }, [userId]);

  const [focusedField, setFocusedField] = useState<
    keyof typeof userData | null
  >(null);
  const [save, setSave] = useState(false);
  const [showSaveButton, setShowSaveButton] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [editedName, setEditedName] = useState<string | number>("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token: any = localStorage.getItem("token");
        const decodedToken: any = jwtDecode(token);
        const userId = decodedToken.userId;
        const response = await fetch(`http://localhost:8080/user/${userId}`);
        if (!response.ok) {
          throw new Error("Failed to fetch user data");
        }

        const userData = await response.json();
        setUserData({
          name: { value: userData.name, isEditing: false },
          phone: { value: userData.phoneNumber, isEditing: false },
          email: { value: userData.email, isEditing: false },
        });
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };
    fetchData();
  }, []);

  const handleEdit = (field: keyof typeof userData) => {
    setUserData((prevData) => ({
      ...prevData,
      [field]: { ...prevData[field], isEditing: true },
    }));
    setFocusedField(field);
    setShowSaveButton(true);
    setSave(false);
  };

  const handleSave = (field: keyof typeof userData) => {
    setUserData((prevData) => ({
      ...prevData,
      [field]: { ...prevData[field], isEditing: false },
      name: { ...prevData.name, isEditing: false, value: prevData.name.value },
      phone: { ...prevData.phone, isEditing: false },
      email: { ...prevData.email, isEditing: false },
    }));
    setSave(true);
    setFocusedField(null);
    setShowSaveButton(false);
    setTimeout(() => {
      setSave(false);
    }, 2000);
  };

  const handleChange = (
    field: keyof typeof userData,
    value: string | number
  ) => {
    if (field === "name") {
      setEditedName(value);
    }
    setUserData((prevData) => ({
      ...prevData,
      [field]: { ...prevData[field], value: value },
    }));
  };

  const handleModalOpen = () => {
    setOpenModal(true);
  };

  const handleModalClose = () => {
    setOpenModal(false);
  };

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];
  };

  return (
    <>
      <Box
        display="flex"
        flexDirection="column"
        gap={"40px"}
        alignItems="center"
        position="relative"
      >
        {save && (
          <Alert
            severity="success"
            sx={{
              position: "absolute",
              top: "64%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              transition: "opacity 0.5s ease",
              opacity: 1,
              zIndex: 2,
            }}
          >
            Таны мэдээлэл амжилттай шинэчлэгдлээ.
          </Alert>
        )}
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
            <input
              type="file"
              accept="image/*"
              style={{ display: "none" }}
              onChange={handleImageUpload}
              id="avatar-upload"
            />
            <label htmlFor="avatar-upload">
              <ModeEditOutlineOutlinedIcon color="primary" />
            </label>
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
      <Stack direction="column" my={"40px"} alignItems={"center"}>
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
                onFocus: () => setFocusedField("name"),
                onBlur: () => setFocusedField(null),
              }}
              value={userData.name.value as string}
              sx={{
                flex: 1,
              }}
            />
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
        {/* Save button */}
        {showSaveButton && (
          <Button
            variant="contained"
            onClick={() => handleSave(focusedField as keyof typeof userData)}
            sx={{
              mt: 2,
              width: "432px",
              height: "50px",
              boxShadow: "none",
              bgcolor: "#18BA51 !important",
              color: "white",
              "&:hover": {
                bgcolor: "primary.dark",
              },
            }}
          >
            Хадгалах
          </Button>
        )}
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
          <Box
            display={"flex"}
            gap={1}
            height={"100%"}
            alignItems={"center"}
            onClick={handleModalOpen}
          >
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
          <Dialog
            open={openModal}
            onClose={handleModalClose}
            PaperProps={{
              sx: {
                borderRadius: "20px",
                pt: "20px",
                overflow: "hidden",
              },
            }}
          >
            <DialogTitle
              sx={{
                borderRadius: "20px",
                width: "384px",
                textAlign: "center",
              }}
            >
              Та pinecone-д сурч байхдаа тарчилж байна уу? 🥹
            </DialogTitle>
            <DialogActions sx={{ justifyContent: "center", p: 0, mt: "20px" }}>
              <Button
                sx={{
                  flex: 1,
                  backgroundColor: "rgba(24, 186, 81, 0.20) !important",
                  color: "#8B8E95",
                  height: "30%",
                  borderRadius: 0,
                  py: "15px",
                }}
                onClick={handleModalClose}
              >
                Үгүй 🤥
              </Button>
              <Button
                sx={{
                  flex: 1,
                  backgroundColor: "#18BA51 !important",
                  color: "secondary.contrastText",
                  height: "30%",
                  borderRadius: 0,
                  marginLeft: "0 !important",
                  py: "15px",
                }}
                onClick={() => {
                  handleModalClose();
                  auth.logout();
                }}
                autoFocus
              >
                Тийм 🫂
              </Button>
            </DialogActions>
          </Dialog>
        </Stack>
      </Stack>
    </>
  );
};
