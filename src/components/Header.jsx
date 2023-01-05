import React, {Component} from "react"

//Style
import "./Header.css"
import NavBar from "./NavBar"

export default class Headers extends Component {
    render(){
        return(
            <header>
                <NavBar />
                {/* <img src="images/TitleLogo.png" alt="Logo"/> */}
                
                {/* <ul className = "ulNavigation">
                    <li>Home</li>
                    <li>Experience</li>
                    <li>Resume</li>
                    <li>Projects</li>
                    <li>Contacts</li>
                </ul> */}
            </header>
        )
    }
}