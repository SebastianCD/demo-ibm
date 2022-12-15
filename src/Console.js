import React from "react";
import "./styles.css";

function Console() {
  return (
    <div className="container2">
        <br></br>
        <p>To install OpenShift Container Platform, you must create a project in your Google Cloud Platform (GCP) account to host the cluster with the command: <code>gcloud projects create --set-as-default 	&#60;project-unique-id&#62;</code></p>
        <img className="image" src="https://raw.github.ibm.com/alejandra-pcastillo/Demo-Installing-OpenShift-on-Google-Cloud/main/images/newProject.PNG?token=AADFFJQ3MOCRR5CBJN4N6L3DUGTGU" />
        <br></br>
        <p>The console will switch to the new project.</p>
        <br></br>
        <p>To enable the Api Services required, you'll use this command: <code>gcloud services enable &#60;google-apis&#62;</code> and adding the APIs listed previously:</p>
        <img className="image" src="https://raw.github.ibm.com/alejandra-pcastillo/Demo-Installing-OpenShift-on-Google-Cloud/main/images/enableAPIs.PNG?token=AADFFJU5YMOPILTDS6HAXW3DUGTNA" />
        <br></br>
        <p>Then, you'll create a managed zone within your Google Cloud project with: <code>gcloud dns managed-zones create &#60;your-domain&#62; --dns-name '&#60;your-domain.com&#62;' --description '&#60;your-zone-name&#62;'</code>:</p>
        <img className="image" src="https://raw.github.ibm.com/alejandra-pcastillo/Demo-Installing-OpenShift-on-Google-Cloud/main/images/dns.PNG?token=AADFFJRLI2WIZS6CSP753G3DUGTPI" />
        <br></br>
        <p>Next step is creating a Service Account within Google Cloud using <code>gcloud iam service-accounts create &#60;sa-name&#62; --description="&#60;your description&#62; " --display-name="&#60;your-SA-name&#62;"</code></p>
        <img className="image" src="https://raw.github.ibm.com/alejandra-pcastillo/Demo-Installing-OpenShift-on-Google-Cloud/main/images/serviceAccount.PNG?token=AADFFJX6CFJO3EIC5BSPGH3DUGTRU" />
        <br></br>
        <p>You need to give some permissions to that service account as the role owner <code>gcloud projects add-iam-policy-binding &#60;project-id&#62; --member="serviceAccount:&#60;sa-name&#62;@&#60;project-id&#62;.iam.gserviceaccount.com" \ --role="roles/owner"</code></p>
        <img className="image" src="https://raw.github.ibm.com/alejandra-pcastillo/Demo-Installing-OpenShift-on-Google-Cloud/main/images/permissionsSA.PNG?token=AADFFJVWBKXCPBXZAWZQLQDDUGTT6" />
        <br></br>
        <p>Next, you'll be able to download a JSON file that contains a key to authenticate the service account, use this command: <code>gcloud iam service-accounts keys create initial-ocp-sa.json --iam-account=initial-ocp-sa@&#60;project-id&#62;.iam.gserviceaccount.com</code></p>
        <img className="image" src="https://raw.github.ibm.com/alejandra-pcastillo/Demo-Installing-OpenShift-on-Google-Cloud/main/images/jsonKEY.PNG?token=AADFFJVOKWXYOGRYUZXEM5LDUGTV4" />
        <br></br>
    </div>
  );
}

export default Console;