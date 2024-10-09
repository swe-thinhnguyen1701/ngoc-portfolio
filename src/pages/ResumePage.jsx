import Education from "../components/Education";
import Work from "../components/Work";
import License from "../components/License";

function Resume() { 
    return (
        <article className="resume">
            <Education />
            <Work />
            <License />
        </article>
    )
}

export default Resume;