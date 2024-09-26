import { Box, Button } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { useEffect, useState } from "react";

const handleWhatsAppClick = () => {
  const message = `Olá, vim pelo site da Dodoca Clothing, gostaria de fazer um pedido.`;
  const url = `https://api.whatsapp.com/send?phone=+5563992363562&text=${encodeURIComponent(
    message
  )}`;
  window.open(url, "_blank");
};

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
    <Box position="fixed" bottom={45} right={30}>
      <Button
        variant="contained"
        color="success"
        startIcon={<WhatsAppIcon />}
        sx={{ padding: "10px" }}
        onClick={handleWhatsAppClick}
      >
        Fazer pedido
      </Button>
    </Box>
  );
};

export default WhatsAppLink;
