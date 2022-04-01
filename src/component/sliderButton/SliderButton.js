import React, { useState } from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { Button } from "@material-ui/core";

function valuetext(value) {
  return `${value}°C`;
}

function SliderButton({ handleGetValue }) {
  const handleSetRange = (range) => {
    handleGetValue(range);
  };

  return (
    <Box sx={{ padding: "10px 25px 10px 25px" }}>
      <Slider
        aria-label="Temperature"
        defaultValue={100}
        getAriaValueText={valuetext}
        valueLabelDisplay="auto"
        onChange={(e) => handleSetRange(e.target.value)}
        step={50}
        marks
        min={0}
        max={500}
      />
    </Box>
  );
}

export default SliderButton;
