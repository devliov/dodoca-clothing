import React from "react";
import {
  AppBar,
  Box,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
  useMediaQuery,
  styled,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useTheme } from "@mui/material/styles";
import CompanyLogo from "../../assets/Logo-Oficial-Dodoca-Clothing.png";
import ScrollToTopButton from "../Button-Scroll";
import WhatsAppLink from "../Contact-Link";

const HeaderContainer = styled(AppBar)(() => ({
  backgroundColor: "#FDF7EC",
  boxShadow: "none",
  width: "100%",
}));

const Logo = styled("img")({
  width: "150px",
  display: "block",
});

const Header = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const isSmallerScreen = useMediaQuery("(max-width: 811px)");

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <HeaderContainer position="static">
      <Container>
        <Toolbar
          sx={{
            flexGrow: 1,
            display: "flex",
            justifyContent: isSmallerScreen ? "center" : "space-between",
            width: "100%",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: isSmallerScreen ? "center" : "flex-start",
              flexGrow: 1,
            }}
          >
            <a
              href="https://devliov.github.io/sonoliffe/"
              target="_self"
              style={{
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
              }}
            >
              <Logo src={CompanyLogo} alt="Company Logo" />
            </a>
          </Box>
          {!isMobile && (
            <Box sx={{ display: "flex", gap: 2 }}>
              <Typography
                component="a"
                href="#sobre"
                style={{
                  textDecoration: "none",
                  color: theme.palette.primary.main,
                  fontWeight: "bold",
                  fontSize: "12px",
                }}
              >
                Sobre nós
              </Typography>
              <Typography
                component="a"
                href="#produtos"
                style={{
                  textDecoration: "none",
                  color: theme.palette.primary.main,
                  fontWeight: "bold",
                  fontSize: "12px",
                }}
              >
                Nossos Produtos
              </Typography>
              <Typography
                component="a"
                href="#beneficios"
                style={{
                  textDecoration: "none",
                  color: theme.palette.primary.main,
                  fontWeight: "bold",
                  fontSize: "12px",
                }}
              >
                Benefícios
              </Typography>
            </Box>
          )}
          {isMobile && (
            <IconButton
              size="small"
              edge="end"
              color="inherit"
              aria-label="menu"
              onClick={handleMenu}
              style={{
                textDecoration: "none",
                color: theme.palette.primary.main,
                width: "40px",
                boxShadow: "none",
              }}
            >
              <MenuIcon />
            </IconButton>
          )}
          {isMobile && (
            <Menu
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              <MenuItem onClick={handleClose}>
                <a
                  href="#sobre"
                  style={{
                    textDecoration: "none",
                    color: theme.palette.primary.main,
                    fontSize: "12px",
                  }}
                >
                  Sobre nós
                </a>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <a
                  href="#produtos"
                  style={{
                    textDecoration: "none",
                    color: theme.palette.primary.main,
                    fontSize: "12px",
                  }}
                >
                  Nossos Produtos
                </a>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <a
                  href="#beneficios"
                  style={{
                    textDecoration: "none",
                    color: theme.palette.primary.main,
                    fontSize: "12px",
                  }}
                >
                  Benefícios
                </a>
              </MenuItem>
            </Menu>
          )}
        </Toolbar>
      </Container>
      <WhatsAppLink />
      <ScrollToTopButton />
    </HeaderContainer>
  );
};

export default Header;
