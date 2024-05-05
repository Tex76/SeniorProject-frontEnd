import * as React from "react";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  IconButton,
  Menu,
  MenuItem,
  Avatar,
  Tooltip,
  useTheme,
  useMediaQuery,
  Button,
} from "@mui/material";
import {
  Menu as MenuIcon,
  TravelExplore as TravelExploreIcon,
} from "@mui/icons-material";
import { Link } from "react-router-dom";
import "@fontsource/roboto";
import SearchBar from "./SearchBar";
import Coin from "../../images/NavBar/coin.png";
import { UserContext } from "../../UserContext";
import { useContext } from "react";

const pages = {
  Home: "",
  Trips: "PickTrip",
  Review: "Reviews",
  Reward: "RewardSystem",
};
const settings = ["Login", "Signup", "MyTrip"];

interface Props {
  textColor?: string;
}

function NavBar({ textColor }: Props) {
  const { user } = useContext(UserContext);
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const isLargeScreen = useMediaQuery(theme.breakpoints.up(1100));

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "transparent",
        color: textColor || "inherit",
      }}
      elevation={0}
    >
      <Toolbar disableGutters sx={{ padding: "20px", maxWidth: "100%" }}>
        <TravelExploreIcon
          sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
        />
        <Typography
          variant="h6"
          noWrap
          component="a"
          href="#app-bar-with-responsive-menu"
          sx={{
            mr: 2,
            display: { xs: "none", md: isLargeScreen ? "flex" : "none" },
            fontFamily: "monospace",
            fontWeight: 700,
            letterSpacing: ".3rem",
            color: textColor || "inherit",
            textDecoration: "none",
          }}
        >
          ClickVenture
        </Typography>
        {isDesktop && <SearchBar />}
        <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
          {Object.entries(pages).map(([page, filename]) => (
            <Button
              key={page}
              onClick={handleCloseNavMenu}
              sx={{
                my: 2,
                color: "white",
                display: "block",
                "&:hover": {
                  backgroundColor: "rgba(0, 0, 0, 0.2)", // Change this to the color you want on hover
                },
              }}
            >
              <Link
                to={`/${filename.toLowerCase()}`}
                style={{
                  textDecoration: "none",
                  color: textColor || "inherit",
                }}
              >
                {page}
              </Link>
            </Button>
          ))}
        </Box>
        <Box
          sx={{
            display: { xs: "flex", md: "none" },
            justifyContent: "space-between",
            width: "100%",
          }}
        >
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
            sx={{ padding: "45px" }}
            id="menu-appbar"
            anchorEl={anchorElNav}
            anchorOrigin={{ vertical: "top", horizontal: "right" }}
            keepMounted
            transformOrigin={{ vertical: "top", horizontal: "right" }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
          >
            <SearchBar />
            {Object.entries(pages).map(([page, filename]) => (
              <MenuItem key={page} onClick={handleCloseNavMenu}>
                <Link
                  to={`/${filename.toLowerCase()}`}
                  style={{
                    textDecoration: "none",
                    color: "black",
                  }}
                >
                  {page}
                </Link>
              </MenuItem>
            ))}
          </Menu>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Box sx={{ display: "flex", alignItems: "center", ml: 2 }}>
              <Button
                sx={{
                  "&:hover": {
                    backgroundColor: "rgba(0, 0, 0, 0.2)", // Change this to the color you want on hover
                  },
                }}
              >
                <img
                  src={Coin}
                  alt="coin"
                  style={{
                    maxWidth: "31px",
                    maxHeight: "31px",
                    marginRight: "10px",
                  }}
                />
                <Typography
                  variant="body1"
                  sx={{
                    ml: 1,
                    fontFamily: "Roboto",
                    fontSize: "12px",
                    fontWeight: "bold",
                    color: textColor || "inherit",
                    display: "flex",
                  }}
                >
                  {user ? user.points : 0}
                </Typography>
              </Button>
            </Box>
            <Box sx={{ flexGrow: 0, ml: 2 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar src="/broken-image.jpg" />
                </IconButton>
              </Tooltip>
            </Box>
          </Box>
        </Box>
        <Box sx={{ display: { xs: "none", md: "flex" }, flexGrow: 0, ml: 2 }}>
          <Box sx={{ display: "flex", alignItems: "center", ml: 2 }}>
            <Button
              sx={{
                "&:hover": {
                  backgroundColor: "rgba(0, 0, 0, 0.2)", // Change this to the color you want on hover
                },
              }}
            >
              <img
                src={Coin}
                alt="coin"
                style={{
                  maxWidth: "31px",
                  maxHeight: "31px",
                  marginRight: "10px",
                }}
              />
              <Typography
                variant="body1"
                sx={{
                  ml: 1,
                  fontFamily: "Roboto",
                  fontSize: "12px",
                  fontWeight: "bold",
                  color: textColor || "inherit",
                  display: { xs: "none", md: "flex" },
                }}
              >
                {user ? user.points : 0}
              </Typography>
            </Button>
          </Box>
          <Tooltip title="Open settings">
            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0, ml: 2 }}>
              {user ? (
                <Avatar src={`/systemImage/${user.avatarImage}`} />
              ) : (
                <Avatar src="broken-image.jpg" />
              )}
            </IconButton>
          </Tooltip>
          <Menu
            sx={{ mt: "45px" }}
            id="menu-appbar"
            anchorEl={anchorElUser}
            anchorOrigin={{ vertical: "top", horizontal: "right" }}
            keepMounted
            transformOrigin={{ vertical: "top", horizontal: "right" }}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
          >
            {settings.map((setting) => (
              <MenuItem key={setting} onClick={handleCloseUserMenu}>
                {setting === "Login" ||
                setting === "Signup" ||
                setting === "MyTrip" ? (
                  <Link
                    to={`/${setting}`}
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    <Typography textAlign="center">{setting}</Typography>
                  </Link>
                ) : (
                  <Typography textAlign="center">{setting}</Typography>
                )}
              </MenuItem>
            ))}
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
