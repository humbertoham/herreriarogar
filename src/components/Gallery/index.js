import React, { useEffect } from "react";
import {
  Content,
  Wrapper,
  CardWrapper,
  CardHeader,
  CardHeading,
  CardBody,
  CardFieldset,
  CardOptionsNote,
  Page,
  Men,
} from "./Gallery.styles";
import Aos from "aos";
import "aos/dist/aos.css";

import image1 from "../../images/image2.jpg";
import image2 from "../../images/image3.jpg";
import image3 from "../../images/image4.jpg";
import image4 from "../../images/image5.jpg";
import image5 from "../../images/image6.jpg";
import image6 from "../../images/image7.jpg";

const Gallery = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <Wrapper>
      <Content>
        <h1>Galería</h1>
        <div className="divider"></div>
      </Content>
      <div className="container">
        <CardWrapper data-aos="fade-up">
          <CardHeader>
            <Page src={image1} />
          </CardHeader>
        </CardWrapper>
        <CardWrapper data-aos="fade-up">
          <CardHeader>
            <Page src={image2} />
          </CardHeader>
        </CardWrapper>
        <CardWrapper data-aos="fade-up">
          <CardHeader>
            <Page src={image3} />
          </CardHeader>
        </CardWrapper>
        <CardWrapper data-aos="fade-up">
          <CardHeader>
            <Page src={image4} />
          </CardHeader>
        </CardWrapper>
        <CardWrapper data-aos="fade-up">
          <CardHeader>
            <Page src={image5} />
          </CardHeader>
        </CardWrapper>
        <CardWrapper data-aos="fade-up">
          <CardHeader>
            <Page src={image6} />
          </CardHeader>
        </CardWrapper>
      </div>
    </Wrapper>
  );
};

export default Gallery;
