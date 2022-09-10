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
  Message,
} from "./Work.styles";
import Aos from "aos";
import "aos/dist/aos.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faTruckPickup,
  faBrush,
  faDroplet,
  faWrench,
  faBolt,
  faFire,
  faLaptop,
} from "@fortawesome/free-solid-svg-icons";
const Work = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <Wrapper id="servicios">
      <Content>
        <h1>Servicios</h1>
        <div className="divider"></div>
      </Content>
      <div className="container">
        <CardWrapper data-aos="fade-up">
          <CardHeader>
            <FontAwesomeIcon className="Icon" icon={faWrench} />

            <CardHeading>Herrería</CardHeading>
          </CardHeader>
        </CardWrapper>
        <CardWrapper data-aos="fade-up">
          <CardHeader>
            <FontAwesomeIcon className="Icon" icon={faLaptop} />

            <CardHeading>Maquinados</CardHeading>
          </CardHeader>
        </CardWrapper>
        <CardWrapper data-aos="fade-up">
          <CardHeader>
            <FontAwesomeIcon className="Icon" icon={faBolt} />
            <CardHeading>Electricidad</CardHeading>
          </CardHeader>
        </CardWrapper>

        <CardWrapper data-aos="fade-up">
          <CardHeader>
            <FontAwesomeIcon className="Icon" icon={faDroplet} />
            <CardHeading>Plomería </CardHeading>
          </CardHeader>
        </CardWrapper>
        <CardWrapper data-aos="fade-up">
          <CardHeader>
            <FontAwesomeIcon className="Icon" icon={faFire} />
            <CardHeading>Soldadura</CardHeading>
          </CardHeader>
        </CardWrapper>
        <CardWrapper data-aos="fade-up">
          <CardHeader>
            <FontAwesomeIcon className="Icon" icon={faTruckPickup} />
            <CardHeading>Albañería</CardHeading>
          </CardHeader>
        </CardWrapper>
        <CardWrapper data-aos="fade-up">
          <CardHeader>
            <FontAwesomeIcon className="Icon" icon={faBrush} />
            <CardHeading>Pintura</CardHeading>
          </CardHeader>
        </CardWrapper>
      </div>
      <Message href="#contact"> Contáctanos </Message>
    </Wrapper>
  );
};

export default Work;
