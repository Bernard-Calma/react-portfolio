import Education from "./Education";
import "./Experience.css"

const Experience = (props) => {
    return(
        <section className = "experience title" id="sectionExperience">
        <h2 className="sectionTitle">Experience</h2>
        <h3 className="sectionSubTitle">Education </h3> 
        <Education 
            schools = {props.schools}
        />
    </section>
    )
}

export default Experience;