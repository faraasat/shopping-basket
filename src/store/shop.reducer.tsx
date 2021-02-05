import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IStoreData } from "./store.d";

export const fetchStoreData: any = createAsyncThunk(
  "data/fetchStoreData",
  async (data, thunkAPI) => {
    const response = await fetch("/api/shop-data");
    return await response.json();
  }
);

export const initialStoreData: IStoreData[] = [
  {
    unique_id: "",
    crawl_timestamp: "",
    dataset_origin: "",
    product_id: "",
    product_barcode: "",
    product_company_type_source: "",
    product_brand_source: "",
    product_brand_normalised_source: "",
    product_name_source: "",
    match_rank: "",
    match_score: "",
    match_type: "",
    retailer: "",
    product_category: "",
    product_brand: "",
    product_name: "",
    product_price: "",
    sku: "",
    upc: "",
    product_url: "",
    market: "",
    product_description: "",
    product_currency: "",
    product_available_inventory: "",
    product_image_url: "",
    product_model_number: "",
    product_tags: "",
    product_contents: "",
    product_rating: "",
  },
];

export const ShopSlice = createSlice({
  name: "shopData",
  initialState: {
    storeData: initialStoreData,
    storeLoadingState: false,
    cartData: [
      {
        unique_id: "",
        crawl_timestamp: "",
        dataset_origin: "",
        product_id: "",
        product_barcode: "",
        product_company_type_source: "",
        product_brand_source: "",
        product_brand_normalised_source: "",
        product_name_source: "",
        match_rank: "",
        match_score: "",
        match_type: "",
        retailer: "",
        product_category: "",
        product_brand: "",
        product_name: "",
        product_price: "",
        sku: "",
        upc: "",
        product_url: "",
        market: "",
        product_description: "",
        product_currency: "",
        product_available_inventory: "",
        product_image_url: "",
        product_model_number: "",
        product_tags: "",
        product_contents: "",
        product_rating: "",
        quantity: "",
      },
    ],
  },
  reducers: {
    addToCart: (state, action) => {
      state.cartData = [...state.cartData, action.payload];
    },
  },
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

export const { addToCart } = ShopSlice.actions;

export const selectStoreData = (state: any) => ({
  data: state.shopData.storeData,
  loading: state.shopData.storeLoadingState,
  cartData: state.shopData.cartData,
});
