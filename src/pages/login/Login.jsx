import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { List, ListItem, ListItemText, ListItemIcon } from "@mui/material";
import CircleIcon from '@mui/icons-material/Circle';
import { useFormik } from "formik";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import authService from "../../services/auth.service";
import { useAuthContext } from "../../context/auth";

const linkStyle = {
  textDecoration: "none",
};

const initialValues = {
  email: "",
  password: "",
};

const loginSchema = Yup.object({
  email: Yup.string().email().required("Please enter your email"),
  password: Yup.string()
    .min(6)
    .required("Please enter password with min 6 char"),
});
const Login = () => {
  const navigate = useNavigate();
  const authContext = useAuthContext();

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: loginSchema,
      onSubmit: (values) => {
        authService.login(values).then((res) => {
          authContext.setUser(res);
          toast.success("Login successfully");
          navigate("/");
        });
      },
    });

  return (
    <Container maxWidth="lg" sx={{ margin: "1.5rem auto" ,height:"65vh"}}>
      <Box sx={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        <Typography
          variant="h4"
          gutterBottom
          style={{ fontWeight: 600 }}
          textAlign="center"
        >
          Login or Create An Account
        </Typography>

        <Grid container spacing={5}>
          <Grid item md={6} xs={12}>
            <Typography variant="h6" gutterBottom style={{ fontWeight: 600 }}>
              New Customers
            </Typography>
            <hr />
            <Typography variant="body1" gutterBottom color="grey">
              Registration is free and easy
            </Typography>
            <List>
              <ListItem>
                <ListItemIcon sx={{ width: "10px" }}>
                  <CircleIcon sx={{ color: "black", fontSize: "small" }} />
                </ListItemIcon>
                <ListItemText>Faster Checkout</ListItemText>
              </ListItem>
              <ListItem>
                <ListItemIcon sx={{ width: "10px" }}>
                  <CircleIcon sx={{ color: "black", fontSize: "small" }} />
                </ListItemIcon>
                <ListItemText>Save multiple Shipping Addresses</ListItemText>
              </ListItem>
              <ListItem>
                <ListItemIcon sx={{ width: "10px" }}>
                  <CircleIcon sx={{ color: "black", fontSize: "small" }} />
                </ListItemIcon>
                <ListItemText>View and track orers and more</ListItemText>
              </ListItem>
            </List>
            <Link to="/register" style={linkStyle}>
              <Button
                variant="contained"
                color="error"
                sx={{
                  textTransform: "capitalize",
                  backgroundColor: "#f14d54",
                  fontWeight: "600",
                }}
              >
                Create an Account
              </Button>
            </Link>
          </Grid>
          <Grid item md={6} xs={12}>
            <Typography variant="h6" gutterBottom style={{ fontWeight: 600 }}>
              Registered Customers
            </Typography>
            <hr />
            <Typography variant="body1" gutterBottom color="grey">
              If you have an account with us please log in
            </Typography>
            <form onSubmit={handleSubmit}>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <Typography variant="body1" gutterBottom>
                    Email Address *
                  </Typography>
                  <TextField
                    type="email"
                    size="small"
                    fullWidth
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={
                      errors.email && touched.email ? errors.email : null
                    }
                    error={errors.email && touched.email}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="body1" gutterBottom>
                    Password *
                  </Typography>
                  <TextField
                    type="password"
                    size="small"
                    fullWidth
                    name="password"
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={
                      errors.password && touched.password
                        ? errors.password
                        : null
                    }
                    error={errors.password && touched.password}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button
                    variant="contained"
                    color="error"
                    type="submit"
                    sx={{
                      textTransform: "capitalize",
                      backgroundColor: "#f14d54",
                      fontWeight: "600",
                    }}
                  >
                    Login
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Login;






















// import React from "react";
// import { Formik, Form, Field, ErrorMessage } from "formik";
// import * as Yup from "yup";
// import "./Login.css";
// import { Button } from "@material-ui/core";
// import Top from "../../component/Top";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import { useAuthContext } from "../../context/auth";
// import authService from "../../services/auth.service";



// const initialValues = {
//   email: "",
//   password: "",
// };

// const validationSchema = Yup.object({
//   email: Yup.string().email("Invalid email").required("Required"),
//   password: Yup.string().required("Required"),
// });

// const Login = () => {
//   const navigate = useNavigate();
//   const authContext = useAuthContext();

//   return (
//     <div className="loginForm">
//       <div
//         style={{
//           alignItems: "center",
//           display: "flex",
//           justifyContent: "center",
//         }}
//       >
//         <Top />
//       </div>
//       <div className="formContainer">
//         {/* Left Section - New Customer  */}
//         <div className="loginLeft">
//           <div className="left-top">
//             <h2>New Customer</h2>
//             <div className="divider"></div>
//             <p>Registration is free and easy.</p>
//             <ul>
//               <li>Faster Checkout</li>
//               <li>Save Multiple Shipping Address</li>
//               <li>View and Track orders and more</li>
//             </ul>
//           </div>
//           <div className="left-bottom">
//             <Button
//               variant="contained"
//               type="submit"
//               style={{
//                 backgroundColor: "#f14d54",
//                 color: "white",
//                 width: "220px",
//                 height: "45px",
//               }}
//             >
//               Register
//             </Button>
//           </div>
//         </div>

//         {/* Right Section - Email and Password */}
//         <div className="loginRight">
//           <Formik
//             initialValues={initialValues}
//             validationSchema={validationSchema}
//             onSubmit={(values) => {
//               console.log(values);
//               authService.login(values).then((res) => {
//           authContext.setUser(res);
//           toast.success("Login successfully");
//           navigate("/");
//         });
//             }}
//           >
//             <Form>
//               <h2>Login Information</h2>
//               <hr />

//               <Field
//                 type="email"
//                 name="email"
//                 placeholder="Email Address"
//                 className="input-field"
//               />
//               <ErrorMessage
//                 name="email"
//                 component="div"
//                 className="error-message"
//               />

//               <Field
//                 type="password"
//                 name="password"
//                 placeholder="Password"
//                 className="input-field"
//               />
//               <ErrorMessage
//                 name="password"
//                 component="div"
//                 className="error-message"
//               />
//               <div className="loginBtn">
//                 <Button
//                   variant="contained"
//                   style={{
//                     backgroundColor: "#f14d54",
//                     color: "white",
//                     width: "100px",
//                     height: "45px",
//                   }}
//                   type="submit"
//                 >
//                   Login
//                 </Button>
//               </div>
//             </Form>
//           </Formik>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;
