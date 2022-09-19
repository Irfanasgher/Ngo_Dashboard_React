import axios from "axios";
import { API_BASE_URL } from "../constants/config";
import { useSelector } from "react-redux";
import { message } from "antd";

const request = axios.create({
  baseURL: API_BASE_URL,
  timeout: 30 * 100,
});

const authApi = {
  signin: (payload) => {
    return new Promise((resolve, reject) => {
      request
        .post(`/v1/auth/login`, payload)
        .then(({ data }) => {
          // console.log(data);
          resolve(data);
        })
        .catch((error) => {
          reject(error);
        });
    });
  },
  signup: (payload) => {
    return new Promise((resolve, reject) => {
      request
        .post(`/v1/auth/register`, payload)
        .then(({ data }) => {
          // console.log(data);
          resolve(data);
        })
        .catch((error) => {
          reject(error);
        });
    });
  },
  signout: (payload) => {
    return new Promise((resolve, reject) => {
      request
        .post(`/v1/auth/logout`, payload)
        .then((res) => {
          // console.log(res);
          resolve(res);
        })
        .catch((error) => {
          reject(error);
        });
    });
  },
};

export default authApi;
