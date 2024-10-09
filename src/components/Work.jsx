function Work() {
    const WORK_DATA = [
        {
            company: "Octapharma Plasma Center",
            address: "Kenosha, WI",
            position: "Phlebotomist",
            duration: "Aug 2023 - Present",
            description: [
                "Perform and process over 1000 venipunctures.",
                "Monitor donors for reaction during plasma donations.",
                "Operate automated plasmapheresis machines."
            ],
            hours: "1,000+"
        },
        {
            company: "Quest Diagnostic",
            address: "San Jose, CA",
            position: "Rep, Phlebotomist I",
            duration: "Nove 2022 - May 2023",
            description: [
                "Collect and process over 1000 venipuncture speciments.",
                "Perform daily procedure, including drug screening and biometric screening, for over 400 patients."
            ],
            hours: "600+"
        },
        {
            company: "Minh Quan Huynh M.D.",
            address: "San Jose, CA",
            position: "Medical Receptionist",
            duration: "Aug 2018 - Jun 2023",
            description: [
                "Handle over 300 calls a day appropriately and efficently.",
                "Schedule appointments and input patient data.",
                "Process and manage health insurance claims and payments."
            ],
            hours: "3,000+"
        },
        {
            company: "El Camino Hospital",
            address: "Mountain View, CA",
            position: "ECG Technician Externship",
            duration: "Aug 2022 - Sep 2022",
            description: [
                "Run diagnostic tests on over 300 in and outpatients using an electrocardiogram machine.",
                "Analyzed and identified abnormal rhythms on ECG reports."
            ],
            hours: "160+"
        },
        {
            company: "Palo Alto Medical Foundation",
            address: "Mountain View, CA",
            position: "Phlebotomist Externship",
            duration: "Jul 2022 - Aug 2022",
            description: [
                "Performed over 400 successful venipunctures.",
                "Responding to STAT orders and prioritizing lab tests."
            ],
            hours: "160+"
        },
        {
            company: "VN CARES Student Run Clinic",
            address: "Sacramento, CA",
            position: "Patient Advocate",
            duration: "Jan 2020 - Jun 2021",
            description: [
                "Took vital signs and assisted patients.",
                "Facilitated staff and patient communication by translating for those with language barriers.",
                "Promoted cancer awareness for the local underserved community."
            ],
            hours: "60+"
        }
    ]

    return (
        <section className="work">
            <div className="title">
                <span>Experience</span>
            </div>
            {
                WORK_DATA.map((work, index) => {
                    return (
                        <div className="work-group" key={index}>
                            <div className="job-info">
                                <div className="job-title">
                                    {work.position}
                                </div>
                                <div className="hours">
                                    ({work.hours} hours)
                                </div>
                            </div>
                            <div className="compnay-info-group">
                                <div className="company-info1">
                                    {work.company}
                                </div>
                                <div className="company-info2">
                                    <div className="duration">
                                        {work.duration}
                                    </div>
                                    <span>|</span>
                                    <div className="address">
                                        {work.address}
                                    </div>
                                </div>
                            </div>
                            <div className="description">
                                <ul>
                                    {work.description.map((item, index) => {
                                        return <li key={index}>{item}</li>
                                    })}
                                </ul>
                            </div>

                        </div>
                    )
                })
            }
        </section>
    )
}

export default Work;