import { CircularProgress, Grid } from "@mui/material"
import { useState } from "react"

import CategoryFilter from "./components/CategoryFilter"
import Product from "./components/Product"
import useFetch from "./hooks/useFetch"

export default function App() {
  const [category, setCategory] = useState("All")

  const { data, loading } = useFetch()

  const onCategorySelect = (ele) => {
    setCategory(ele)
  }

  let filteredData = data
  if (category !== "All") {
    filteredData = data.filter((p) => p.category === category)
  }

  const renderedData = filteredData?.map((productData) => (
    <Product key={productData.id} productData={productData} />
  ))

  return (
    <>
      <CategoryFilter onCategorySelect={onCategorySelect} />
      <Grid container spacing={5} sx={{ marginTop: "0" }}>
        {renderedData}
      </Grid>

      {loading ? <CircularProgress disableShrink /> : null}
    </>
  )
}
