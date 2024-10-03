import { useState, useEffect } from "react";
import logo from "../assets/logo.webp"

function NavBar() {
    const [isClosed, setIsClosed] = useState(false);
    useEffect(() => {
        if(window.innerWidth > 768){
            document.body.classList.remove("no-scroll");
            return;
        }
        if (isClosed) {
            document.body.classList.add("no-scroll");
        } else {
            document.body.classList.remove("no-scroll");
        }
    }, [isClosed]);

    return (
        <header>
            <nav>
                <div className="nav-left">
                    <a href="/" className="link">
                        <img className="logo" src={logo} alt="Ngoc logo" />
                    </a>
                </div>
                <div className="nav-right">
                <div className={isClosed ? "hamburger-menu close" : "hamburger-menu"} onClick={() => setIsClosed(!isClosed)}>
                    <div className="bar1"></div>
                    <div className="bar2"></div>
                    <div className="bar3"></div>
                </div>
                    <ul className={isClosed ? "list active" : "list"}>
                        <li className="list-item">
                            <a href="#about" className="link">About Me</a>
                        </li>
                        <li className="list-item">
                            <a href="#projects" className="link">Experience</a>
                        </li>
                        <li className="list-item">
                            <a href="#contact" className="link">Contact</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </header >
    )
}

export default NavBar;