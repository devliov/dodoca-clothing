import React from "react";
import { styled } from "@mui/material";

const FooterConteiner = styled("footer")(({ theme }) => ({
  padding: "5rem",
  display: "flex",
  justifyContent: "center",
  textAlign: "center",
  fontSize: "1rem",
  color: "#E40071",

  [theme.breakpoints.down("sm")]: {
    fontSize: "0.8rem",
  },
}));

const Footer: React.FC = () => {
  return (
    <FooterConteiner>
      ESO Tech corporation. All rights reserved © 2024.
    </FooterConteiner>
  );
};

export default Footer;
