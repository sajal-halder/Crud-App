import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import LocalLibraryIcon from "@mui/icons-material/LocalLibrary";
import { useNavigate } from "react-router-dom";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import MenuItem from "@mui/material/MenuItem";
import IconButton from "@mui/material/IconButton";
import { useState } from "react";

const pages = ["Home", "About", "Contact"];

function Header() {
  const navigate = useNavigate();
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [selectedPage, setSelectedPage] = useState("Home");

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleClick = (e) => {
    const buttonValue = e.innerText.toLowerCase();
    handleCloseNavMenu();
    setSelectedPage(buttonValue);
    navigate(buttonValue);
  };

  return (
    <AppBar elevation={0} position="static" sx={{ paddingX: 5, paddingY: 1 , backgroundColor:'#FFFFFF',color:'#293132'}}>
      <Toolbar variant="regular">
        {/* moblie view */}
        <LocalLibraryIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
        <Typography
          variant="h6"
          noWrap
          component="a"
          href="home"
          sx={{
            mr: 2,
            display: { xs: "none", md: "flex" },
            fontFamily: "monospace",
            fontWeight: 700,
            letterSpacing: ".3rem",
            color: "inherit",
            textDecoration: "none",
          }}
        >
          BOOK APP
        </Typography>

        <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenNavMenu}
            color="inherit"
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorElNav}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            sx={{
              display: { xs: "block", md: "none" },
            }}
          >
            {pages.map((page) => (
              <MenuItem key={page} onClick={(e) => handleClick(e.target)}>
                <Typography sx={{ m: 1 }} textAlign="center">
                  {page}
                </Typography>
              </MenuItem>
            ))}
          </Menu>
        </Box>

        {/* Web view  */}
        <LocalLibraryIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
        <Typography
          variant="h5"
          noWrap
          component="a"
          href="home"
          sx={{
            mr: 2,
            display: { xs: "flex", md: "none" },
            flexGrow: 1,
            fontFamily: "monospace",
            fontWeight: 700,
            letterSpacing: ".3rem",
            color: "inherit",
            textDecoration: "none",
          }}
        >
          BOOK APP
        </Typography>

        <Box
          sx={{
            flexGrow: 1,
            display: { xs: "none", md: "flex " },
            justifyContent: "flex-end",
          }}
        >
          {pages.map((page) => (
            <Button
              key={page}
              onClick={(e) => handleClick(e.target)}
              sx={{ mx: 2, my: 2, backgroundColor: selectedPage === page.toLowerCase() ? "#EDE7F6" : "#FFFFFF", display: "block" }}
            >
              <Typography
                sx={{
                  m: 1,
                  color:  selectedPage === page.toLowerCase() ? "#6A5AC4" : "#293132",
                    
                }}
                textAlign="center"
              >
                {page}
              </Typography>
            </Button>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
}
export default Header;
