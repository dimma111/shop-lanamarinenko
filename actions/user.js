import axios from "axios";
import {
  loginPending,
  loginSuccess,
  loginFail,
} from "../features/login/loginSlice";
import Cookies from "universal-cookie";

const cookies = new Cookies();

export const auth = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`http://localhost:5000/api/auth/auth`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });
      dispatch(loginSuccess(response.data.user));
      localStorage.setItem("token", response.data.token);
      cookies.set("token", response.data.token);
      console.log(response);
    } catch (e) {
      console.log(e.response);
      localStorage.removeItem("token");
    }
  };
};
