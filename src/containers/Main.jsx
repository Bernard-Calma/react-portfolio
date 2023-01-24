import About from "../components/About"
import Contacts from "../components/Contacts"
import Experience from "./Experience"
import Projects from "./Projects"
import Footer from "./Footer"


const Main = (props) => {
    return (
        <main>
            <About />
            <Experience 
                schools = {props.schools}
            />
            <Projects 
                websiteProjects = {props.websiteProjects}
            />
            <Contacts />
            <Footer />
            <script src="../scripts/animation.js" type="text/javascript"></script>
        </main>
    )
}

export default Main