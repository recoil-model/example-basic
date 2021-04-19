import React from "react";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import { Card, CardActions } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import { RecoilModelField } from "recoil-model";
import { userModel } from "./recoil/model";
import { useRecoilCallback, useRecoilValue, useResetRecoilState } from "recoil";
import userCallback from "./recoil/callbacks";
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
          <RecoilModelField
            field={userModel.fields.firstName}
            component={({ value, setValue, validate }) => {
              console.log(validate);
              return (
                <TextField
                  label="FirstName"
                  name="firstName"
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                  error={validate.error}
                  helperText={validate.message}
                  margin="normal"
                  fullWidth
                  variant="outlined"
                  required
                />
              );
            }}
          />

          <RecoilModelField
            field={userModel.fields.lastName}
            component={({ value, setValue, validate }) => {
              return (
                <TextField
                  label="LastName"
                  name="lastName"
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                  error={validate.error}
                  helperText={validate.message}
                  margin="normal"
                  fullWidth
                  variant="outlined"
                  required
                />
              );
            }}
          />

          <RecoilModelField
            field={userModel.fields.username}
            component={({ value, setValue, validate }) => {
              return (
                <TextField
                  label="Username"
                  name="username"
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                  error={validate.error}
                  helperText={validate.message}
                  margin="normal"
                  fullWidth
                  variant="outlined"
                  required
                />
              );
            }}
          />

          <RecoilModelField
            field={userModel.fields.email}
            component={({ value, setValue, validate }) => {
              return (
                <TextField
                  label="Email"
                  name="email"
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                  error={validate.error}
                  helperText={validate.message}
                  margin="normal"
                  type="email"
                  fullWidth
                  variant="outlined"
                  required
                />
              );
            }}
          />

          <RecoilModelField
            field={userModel.fields.password}
            component={({ value, setValue, validate }) => {
              return (
                <TextField
                  label="Password"
                  name="password"
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                  error={validate.error}
                  helperText={validate.message}
                  margin="normal"
                  type="password"
                  fullWidth
                  variant="outlined"
                  required
                />
              );
            }}
          />

          <RecoilModelField
            field={userModel.fields.cPassword}
            component={({ value, setValue, validate }) => {
              return (
                <TextField
                  label="Password Confirmation"
                  name="cPassword"
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                  error={validate.error}
                  helperText={validate.message}
                  margin="normal"
                  type="password"
                  fullWidth
                  variant="outlined"
                  required
                />
              );
            }}
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
