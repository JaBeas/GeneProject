import React, { Component } from "react";
import queryString from "query-string";
import Data from "../data/sampleData.json";

import PageBanner from "./PageBanner";
import geneFlaskbg from "../utils/gene-flaskbg.jpg";

import Table from "react-bootstrap/Table";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import Container from "react-bootstrap/Container";

class PageTab extends React.Component {
  render() {
    const { npidata } = this.props;

    return (
      <React.Fragment>
        <Table responsive>
          <thead>
            <tr>
              <th>Name</th>
              <th>Practice</th>
              <th>NPI</th>
              <th>Enumeration date</th>
              <th>Last update</th>
              <th>NPI Deactivation date</th>
              <th>NPI Reactivation date</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                {`${
                  npidata.authorizedofficialfirstname ||
                  npidata.providerfirstname
                }
      ${npidata.authorizedofficiallastname || npidata.providerlastname}`}
              </td>
              <td>{npidata.providerorgnizationname}</td>
              <td>{npidata.npi}</td>
              <td>{npidata.providerenumerationdate}</td>
              <td>{npidata.lastupdatedate}</td>
              <td>{npidata.npideactivationdate}</td>
              <td>{npidata.npireactivationdate}</td>
            </tr>
          </tbody>
        </Table>

        <Tabs defaultActiveKey="Provider" className="pt-5">
          {/* ------------------------------------------------------------------------------------------------ */}
          {/* ------------------------------------------------------------------------------------------------ */}
          {/* ------------------------------------------------------------------------------------------------ */}
          {/* ------------------------------------------------------------------------------------------------ */}

          <Tab eventKey="Provider" title="Provider">
            <Table striped>
              <tbody>
                <tr>
                  <th>Official Title or Position</th>
                  <th>Taxonomy</th>
                  <th>NPI</th>
                  <th>Authorized Phone</th>
                </tr>
                <tr>
                  <td>{npidata.authorizedofficaltitlorposition}</td>
                  <td>{npidata.taxonomyclassification}</td>
                  <td>{npidata.npi}</td>
                  <td>{npidata.authorizedofficialtelephonenumber}</td>
                </tr>
                <tr>
                  <th>Authorized Name</th>
                  <th>First Name</th>
                  <th>Middle Name</th>
                  <th>Last Name</th>
                </tr>
                <tr>
                  <td></td>
                  <td>{npidata.authorizedofficialfirstname}</td>
                  <td>{npidata.authorizedofficialmiddlename}</td>
                  <td>{npidata.authorizedofficiallastname}</td>
                </tr>
                <tr>
                  <th>Provider Name</th>
                  <th>First Name</th>
                  <th>Middle Name</th>
                  <th>Last Name</th>
                </tr>
                <tr>
                  <td></td>
                  <td>{npidata.providerfirstname}</td>
                  <td>{npidata.providermiddlename}</td>
                  <td>{npidata.providerlastname}</td>
                </tr>
                <tr>
                  <th>Other Name</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Middle Name</th>
                </tr>
                <tr>
                  <td></td>
                  <td>{npidata.providerotherfirstname}</td>
                  <td>{npidata.providerothermiddlename}</td>
                  <td>{npidata.providerotherlastname}</td>
                </tr>
              </tbody>
            </Table>
          </Tab>

          {/* ------------------------------------------------------------------------------------------------ */}
          {/* ------------------------------------------------------------------------------------------------ */}
          {/* ------------------------------------------------------------------------------------------------ */}
          {/* ------------------------------------------------------------------------------------------------ */}

          <Tab eventKey="Practice" title="Practice">
            <Table striped>
              <tbody>
                <tr>
                  <th>Organization Name</th>
                  <th>Entity Type</th>
                </tr>
                <tr>
                  <td>{npidata.providerorgnizationname}</td>
                  <td>{npidata.entitytypecode}</td>
                </tr>

                <tr>
                  <th>Practice Loaction</th>
                  <th>Street</th>
                  <th>City</th>
                  <th>State</th>
                  <th>Phone</th>
                </tr>
                <tr>
                  <td></td>
                  <td>
                    {npidata.providerfirstlinebusinesspracticelocationaddress}
                  </td>
                  <td>
                    {npidata.providerbusinesspracticelocationaddresscityname}
                  </td>
                  <td>
                    {npidata.providerbusinesspracticelocationaddressstatename}
                  </td>
                  <td>
                    {
                      npidata.providerbusinesspracticelocationaddresstelephonenumber
                    }
                  </td>
                </tr>
                <tr>
                  <th>Mailing Address</th>
                  <th>Street</th>
                  <th>City</th>
                  <th>State</th>
                  <th>Zip</th>
                </tr>
                <tr>
                  <td></td>
                  <td>{npidata.providerfirstlinebusinessmailingaddress}</td>
                  <td>{npidata.providerbusinessmailingaddresscityname}</td>
                  <td>{npidata.providerbusinessmailingaddressstatename}</td>
                  <td>{npidata.providerbusinessmailingaddresspostalcode}</td>
                </tr>
              </tbody>
            </Table>
          </Tab>

          {/* ------------------------------------------------------------------------------------------------ */}
          {/* ------------------------------------------------------------------------------------------------ */}
          {/* ------------------------------------------------------------------------------------------------ */}
          {/* ------------------------------------------------------------------------------------------------ */}

          <Tab eventKey="Taxonomy" title="Taxonomy">
            <Table striped>
              <tbody>
                <tr>
                  <th>Taxonomy Classification</th>
                  <th>Taxonomy Grouping</th>
                  <th>Taxonomy Code</th>
                  <th>Taxonomy Specialization</th>
                </tr>
                <tr>
                  <td>{npidata.taxonomyclassification}</td>
                  <td>{npidata.taxonomygrouping}</td>
                  <td>{npidata.taxonomycode}</td>
                  <td>{npidata.taxonomyspecialization}</td>
                </tr>
                <tr>
                  <th colSpan="4">Taxonomy Definition</th>
                </tr>
                <tr>
                  <td colSpan="4">{npidata.taxonomydefinition}</td>
                </tr>
                <tr>
                  <th colSpan="4">Taxonomy Notes</th>
                </tr>
                <tr>
                  <td colSpan="4">{npidata.taxonomynotes}</td>
                </tr>
              </tbody>
            </Table>
          </Tab>

          {/* ------------------------------------------------------------------------------------------------ */}
          {/* ------------------------------------------------------------------------------------------------ */}
          {/* ------------------------------------------------------------------------------------------------ */}
          {/* ------------------------------------------------------------------------------------------------ */}
        </Tabs>
      </React.Fragment>
    );
  }
}

class Flask3Sub extends Component {
  render() {
    const npiPage = queryString.parse(this.props.location.search);
    const npiNum = npiPage.npi;
    const npiData = Data.npidata.find(({ npi }) => npi === npiNum);

    return (
      <React.Fragment>
        <PageBanner banner={geneFlaskbg} text={`Diagnoses Project Sub`} />

        <Container className="py-5">
          <PageTab npidata={npiData} />
        </Container>
      </React.Fragment>
    );
  }
}

export default Flask3Sub;
