import { useState } from "react"
import School from "../components/School"
import Schools from "../modules/Schools"

const Education = () => {
    const [schools] = useState(Schools)
    return(
        <div className="education">
            {schools.map((school, index) => 
                <School 
                    school = {school}
                    index = {index}
                    key = {index}   
                />
            )}
        </div>
    )
}

export default Education