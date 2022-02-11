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

const usersOperations = {
  fetchUsers,
  addUser,
};
export default usersOperations;
