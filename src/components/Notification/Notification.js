import { toast } from "react-toastify";

export const errorNotification = () =>
  toast.error("Sorry, something went wrong!");

export const successCreateNotification = () =>
  toast.success("User created successfully!");

export const successUpdateNotification = () =>
  toast.success("User updated successfully!");
