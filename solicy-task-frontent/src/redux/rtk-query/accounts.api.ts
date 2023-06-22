import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { IAccounts } from "../types/IAccounts";

export const accountsApi = createApi({
  reducerPath: "accountsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_BACKEND_API
  }),
  tagTypes: ["accounts"],
  endpoints: builder => ({
    getAccounts: builder.query<Array<IAccounts>, void>({
      query: () => "/accounts",
      providesTags: () => ["accounts"]
    }),
    getAccount: builder.query<IAccounts, string>({
      query: id => `/accounts/${id}`
    }),
    createAccount: builder.mutation<IAccounts, { name: string; ownerId: string }>({
      query: data => ({
        url: `/accounts`,
        method: "POST",
        body: data
      }),
      invalidatesTags: () => ["accounts"]
    }),
    deleteAccount: builder.mutation<IAccounts, string>({
      query: id => ({
        url: `/accounts/${id}`,
        method: "DELETE"
      }),
      invalidatesTags: () => ["accounts"]
    })
  })
});

export const { useGetAccountsQuery, useDeleteAccountMutation, useLazyGetAccountQuery, useCreateAccountMutation } =
  accountsApi;
