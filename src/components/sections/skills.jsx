import React, {useEffect} from "react"
import {useSelector} from "react-redux"
import CommonIcons from "../commonIcons"
import MenuItems from "../constants/menuItems"
import Collapsible from "../shared/collapsible"
import CollapsibleTitle from "../shared/collapsibleTitle"
import Modal from "../shared/modal"
import Spacer from "../shared/spacer"
import YearRoller from "../shared/yearRoller"

const SkillsCollection = {
    dotnet: ".NET",
    html: "HTML",
    js: "JavaScript",
    react: "React",
    sass: "Sass",
    csharp: "csharp",
    sql: "SQL",
    typescript: "TypeScript",
    node: "Node",
}

const Skills = () => {
    const activeSection = useSelector((state) => state.globalState.activeSection)
    const [activeSkill, setActiveSkill] = React.useState("")
    const [showLanguages, setShowLanguages] = React.useState(false)
    const [languageTimeoutID, setLanguageTimeoutID] = React.useState(null)
    const [showNodeBackendDetails, setShowNodeBackendDetails] = React.useState(false)

    const RemoveActiveSkillClasses = () => {
        if (languageTimeoutID) {
            clearTimeout(languageTimeoutID)
        }
        const skills = document.querySelectorAll(".skill")
        skills.forEach((skill) => skill.classList.remove("active"))
    }

    const AddActiveSkillClasses = () => {
        const skills = document.querySelectorAll(".skill")
        for (let counter = 0; counter < skills.length; counter++) {
            const timeoutID = setTimeout(() => {
                skills[counter].classList.add("active")
            }, counter * 200)
            setLanguageTimeoutID(timeoutID)
        }
    }

    useEffect(() => {
        if (activeSection === MenuItems.skills) {
            if (!showLanguages) {
                RemoveActiveSkillClasses()
            } else {
                AddActiveSkillClasses()
            }
        } else {
            RemoveActiveSkillClasses()
        }
    }, [activeSection, showLanguages, activeSkill])

    return (
        <>
            <Modal scopedClass={activeSkill?.toLowerCase()} hide={() => setActiveSkill("")} show={activeSkill !== ""}>
                {/* JS */}
                {activeSkill === SkillsCollection.js && (
                    <>
                        <p className="language-name">
                            JavaScript <span className="icon-wrapper">{CommonIcons.js}</span>
                        </p>
                        <Spacer height={10} />
                        <p className="body">
                            I have been developing with JavaScript since I landed my first junior developer position out of college in 2016. Since
                            then, I have had the opportunity to work on a wide range of projects using JavaScript and its many frameworks and
                            libraries.
                        </p>
                        <Spacer height={25} />
                        <p className="rating row">
                            <span className="label">Proficiency</span>
                            <span>
                                {CommonIcons.starFilled} {CommonIcons.starFilled} {CommonIcons.starFilled} {CommonIcons.starFilled}{" "}
                                {CommonIcons.starHalf}
                            </span>
                        </p>
                        <p className="row">
                            <span className="label">Years of Experience</span>
                            <YearRoller
                                id="years-experience"
                                maxYear={9}
                                shouldRoll={activeSkill === SkillsCollection.js}
                                delay={1000}
                                scopedClass="js"
                            />
                        </p>
                        <Spacer height={15} />
                        <p className="subtitle">Hands On Experience</p>
                        <div className="bubbles">
                            <span className="bubble react">{CommonIcons.react} React</span>
                            <span className="bubble coffeescript">{CommonIcons.coffeescript} CoffeeScript</span>
                            <span className="bubble jquery">{CommonIcons.jquery} jQuery</span>
                            <span className="bubble lodash">{CommonIcons.lodash} Lodash</span>
                            <span className="bubble mammoth">{CommonIcons.mammoth} Mammoth</span>
                            <span className="bubble git">{CommonIcons.git} Tesseract</span>
                            <span className="bubble jira">{CommonIcons.jira} MomentJS</span>
                            <span className="bubble telerik">{CommonIcons.telerik} Telerik UI</span>
                        </div>
                    </>
                )}

                {/* React */}
                {activeSkill === SkillsCollection.react && (
                    <>
                        <p className="language-name">
                            React <span className="icon-wrapper">{CommonIcons.react}</span>
                        </p>
                        <Spacer height={10} />
                        <p className="body">
                            If I had to pick one framework, it would be React. It never feels like work when I get to bring a product to life via
                            React. I am continually learning new things about React and its ecosystem in an effort to optimize performance and deliver
                            the best possible user experience.
                        </p>
                        <Spacer height={15} />
                        <p className="rating row">
                            <span className="label">Proficiency</span>
                            <span>
                                {CommonIcons.starFilled} {CommonIcons.starFilled} {CommonIcons.starFilled} {CommonIcons.starFilled}
                                {CommonIcons.starHalf}
                            </span>
                        </p>
                        <p className="row">
                            <span className="label">Years of Experience</span>
                            <YearRoller
                                id="years-experience"
                                maxYear={9}
                                shouldRoll={activeSkill === SkillsCollection.react}
                                delay={1000}
                                scopedClass="react"
                            />
                        </p>
                        <Spacer height={15} />
                        <p className="subtitle">Hands On Experience</p>
                        <div className="bubbles">
                            <span className="bubble router">React Router</span>
                            <span className="bubble native">React Native</span>
                            <span className="bubble redux">Redux</span>
                            <span className="bubble context">Context</span>
                            <span className="bubble hooks">Custom Hooks</span>
                            <span className="bubble icons">React Icons</span>
                            <span className="bubble ui">Material UI</span>
                        </div>
                    </>
                )}

                {/* HTML */}
                {activeSkill === SkillsCollection.html && (
                    <>
                        <p className="language-name">
                            HTML <span className="icon-wrapper">{CommonIcons.html}</span>
                        </p>
                        <Spacer height={10} />
                        <p className="body">
                            HTML is HTML. The foundation of the web. As with all things in development, there is always more to learn. However, I have
                            a solid understanding of the core elements and attributes and the ability to learn new ones as needed.
                        </p>
                        <Spacer height={15} />
                        <p className="rating row">
                            <span className="label">Proficiency</span>
                            <span>
                                {CommonIcons.starFilled} {CommonIcons.starFilled} {CommonIcons.starFilled} {CommonIcons.starFilled}
                                {CommonIcons.starFilled}
                            </span>
                        </p>
                        <p className="row">
                            <span className="label">Years of Experience</span>
                            <YearRoller
                                id="years-experience"
                                maxYear={9}
                                shouldRoll={activeSkill === SkillsCollection.html}
                                delay={1000}
                                scopedClass="html"
                            />
                        </p>
                    </>
                )}

                {/* SASS */}
                {activeSkill === SkillsCollection.sass && (
                    <>
                        <p className="language-name">
                            SASS/SCSS <span className="icon-wrapper">{CommonIcons.sass}</span>
                        </p>
                        <Spacer height={10} />
                        <p className="body">
                            I haven&apos;t touched traditional CSS in a long time. Not because I can&apos;t, but because I value the ease-of-use that
                            SASS/SCSS provides.
                        </p>
                        <Spacer height={15} />
                        <p className="rating row">
                            <span className="label">Proficiency</span>
                            <span>
                                {CommonIcons.starFilled} {CommonIcons.starFilled} {CommonIcons.starFilled} {CommonIcons.starFilled}
                                {CommonIcons.starHalf}
                            </span>
                        </p>
                        <p className="row">
                            <span className="label">Years of Experience</span>
                            <YearRoller
                                id="years-experience"
                                maxYear={7}
                                shouldRoll={activeSkill === SkillsCollection.sass}
                                delay={1000}
                                scopedClass="sass"
                            />
                        </p>
                        <Spacer height={15} />
                        <p className="subtitle">My Favorite Features</p>
                        <div className="bubbles">
                            <span className="bubble">Nested Rules</span>
                            <span className="bubble">Variables</span>
                            <span className="bubble">Mixins</span>
                            <span className="bubble">Functions</span>
                            <span className="bubble">Import/Export</span>
                            <span className="bubble">Easy Code Splitting</span>
                        </div>
                    </>
                )}

                {/* C# */}
                {activeSkill === SkillsCollection.csharp && (
                    <>
                        <p className="language-name">
                            C# <span className="icon-wrapper">{CommonIcons.csharp}</span>
                        </p>
                        <Spacer height={10} />
                        <p className="body">C# is always evolving, but I consistently brush up on my skills by building </p>
                        <Spacer height={15} />
                        <p className="rating row">
                            <span className="label">Proficiency</span>
                            <span>
                                {CommonIcons.starFilled} {CommonIcons.starFilled} {CommonIcons.starFilled} {CommonIcons.starHalf}
                                {CommonIcons.starOutline}
                            </span>
                        </p>
                        <p className="row">
                            <span className="label">Years of Experience</span>
                            <YearRoller
                                id="years-experience"
                                maxYear={7}
                                shouldRoll={activeSkill === SkillsCollection.csharp}
                                delay={1000}
                                scopedClass="csharp"
                            />
                        </p>
                        <Spacer height={15} />
                        <p className="subtitle">My Favorite Features</p>
                        <div className="bubbles">
                            <span className="bubble">Strongly Typed</span>
                            <span className="bubble">OOP</span>
                            <span className="bubble">Robust Community & Support</span>
                            <span className="bubble">Access to All .NET Libraries</span>
                            <span className="bubble">LINQ</span>
                            <span className="bubble">Web API</span>
                        </div>
                    </>
                )}
                {/* SQL */}
                {activeSkill === SkillsCollection.sql && (
                    <>
                        <p className="language-name">
                            SQL <span className="icon-wrapper">{CommonIcons.sql}</span>
                        </p>
                        <Spacer height={10} />
                        <p className="body">
                            I have experience with MySQL, Microsoft SQL Server, and SQLite. I also have experience with NoSQL databases like SOLR and
                            Firebase Realtime Database. Database related tasks have been intermittent, but I am consistently working to improve my
                            overall SQL abilities to become more proficient in stored procedures, triggers, and complex queries.
                        </p>
                        <Spacer height={15} />
                        <p className="rating row">
                            <span className="label">Proficiency</span>
                            <span>
                                {CommonIcons.starFilled} {CommonIcons.starFilled} {CommonIcons.starFilled} {CommonIcons.starOutline}
                                {CommonIcons.starOutline}
                            </span>
                        </p>
                        <p className="row">
                            <span className="label">Years of Experience</span>
                            <YearRoller
                                id="years-experience"
                                maxYear={8}
                                shouldRoll={activeSkill === SkillsCollection.sql}
                                delay={1000}
                                scopedClass="sql"
                            />
                        </p>
                    </>
                )}
                {/* TYPESCRIPT */}
                {activeSkill === SkillsCollection.typescript && (
                    <>
                        <p className="language-name">
                            TypeScript <span className="icon-wrapper">{CommonIcons.typescript}</span>
                        </p>
                        <Spacer height={10} />
                        <p className="body">
                            TypeScript makes JavaScript more robust and reliable and more importantly, less error-prone. I have an app in the iOS App
                            Store that was fully built with TypeScript and the development experience was enjoyable!
                        </p>
                        <Spacer height={15} />
                        <p className="rating row">
                            <span className="label">Proficiency</span>
                            <span>
                                {CommonIcons.starFilled} {CommonIcons.starFilled} {CommonIcons.starFilled} {CommonIcons.starHalf}
                                {CommonIcons.starOutline}
                            </span>
                        </p>
                        <p className="row">
                            <span className="label">Years of Experience</span>
                            <YearRoller
                                id="years-experience"
                                maxYear={4}
                                shouldRoll={activeSkill === SkillsCollection.typescript}
                                delay={1000}
                                scopedClass="typescript"
                            />
                        </p>
                        <Spacer height={15} />
                        <p className="subtitle">My Favorite Features</p>
                        <div className="bubbles">
                            <span className="bubble">Statically Typed</span>
                            <span className="bubble">Code Reliability</span>
                            <span className="bubble">Robust Community</span>
                            <span className="bubble">Integration with JavaScript</span>
                            <span className="bubble">TSX</span>
                        </div>
                    </>
                )}
                {/* NODEJS */}
                {activeSkill === SkillsCollection.node && (
                    <>
                        <p className="language-name">
                            Node.js <span className="icon-wrapper">{CommonIcons.node}</span>
                        </p>
                        <Spacer height={10} />
                        <p className="body">
                            I have had the opportunity to work with Node.js on a few projects. As a developer that started primarily on the frontend,
                            I find it refreshing to be able to build a backend with Node.js.
                        </p>
                        <Spacer height={15} />
                        <p>
                            I have also developed and actively use an app (personal use) that has a dedicated, always-on reminder service built with
                            Node.js.
                        </p>
                        <Spacer height={10} />
                        <CollapsibleTitle
                            toggleState={showNodeBackendDetails}
                            onClick={() => setShowNodeBackendDetails(!showNodeBackendDetails)}
                            titleText={"Aspects of Node.js backend"}
                            scopedClass="node"
                        />
                        <Collapsible scopedClass="node" toggleState={showNodeBackendDetails}>
                            <p className="green">The Node.js backend is responsible for:</p>
                            <Spacer height={5} />
                            <ul>
                                <li>Constant uptime (always online) to check for reminders to send at regular intervals.</li>
                                <li>Getting users, their calendar events and finally their reminders for each event.</li>
                                <li>
                                    User information, calendar events and reminders are stored in{" "}
                                    <span className="emphasize">Firebase Realtime Database</span>.
                                </li>
                                <li>
                                    Sending reminder web push notifications via <span className="emphasize">OneSignal</span>.
                                </li>
                                <li>Caching users and events in memory to reduce calls to Firebase and improve performance.</li>
                            </ul>
                        </Collapsible>
                        <Spacer height={15} />
                        <p className="rating row">
                            <span className="label">Proficiency</span>
                            <span>
                                {CommonIcons.starFilled} {CommonIcons.starFilled} {CommonIcons.starFilled} {CommonIcons.starOutline}
                                {CommonIcons.starOutline}
                            </span>
                        </p>
                        <p className="row">
                            <span className="label">Years of Experience</span>
                            <YearRoller
                                id="years-experience"
                                maxYear={2}
                                shouldRoll={activeSkill === SkillsCollection.node}
                                delay={1000}
                                scopedClass="node"
                            />
                        </p>
                    </>
                )}
            </Modal>
            <div id="skills-section" className={`section${activeSection === MenuItems.skills ? " active" : ""}`}>
                <div className="section-content">
                    <CollapsibleTitle titleText="Tech. Stack" toggleState={showLanguages} onClick={() => setShowLanguages(!showLanguages)} />
                    <Collapsible toggleState={showLanguages}>
                        <div className="content">
                            <div id="skills">
                                {/* HTML */}
                                <div
                                    className={`skill html${activeSkill === SkillsCollection.html ? " active" : ""}`}
                                    onClick={() => setActiveSkill(SkillsCollection.html)}>
                                    <span className="icon-wrapper main"> {CommonIcons.html}</span>
                                    <span className="icon-wrapper expand-icon"> {CommonIcons.expand}</span>
                                </div>
                                {/* JS */}
                                <div
                                    className={`skill js${activeSkill === SkillsCollection.js ? " active" : ""}`}
                                    onClick={() => setActiveSkill(SkillsCollection.js)}>
                                    <span className="icon-wrapper main"> {CommonIcons.js}</span>
                                    <span className="icon-wrapper expand-icon"> {CommonIcons.expand}</span>
                                </div>
                                {/* React */}
                                <div
                                    className={`skill react${activeSkill === SkillsCollection.react ? " active" : ""}`}
                                    onClick={() => setActiveSkill(SkillsCollection.react)}>
                                    <span className="icon-wrapper main"> {CommonIcons.react}</span>
                                    <span className="icon-wrapper expand-icon"> {CommonIcons.expand}</span>
                                </div>
                                {/* SASS */}
                                <div
                                    className={`skill sass${activeSkill === SkillsCollection.sass ? " active" : ""}`}
                                    onClick={() => setActiveSkill(SkillsCollection.sass)}>
                                    <span className="icon-wrapper main"> {CommonIcons.sass}</span>
                                    <span className="icon-wrapper expand-icon"> {CommonIcons.expand}</span>
                                </div>
                                {/* C# */}
                                <div
                                    className={`skill csharp${activeSkill === SkillsCollection.csharp ? " active" : ""}`}
                                    onClick={() => setActiveSkill(SkillsCollection.csharp)}>
                                    <span className="icon-wrapper main"> {CommonIcons.csharp}</span>
                                    <span className="icon-wrapper expand-icon"> {CommonIcons.expand}</span>
                                </div>
                                {/* SQL */}
                                <div
                                    className={`skill sql${activeSkill === SkillsCollection.sql ? " active" : ""}`}
                                    onClick={() => setActiveSkill(SkillsCollection.sql)}>
                                    <span className="icon-wrapper main"> {CommonIcons.sql}</span>
                                    <span className="icon-wrapper expand-icon"> {CommonIcons.expand}</span>
                                </div>
                                {/* TypeScript */}
                                <div
                                    className={`skill typescript${activeSkill === SkillsCollection.typescript ? " active" : ""}`}
                                    onClick={() => setActiveSkill(SkillsCollection.typescript)}>
                                    <span className="icon-wrapper main"> {CommonIcons.typescript}</span>
                                    <span className="icon-wrapper expand-icon"> {CommonIcons.expand}</span>
                                </div>
                                {/* Node.js */}
                                <div
                                    className={`skill node${activeSkill === SkillsCollection.node ? " active" : ""}`}
                                    onClick={() => setActiveSkill(SkillsCollection.node)}>
                                    <span className="icon-wrapper main"> {CommonIcons.node}</span>
                                    <span className="icon-wrapper expand-icon"> {CommonIcons.expand}</span>
                                </div>
                            </div>
                        </div>
                    </Collapsible>
                    <Spacer height={20} />

                    {/* Workflow */}
                    <h2 className="tech-section-title">Workflow</h2>
                    <Spacer height={5} />

                    {/* Agile Methodology */}
                    <h2 className="tech-section-subtitle">Agile Methodology</h2>
                    <Spacer height={10} />
                    <div className="bubbles">
                        <span className="bubble">Scrum Principles</span>
                        <span className="bubble">Daily Scrums/Standups</span>
                        <span className="bubble">Sprint Planning</span>
                        <span className="bubble">After Action Reviews</span>
                        <span className="bubble">Sprint Retrospectives</span>
                    </div>
                    <Spacer height={20} />

                    {/* Tools */}
                    <h2 className="tech-section-subtitle">Tooling</h2>
                    <Spacer height={10} />
                    <div className="bubbles">
                        <span className="bubble">Git</span>
                        <span className="bubble">GitHub</span>
                        <span className="bubble">BitBucket</span>
                        <span className="bubble">ChatGPT</span>
                        <span className="bubble">Confluence</span>
                        <span className="bubble">Sentry.IO</span>
                        <span className="bubble">SSMS</span>
                        <span className="bubble">Postman</span>
                        <span className="bubble">NPM/Nuget</span>
                        <span className="bubble">TFS</span>
                        <span className="bubble">Vite</span>
                        <span className="bubble">Parcel</span>
                        <span className="bubble">RDP</span>
                    </div>
                    <Spacer height={20} />

                    {/* TOOLS */}
                    <h2 className="tech-section-subtitle">APIs</h2>
                    <Spacer height={10} />
                    <div className="bubbles">
                        <span className="bubble">OneSignal</span>
                        <span className="bubble">Firebase</span>
                        <span className="bubble">Sapler</span>
                        <span className="bubble">ManyAPIs</span>
                        <span className="bubble">OCR</span>
                        <span className="bubble">ipify</span>
                    </div>
                    <Spacer height={20} />

                    {/* DATABASES */}
                    <h2 className="tech-section-subtitle">Databases</h2>
                    <Spacer height={10} />
                    <div className="bubbles">
                        <span className="bubble">SQL Server</span>
                        <span className="bubble">MySQL</span>
                        <span className="bubble">Firebase Realtime DB</span>
                        <span className="bubble">Firestore</span>
                        <span className="bubble">SOLR</span>
                    </div>
                    <Spacer height={20} />

                    {/* PWA */}
                    <h2 className="tech-section-title">Progressive Web App (PWA)</h2>
                    <Spacer height={10} />
                    <div className="bubbles">
                        <span className="bubble">Workbox Module</span>
                        <span className="bubble">Service Workers</span>
                        <span className="bubble">Manifest Configuration</span>
                        <span className="bubble">Push Notifications</span>
                        <span className="bubble">Offline Support</span>
                        <span className="bubble">Installable</span>
                        <span className="bubble">SSL</span>
                        <span className="bubble">Splashscreen Creation</span>
                    </div>
                    <Spacer height={20} />

                    {/* PROJECT MANAGEMENT */}
                    <h2 className="tech-section-subtitle">Project Management</h2>
                    <Spacer height={10} />
                    <div className="bubbles">
                        <span className="bubble">Jira</span>
                        <span className="bubble">Trello</span>
                        <span className="bubble">Monday.com</span>
                        <span className="bubble">Asana</span>
                        <span className="bubble">ClickUp</span>
                    </div>
                    <Spacer height={20} />

                    {/* COMMUNICATION */}
                    <h2 className="tech-section-subtitle">Communication</h2>
                    <Spacer height={10} />
                    <div className="bubbles">
                        <span className="bubble">Slack</span>
                        <span className="bubble">Zoom</span>
                        <span className="bubble">Microsoft Teams</span>
                        <span className="bubble">GoToMeeting</span>
                    </div>
                    <Spacer height={30} />

                    {/* ICONOGRAPHY */}
                    <h2 className="tech-section-title">Iconography</h2>
                    <Spacer height={10} />
                    <div className="bubbles">
                        <span className="bubble">FontAwesome</span>
                        <span className="bubble">Material Icons</span>
                        <span className="bubble">IONICONS</span>
                        <span className="bubble">React Icons</span>
                    </div>
                    <Spacer height={30} />

                    {/* INFRASTRUCTURE/SERVER */}
                    <h2 className="tech-section-title">Infrastructure/Server/Cloud/Miscellaneous</h2>
                    <Spacer height={10} />
                    <div className="bubbles">
                        <span className="bubble">IIS</span>
                        <span className="bubble">AWS</span>
                        <span className="bubble">Azure</span>
                        <span className="bubble">Windows Server</span>
                        <span className="bubble">Windows Service Deployement</span>
                        <span className="bubble">Virtual Private Server</span>
                    </div>
                    <Spacer height={30} />

                    {/* EDITORS */}
                    <h2 className="tech-section-title">Editors</h2>
                    <Spacer height={10} />
                    <div className="bubbles">
                        <span className="bubble">Visual Studio</span>
                        <span className="bubble">Visual Studio Code</span>
                        <span className="bubble">Sublime Text</span>
                        <span className="bubble">Brackets</span>
                        <span className="bubble">Windsurf</span>
                        <span className="bubble">Atom</span>
                        <span className="bubble">WebStorm</span>
                    </div>
                    <Spacer height={30} />
                </div>
            </div>
        </>
    )
}

export default Skills
