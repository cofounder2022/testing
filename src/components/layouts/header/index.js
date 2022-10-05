import React, { useEffect, useState } from "react";
import { styled, alpha } from "@mui/material/styles";
import {
  Box,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  InputBase,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import PopUp from "../../popup";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
  },
}));

export default function SearchAppBar() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("")
  const handleChange = async (e) => {
    e.preventDefault();
    setSearch(e.target.value)
    try {
      let url = "";
      if (e.target.value === "t") url = "/mock/dataA.json";
      if (e.target.value === "to") url = "/mock/dataB.json";
      const res = await fetch(url);
      if (!res.ok || !url) {
        throw new Error("No data match");
      }
      const dataRes = await res.json();
      setData(dataRes);
    } catch (err) {
      setData(null);
      console.log(err.message);
    }
  };

  useEffect(()=>{
    if(!search) {
      setData(null)
    }
  },[search])

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            LOGO
          </Typography>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              onChange={handleChange}
              inputProps={{ "aria-label": "search" }}
            />
            {data && data.length > 0 && <PopUp data={data} /> }
          </Search>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
