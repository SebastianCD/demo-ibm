import React, { useState, useRef } from "react";
import {
  Typography,
  Button,
  Stepper,
  Step,
  StepLabel,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import SvgComponent from "./svgComponent";
import GCP from "./GCP";
import Console from "./Console";
import "./styles.css";
import useWindowSize from 'react-use/lib/useWindowSize'
import Confetti from 'react-confetti';

const useStyles = makeStyles((theme) => ({
  button: {
    marginRight: theme.spacing(1),
  },
}));

function getSteps() {
  return [
    "Creating a GCP project",
    "Setting up the DNS server",
    "OCP installation on RHEL (RedHat Enterprise Linux)",
    "FINAL",
  ];
}

function getStepContent(step) {
  const { width, height } = useWindowSize();
  const [displayConsole, setDisplayConsole] = useState(false);
  const [displayGCP, setDisplayGCP] = useState(false);

  const showConsole = () => {
    setDisplayConsole(!displayConsole);
  }

  const showGCP = () => {
    setDisplayGCP(!displayGCP);
  }

  switch (step) {
    case 0:
      return (
        <>
          <div>
            <br></br>
            <p>
              Before you can install OpenShift Container Platform, you must configure a Google Cloud Platform (GCP) project to host it.

              There are two ways you can follow to accomplish the prerequisites, follow the instructions bellow:
            </p>
            <br></br>
            <div className = "glosary" onClick = {() => showGCP()}>
              <p>Instructions within Google Cloud</p>
              <SvgComponent/>
            </div>
            <div>
            {
                displayGCP && <GCP />
              }
            </div>
              <br></br>
              <div className = "glosary" onClick = {() => showConsole()}>
              <p>Instructions within console</p>
              <SvgComponent/>
            </div>
            <div>
            {
                displayConsole && <Console />
              }
            </div>

            <br></br>
            
          </div>
        </>
      );

    case 1:
      return (
        <>
          <div className="container2">
              <br></br>
              <p>We'll need a domain provider from which we could configure a DNS server, like <a href="https://www.name.com/en" target="_blank">name</a>, <a href="https://www.namecheap.com/" target="_blank">namecheap</a> or whatever. For this demo we'll configure name servers(NS) to host the cluster, and it is a very simple configuration within the admin and the Cloud DNS resource in GCP.</p>
              <img className="image" src="https://raw.github.ibm.com/alejandra-pcastillo/Demo-Installing-OpenShift-on-Google-Cloud/main/images/managedZone1.PNG?token=AADFFJTJ4MZ2TBK5EKNR7STDUICUE" />
              <br></br>
              <p>We're going to log in in the panel admin and check the DNS server, once we have created the managed zone within Google Cloud, like this:</p>
              <img className="image" src="https://raw.github.ibm.com/alejandra-pcastillo/Demo-Installing-OpenShift-on-Google-Cloud/main/images/managedZone2.PNG?token=AADFFJRKEXBDM4B7I7TJBP3DUICYM" />
              <br></br>
              <p>We can see at least two types of DNS, we'll select the NS type and next screen will show you the following addresses:</p>
              <img className="image" src="https://raw.github.ibm.com/alejandra-pcastillo/Demo-Installing-OpenShift-on-Google-Cloud/main/images/managedZone3.PNG?token=AADFFJTXSPXVNTBETLBMKI3DUIC2M" />
              <p>Those directions must be added in the configuration of our provider</p>
              <img className="image" src="https://raw.github.ibm.com/alejandra-pcastillo/Demo-Installing-OpenShift-on-Google-Cloud/main/images/nsAdded.PNG?token=AADFFJUW336USLWMLP37JOLDUIC4MI" />
              <br></br>
              <p>An thats all, we can go ahead.</p>
              <br></br>
          </div>
        </>
      );
    case 2:
      return (
        <>
          <div className="container2">
              <br></br>
              <p>For convention, we'll use a virtualized OS, as RedHat Enterprise Linux. For this demo, you can install a Virtual Machine and follow the next steps.</p>
              <br></br>
              
              <p><a href="https://youtu.be/CAhpyuMWZDQ" target="_blank">Here</a> you have a tutorial for creating your VM.</p>
              <br></br>
              <p>Open your console and get the necesary package for OCP through the mirror, using <code>wget</code>.</p>
              <p><code>https://mirror.openshift.com/pub/openshift-v4/clients/ocp/stable/openshift-install-linux.tar.gz</code></p>
              <img className="image" src="https://raw.github.ibm.com/alejandra-pcastillo/Demo-Installing-OpenShift-on-Google-Cloud/main/images/obtainOCP.PNG?token=AADFFJTG4M2XYSNYRPTDDBLDUIDBM" />
              <br></br>
              <p>Now you can extract the file using <code>tar zxvf openshift-install-linux.tar.gz</code></p>
              <img className="image" src="https://raw.github.ibm.com/alejandra-pcastillo/Demo-Installing-OpenShift-on-Google-Cloud/main/images/extractTAR.PNG?token=AADFFJWZSFZSZ4NVF2KRHIDDUIDEI" />
              <br></br>
              <p>As you can see, you have two directories, you can remove the README file</p>
              <img className="image" src="https://raw.github.ibm.com/alejandra-pcastillo/Demo-Installing-OpenShift-on-Google-Cloud/main/images/rmREADME.PNG?token=AADFFJW4K6IUZYMIZDVTGYDDUIDGI" />
              <p>Next step is configuring the OCP installation with the following command: <code>./openshift-install create install-config</code></p>
              <br></br>
              <p>And you're going to set up your installation first by selecting your Cloud provider:</p>
              <img className="image" src="https://raw.github.ibm.com/alejandra-pcastillo/Demo-Installing-OpenShift-on-Google-Cloud/main/images/askCloud.PNG?token=AADFFJRQ3FMUXRBICI7IYZDDUIDIK" />
              <br></br>
              <p>The console will ask your for your JSON file generated after creating the service account, so, you have to keep this important file to provide it to the console:</p>
              <img className="image" src="https://raw.github.ibm.com/alejandra-pcastillo/Demo-Installing-OpenShift-on-Google-Cloud/main/images/selectJSON.PNG?token=AADFFJQHDBHCM4CEHVVDMTLDTBULA" />
              <br></br>
              <p>Then select your nearliest region:</p>
              <img className="image" src="https://raw.github.ibm.com/alejandra-pcastillo/Demo-Installing-OpenShift-on-Google-Cloud/main/images/selectRegion.PNG?token=AADFFJQNORODML44PRA6ZH3DTBUMY" />
              <br></br>
              <p>And continue setting up your cluster:</p>
              <img className="image" src="https://raw.github.ibm.com/alejandra-pcastillo/Demo-Installing-OpenShift-on-Google-Cloud/main/images/settingCluster.PNG?token=AADFFJROOU5FUOZKOVMHSLTDTBUOO" />
              <br></br>
              <p>For the last step, you have to <a href="https://console.redhat.com/openshift/install/pull-secret" target="_blank">generate a pull secret from the RedHat OpenShift Cluster Manager</a>, which is a TXT file, for this you will create a RedHat account first. This pull secret allows you to authenticate with the services that are provided by the included authorities, including Quay.io, which serves the container images for OpenShift Container Platform components.</p>
              <br></br>
              <p>And paste the content of the file:</p>
              <img className="image" src="https://raw.github.ibm.com/alejandra-pcastillo/Demo-Installing-OpenShift-on-Google-Cloud/main/images/copySecret.PNG?token=AADFFJUARSB7TNGEE4N7Y33DTBUQM" />
              <br></br>
              <p>After this, a YAML configuration file will be generated and you can check the content within VIM <code>vim install-config.yaml</code></p>
              <img className="image" src="https://raw.github.ibm.com/alejandra-pcastillo/Demo-Installing-OpenShift-on-Google-Cloud/main/images/vimYaml.PNG?token=AADFFJTOBMTUH6HOXER5G5DDTBUSG" />
              <br></br>
              <p>In this one you can personalize the installation, if you wanna set up more masters or workers nodes within your cluster and needs and then implement your cluster within GCP.</p>
              <br></br>
          </div>
        </>
      );
    case 3:
      return (
        <>
          
          <div className="challanges-container">
            <Confetti/>
            <br></br>
              <h1>Final</h1>
            <br></br>
          </div>
          
        </>
      );
    default:
      return "unknown step";
  }
}

const LinaerStepper = () => {
  const scollToRef = useRef();
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  return (

    <div>
      <Stepper alternativeLabel activeStep={activeStep}>
        {steps.map((step, index) => {
          const labelProps = {};
          const stepProps = {};
          return (
            <Step {...stepProps} key={index}>
              <StepLabel {...labelProps}>{step}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      <div className="container" ref={scollToRef}>
      {activeStep === steps.length ? (
        <Typography variant="h3" align="center">
          Thank You
        </Typography>
      ) : (
        <>
          <form>{getStepContent(activeStep)}</form>
          <Button
            className={classes.button}
            disabled={activeStep === 0}
            onClick={() => {handleBack(); scollToRef.current.scrollIntoView();}}
          >
            back
          </Button>
        
          <Button
            className={classes.button}
            variant="contained"
            color="primary"
            onClick={() => {handleNext(); scollToRef.current.scrollIntoView();}}
          >
            {activeStep === steps.length - 1 ? "Finish" : "Next"}
          </Button>
        </>
      )}
    </div>
    </div>
  );
};

export default LinaerStepper;
