import { Box, Container, styled } from "@mui/material";
import Langerie1 from "../../assets/langerie1.jpg";
import Langerie2 from "../../assets/langerie2.jpg.webp";
import Langerie3 from "../../assets/langerie3.jpg";
import Langerie4 from "../../assets/Langerie4.jpg";
import Langerie5 from "../../assets/langerie5.jpg";

const AboutContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: theme.spacing(1),
  gap: theme.spacing(4),
  textAlign: "center",
  backgroundColor: "#303030",
  borderRadius: theme.shape.borderRadius,
}));

const IlustrativePhoto = styled("img")(({ theme }) => ({
  width: "100%",
  maxHeight: "400px",
  objectFit: "contain",
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[2],
}));

const SliderWrapper = styled(Box)({
  width: "100%",
  overflow: "hidden",
  position: "relative",
});

const Slider = styled(Box)({
  display: "flex",
  animation: "slide 29s linear infinite",
  width: "100%",
  height: "auto",

  "@keyframes slide": {
    "0%": {
      transform: "translateX(0)",
    },
    "100%": {
      transform: "translateX(-400%)",
    },
  },
});

const SlideItem = styled(Box)({
  flex: "0 0 100%",
  height: "auto",
});

const AboutUs = () => {
  return (
    <Container id="sobre">
      <AboutContainer>
        <SliderWrapper>
          <Slider>
            <SlideItem>
              <IlustrativePhoto src={Langerie1} alt="Langerie" />
            </SlideItem>
            <SlideItem>
              <IlustrativePhoto src={Langerie2} alt="Langerie" />
            </SlideItem>
            <SlideItem>
              <IlustrativePhoto src={Langerie3} alt="Langerie" />
            </SlideItem>
            <SlideItem>
              <IlustrativePhoto src={Langerie4} alt="Langerie" />
            </SlideItem>
            <SlideItem>
              <IlustrativePhoto src={Langerie5} alt="Langerie" />
            </SlideItem>
          </Slider>
        </SliderWrapper>
      </AboutContainer>
    </Container>
  );
};

export default AboutUs;
