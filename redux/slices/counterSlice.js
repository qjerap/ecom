import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { loadState, saveState } from "../../helper/localStorage";


const initialState = {
  value: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    setLoadedState: (state, action) => {
        state.value = action.payload
    }
  },
});

export const { increment, decrement, setLoadedState } = counterSlice.actions;

export const incrementAsync = () => (dispatch) => {
    (async () => {
      await dispatch(increment());
      
    })();
  };
export default counterSlice.reducer;
