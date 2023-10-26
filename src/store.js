import { configureStore } from "@reduxjs/toolkit";
import mailSlice from "./mailSlice";
export default configureStore({
  reducer: {
    mails: mailSlice,
  },
});
