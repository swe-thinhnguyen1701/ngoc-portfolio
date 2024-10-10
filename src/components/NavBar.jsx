import logo from "../assets/logo.webp"
import Footer from "./Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faUser, faPaperPlane, faFile } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { useLocation, Link } from "react-router-dom";


function NavBar() {
    const menu = [
        { name: "Home", link: "/", icon: faHouse },
        { name: "About", link: "/about", icon: faUser },
        { name: "Resume", link: "/resume", icon: faFile },
    ];
    const currentPage = useLocation().pathname;
    return (
        <nav>
            <ul className="list">
                <li className="list-item">
                    <a href="/">
                        <div className="logo">
                            <img src={logo} alt="Ngoc Trinh logo" />
                        </div>
                    </a>
                </li>
                {menu.map((item, index) => (
                    <li
                        className={currentPage === item.link ? "list-item active" : "list-item"}
                        key={index}
                    >
                        <Link to={item.link}>
                            <FontAwesomeIcon icon={item.icon} className="icon" />
                            <span>{item.name}</span>
                        </Link>
                    </li>
                ))}
                <li className="list-item">
                    <a href="mailto:ngoctrinh2506@gmail.com">
                        <FontAwesomeIcon icon={faPaperPlane} className="icon" />
                        <span>Contact</span>
                    </a>
                </li>
                <li className="list-item">
                    <a href="https://www.linkedin.com/in/ngoc-bao-trinh/" target="_blank">
                        <FontAwesomeIcon icon={faLinkedin} className="icon" />
                        <span>LinkedIn</span>
                    </a>
                </li>
            </ul>
            <Footer />
        </nav>
    );
}

export default NavBar;