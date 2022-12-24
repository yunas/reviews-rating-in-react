import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import ProTip from "./ProTip";
import EssayScreen from "./Components/EssayScreen";

export default function App() {
  return (
    <Container maxWidth="sm">
      <EssayScreen />
    </Container>
  );
}
