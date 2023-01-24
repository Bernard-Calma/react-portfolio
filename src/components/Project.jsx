import { useState } from "react";

const Project = (props) => {
    const [project] = useState(props.project)
    return(
        <div className={props.index === 0? "carousel-item active relative float-left w-full" : "carousel-item relative float-left w-full"}>
        <a className="websiteLink" href={project.websiteLink} target="_blank" rel="noreferrer"><h5 className="text-xl projectName">{project.name}</h5></a>
        <img
            src={project.screenshot}
            className="projectImage block w-full"
            alt="Streamin Screenshot"
        />
        <div className=" projectSummary carousel-caption md:block absolute text-center">
            <div className="projectDescription">
            <p>{project.summary}</p>
            Skills:
            <ul className="skillsList">
                {project.skills?.map((skill, index) => <li className="projectSkills" key={index}>{skill}</li>)}
            </ul>
            </div>
        </div>
        </div>
    )
}

export default Project;