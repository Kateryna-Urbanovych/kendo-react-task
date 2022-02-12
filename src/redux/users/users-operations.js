import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:5050";

const fetchUsers = createAsyncThunk(
  "users/fetchUsers",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get("/users");
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const addUser = createAsyncThunk(
  "users/addUser",
  async (user, { rejectWithValue }) => {
    try {
      const { data } = await axios.post("/users", user);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const updateUser = createAsyncThunk(
  "users/updateUser",
  async (updatedUser, { rejectWithValue }) => {
    try {
      console.log("updatedUser", updatedUser);
      const { data } = await axios.patch(
        `/users/${updatedUser.id}`,
        updatedUser
      );
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const usersOperations = {
  fetchUsers,
  addUser,
  updateUser,
};
export default usersOperations;
