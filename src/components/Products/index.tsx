import React, { useState } from "react";
import {
  Box,
  Container,
  Typography,
  styled,
  Dialog,
  DialogContent,
  IconButton,
  Button,
} from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import CloseIcon from "@mui/icons-material/Close";
import { products, Product } from "./data";
import theme from "../../theme";

const ProductContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  gap: theme.spacing(4),
  padding: theme.spacing(4),
  backgroundColor: theme.palette.background.paper,
  borderRadius: theme.shape.borderRadius,
}));

const ProductBox = styled(Box)(({ theme }) => ({
  width: "250px",
  padding: theme.spacing(2),
  textAlign: "center",
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[2],
  backgroundColor: "#f9f9f9",
  cursor: "pointer",
}));

const ProductImage = styled("img")({
  width: "100%",
  height: "200px",
  objectFit: "cover",
  borderRadius: "8px",
});

const ProductComponent: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleClickOpen = (image: string) => {
    setSelectedImage(image);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedImage(null);
  };

  const handleWhatsAppClick = (product: Product) => {
    const message = `Olá, estou interessado(a) no produto: ${product.name} (${product.category}). Gostaria de saber mais detalhes.`;
    const url = `https://api.whatsapp.com/send?phone=+5563992363562&text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
  };

  return (
    <Container id="produtos">
      <Typography
        variant="h4"
        gutterBottom
        textAlign="center"
        style={{ color: theme.palette.primary.main }}
      >
        Produtos Atacado e Varejo
      </Typography>
      <Typography
        variant="subtitle1"
        gutterBottom
        textAlign="center"
        style={{ color: theme.palette.primary.main }}
      >
        Atacado a partir de 10 peças tem desconto de 15%
      </Typography>
      <ProductContainer>
        {products.map((product: Product, index: number) => (
          <ProductBox
            key={index}
            onClick={() => handleClickOpen(product.image)}
          >
            <ProductImage src={product.image} alt={product.name} />
            <Typography variant="h6">{product.name}</Typography>
            <Typography variant="body1">{product.category}</Typography>
            <Typography variant="body1" color="primary">
              {product.price}
            </Typography>
            <Button
              variant="contained"
              color="success"
              startIcon={<WhatsAppIcon />}
              sx={{ mt: 2 }}
              onClick={() => handleWhatsAppClick(product)}
            >
              Comprar via WhatsApp
            </Button>
          </ProductBox>
        ))}
      </ProductContainer>
      <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
        <DialogContent>
          <Box position="relative">
            <IconButton
              aria-label="close"
              onClick={handleClose}
              sx={{
                position: "absolute",
                right: 8,
                top: 8,
                color: (theme) => theme.palette.grey[500],
              }}
            >
              <CloseIcon />
            </IconButton>
            {selectedImage && (
              <img
                src={selectedImage}
                alt="Expanded"
                style={{
                  width: "100%",
                  height: "auto",
                  maxHeight: "80vh",
                  objectFit: "contain",
                  display: "block",
                  margin: "auto",
                }}
              />
            )}
          </Box>
        </DialogContent>
      </Dialog>
    </Container>
  );
};

export default ProductComponent;
