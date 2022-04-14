import axios from "axios";
import {
  loginPending,
  loginSuccess,
  loginFail,
} from "../features/login/loginSlice";

export const auth = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`http://localhost:5000/api/auth/auth`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });
      dispatch(loginSuccess(response.data.user));
      localStorage.setItem("token", response.data.token);
    } catch (e) {
      console.log(e.response);
      localStorage.removeItem("token");
    }
  };
};
