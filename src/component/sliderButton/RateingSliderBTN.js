import React, { useState } from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

function valuetext(value) {
  return `${value}°C`;
}

function RateingSliderBTN({ handleGetValue }) {
  const handleSetRange = (range) => {
    handleGetValue(range);
  };

  return (
    <Box sx={{ padding: "10px 25px 10px 25px" }}>
      <Slider
        aria-label="Temperature"
        defaultValue={0}
        getAriaValueText={valuetext}
        valueLabelDisplay="auto"
        onChange={(e) => handleSetRange(e.target.value)}
        step={1}
        marks
        min={0}
        max={5}
      />
    </Box>
  );
}

export default RateingSliderBTN;
