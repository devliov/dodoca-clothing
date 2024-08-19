import { useState, useEffect } from "react";
import { Fab, Zoom } from "@mui/material";
import { KeyboardArrowUp } from "@mui/icons-material";
import { styled } from "@mui/system";
import theme from "../../theme";

const ScrollButton = styled(Fab)(({ theme }) => ({
  position: "fixed",
  bottom: theme.spacing(5),
  left: theme.spacing(2),
}));

const ScrollToTopButton = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 600) {
        setShow(true);
      } else {
        setShow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Zoom in={show}>
      <ScrollButton
        color="primary"
        variant="extended"
        onClick={handleClick}
        style={{ backgroundColor: `${theme.palette.primary.light}` }}
      >
        <KeyboardArrowUp />
        Topo
      </ScrollButton>
    </Zoom>
  );
};

export default ScrollToTopButton;
