import React, {useState} from "react"
import {useSelector} from "react-redux"
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
