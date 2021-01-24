import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IStoreData } from "./store.d";

export const fetchStoreData: any = createAsyncThunk(
  "data/fetchStoreData",
  async (data, thunkAPI) => {
    const response = await fetch("/api/shop-data");
    return await response.json();
  }
);

const initialStoreData: IStoreData[] = [
  {
    uniq_id: "",
    product_name: "",
    manufacturer: "",
    price: "",
    number_available_in_stock: "",
    number_of_reviews: 0,
    number_of_answered_questions: 0,
    average_review_rating: "",
    amazon_category_and_sub_category: "",
    customers_who_bought_this_item_also_bought: "",
    description: "",
    product_information: "",
    product_description: "",
    items_customers_buy_after_viewing_this_item: "",
    customer_questions_and_answers: "",
    customer_reviews: "",
    sellers: "",
  },
];

export const ShopSlice = createSlice({
  name: "shopData",
  initialState: {
    storeData: initialStoreData,
    storeLoadingState: false,
  },
  reducers: {},
  extraReducers: {
    [fetchStoreData.fulfilled]: (state, action) => {
      console.log(state, action);
      state.storeData = action.payload;
      state.storeLoadingState = false;
    },
    [fetchStoreData.reject]: (state, action) => {
      console.log("fetchStoreData Rejected");
      state.storeLoadingState = false;
    },
    [fetchStoreData.pending]: (state, action) => {
      console.log("fetchStoreData Pending");
      state.storeLoadingState = true;
    },
  },
});

// export const {} = ShopSlice.actions;

export const selectStoreData = (state: any) => ({
  data: state.shopData.storeData,
  loading: state.shopData.storeLoadingState,
});
