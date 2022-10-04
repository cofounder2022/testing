import React from "react";
import { Box, Typography } from "@mui/material";

const Card = ({ image, title, price, brand }) => {
  return (
    <Box
      sx={{
        display: "flex",
        padding: "5px 10px",
        marginTop: "10px",
        gap: "10px",
        img: {
          height: "112px",
        },
      }}
    >
      <img src={image} alt="product" />
      <Box>
        <Typography>{title}</Typography>
        <Typography>{brand}</Typography>
        <Typography>{price}</Typography>
      </Box>
    </Box>
  );
};

export default Card;
