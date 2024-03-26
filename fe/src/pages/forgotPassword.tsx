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
    const [btnDisabled, setDisabled] = useState(false);
    const [title, setTitle] = useState("Нууц үг сэргээх");
    const [first, setFirst] = useState(true);
    const [second, setSecond] = useState(false);
    const [third, setThird] = useState(false);
    const [code, setCode] = useState("0");
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
      var button = document.getElementById("butt");
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
    function SendCode() {
      /* add backend code here*/
      setStage(1);
    }
    function changePassword() {
      /* have code in here to verify code state at line 8. */
      const returnedcode: number = 400;
      const toMail = document.getElementById("ToEmail");
      const code = document.getElementById("code");
      if (returnedcode === 400) {
        setTitle("Шинэ нууц үг зохиох ");
        setStage(2);
        code?.classList.add("hidden");
        toMail?.setAttribute("hidden", "");
      }
    }
    function validatePassword() {
      if (pass === confirmPass) {
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
        console.log(forgotStage);
      } else if (forgotStage === 1) {
        changePassword();
        setSecond(false);
        setDisabled(true);
        setThird(true);
        console.log(forgotStage);
      } else {
        console.log(forgotStage);
      }
    }
    useEffect(() => {
      CheckMailValidity();
    }, [email]);
    useEffect(() => {
      CheckCodeValidity();
    }, [code]);
    useEffect(() => {
      CheckMailValidity();
    }, []);
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
  