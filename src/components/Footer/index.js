import "./Footer.css"

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useWindowSize from "../../utils/windowSize";
import Linkedin from "../../assets/icons/Linkedin.svg";
import Twitter from "../../assets/icons/Twitter.svg";
import f_logo from "../../assets/icons/f_logo.svg";
import glyph_logo from "../../assets/icons/glyph_logo.svg";
import logo from "../../assets/icons/Suprfam.svg";


const Footer = () => {
    const [ toggleOne, setToggleOne ] = useState(false);
    const [ toggleTwo, setToggleTwo ] = useState(false);
    const [ toggleThree, setToggleThree ] = useState(false);
   
    
    return (
        <footer className={`page-footer font-small blue pt-0 pt-md-5 `} >

            <div className="container-fluid text-center text-md-left">

                <div className="row m-0 p-2 justify-content-between">

                    <div class="col-md-4 mt-md-0 d-none  logo d-md-flex align-items-center " style={{padding: "0 10rem 0rem 3rem"}}>
                        <img src={logo} className="img-fluid" style={{height:"3rem"}} alt="logo"/>
                    </div>

                    <hr className="clearfix w-100 d-md-none text-white"/>

                    <div className="col-md-2 mb-md-0 top-border ">
                        <a id="super_family" onClick={() => setToggleOne(!toggleOne)} className="pt-3 pb-2 d-flex text-white text-decoration-none flexdirection-row justify-content-between align-items-center">
                        <h5 className="text-uppercase  text-weight text-left text-white" >SUPER FAMILY</h5>
                        <i class={`fa fa-${toggleOne ? "times" : "plus"} d-sm-block d-md-none`} aria-hidden="true"></i>
                        </a>
                        <ul className={`collapse multi-collapse list-unstyled text-left d-md-block pl-3 pl-md-0 pb-2 pb-md-0 ${toggleOne ? "d-block" : "d-none"}`} id="super_family">
                            <li>
                                 <Link to="/work" href="#!" className="list-text text-decoration-none ">WORK</Link>
                            </li>
                            <li>
                                <Link to="/about" href="#!" className="list-text text-decoration-none">ABOUT</Link>
                            </li>
                            <li>
                                <Link to="/blog" href="#!" className="list-text text-decoration-none">BLOG</Link>
                            </li>
                            <li>
                                <a href="#!" className="list-text text-decoration-none">SIGN UP</a>
                            </li>
                        </ul>

                    </div>

                    <div className="col-md-2 mb-md-0 text-left top-border " >
                        <a onClick={() => setToggleTwo(!toggleTwo)} className="d-flex pt-3 pb-2 text-white flexdirection-row text-decoration-none justify-content-between align-items-center">
                            <h5 className="text-uppercase  text-weight text-white ">CONTACT</h5>
                            <i class={`fa fa-${toggleTwo ? "times" : "plus"} d-sm-block d-md-none`} aria-hidden="true"></i>
                        </a>
                        <ul className={`list-unstyled d-md-block pl-3 pl-md-0 pb-2 pb-md-0 ${toggleTwo ? 'd-block' : 'd-none'}`}>
                            <li>
                                <a href="#!" className="list-text text-decoration-none">info@suprfam.com</a>
                            </li>
                            <li>
                                <a href="#!" className="list-text text-decoration-none">+91 81018 86172</a>
                            </li>
                        </ul>
                    </div>

                    <div className="col-md-3 mb-md-0 text-left top-border bottom-border pt-3 pb-2" >
                            <a className="d-flex flexdirection-row text-white justify-content-between align-items-center text-decoration-none " onClick={() => setToggleThree(!toggleThree)} > 
                            <h5 className="text-uppercase text-white text-weight ">CONNECT</h5>
                            <i class={`fa fa-${toggleThree ? "times" : "plus"} d-sm-block d-md-none`}  aria-hidden="true"></i>
                            </a>
                            <div className={`d-md-block pb-2 pb-md-0 ${toggleThree ? "d-md-block" : "d-none"} pl-3 pl-md-0 `}>
                                <img src={f_logo} alt="f" className="img-fluid "  style={{height:20, width:"5%"}}/>
                                <img src={glyph_logo} alt="insta" className="img-fluid ml-2" style={{height:20, width:"5%"}}/>
                                <img src={Twitter} alt="Twitter" className="img-fluid ml-2" style={{height:20, width:"5%"}}/>
                                <img src={Linkedin} alt="linkedin" className="img-fluid ml-2" style={{height:20, width:"5%"}}/>
                            </div>
                        </div>

                </div>

            </div>
            <hr className={`clearfix w-100 d-none d-md-block text-white`}  style={{background:"#ddd"}}/>
            <div className="footer-copyright row m-0 justify-content-between text-white pl-5 pr-md-5 pr-5 pr-md-5 pb-2 pt-2 " >
                <div className="text-weight pb-2">Copyright © 2021 Suprfam Pvt. Ltd. All rights reserved.</div>
                <span className="pl-4 pl-md-4 pb-4">Privacy Policy  <span className="mr-2 ml-2">|</span>  Terms of Use  <span className="mr-2 ml-2">|</span>  Site Map</span>
            </div>

        </footer>

    )
}


export default Footer
