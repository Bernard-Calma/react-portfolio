import About from "../components/About"
import Contacts from "../components/Contacts"
import Experience from "../components/Experience"
import Projects from "../components/Projects"
import Footer from "./Footer"


const Main = () => {
    return (
        <main>
            <About />
            <Experience />
            <Projects />
            <Contacts />
            <Footer />
            <script src="../scripts/animation.js" type="text/javascript"></script>
        </main>
    )
}

export default Main