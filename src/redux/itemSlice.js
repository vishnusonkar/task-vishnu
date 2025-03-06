import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchData } from "../services/apiService.js";

export const fetchItems = createAsyncThunk("items/fetchItems", async () => {
  const response = await fetchData();
  return response[0];
});

const itemSlice = createSlice({
  name: "items",
  initialState: {
    data: null,
    loading: false,
    error: null,
    selectedItem: null,
  },
  reducers: {
    setSelectedItem: (state, action) => {
      state.selectedItem = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchItems.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchItems.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
        state.selectedItem = action.payload.items[0];
      })
      .addCase(fetchItems.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { setSelectedItem } = itemSlice.actions;
export default itemSlice.reducer;
