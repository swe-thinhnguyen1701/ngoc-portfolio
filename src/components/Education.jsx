function Education () {
    const EDUCATION_DATA = [
        {
            school: 'Marquette University',
            degree: 'Direct Entry MSN',
            date: '09/2023 - Present'
        },
        {
            school: 'UC Davis',
            degree: 'B.S. Neurobiology, Physiology and Behavior',
            date: '09/2019 - 06/2021'
        },
        {
            school: 'De Anza College',
            degree: 'A.S. Biological Science',
            date: '06/2016 - 06/2019'
        }
    ]
    return (
        <section className="education" id="education">
            <div className="education-title">
                <span>Education</span>
            </div>
            <div className="education-container">
                {EDUCATION_DATA.map((education, index) => {
                    return (
                        <div className="education-group" key={index}>
                            <div className="program">
                                <div className="school">
                                    {education.school}
                                </div>
                                <div className="degree">
                                    {education.degree}
                                </div>
                            </div>
                            <div className="date">
                                {education.date}
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    )
}

export default Education;