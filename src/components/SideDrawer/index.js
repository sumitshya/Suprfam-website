import "./SideDrawer.css";
import { Link } from "react-router-dom";
import CloseIcon from "../../assets/icons/Close.svg"
import UserIcon from "../../assets/icons/Signup.svg"
import suprfam from "../../assets/icons/suprfam icon.svg"


const SideDrawer = ({ show, click }) => {
    const sideDrawerClass = ["sidedrawer"];
    
    if(show) {
        sideDrawerClass.push("show")
    }

    return (
        <div className={sideDrawerClass.join(" ")}>
            <nav class="navbar navbar-light border-bottom" style={{background:"#00193C"}}>
                <a className="close-btn" href="#!" onClick={click}><img src={CloseIcon} alt="sidebar close icon " width="80%"/></a>
                <Link to="/" style={{width:'8%'}} ><img src={suprfam} alt="sidebar user icon" /></Link>
                <div></div>
            </nav>
            <ul id="menu" className="sidedrawer__links" onClick={click}>
                <li><Link to="/work" onClick={click} style={{color:"#f4f7f6"}}>WORK</Link></li>
                <li><Link to="/about" onClick={click} style={{color:"#f4f7f6"}}>ABOUT</Link></li>
                <li><Link to="/blog" onClick={click} style={{color:"#f4f7f6"}} className="border-0">BLOG</Link></li>
            </ul>
        </div>
    )
}

export default SideDrawer;