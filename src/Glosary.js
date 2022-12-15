import React from "react";
import "./styles.css";

function Glosary() {
  return (
    <div className="container">
        <ul>
            <li className="li1"><code>OpenShift Container Platform:</code> Platform on which we will create the cluster.</li>
            <li className="li1"><code>Google Cloud Platform:</code> Platform on which we will host the cluster of OpenShift Platfom.</li>
            <li className="li1"><code>Cluster:</code> Group of two or more computers, or nodes, that run in parallel to achieve a common goal.</li>
            <li className="li1"><code>Dedicated public zone:</code> Let you isolate the resources that your application needs and manage them separately from other applications on Google Cloud Platform.</li>
            <li className="li1"><code>OAuth consent screen:</code> When you use OAuth 2.0 for authorization, your app requests authorizations for one or more scopes of access from a Google Account. Google displays a consent screen to the user including a summary of your project and its policies and the requested scopes of access.</li>
            <li className="li1"><code>Property of a domain:</code> Means a provider can have the property of your domain, so you can check if it is property of someone else or if it is already exists or not, check this link</li>
            <li className="li1"><code>Scopes:</code> Scopes express the permissions you request users to authorize for your app and allow your project to access specific types of private user data from their Google Account.</li>
            <li className="li1"><code>Cloud DNS:</code> A DNS zone is a container of DNS records for the same DNS name suffix. In Cloud DNS, all records in a managed zone are hosted on the same set of Google-operated authoritative name servers.</li>
            <li className="li1"><code>Service account:</code> OpenShift Container Platform requires a Google Cloud Platform service account that provides authentication and authorization to access data in the Google APIs.</li>
        </ul>  
    </div>
  );
}

export default Glosary;