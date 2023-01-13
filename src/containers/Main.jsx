import About from "../components/About"
import Contacts from "../components/Contacts"
import Experience from "../components/Experience"
import Headers from "../components/Header"
import Projects from "../components/Projects"

const Main = () => {
    return (
        <main>
            <Headers />
            <About />
            <Experience />
            <Projects />
            <Contacts />
        </main>
    )
}

export default Main