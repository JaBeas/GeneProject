import React from "react";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Carousel from "react-bootstrap/Carousel";

import geneTubes from "../utils/gene-tube2.jpg";
import geneData from "../utils/gene-data.png";
import geneData2 from "../utils/gene-data2.png";

import geneSlide1 from "../utils/gene-slide1.png";
import geneSlide2 from "../utils/gene-slide2.png";
import geneSlide3 from "../utils/gene-slide3.png";

import PageBanner from "./PageBanner";
export default function Diagnoses2() {
  return (
    <React.Fragment>
      <PageBanner banner={geneTubes} text={`Diagnoses Project`} />
      <Container className="p-5 tab-text">
        <h3>Diagnoses Project Example</h3>
        <p>
          Consequat est pariatur aute laborum in elit. Non ex aliquip et ullamco
          sint enim reprehenderit culpa sunt aliquip. Nisi pariatur magna irure
          ea. Consequat est pariatur aute laborum in elit. Non ex aliquip et
          ullamco sint enim reprehenderit culpa sunt aliquip. Nisi pariatur
          magna irure ea.
        </p>
        <Accordion defaultActiveKey="0">
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="0">
                Data Visualization Presentation
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
              <Card.Body>
                <img className="img-w" src={geneData} alt="gene data" />
                <p className="pt-3">
                  enderit culpa sunt aliquip. Nisi pariatur magna irure ea.
                  Consequat est pariatur aute laborum in elit. Non ex aliquip et
                  ullamco sint enim reprehenderit culpa sunt aliquip. Nisi
                  pariatur magna irure ea.
                </p>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="1">
                Another data page
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="1">
              <Card.Body>
                <h4>Data Title</h4>
                <p>
                  enderit culpa sunt aliquip. Nisi pariatur magna irure ea.
                  Consequat est pariatur aute laborum in elit. Non ex aliquip et
                  ullamco sint enim reprehenderit culpa sunt aliquip. Nisi
                  pariatur magna irure ea.
                </p>
                <img className="img-w" src={geneData2} alt="gene data" />
                <p className="pt-3">
                  enderit culpa sunt aliquip. Nisi pariatur magna irure ea.
                  Consequat est pariatur aute laborum in elit. Non ex aliquip et
                  ullamco sint enim reprehenderit culpa sunt aliquip. Nisi
                  pariatur magna irure ea.
                </p>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </Container>

      <Container className="px-5 pt-2">
        <h4>Rotating slides</h4>
        <Carousel className="carsouel-img ">
          <Carousel.Item>
            <img
              className=" d-block w-100"
              src={geneSlide1}
              alt="First slide"
            />

            <h3>First slide label</h3>
            <p>
              Nulla vitae Consequat est pariatur aute laborum in elit. Non ex
              aliquip et ullamco sint enim reprehenderit culpa sunt aliquip.
              Nisi pariatur magna irure ea. Consequat est pariatur aute laborum
              in elit. Non ex aliquip et ullamco sint enim reprehenderit culpa
              sunt aliquip. Nisi pariatur magna irure ea.elit libero, a pharetra
              augue mollis interdum.
            </p>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={geneSlide2} alt="Third slide" />

            <h3>Second slide label</h3>
            <p>
              Lorem ipsum dolor sit aConsequat est pariatur aute laborum in
              elit. Non ex aliquip et ullamco sint enim reprehenderit culpa sunt
              aliquip. Nisi pariatur magna irure ea. Consequat est pariatur aute
              laborum in elit. Non ex aliquip et ullamco sint enim reprehenderit
              culpa sunt aliquip. Nisi pariatur magna irure ea.met, consectetur
              adipiscing elit.
            </p>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={geneSlide3} alt="Third slide" />

            <h3>Third slide label</h3>
            <p>
              Consequat est pariatur aute laborum in elit. Non ex aliquip et
              ullamco sint enim reprehenderit culpa sunt aliquip. Nisi pariatur
              magna irure ea. Consequat est pariatur aute laborum in elit. Non
              ex aliquip et ullamco sint enim reprehenderit culpa sunt aliquip.
              Nisi pariatur magna irure ea. Praesent commodo cursus magna, vel
              scelerisque nisl consectetur.
            </p>
          </Carousel.Item>
        </Carousel>
      </Container>
    </React.Fragment>
  );
}
