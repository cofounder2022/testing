import React from "react";
import { Box, Typography } from "@mui/material";

const Suggestion = ({ data }) => {
  return (
    <Box>
      <Box sx={{backgroundColor: '#eeeee4', fontSize: '14px', padding: '5px 10px'}}>
        <Typography>SUGGESTIONS</Typography>
      </Box>
      {data.map((item, idx) => (
        <Typography key={idx} sx={{padding: '5px 10px', fontSize: '14px'}}>{item.term}</Typography>
      ))}
    </Box>
  );
};

export default Suggestion;
