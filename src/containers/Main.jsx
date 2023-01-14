import About from "../components/About"
import Contacts from "../components/Contacts"
import Experience from "../components/Experience"
import Headers from "../components/Header"
import Projects from "../components/Projects"
import Footer from "./Footer"

const Main = () => {
    return (
        <main>
            <Headers />
            <About />
            <Experience />
            <Projects />
            <Contacts />
            <Footer />
        </main>
    )
}

export default Main