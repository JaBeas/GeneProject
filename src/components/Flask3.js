import React from "react";
import { Link } from "react-router-dom";

import PageBanner from "./PageBanner";
import geneFlaskbg from "../utils/gene-flaskbg.jpg";
import Data from "../data/sampleData.json";

import Container from "react-bootstrap/Container";

import Table from "react-bootstrap/Table";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";

export default class Flask3 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      rawData: Data.npidata,
      search: "",
    };
  }

  onChangeEvent = (event) => {
    const search = event.target.value;
    this.setState({ search });
  };

  render() {
    const { rawData, search } = this.state;

    return (
      <React.Fragment>
        <PageBanner banner={geneFlaskbg} text={`Diagnoses Project`} />
        <Container className="pt-5">
          <InputGroup className="pb-3">
            {/* <FormControl
              type="text"
              name="search"
              value={search}
              placeholder="Search here to narrow down results..."
              onChange={this.onChangeEvent}
              aria-label="Default"
              aria-describedby="inputGroup-sizing-default"
            /> */}
          </InputGroup>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Provider Name</th>
                <th>NPI</th>
                <th>Group/Facility</th>
                <th>Taxonomy</th>
                <th>Gender</th>
                <th>License Number</th>
                <th>City / State</th>
              </tr>
            </thead>
            <tbody>
              {rawData.map((npi) => (
                <tr key={npi.npi}>
                  <Link className="" to={`Flask3/Flask3Sub?npi=${npi.npi}`}>
                    {`${
                      npi.authorizedofficialfirstname || npi.providerfirstname
                    }
                    ${npi.authorizedofficiallastname || npi.providerlastname}`}
                  </Link>
                  <td>{npi.npi}</td>
                  <td>{npi.providerorgnizationname}</td>
                  <td>{npi.taxonomyclassification}</td>
                  <td>{npi.providergendercode}</td>
                  <td>{npi.providerlicensenumber}</td>
                  <td>
                    {`${npi.providerbusinesspracticelocationaddresscityname}, ${npi.providerbusinesspracticelocationaddressstatename}`}
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Container>
      </React.Fragment>
    );
  }
}
