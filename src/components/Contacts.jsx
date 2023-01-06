import "./Contacts.css"

const Contacts = () => {
    return (
        <section class = "contacts title" id="sectionContacts">
            <h1>Contacts</h1>
            <div>
                <h2>Social Media</h2>
                <ul class="socialMedia">
                    <li class = "socialMediaItem"><a href="https://www.linkedin.com/in/bernard-calma/" target="_blank"><i class="fa-brands fa-linkedin"></i></a></li>
                    <li class = "socialMediaItem"><a href="https://github.com/Bernard-Calma" target="_blank"><i class="fa-brands fa-github"></i></a></li>
                    <li class = "socialMediaItem"><a href="https://twitter.com/ryznrd" target="_blank"><i class="fa-brands fa-twitter"></i></a></li>
                </ul>
                <h2>Contact Information</h2>
                <ul class="contactInformation">
                    <li>Location: Lancaster, CA</li>
                    <li>Email: nard.calma@gmail.com</li>
                </ul>
            </div>
        </section>
    )
}

export default Contacts