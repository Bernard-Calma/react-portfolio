import { useState } from "react"
import Technology from "../components/Technology"

const Technologies = (props) => {
    const [technologies, setTechnologies] = useState(props.technologies)
    return(
        <div>
            <h4 className="technologiesTitle">Technologies</h4>
            {technologies.map(technology => 
                <Technology 
                    technology = {technology}
                />
            )}
        </div>
    )
}

export default Technologies