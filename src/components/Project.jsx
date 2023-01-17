import { useState } from "react";

const Project = (props) => {
    const [project, setProject] = useState(props.project)
    return(
        <div className={props.index === 0? "carousel-item active relative float-left w-full" : "carousel-item relative float-left w-full"}>
        <img
            src={project.screenshot}
            className="projectImage block w-full"
            alt="Streamin Screenshot"
        />
        <div className=" projectSummary carousel-caption hidden md:block absolute text-center">
        <a class="websiteLink" href={project.websiteLink} target="_blank"><h5 className="sectionSubTitle text-xl">{project.name}</h5></a>
            <div className="projectDescription">
            <p>{project.summary}</p>
            Skills:
            <ul class="skillsList">
                {project.skills.map((skill, index) => <li className="projectSkills" key={index}>{skill}</li>)}
            </ul>
            </div>
        </div>
        </div>
    )
}

export default Project;