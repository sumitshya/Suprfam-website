import './Navbar.css';
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import useWindowSize from "../../utils/windowSize";
import suprfam from "../../assets/icons/suprfam icon.svg"
import MenuIcon from "../../assets/icons/Menu Opener.svg"
const LogoName = require("../../assets/icons/logo name.svg").default
const userIcon = require("../../assets/icons/Signup.svg").default


const Navbar = ({ click }) => {
    const [ active, setActive ] = useState(true)

    const size = useWindowSize();

    const listenScrollEvent = (event) => {
        let image = document.getElementsByClassName("logo")
        if (window.scrollY < 73) {
            setActive(true)
        } else if (window.scrollY > 70) {
            setActive(false)
        } 
      }

    useEffect(() => {
        window.addEventListener('scroll', listenScrollEvent);
      
        return () =>
          window.removeEventListener('scroll', listenScrollEvent);
      }, []);
    
    return (
        <nav className="navbar navbar-expand-lg navbar-dark justify-content-between pl-md-5 pr-md-5 position-fixed w-100" /* style={{height:"5rem"}} */>
            <button className="navbar-toggler  border-0 p-0" type="button" data-toggle="collapse" onClick={click} data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <img src={MenuIcon} alt="menu" style={{display: "inline-block", width:"1.5rem", height:"1.5rem", verticalAlign:"middle", content:""}}/>
            </button>
            <div className="collapse navbar-collapse" style={{width:"2%"}} id="navbarSupportedContent">
                <ul className="navbar-nav ">
                    <li className="nav-item active">
                        <Link to="/work" className="nav-link pl-4 pr-2" href="#">WORK <span class="sr-only">(current)</span></Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/about" className="nav-link pl-4 pr-2" href="#">ABOUT</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/blog" className="nav-link pl-4 pr-2 " href="#" tabindex="-1" >BLOG</Link>
                    </li>
                </ul>
            </div>
            <div className={` ${size.width < 768 ? "d-flex align-items-center" : ""}`}>
                {   
                    <Link to="/">
                    <img src={active && size.width > 768 ? LogoName : suprfam} alt="logo" className="m-auto logo" style={{height:"30px"}}/>
                    </Link>
                }
                
            </div>
            <a className="user_icon" href="#!" style={{width:"20px"}}>
                <img src={userIcon} alt="user"/>
            </a>
        </nav>
    )

}

export default Navbar;

