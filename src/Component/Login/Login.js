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
import * as yup from "yup";
import { useHistory } from "react-router-dom";
import { auth } from "../../firebase";
import { setToken, setUserInfo } from "../../Helper";

const Login = () => {
  let history = useHistory();

  const LoginSchema = yup.object().shape({
    password: yup
      .string()
      .required("Required!")
      .min(6, "Password must be more them six character!"),
    email: yup.string().email().required("Required!"),
  });

  const authUser = (user) => {
    const { email, password } = user;
    auth
      .signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        var user = userCredential.user;
        if (user) {
          const { email, refreshToken } = user;

          const Username = email;

          history.push("/chatScreen", Username);

          setToken(JSON.stringify(refreshToken));
          setUserInfo(JSON.stringify(email));
          history.push("/chatscreen");
        }
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
      });
  };

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
          initialValues={{ email: "", password: "" }}
          validationSchema={LoginSchema}
          onSubmit={async (values, { resetForm }) => {
            await authUser(values);
            resetForm({});
          }}
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
                  <Button
                    type="submit"
                    variant="contained"
                    style={{ marginTop: "10px" }}
                  >
                    Login
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
