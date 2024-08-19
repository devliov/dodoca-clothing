import { Box, IconButton, styled } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { useEffect, useState } from "react";
import { keyframes } from "@mui/system";

const growShrink = keyframes`
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.007);
  }
`;

const LinkContainer = styled(Box)(({ theme }) => ({
  zIndex: "1",
  position: "fixed",
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(1),
  padding: theme.spacing(1),
  borderRadius: theme.shape.borderRadius,
  backgroundColor: theme.palette.success.light,
  boxShadow: theme.shadows[1],
  textDecoration: "none",
  bottom: theme.spacing(5),
  right: theme.spacing(2),
  animation: `${growShrink} 1.5s ease-in infinite`,
  "&:hover": {
    backgroundColor: theme.palette.success.main,
    color: theme.palette.common.white,
  },
}));

const WhatsAppLink = () => {
  const [showLink, setShowLink] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLink(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (!showLink) {
    return null;
  }

  return (
    <LinkContainer>
      <a
        href="https://api.whatsapp.com/send?phone=+5563992363562&text=Ol%C3%A1%2C%20vim%20pelo%20site%20da%20Dodoca%20Clothing%20gostaria%20de%20fazer%20um%20pedido."
        target="_blank"
        rel="noopener noreferrer"
        style={{
          textDecoration: "none",
          color: "#FFFFFF",
          fontWeight: "bolder",
        }}
      >
        Fazer pedido
        <IconButton color="inherit">
          <WhatsAppIcon />
        </IconButton>
      </a>
    </LinkContainer>
  );
};

export default WhatsAppLink;
