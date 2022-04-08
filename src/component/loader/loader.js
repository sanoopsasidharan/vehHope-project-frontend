import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

import React from "react";

function loader() {
  return (
    <Box sx={{ display: "flex" }}>
      <CircularProgress />
    </Box>
  );
}

export default loader;
