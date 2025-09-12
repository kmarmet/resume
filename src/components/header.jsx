import React from "react"
import {FaSquareGithub} from "react-icons/fa6"
import {ImLinkedin} from "react-icons/im"
import CommonIcons from "./commonIcons"

const Flag = () => {
    return (
        <img
            width="96"
            height="96"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Mark_of_the_United_States_Army.svg/250px-Mark_of_the_United_States_Army.svg.png"
            alt="army-badge"
        />
    )
}

const Header = () => {
    return (
        <header id="header">
            <div className="flex">
                <div className="left column">
                    <h1 className="name">
                        Kevin Marmet <span className="separator">></span>
                        <span className="role">Senior Full-Stack Software Engineer</span>
                    </h1>
                    <p className="location">
                        <span className="icon-wrapper location-icon-wrapper">{CommonIcons.address}</span>Remote, US
                    </p>
                    <h4>
                        <Flag /> <span className="red">U.S.</span> <span className="white">Army</span> <span className="blue">Veteran</span>
                    </h4>
                </div>
                <div className="right column">
                    <a href="tel:3307494534" target="_blank" rel="noreferrer" className="contact-button phone">
                        <div className="contact-button">
                            <span className="icon-wrapper">{CommonIcons.phone}</span>
                            <span>Let&apos;s Chat!</span>
                        </div>
                    </a>
                    <div className="contact-button github" title="Not All Repos Are Public">
                        <a href="https://github.com/kmarmet" target="_blank" rel="noreferrer">
                            <span className="icon-wrapper">
                                <FaSquareGithub />
                            </span>
                            <span>GitHub</span>
                        </a>
                    </div>
                    <div className="contact-button linkedin">
                        <a href="https://www.linkedin.com/in/kmarmet/" target="_blank" rel="noreferrer">
                            <span className="icon-wrapper">
                                <ImLinkedin />
                            </span>
                            <span>LinkedIn</span>
                        </a>
                    </div>

                    <div className="contact-button email">
                        <a href="mailto:kmarmet1@gmail.com" target="_blank" rel="noreferrer">
                            <span className="icon-wrapper">{CommonIcons.email}</span>
                            <span>Email Me</span>
                        </a>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
