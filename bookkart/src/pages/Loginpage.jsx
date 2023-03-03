import React, { useState } from "react";
import {
    Grid,
    TextField,
    Button
  } from "@mui/material";
import FormDisplay from "../component/FormDisplay";

function Loginpage() {
  const [formDetail, setFormDetail] = useState({
    name: "",
    email: "",
  });

  function handleChange(event) {
    const { value, name } = event.target;

    setFormDetail((prevValue) => {
      if (name === "name") {
        return {
          name: value,
          email: prevValue.email,
        };
      } else if (name === "email") {
        return {
          name: prevValue.name,
          email: value,
        };
      }
    });
    console.log(formDetail)
  }


  function handleClick(){
    alert("Hello " + formDetail.name+"\n"+"Your Email Id: "+ formDetail.email)
  }


  return (
    <Grid
      container
      spacing={3}
      direction={"column"}
      justify={"center"}
      alignItems={"center"}
    >
      <Grid item xs={12}>
        <TextField label="Username" name="name" onChange={handleChange}></TextField>
      </Grid>

      <Grid item xs={12}>
        <TextField label="Email" name="email" onChange={handleChange} type="email" ></TextField>
      </Grid>

      <Grid item xs={12}>
        <TextField label="Password" name="password" type="password"></TextField>
      </Grid>
      <Grid item xs={12}>
            <Button fullWidth variant="contained" onClick={handleClick} color="warning"> Submit </Button>
      </Grid>
    </Grid>

  );
}

export default Loginpage;
