import * as yup from "yup";

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;

export const signSchema = yup.object().shape({
  name: yup.string().min(3) .required("Required"),
  email: yup.string().email("Please enter valid email") .required("Required"),
  password: yup
    .string()
    .min(5)
    .matches(passwordRules, {
      message: "Password must contain A-Z, a-z, 0-9  and at least 5 character",
    })
    .required("Required"),
  rePassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Password must match")
    .required("required"),
});


export const loginSchema = yup.object().shape({
  email: yup.string().email("Please enter valid email") .required("Required"),
  password: yup
    .string()
    .min(5)
    .matches(passwordRules, {
      message: "Password must contain A-Z, a-z, 0-9  and at least 5 character",
    })
    .required("Required")
});
