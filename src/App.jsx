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
const App = () => {
    const [activeSection, setActiveSection] = useState(null)
    const {blur} = useSelector((state) => state.globalState)

    const myCanvas = document.createElement("canvas")
    myCanvas.style.display = "none"
    document.body.appendChild(myCanvas)

    return (
        <div className="App">
            <Header />
            <div id="floating-buttons">
                <a href="tel:3307494534" target="_blank" rel="noreferrer" className="floating-button phone">
                    <span className="icon-wrapper">{CommonIcons.call}</span>
                </a>
                <a href="https://github.com/kmarmet" target="_blank" rel="noreferrer" className="floating-button github">
                    <button>
                        <span className="icon-wrapper">{CommonIcons.github}</span>
                    </button>
                </a>
                <a href="https://www.linkedin.com/in/kmarmet/" target="_blank" rel="noreferrer" className="floating-button linkedin">
                    <button>
                        <span className="icon-wrapper">{CommonIcons.linkedInOutline}</span>
                    </button>
                </a>
                <a href="mailto:kevinmarmet@gmail.com" target="_blank" rel="noreferrer" className="floating-button email">
                    <button>
                        <span className="icon-wrapper">{CommonIcons.email}</span>
                    </button>
                </a>
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
        </div>
    )
}

export default App
