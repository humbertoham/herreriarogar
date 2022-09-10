import React from "react";
import { Container, Text, Wrapper, Con } from "./Contact.styles";
import { faGoogle, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
const Contact = () => {
  return (
    <Wrapper id="contact">
      <Container>
        <Text>
          <h1>Contáctanos</h1>
        </Text>
        <Con className="ptp">
          <h1>
            <FontAwesomeIcon className="email" size="2x" icon={faEnvelope} />
            Email: rogarmantenimientos
          </h1>
          <h1>@gmail.com</h1>
        </Con>
        <Con>
          <h1>
            <FontAwesomeIcon className="whats" size="2x" icon={faWhatsapp} />{" "}
            899 756 0258
          </h1>
        </Con>
        <Con>
          <h1>
            <FontAwesomeIcon className="whats" size="2x" icon={faWhatsapp} />{" "}
            899 212 0848
          </h1>
        </Con>

        <Con className="pt">
          <h1>
            <FontAwesomeIcon className="pin" size="2x" icon={faMapMarkerAlt} />{" "}
            Ubicación: Bondad #346, 88799, Reynosa, Tamps.
          </h1>
        </Con>
      </Container>
    </Wrapper>
  );
};

export default Contact;
