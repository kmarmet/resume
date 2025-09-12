import React, {useEffect, useState} from "react"
import {useDispatch, useSelector} from "react-redux"
import {setActiveSection} from "../../redux/globalState"
import CommonIcons from "../commonIcons"
import ImageUrls from "../constants/imageUrls"
import MenuItems from "../constants/menuItems"
import MyConfetti from "../shared/myConfetti"
import Spacer from "../shared/spacer"
import YearRoller from "../shared/yearRoller"

const About = () => {
    const dispatch = useDispatch()
    const activeSection = useSelector((state) => state.globalState.activeSection)
    const [recuiterName, setRecuiterName] = useState("")
    const [executeYearRoller, setExecuteYearRoller] = useState(false)

    const UppercaseFirstLetter = (input) => {
        if (!input) return input
        let words = input?.toString()
        if (words && words !== undefined) {
            words = words?.split(" ")
            words = words?.filter((x) => x.length > 0)
            words = words?.map((word) => word[0].toUpperCase() + word.substr(1))
            words = words?.join(" ")
        }
        return words || ""
    }

    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search)

        const recuiterName = UppercaseFirstLetter(urlParams.get("name"))
        if (recuiterName) {
            setRecuiterName(recuiterName)
        }
        dispatch(setActiveSection(MenuItems.about))
        MyConfetti.fire({position: {x: 2, y: 200}, duration: 5000})
    }, [])

    useEffect(() => {
        if (activeSection === MenuItems.about) {
            setExecuteYearRoller(true)
        } else {
            setExecuteYearRoller(false)
        }
    }, [activeSection])

    return (
        <div id="about-section" className={`section${activeSection === MenuItems.about ? " active" : ""}`}>
            <div className="section-content">
                <div
                    style={{
                        backgroundImage: `url(${ImageUrls.me})`,
                    }}
                    id="profile-picture"
                />
                <div id="years-experience-wrapper">
                    <YearRoller
                        id={MenuItems.about}
                        scopedClass="years-roller-about"
                        maxYear={9}
                        shouldRoll={activeSection === MenuItems.about}
                        delay={1000}
                    />
                    <p>
                        Years of <br />
                        Professional Experience
                    </p>
                </div>
                <div className="text-wrapper">
                    <h1 className="intro">
                        <b>Hey {recuiterName ? recuiterName : ""}</b>
                        <span className="icon-wrapper">{CommonIcons.handWave}</span>
                    </h1>
                    <p className="text">
                        I am a full stack software developer with a <span className="emphasize">relentless work ethic</span> that is passionate about
                        development and ensuring the user experience is up to the mark.
                    </p>
                    <p className="text">
                        My strong suit lies in effective and <span className="emphasize">clear communication</span> within crossfunctional teams,
                        ensuring each task is completed with clear expectations and understanding.
                    </p>

                    <Spacer height={20} />

                    <h2>
                        <span className="icon-wrapper eyes">{CommonIcons.eyes}</span>The Important Stuff
                    </h2>
                    <Spacer height={2} />
                    <p className="text">
                        I am a person who is always looking to learn and grow, and I am always willing to take on new challenges. I am also a team
                        player and enjoy working in a collaborative environment.
                    </p>
                    <p className="text">
                        I believe the ability to adapt to new technologies and environments is key to success, especialy because the landscape of
                        software development is ever changing.
                    </p>
                    <Spacer height={20} />
                    <h3>
                        <span className="icon-wrapper">{CommonIcons.checkmark}</span>Summary
                    </h3>
                    <Spacer height={2} />
                    <ul>
                        <li>Easy-going, social and friendly</li>
                        <li>Relentless worker</li>
                        <li>Effective communicator</li>
                        <li>Team player</li>
                        <li>Quick learner</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default About
