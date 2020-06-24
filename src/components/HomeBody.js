import React from "react";

import { NavLink } from "react-router-dom";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

import PageBanner from "./PageBanner";
import geneBrain from "../utils/gene-brain.jpg";

import {
  FaSitemap,
  FaBook,
  FaDiagnoses,
  FaFlask,
  FaGlobeAmericas,
  FaMicroscope,
} from "react-icons/fa";

export default function HomeBody() {
  return (
    <React.Fragment>
      <PageBanner banner={geneBrain} text={`Project Portal`} />
      <Container className="p-5 HomeBody" style={{ fontSize: 16 }}>
        <Row className="p-5">
          <Col>
            <NavLink to="/Sitemap1" className="nav-link p-1">
              <FaSitemap size={125} />
              <h3>Sitemap Project</h3>
              <p>
                Irure sint cupidatat sit deserunt ad esse veniam consequat
                dolore excepteur eu excepteur cillum. Velit est sit magna
                commodo
              </p>
            </NavLink>
          </Col>
          <Col>
            <NavLink to="/Diagnoses2" className="nav-link p-1">
              <FaDiagnoses size={125} />
              <h3>Diagnoses Project</h3>
              <p>
                Irure sint cupidatat sit deserunt ad esse veniam consequat
                dolore excepteur eu excepteur cillum. Velit est sit magna
                commodo
              </p>
            </NavLink>
          </Col>

          <Col>
            <NavLink to="/Flask3" className="nav-link p-1">
              <FaFlask size={125} className="pb-1" />
              <h3>Flask Project</h3>
              <p>
                Irure sint cupidatat sit deserunt ad esse veniam consequat
                dolore excepteur eu excepteur cillum. Velit est sit magna
                commodo
              </p>
            </NavLink>
          </Col>
        </Row>
        <Row className="p-5">
          <Col>
            <NavLink to="/Sitemap1" className="nav-link p-1">
              <FaBook size={125} />
              <p className="pt-2">
                Irure sint cupidatat sit deserunt ad esse veniam consequat
                dolore excepteur eu excepteur cillum. Velit est sit magna
                commodo
              </p>
            </NavLink>
          </Col>
          <Col>
            <NavLink to="/Sitemap1" className="nav-link p-1">
              <FaGlobeAmericas size={125} />
              <p className="pt-2">
                Irure sint cupidatat sit deserunt ad esse veniam consequat
                dolore excepteur eu excepteur cillum. Velit est sit magna
                commodo
              </p>
            </NavLink>
          </Col>
          <Col>
            <NavLink to="/Sitemap1" className="nav-link p-1">
              <FaMicroscope size={125} />
              <p className="pt-2 pb-15">
                Irure sint cupidatat sit deserunt ad esse veniam consequat
                dolore excepteur eu excepteur cillum. Velit est sit magna
                commodo
              </p>
            </NavLink>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
}
