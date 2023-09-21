import { Container, CssBaseline } from "@mui/material"
import { createRoot } from "react-dom/client"
import App from "./App.jsx"

createRoot(document.getElementById("root")).render(
  <Container>
    <CssBaseline />
    <App />
  </Container>
)
