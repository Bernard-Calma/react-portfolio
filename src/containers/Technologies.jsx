import { useState } from "react"

const Technologies = (props) => {
    const [technologies, setTechnologies] = useState(props.technologies)
    return(
        <div>
            <h4 className="technologiesTitle">Technologies</h4>
            {technologies.map(technology => 
                <div className="technologyContainer">
                    <img className = "logo" src={technology.logo} alt={technology.title} /> 
                    <p className="technologyTitles">{technology.title}</p>
                </div>
            )}
        </div>
    )
}

export default Technologies