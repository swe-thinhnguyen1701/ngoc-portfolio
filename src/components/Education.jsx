import marquette from "../assets/marquette-uni.webp";
import davis from "../assets/davis-uni.webp";
import deAnza from "../assets/deanza-college.webp";

function Education() {
    const EDUCATION_DATA = [
        {
            school: 'Marquette University',
            degree: 'Direct Entry MSN',
            date: '09/2023 - Present',
            image: marquette
        },
        {
            school: 'UC Davis',
            degree: 'B.S. Neurobiology, Physiology and Behavior',
            date: '09/2019 - 06/2021',
            image: davis
        },
        {
            school: 'De Anza College',
            degree: 'A.S. Biological Science',
            date: '06/2016 - 06/2019',
            image: deAnza
        }
    ]
    return (
        <section className="education">
            <div className="title">
                <span>Education</span>
            </div>
            <ul className="list education-container">
                {EDUCATION_DATA.map((education, index) => {
                    return (
                        <li className="education-group" key={index}>
                            <div className={`icon-container icon-${index}`}>
                                <img className="icon" src={education.image} alt="school logo" />
                            </div>
                            <div className="program">
                                <div className="school">
                                    {education.school}
                                </div>
                                <div className="degree">
                                    {education.degree}
                                </div>
                                <div className="date">
                                    {education.date}
                                </div>
                            </div>
                        </li>
                    );
                })}
                <div className="time-line"></div>
            </ul>
        </section>
    )
}

export default Education;