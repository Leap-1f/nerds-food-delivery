import {
  TextField,
  Button,
  FormControl,
  InputLabel,
  Box,
  OutlinedInput,
  InputAdornment,
  Stack,
  Typography,
  IconButton,
} from "@mui/material";
import { useState, useEffect } from "react";
export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [forgotStage, setStage] = useState(0);
  const [btnDisabled, setDisabled] = useState(true);
  const [title, setTitle] = useState("Нууц үг сэргээх");
  const [first, setFirst] = useState(true);
  const [second, setSecond] = useState(false);
  const [third, setThird] = useState(false);
  const [code, setCode] = useState("");
  const [pass, setPass] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };
  function CheckMailValidity() {
    if (
      email
        .toLowerCase()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        )
    ) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }
  function CheckCodeValidity() {
    if (code.length != 4) {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
  }
  async function SendCode() {
    const sendCode = await fetch("http://localhost:8080/forgotPassword", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
      }),
    }).then((response) => {
      if (response.status != 400) {
        setStage(1);
      } else {
        // add error modal here. or maybe should not do anything.
      }
    });
  }
  async function checkCode() {
    const toMail = document.getElementById("ToEmail");
    const codeEl = document.getElementById("code");
    const checkCode = await fetch("http://localhost:8080/forgotPassword/code", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        code: code,
      }),
    })
      .then((response) => response.json())
      .then((response) => {
        if (response.status != 400) {
          localStorage.setItem("code", response.temp);
          setTitle("Шинэ нууц үг зохиох ");
          setStage(2);
          codeEl?.classList.add("hidden");
          toMail?.setAttribute("hidden", "");
        } else {
          // add error or snackbar here, i am too tired.
        }
      });
  }
  async function changePassword() {
    const sendCode = await fetch(
      "http://localhost:8080/forgotPassword/change",
      {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          code: code,
          pass: pass,
        }),
      }
    ).then((response) => {
      if (response.status != 400) {
        // add success modal
      } else {
        // add error modal or somethign !!! help me!!!! aaaaaAAAAA
      }
    });
  }
  function validatePassword() {
    if (pass === confirmPass && pass != "") {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }
  function stageChange() {
    if (forgotStage === 0) {
      SendCode();
      setFirst(false);
      setSecond(true);
      setDisabled(true);
    } else if (forgotStage === 1) {
      changePassword();
      setSecond(false);
      setDisabled(true);
      setThird(true);
    } else {
    }
  }
  useEffect(() => {
    CheckMailValidity();
  }, []);
  useEffect(() => {
    CheckMailValidity();
  }, [email]);
  useEffect(() => {
    CheckCodeValidity();
  }, [code]);

  useEffect(() => {
    validatePassword();
  }, [pass, confirmPass]);
  return (
    <Box
      sx={{
        height: "50vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Stack spacing={6} sx={{ width: "19%" }}>
        <Typography
          variant="h6"
          sx={{ fontWeight: 700, fontSize: 28 }}
          align="center"
        >
          {title}
        </Typography>
        {first && (
          <TextField
            type="text"
            sx={{
              backgroundColor: "#F7F7F8",
              color: "#8B8E95",
              width: "100%",
              top: "20px",
            }}
            placeholder="Имэйл хаягаа оруулна уу"
            label="Имэйл"
            value={email}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setEmail(event.target.value);
            }}
          />
        )}
        {second && (
          <Stack spacing={2}>
            <Typography
              sx={{
                color: "#695C08",
                width: "20vw",
                display: "flex",
                flexDirection: "row",
                gap: "5px",
              }}
              align="center"
            >
              Таны <span style={{ color: "#18BA51" }}>{email}</span>
              хаяг руу сэргээх код илгээх болно.
            </Typography>
            <TextField
              type="number"
              sx={{
                backgroundColor: "#F7F7F8",
                color: "#8B8E95",
                width: "100%",
                top: "20px",
              }}
              placeholder="*********"
              label="Нууц үг сэргээх код"
              inputProps={{
                max: 9999,
                min: 0,
              }}
              value={code}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                setCode(event.target.value);
              }}
            />
          </Stack>
        )}
        {third && (
          <Stack spacing={4}>
            <FormControl
              sx={{
                backgroundColor: "#F7F7F8",
                color: "#8B8E95",
                width: "100%",
                top: "20px",
              }}
              variant="outlined"
            >
              <InputLabel htmlFor="outlined-adornment-password">
                Password
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                type={showPassword ? "text" : "password"}
                value={pass}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <h6>👁️</h6> : <h6>𓁹</h6>}
                    </IconButton>
                  </InputAdornment>
                }
                label="Password"
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                  setPass(event.target.value);
                }}
              />
            </FormControl>
            <FormControl
              sx={{
                backgroundColor: "#F7F7F8",
                color: "#8B8E95",
                width: "100%",
                top: "20px",
              }}
              variant="outlined"
            >
              <InputLabel htmlFor="cpass">Confirm Password</InputLabel>
              <OutlinedInput
                id="cpass"
                type={showPassword ? "text" : "password"}
                value={confirmPass}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <h6>👁️</h6> : <h6>𓁹</h6>}
                    </IconButton>
                  </InputAdornment>
                }
                label="Confirm Password"
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                  setConfirmPass(event.target.value);
                }}
              />
            </FormControl>
          </Stack>
        )}
        <Button
          id="butt"
          disabled={btnDisabled}
          variant="contained"
          sx={{
            background: "#18BA51",
            height: "5vh",
            borderRadius: "3px",
            top: "20px",
            fontWeight: "400",
          }}
          className="bg-[#18BA51]"
          color="success"
          onClick={() => {
            stageChange();
          }}
        >
          Үргэлжлүүлэх
        </Button>
      </Stack>
    </Box>
  );
}
