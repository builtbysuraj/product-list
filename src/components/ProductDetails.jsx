import {
  Box,
  Dialog,
  DialogContent,
  DialogTitle,
  Typography,
} from "@mui/material"
import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css"

export default function ProductDetails({ open, handleClose, productData }) {
  console.log(productData)
  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Details Product</DialogTitle>
      <Box sx={{ height: "50vh", overflow: "hidden" }}>
        <Carousel>
          {productData.images.map((image, index) => (
            <img key={index} src={image} />
          ))}
        </Carousel>
      </Box>
      <DialogContent sx={{ height: "50vh", overflow: "auto" }}>
        <Typography variant="h3">{productData.title}</Typography>
        <Typography variant="h5">${productData.price}</Typography>
        <Typography color="green">
          discount {productData.discountPercentage}%
        </Typography>
        <Typography fontWeight="bold">{productData.brand}</Typography>
        <Typography variant="subtitle1">{productData.description}</Typography>
      </DialogContent>
    </Dialog>
  )
}
