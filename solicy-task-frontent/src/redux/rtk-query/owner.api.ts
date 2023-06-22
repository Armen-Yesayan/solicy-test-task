import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { IOwner } from "../types/IOwner";

export const ownerApi = createApi({
  reducerPath: "ownerApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_BACKEND_API
  }),
  tagTypes: ["owners"],
  endpoints: builder => ({
    getOwners: builder.query<Array<IOwner>, void>({
      query: () => "/owners",
      providesTags: () => ["owners"]
    })
  })
});

export const { useGetOwnersQuery } = ownerApi;
