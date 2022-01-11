import {
  Button,
  Card,
  FormControl,
  FormLabel,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { Formik } from "formik";
import React from "react";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";

const Register = () => {
  let navigate = useNavigate();

  return (
    <div>
      <Paper
        style={{
          display: "flex",
          flexDirection: "column",
          height: "100vh",
          width: "100vw",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Formik
          initialValues={{
            username: "",
            email: "",
            password: "",
            confirmpassword: "",
            number: "",
          }}
          onSubmit={async (values, { resetForm }) => {
            let data = JSON.stringify(values);
            localStorage.setItem("userInfo", data);

            navigate("/login");
            resetForm({});
          }}
          validationSchema={yup.object().shape({
            password: yup
              .string()
              .required("Required!")
              .min(6, "Password must be more them six character!"),
            confirmpassword: yup
              .string()
              .required("Required")
              .oneOf([yup.ref("password"), null], "Password must be match"),
            email: yup.string().email().required("Required!"),
            username: yup
              .string()
              .required("Required!")
              .min(3, "Username must be more them three character!"),
            number: yup
              .string()
              .required("Required")
              .matches(/^[0-9]{10}$/, "Phone number is not valid"),
          })}
        >
          {({ values, errors, touched, handleSubmit, handleChange }) => {
            return (
              <Card elevation={2} style={{ padding: "15px" }}>
                <Typography
                  variant="h5"
                  color="primary"
                  textAlign="center"
                  marginBottom="20px"
                >
                  Register
                </Typography>
                <form
                  onSubmit={handleSubmit}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    width: "fit-content",
                  }}
                >
                  <FormControl>
                    <FormLabel>User Name</FormLabel>
                    <TextField
                      error={Boolean(touched.username && errors.username)}
                      helperText={touched.username && errors.username}
                      id="username"
                      type="text"
                      name="username"
                      variant="standard"
                      value={values.username}
                      onChange={handleChange}
                    />
                  </FormControl>
                  <FormControl>
                    <FormLabel>Email</FormLabel>
                    <TextField
                      error={Boolean(touched.email && errors.email)}
                      helperText={touched.email && errors.email}
                      id="email"
                      type="email"
                      name="email"
                      variant="standard"
                      value={values.email}
                      onChange={handleChange}
                    />
                  </FormControl>
                  <FormControl>
                    <FormLabel>Number</FormLabel>
                    <TextField
                      error={Boolean(touched.number && errors.number)}
                      helperText={touched.number && errors.number}
                      id="number"
                      type="text"
                      name="number"
                      variant="standard"
                      value={values.number}
                      onChange={handleChange}
                    />
                  </FormControl>
                  <FormControl>
                    <FormLabel>Password</FormLabel>
                    <TextField
                      error={Boolean(touched.password && errors.password)}
                      helperText={touched.password && errors.password}
                      id="password"
                      type="password"
                      name="password"
                      variant="standard"
                      value={values.password}
                      onChange={handleChange}
                    />
                  </FormControl>
                  <FormControl>
                    <FormLabel>Confirm Password</FormLabel>
                    <TextField
                      error={Boolean(
                        touched.confirmpassword && errors.confirmpassword
                      )}
                      helperText={
                        touched.confirmpassword && errors.confirmpassword
                      }
                      id="confirmpassword"
                      type="password"
                      name="confirmpassword"
                      variant="standard"
                      value={values.confirmpassword}
                      onChange={handleChange}
                    />
                  </FormControl>
                  <Button
                    type="submit"
                    variant="contained"
                    style={{ marginTop: "10px" }}
                  >
                    Register
                  </Button>
                </form>
              </Card>
            );
          }}
        </Formik>
      </Paper>
    </div>
  );
};
export default Register;
