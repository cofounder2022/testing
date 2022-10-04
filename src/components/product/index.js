import React from "react";
import Card from "./card";
import { Box, Typography } from "@mui/material";

const ProductList = ({ data }) => {
  return (
    <Box>
      <Box sx={{backgroundColor: '#eeeee4', fontSize: '14px', padding: '5px 10px'}}>
        <Typography>PRODUCTS</Typography>
      </Box>
      {data.map((item) => (
        <Card key={item.id} {...item} />
      ))}
    </Box>
  );
};

export default ProductList;
