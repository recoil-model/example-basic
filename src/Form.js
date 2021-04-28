import React from "react";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import { Card, CardActions } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import { userModel } from "./recoil/model";
import { useRecoilCallback, useRecoilState, useRecoilValue, useResetRecoilState } from "recoil";
import userCallback from "./recoil/callbacks";
const TextFieldRecoil = ({ field, ...props }) => {

  const [value, setValue] = useRecoilState(field.value)
  const validate = useRecoilValue(field.validate)

  return <TextField value={value}
    onChange={(e) => setValue(e.target.value)}
    error={validate.error}
    helperText={validate.message} {...props} />
}
const Submit = () => {
  const validate = useRecoilValue(userModel.validate);
  const save = useRecoilCallback(userCallback.save);
  return (
    <Button
      disabled={validate.error}
      variant="contained"
      color="primary"
      fullWidth
      onClick={() => {
        save();
      }}
    >
      Submit
    </Button>
  );
};
const Reset = () => {
  const reset = useResetRecoilState(userModel.value);
  return (
    <Button
      variant="contained"
      color="primary"
      fullWidth
      onClick={() => {
        reset();
      }}
    >
      Reset
    </Button>
  );
};

const Form = () => (
  <Grid container justify="center">
    <Grid item xs={12} sm={10} md={5}>
      <Card style={{ backgroundColor: "#e0e0e0" }}>
        <CardContent style={{ backgroundColor: "#f5f5f5" }}>
          <TextFieldRecoil
            field={userModel.fields.firstName}
            label="FirstName"
            name="firstName"
            margin="normal"
            fullWidth
            variant="outlined"
            required
          />

          <TextFieldRecoil
            field={userModel.fields.lastName}
            label="LastName"
            name="lastName"
            margin="normal"
            fullWidth
            variant="outlined"
            required
          />

          <TextFieldRecoil
            field={userModel.fields.username}
            label="Username"
            name="username"
            margin="normal"
            fullWidth
            variant="outlined"
            required
          />

          <TextFieldRecoil
            field={userModel.fields.email}
            label="Email"
            name="email"
            margin="normal"
            type="email"
            fullWidth
            variant="outlined"
            required
          />

          <TextFieldRecoil
            field={userModel.fields.password}
            label="Password"
            name="password"
            margin="normal"
            type="password"
            fullWidth
            variant="outlined"
            required
          />

          <TextFieldRecoil
            field={userModel.fields.cPassword}
            label="Password Confirmation"
            name="cPassword"
            margin="normal"
            type="password"
            fullWidth
            variant="outlined"
            required
          />
        </CardContent>
        <CardActions>
          <Submit />
          <Reset />
        </CardActions>
      </Card>
    </Grid>
  </Grid>
);

export default Form;
