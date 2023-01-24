import { useState } from "react"

const Technology = (props) => {
    const [technology] = useState(props.technology)
    return(
        <div className="technologyContainer">
            <img 
                className = "logo"
                src={technology.logo} 
                alt={technology.title} 
            /> 
            <p className="technologyTitle">{technology.title}</p>
        </div>
    )
}

export default Technology