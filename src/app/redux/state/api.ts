import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";
import dotenv from "dotenv"
dotenv.config()

export const api = createApi({
    baseQuery: fetchBaseQuery({baseUrl: process.env.NEXT_PUBLIC_API_BASE_URL}),
    reducerPath: "api",
    tagTypes: ["DashboardMetrics", "Products", "Users", "Expenses"],
    endpoints: (build) => ({
        // localhost:8000/dashboard
        getDashBoardMetrics: build.query({
            query: () => "/dashboard",
            providesTags: ["DashboardMetrics"]
        }),
        createProduct: build.mutation({
            query: (newProduct) => ({
                url: "/products",
                method: "POST",
                body: newProduct
            }),
            invalidatesTags: ["Products"]
        })
    })
})