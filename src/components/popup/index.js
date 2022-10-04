import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import Collection from "../collection";
import Suggestion from "../suggestion";
import ProductList from "../product";

export default function BasicPopover({ event, data }) {
  const [res, setRes] = useState(data);

  useEffect(() => {
    if (data) {
      setRes(data);
    }
  }, [data]);

  return (
    <Box sx={{position: 'absolute', width: '100%', zIndex: '1', backgroundColor: '#FFFFFF', color: '#000000'}}>
      <Suggestion data={res[0].suggestionTerm} />
      <Collection data={res[0].collection} />
      <ProductList data={res[0].product} />
    </Box>
  );
}
