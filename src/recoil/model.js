import { field, fieldYup, model, validateInfo } from "recoil-model";
import * as yup from "yup";
export const userModel = model({
  key: "persson",
  fields: {
    firstName: fieldYup({
      default: "",
      schemas: yup.string().required()
    }),
    lastName: fieldYup({
      default: "",
      schemas: yup.string().required()
    }),
    username: fieldYup({
      default: "",
      schemas: yup.string().required()
    }),
    email: fieldYup({
      default: "",
      schemas: yup.string().email().required()
    }),
    password: fieldYup({
      default: "",
      schemas: yup.string().max(10).min(5).required()
    }),
    cPassword: field({
      default: "",
      validate: ({ get }) => {
        const r1 = get(userModel.fields.password.value);
        const r2 = get(userModel.fields.cPassword.value);
        if (r1 !== r2)
          return validateInfo.error(
            "Your password and confirmation password do not match."
          );
        return validateInfo.ok;
      }
    })
  }
});
