import React from "react";
import { Box, Typography } from "@mui/material";

const Collection = ({ data }) => {
  return (
    <Box>
      <Box sx={{backgroundColor: '#eeeee4', fontSize: '14px', padding: '5px 10px'}}>
        <Typography>COLLECTION</Typography>
      </Box>
      <Typography sx={{padding: '5px 10px', fontSize: '14px'}}>{data.title}</Typography>
    </Box>
  );
};

export default Collection;