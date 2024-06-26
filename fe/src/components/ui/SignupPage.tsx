import {
  Container,
  Typography,
  Box,
  Checkbox,
  Button,
  TextField,
} from "@mui/material";
import { useFormik } from "formik";
import { signSchema } from "../utils/validation";

export const SignupPage = () => {
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
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      reEmail: "",
      password: "",
      rePassword: "",
    },
    validationSchema: signSchema,
    onSubmit: (values) => {},
  });
  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "center",
        my: "2%",
      }}
    >
      <Box
        sx={{
          width: 448,
          maxHeight: 778,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Typography variant="h5" sx={{ textAlign: "center", fontWeight: 700 }}>
          Бүртгүүлэх
        </Typography>
        <form onSubmit={formik.handleSubmit}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              rowGap: "16px",
            }}
          >
            <Box>
              <Typography sx={{ fontSize: "14px", fontWeight: 300 }}>
                Нэр
              </Typography>
              <TextField
                sx={StyleText}
                placeholder="Нэрээ оруулна уу"
                type="text"
                value={formik.values.name}
                onChange={formik.handleChange}
                name="name"
              />
            </Box>
            <Box>
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
                Хаяг
              </Typography>
              <TextField
                placeholder="Та хаягаа оруулна уу"
                type="email"
                sx={StyleText}
                value={formik.values.reEmail}
                onChange={formik.handleChange}
                name="reEmail"
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
            </Box>
            <Box>
              <Typography sx={{ fontSize: "14px", fontWeight: 300 }}>
                Нууц үг давтах
              </Typography>
              <TextField
                placeholder="Нууц үгээ оруулна уу"
                type="password"
                sx={StyleText}
                value={formik.values.rePassword}
                onChange={formik.handleChange}
                name="rePassword"
              />
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              rowGap: "32px",
              flexDirection: "column",
              marginTop: "13%",
            }}
          >
            <Box display={"flex"} alignItems={"center"}>
              <Checkbox {...label} defaultChecked />
              <Typography>Үйлчилгээний нөхцөо зөвшөөрөх</Typography>
            </Box>
            <Button
              type="submit"
              sx={{
                "&.MuiButton-contained": {
                  width: "100%",
                  borderRadius: "4px",
                  height: "48px",
                  backgroundColor: "#EEEFF2",
                  background: "#EEEFF2",
                  color: "#1C20243D",
                  "&:hover": {
                    color: "white",
                    background: "#18BA51",
                  },
                },
              }}
              className="flex"
              variant="contained"
              disableElevation
            >
              Бүртгүүлэх
            </Button>
          </Box>
        </form>
      </Box>
    </Container>
  );
};
