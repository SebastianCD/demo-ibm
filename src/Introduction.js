import React, { useState, useEffect } from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Glosary from './Glosary';
import SvgComponent from "./svgComponent";
import { Container, Button, Link } from 'react-floating-action-button'
import '@fortawesome/fontawesome-free/css/all.min.css';
import "./styles.css";

function createData(api, csn) {
  return { api, csn};
}

const rows = [
  createData("Compute Engine API", "compute.googleapis.com"),
  createData("Google Cloud APIs", "cloudapis.googleapis.com"),
  createData("Cloud Resource Manager API", "cloudresourcemanager.googleapis.com"),
  createData("Google DNS API", "dns.googleapis.com"),
  createData("IAM Service Account Credentials API", "iamcredentials.googleapis.com"),
  createData("Identity and Access Management (IAM) API", "iam.googleapis.com"),
  createData("Service Management API", "servicemanagement.googleapis.com"),
  createData("Service Usage API", "serviceusage.googleapis.com"),
  createData("Google Cloud Storage JSON API", "storage-api.googleapis.com"),
  createData("Cloud Storage", "storage-component.googleapis.com"),
];

function Introduction() {
  const [displayGlosary, setDisplayGlosary] = useState(false);
  const [y, setY] = useState(window.scrollY); // storing current scroll bar positiotn
  const [totalY, setTotalY] = useState(); // storing Total Scrollable area
  const [scrollBar, setScrollBar] = useState(); // storing Size of scroll bar

  useEffect(() => {
    window.addEventListener("scroll", () => setY(window.scrollY));
    const element = document.getElementsByTagName("body")[0];
    setTotalY(element.clientHeight);
    setScrollBar(window.innerHeight);
  }, [y]);

  const showGlosary = () => {
    setDisplayGlosary(!displayGlosary);
  }

  const scroll = `${((y + scrollBar) / totalY) * 100}%`;

  return (
    <div>
      <Container>
            <Link href="https://github.ibm.com/alejandra-pcastillo/Demo-Installing-OpenShift-on-Google-Cloud"
                tooltip="Repository"
                icon="fab fa-github" 
                styles={{backgroundColor: "#0f62fe", color: "#ffffff"}}/>
                
            <Link href="https://ibm-csm-mx.slack.com/archives/C04F4SZSK6G"
                tooltip="Community"
                icon="fab fa-slack"
                styles={{backgroundColor: "#0f62fe", color: "#ffffff"}}
                />
            <Button
                tooltip="Show More"
                icon="fab fa-plus"
                styles={{backgroundColor: "#0f62fe", color: "#ffffff"}}
                rotate={true} />
        </Container>
      <div className="progress-bar" style={{ width: scroll }}></div>
      <div className="container">
        <br></br>
        <h1 className="title">Installing OpenShift on Google Cloud</h1>
        <br></br>
        <div className="article">
          <h2>Introduction</h2>
          <p>
            This is a structured and organized guide for installing the OpenShift Container Platform on a Google Cloud environment with default configurations for hosting user applications.
          </p>
          <br></br>
          <h2>Why install OpenShift on Google Cloud Platform?</h2>
          <p>
            It allows you to connect your OpenShift clusters to the full portfolio of Google Cloud services.
          </p>
          <br></br>
          <h2>Why OpenShift clusters?</h2>
          <p>
            Red Hat OpenShift Cluster Manager is a managed service where you can install, modify, operate, and upgrade your Red Hat OpenShift clusters. This service allows you to work with all of your organization’s clusters from a single dashboard.
          </p>
          <br></br>
          <h2>Architecture diagram</h2>
          <img className="image" src="https://raw.github.ibm.com/alejandra-pcastillo/Demo-Installing-OpenShift-on-Google-Cloud/main/images/arquitecturaMVP.png?token=AADFFJWIGLAVBYHLXXEUQ33DUGRN2" />
          <br></br>
          <h2>Prerequisites</h2>
          <p>
            Knowledge and tools:
          </p>
          <ul>
              <li className="li2">
                CMD, bash management
              </li>
              <li className="li2">
                Google Cloud account
              </li>
              <li className="li2">
                Google Cloud CLI
              </li>
              <li className="li2">
                Linux for RHEL distribution  
              </li>
              <li className="li2">
                RedHat account
              </li>
            </ul>
          <br></br>
          <h2>API services table</h2>
          <br></br>
          <p>You'll require access to several API services to complete OpenShift Container Platform installation, listed below:</p>
          <br></br>
          
          <div className="tableDiv">
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow sx={[
                              {
                                '&:hover': {
                                  backgroundColor: "#78a9ff"
                                },
                              },
                            ]}>
                  <TableCell><b>API Service</b></TableCell>
                  <TableCell align="right"><b>Console Service Name</b></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow
                    key={row.name}
                    sx={[{ '&:last-child td, &:last-child th': { border: 0 } }, {
                      '&:hover': {
                        backgroundColor: "#78a9ff"
                      },
                    },]}
                  >
                    <TableCell component="th" scope="row">
                      {row.api}
                    </TableCell>
                    <TableCell align="right">{row.csn}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          </div>
          <br></br>
          <p>If you have problems with the concepts mentioned in this technical memory, you can consult the glossary below: </p>
          <br></br>
          <div className = "glosary" onClick = {() => showGlosary()}>
            <p>Glosary</p>
            <SvgComponent/>
          </div>
          <div>
          {
              displayGlosary && <Glosary />
            }
          </div>
        </div>
      </div>
      
 

    </div>
  );
}

export default Introduction;