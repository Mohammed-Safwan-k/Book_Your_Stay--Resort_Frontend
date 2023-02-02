import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_PORT }),
  reducerPath: "resortApi",
  tagTypes: ["Resort"],
  endpoints: (build) => ({
    getResort: build.query({
      query: (id) => `resort/home/${id}`,
      providesTags: ["Resort"],
    }),
  }),
});

export const { useGetResortQuery } = api;
