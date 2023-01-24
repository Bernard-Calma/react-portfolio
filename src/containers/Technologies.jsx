import { useState } from "react"
import Technology from "../components/Technology"

const Technologies = (props) => {
    const [technologies] = useState(props.technologies)
    return(
        <div>
            <h4 className="technologiesTitle">Technologies</h4>
            <div className="technologiesContainer">
                {technologies.map((technology, index) => 
                    <Technology 
                        technology = {technology}
                        index = {index}
                        key = {index}
                    />
                )}
            </div>
        </div>
    )
}

export default Technologies