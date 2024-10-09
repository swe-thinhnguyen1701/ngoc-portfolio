import { useState, useEffect } from "react";
import logo from "../assets/logo.webp"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faUser, faPaperPlane, faFile } from "@fortawesome/free-solid-svg-icons";
import { useLocation, Link } from "react-router-dom";


function NavBar() {
    const menu = [
        { name: "Home", link: "/", icon: faHouse, isActive: true },
        { name: "About", link: "/about", icon: faUser, isActive: false },
        { name: "Resume", link: "/resume", icon: faFile, isActive: false },
        { name: "Contact", link: "/contact", icon: faPaperPlane, isActive: false },
    ];
    const currentPage = useLocation().pathname;
    const [active, setActive] = useState(menu);
    const handleActive = (index) => {
        const updatedActive = active.map((item, i) => ({
            ...item,
            isActive: i === index
        }));
        setActive(updatedActive);
    };
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
                {active.map((item, index) => (
                    <li
                        className={currentPage === item.link ? "list-item active" : "list-item"}
                        key={index}
                        onClick={() => handleActive(index)}
                    >
                        <Link to={item.link}>
                            <FontAwesomeIcon icon={item.icon} className="icon" />
                            <span>{item.name}</span>
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default NavBar;