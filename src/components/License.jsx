import licCer1 from "../assets/lic-cer-1.webp";
import licCer2 from "../assets/lic-cer-2.webp";
import licCer3 from "../assets/lic-cer-3.webp";
import licCer4 from "../assets/lic-cer-4.webp";

function License() {
    const licCer = [licCer1, licCer2, licCer3, licCer4];
    return (
        <section className="lic-cer">
            <div className="title">
                <span>Licenses and Certificates</span>
            </div>
            <div className="lic-cer-container">
                {
                    licCer.map((item, index) => {
                        return (
                            <div className="lic-cer-item" key={index}>
                                <img src={item} alt="License and certificate image" />
                            </div>
                        );
                    }
                    )
                }
            </div>
        </section>
    )
}

export default License;