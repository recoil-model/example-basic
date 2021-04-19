import { userModel } from "./model";

const save = ({ snapshot }) => async () => {
  const data = await snapshot.getPromise(userModel.value);
  console.log(data);
};
const userCallback = { save };

export default userCallback;
