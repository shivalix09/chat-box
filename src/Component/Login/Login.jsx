import {
  Button,
  Card,
  FormControl,
  FormHelperText,
  FormLabel,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { Formik } from "formik";
import React from "react";
import { useNavigate } from "react-router-dom";

import * as yup from "yup";

const Login = () => {
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
          }}
          onSubmit={async (values, { resetForm }) => {
            let data = JSON.stringify(values.username);
            localStorage.setItem("username", data);

            navigate("/");
            resetForm({});
          }}
          validationSchema={yup.object().shape({
            password: yup
              .string()
              .required("Required!")
              .min(2, "Password must be more them two character!"),
            email: yup.string().email().required("Required!"),
            username: yup
              .string()
              .required("Required!")
              .min(3, "Username must be more them three character!"),
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
                  Login
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
                    <FormLabel>Passwprd</FormLabel>
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
                  <Button
                    type="submit"
                    variant="contained"
                    style={{ marginTop: "10px" }}
                  >
                    Submit
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
export default Login;
