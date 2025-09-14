import emailjs from "@emailjs/browser"
import React, {useState} from "react"
import {useSelector} from "react-redux"
import CommonIcons from "./components/commonIcons"
import Header from "./components/header"
import Menu from "./components/menu"
import About from "./components/sections/about"
import Education from "./components/sections/education"
import Portfolio from "./components/sections/portfolio"
import Skills from "./components/sections/skills"
import WorkHistory from "./components/sections/workHistory"
import Modal from "./components/shared/modal"
import Spacer from "./components/shared/spacer"
const App = () => {
    const [activeSection, setActiveSection] = useState(null)
    const [showEmailModal, setShowEmailModal] = useState(false)
    const [feedbackMessage, setFeedbackMessage] = useState("")
    const {blur} = useSelector((state) => state.globalState)

    const myCanvas = document.createElement("canvas")
    myCanvas.style.display = "none"
    document.body.appendChild(myCanvas)

    // Init EmailJS
    emailjs.init({
        // eslint-disable-next-line no-undef
        publicKey: import.meta.env.VITE_EMAILJS_API_KEY,
        // Do not allow headless browsers
        blockHeadless: true,
        blockList: {
            // Block the suspended emails
            list: [],
            // The variable Contains the email address
            // watchVariable: 'userEmail',
        },
        limitRate: {
            // Set the limit rate for the application
            id: "app",
            // Allow 1 request per 10s
            throttle: 5000,
        },
    })

    const SendFeedbackEmail = () => {
        emailjs
            .send(
                "Gmail",
                "resumeFeedback",
                {
                    from_name: "kmarmet1@gmail.com",
                    user_email: "kmarmet1@gmail.com",
                    message: feedbackMessage,
                },
                import.meta.env.VITE_EMAILJS_USER_ID
            )
            .then(() => setShowEmailModal(false))
            .catch((err) => console.log(err))
    }

    return (
        <div className="App">
            <Header />
            <Modal show={showEmailModal} scopedClass="feedback-modal" hide={() => setShowEmailModal(false)}>
                <div id="feedback-form">
                    <h2>Feedback</h2>
                    <p className="feedback-subtitle">
                        Thank you for taking the time to view my resume! After reviewing it, if you find any shortcomings or areas for improvement
                        from my knowledge, technical skills, or experience, please let me know.
                    </p>
                    <Spacer height={10} />
                    <p className="feedback-subtitle">
                        I consider learning to be a continuous process that plays a critical role in the development journey.
                    </p>
                    <Spacer height={10} />
                    <p className="feedback-subtitle">Lastly, any and all feedback would be greatly appreciated.</p>
                    <Spacer height={10} />
                    <textarea placeholder="Feedback..." onChange={(e) => setFeedbackMessage(e.target.value)} />
                    <p className="yellow disclaimer">
                        As you do not have to enter your email address, this feedback is entirely <span className="emphasize">ANONYMOUS</span>
                    </p>
                    <button onClick={SendFeedbackEmail}>Send {CommonIcons.paperAirplane}</button>
                </div>
            </Modal>
            <div id="floating-buttons">
                <div className="button-wrapper">
                    <a href="tel:3307494534" className="floating-button phone">
                        <span className="icon-wrapper">{CommonIcons.call}</span>
                    </a>
                    <span className="text">Let&apos;s Chat</span>
                </div>
                <div className="button-wrapper">
                    <a href="https://github.com/kmarmet" target="_blank" rel="noreferrer" className="floating-button github">
                        <span className="icon-wrapper">{CommonIcons.github}</span>
                    </a>
                    <span className="text">GitHub</span>
                </div>
                <div className="button-wrapper">
                    <a href="https://www.linkedin.com/in/kmarmet/" target="_blank" rel="noreferrer" className="floating-button linkedin">
                        <span className="icon-wrapper">{CommonIcons.linkedInOutline}</span>
                    </a>
                    <span className="text">LinkedIn</span>
                </div>
                <div className="button-wrapper">
                    <a href="mailto:kmarmet1@gmail.com" target="_blank" rel="noreferrer" className="floating-button email">
                        <span className="icon-wrapper">{CommonIcons.email}</span>
                    </a>
                    <span className="text">Email Me</span>
                </div>
                <div className="button-wrapper" onClick={() => setShowEmailModal(true)}>
                    <div className="floating-button pen">
                        <span className="icon-wrapper pen">{CommonIcons.pen}</span>
                    </div>
                    <span className="text">Feedback</span>
                </div>
            </div>
            <div id="blur" className={blur ? "blur-in" : "blur-out"}>
                <div className="drops">
                    <div className="drop"></div>
                    <div className="drop"></div>
                    <div className="drop"></div>
                    <div className="drop"></div>
                    <div className="drop"></div>
                    <div className="drop"></div>
                    <div className="drop"></div>
                    <div className="drop"></div>
                    <div className="drop"></div>
                    <div className="drop"></div>
                    <div className="drop"></div>
                    <div className="drop"></div>
                    <div className="drop"></div>
                    <div className="drop"></div>
                    <div className="drop"></div>
                    <div className="drop"></div>
                    <div className="drop"></div>
                    <div className="drop"></div>
                    <div className="drop"></div>
                    <div className="drop"></div>
                    <div className="drop"></div>
                    <div className="drop"></div>
                    <div className="drop"></div>
                    <div className="drop"></div>
                    <div className="drop"></div>
                    <div className="drop"></div>
                    <div className="drop"></div>
                    <div className="drop"></div>
                    <div className="drop"></div>
                    <div className="drop"></div>
                    <div className="drop"></div>
                    <div className="drop"></div>
                    <div className="drop"></div>
                    <div className="drop"></div>
                    <div className="drop"></div>
                    <div className="drop"></div>
                    <div className="drop"></div>
                    <div className="drop"></div>
                    <div className="drop"></div>
                    <div className="drop"></div>
                    <div className="drop"></div>
                    <div className="drop"></div>
                    <div className="drop"></div>
                    <div className="drop"></div>
                    <div className="drop"></div>
                    <div className="drop"></div>
                    <div className="drop"></div>
                    <div className="drop"></div>
                    <div className="drop"></div>
                    <div className="drop"></div>
                    <div className="drop"></div>
                    <div className="drop"></div>
                    <div className="drop"></div>
                    <div className="drop"></div>
                    <div className="drop"></div>
                    <div className="drop"></div>
                    <div className="drop"></div>
                    <div className="drop"></div>
                    <div className="drop"></div>
                    <div className="drop"></div>
                </div>
            </div>
            <div className={`skeleton${blur ? " no-fade" : ""}`}>
                <Menu activeSection={activeSection} setActiveSection={setActiveSection} />
                <div id="sections">
                    <About />
                    <Skills />
                    <WorkHistory />
                    <Education />
                    <Portfolio />
                </div>
            </div>
            <div id="site-info">hey</div>
        </div>
    )
}

export default App
