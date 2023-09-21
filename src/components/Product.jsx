import { Box, Card, CardMedia, Grid, Typography } from "@mui/material"
import { useState } from "react"

import ProductDetails from "./ProductDetails"

export default function Product({ productData }) {
  const [open, setOpen] = useState(false)

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <Grid item key={productData.id} xs={12} sm={6} md={4}>
      <Card sx={{ cursor: "pointer" }} onClick={handleOpen}>
        <CardMedia
          component="img"
          height="200"
          image={productData.thumbnail}
          alt={productData.title}
        />
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "10px",
          }}
        >
          <Box>
            <Typography sx={{ fontWeight: "bold" }}>
              {productData.title}
            </Typography>
            <Typography variant="subtitle1">${productData.price}</Typography>
          </Box>
        </Box>
        <ProductDetails
          open={open}
          handleClose={handleClose}
          productData={productData}
        />
      </Card>
    </Grid>
  )
}
