import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "/api" }),
  endpoints: (builder) => {
    return {
      getServices: builder.query({
        query: () => "/services",
      }),
      getService: builder.query({
        query: (id) => `/services/${id}`,
      }),
      makeContact: builder.mutation({
        query: (body) => ({
          url: "contact",
          method: "POST",
          body
        })
      })
    };
  },
});

export const { useGetServicesQuery, useGetServiceQuery, useMakeContactMutation } = api;
