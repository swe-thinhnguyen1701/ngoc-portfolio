import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileArrowDown, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import img from "../assets/main-img.webp"

function HomePage() {
    return (
        <section className="home-page">
            <div className="img-container">
                <img src={img} alt="" />
            </div>
            <p>Providing compassionate care and expert medical advice for healthier lives.</p>
            <div className="btn-group">
                <a href="#" className="download-btn">
                    <FontAwesomeIcon icon={faFileArrowDown} className="icon" />
                    <span>Download Resume</span>
                </a>
                <a href="#" className="link contact-btn">
                    <FontAwesomeIcon icon={faPaperPlane} className="icon" />
                    <span>Contact Me</span>
                </a>
            </div>
        </section>
    );
}

export default HomePage;