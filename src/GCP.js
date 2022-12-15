import React from "react";
import "./styles.css";

function GCP() {
  return (
    <div className="container2">
        <ol>
            <li className="li1">Go to the following <a href="https://console.cloud.google.com/" target="_blank">Link</a>.</li>
            <li className="li1">Once in the link, we will create a project. Click on <code>My First Project</code>. Select <code>New project</code>. Enter a name and choose a location (optional) and select the new project.</li>
            <li className="li1">Click on the burger button, then put your mouse on <code>APis & Services</code> &#62; <code>Library</code>. We’re going to add various APIs as follows. Search <code>Compute Engine API</code> on the search bar. Click the API. Then, click on <code>ENABLE</code> (if the button says <code>MANAGE</code> instead of <code>ENABLE</code>, it is already enable). Repeat the step with all the APIs.</li>
            <li className="li1">Now, let’s configure DNS for GCP. First, we need to enable <code>Cloud DNS API</code> <a href="https://console.cloud.google.com/start/api?id=dns&credential=client_key&_ga=2.122177421.780673959.1669692071-844402300.1668652230" target="_blank">here</a>. Click on <code>NEXT</code> button &#62; <code>ENABLE</code> button.</li>
            <li className="li1">Then, we’re going to create a public hosted zone. For this, we need to create an OAuth 2.0 ID. Go to the Burger button &#62; <code>APIs & Services</code> &#62; <code>OAuth consent screen</code>. If you have your account registered with your organization, select <code>Internal</code>. On the other hand, select <code>External</code> &#62; <code>CREATE</code>. Enter the app name and the user support name (this email address is the one that users can use to contact you). Enter the fields of <code>App domain</code>. Don't forget to save the address of the application home page. For authorize your domain, you need to put your domain in the field <code>Authorized domain 1</code>. You can check the property of your domain on <a href="https://search.google.com/search-console/about" target="_blank">https://search.google.com/search-console/about</a>.Next, GCP request us to enter the scopes (optional). Also, test users (optional). Check the summary before click on <code>BACK TO DASHBOARD</code> and save the information (you can edit with the “EDIT APP” button).</li>
            <li className="li1">To finish the OAuth 2.0 configuration, we need the credentials. So, go to the <code>Credentials</code> window. Click on <code>CREATE CREDENTIALS</code>. Click on <code>OAuth client ID</code>. Select <code>Web application</code> on <code>Application type</code> and add a <code>Name</code> for your client &#62; <code>CREATE</code>. You can copy your Client ID and your Client Secret and save it in a safe file or download the JSON.</li>
            <li className="li1">Next, we're going to create a DNS Zone. Search <code>Cloud DNS</code>. Click on <code>CREATE ZONE</code>. Fill the fields of <code>Zone name</code> and <code>DNS name</code> &#62; <code>CREATE</code>.</li>
            <li className="li1">Now, we need to create a service account in GCP. Click <a href="https://console.cloud.google.com/projectselector/iam-admin/serviceaccounts/create?_ga=2.56098861.780673959.1669692071-844402300.1668652230" target="_blank">here</a>. Select your project. Enter the Service account name: osd-ccs-admin &#62; <code>CREATE AND CONTINUE</code>. You can fill the other fields or continue &#62; <code>DONE</code>. Choose your service account to obtain the key. Click on <code>KEYS</code> &#62; <code>ADD KEY</code> &#62; <code>Create new key</code>. Select the key type &#62; <code>CREATE</code>. The private key will be saved in your computer.</li>
        </ol>  
    </div>
  );
}

export default GCP;