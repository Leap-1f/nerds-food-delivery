import React, { useState } from "react";
import {
  Container,
  Typography,
  Box,
  Button,
  TextField,
} from "@mui/material";
import { useFormik } from "formik";
import { loginSchema } from "../utils/validation";
import Link from "next/link";
import { useRouter } from "next/router";
import { useGlobalContext } from "../utils/Context";



interface FormValues {
  email: string;
  password: string;
}

export const LoginModal: React.FC = () => {
  const router = useRouter();
  const { auth } = useGlobalContext();
  const [error, setError] = useState<string>("");
  const [showModal, setShowModal] = useState(true);

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  const StyleText = {
    width: "100%",
    borderRadius: "4px",
    border: "none",
    background: "#F7F7F8",
    "& ::placeholder": {
      fontWeight: 300,
    },
    "&:hover .MuiOutlinedInput-notchedOutline": {
      border: "none",
    },
    "& .MuiOutlinedInput-notchedOutline": {
      border: "none",
    },
  };

  const formik = useFormik<FormValues>({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginSchema,
    onSubmit: async (values) => {
      
      try {
        const response = await fetch("http://localhost:8080/user/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        });

        const data = await response.json();
        if (response.ok) {
          console.log("Login successful: ", data);
          router.push("/");
          setShowModal(false);
          auth.setIsLoggedIn(true);
          localStorage.setItem("token", data.token);
        } else {
          setError(data.error || "Failed to login");
        }
      } catch (err) {
        console.error("Error logging in: ", err);
        setError("Failed to login");
      }
    },
  });

  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "center",
        mt: "4%",
        mb: "5%",
      }}
    >
      <Box
        sx={{
          width: 448,
          height: "auto",
          p: 4,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Typography
          variant="h5"
          sx={{ textAlign: "center", fontWeight: 700, mb: "9%" }}
        >
          Нэвтрэх
        </Typography>
        <form onSubmit={formik.handleSubmit} className="flex flex-col gap-y-8 ">
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Box sx={{ fontSize: "14px", fontWeight: 300, mb: "5%" }}>
              <Typography sx={{ fontSize: "14px", fontWeight: 300 }}>
                И-мэйл
              </Typography>
              <TextField
                placeholder="И-мэйл хаягаа оруулна уу"
                type="email"
                sx={StyleText}
                value={formik.values.email}
                onChange={formik.handleChange}
                name="email"
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
              />
            </Box>

            <Box>
              <Typography sx={{ fontSize: "14px", fontWeight: 300 }}>
                Нууц үг
              </Typography>
              <TextField
                placeholder="Нууц үгээ оруулна уу"
                type="password"
                sx={StyleText}
                value={formik.values.password}
                onChange={formik.handleChange}
                name="password"
                error={
                  formik.touched.password && Boolean(formik.errors.password)
                }
                helperText={formik.touched.password && formik.errors.password}
              />
              <Typography
                sx={{
                  display: "flex",
                  justifyContent: "right",
                  fontSize: "80%",
                  color: "#3F4145",
                  marginTop: "1%",
                }}
              >
                Нууц үг сэргээх
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              rowGap: "20px",
            }}
          >
            <Button
              sx={{
                "&.MuiButton-contained": {
                  width: "100%",
                  borderRadius: "4px",
                  height: "48px",
                  backgroundColor: "#EEEFF2",
                  color: "#1C20243D",
                  "&:hover": { color: "white", backgroundColor: "#18BA51" },
                },
              }}
              disableElevation
              variant="contained"
              type="submit"
            >
              Нэвтрэх
            </Button>
            <Typography>Эсвэл</Typography>
            <Link href="./signup">
              <Button
                sx={{
                  width: "380px",
                  borderRadius: "4px",
                  height: "48px",
                  border: "1px solid #18BA51",
                  color: "black",
                  "&:hover": { color: "white", background: "#18BA51" },
                }}
                className="flex"
                variant="contained"
                disableElevation
              >
                Бүртгүүлэх
              </Button>
            </Link>
          </Box>
        </form>
      </Box>
    </Container>
  );
};
