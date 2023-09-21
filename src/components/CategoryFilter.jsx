import { Box, Button } from "@mui/material"

export default function CategoryFilter({ onCategorySelect }) {
  const categories = [
    "All",
    "smartphones",
    "laptops",
    "fragrances",
    "skincare",
    "groceries",
    "home-decoration",
    "furniture",
    "tops",
    "womens-dresses",
    "womens-shoes",
    "mens-shirts",
    "mens-shoes",
    "mens-watches",
    "womens-watches",
    "womens-bags",
    "womens-jewellery",
    "sunglasses",
    "automotive",
    "motorcycle",
    "lighting",
  ]
  return (
    <Box display="flex" overflow="auto" p={1} m={1} position="sticky" top="0">
      {categories.map((ele) => (
        <Button
          key={ele}
          variant="contained"
          sx={{
            marginRight: "10px",
            padding: "1px 70px",
          }}
          onClick={() => onCategorySelect(ele)}
        >
          {ele}
        </Button>
      ))}
    </Box>
  )
}
