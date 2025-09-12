import React from "react"
import {FaSquareGithub} from "react-icons/fa6"
import {ImLinkedin} from "react-icons/im"
import {useDispatch, useSelector} from "react-redux"
import {setActiveSection} from "../../redux/globalState"
import CommonIcons from "../commonIcons"
import MenuItems from "../constants/menuItems"

const MobileMenu = () => {
    const activeSection = useSelector((state) => state.globalState.activeSection)
    const dispatch = useDispatch()
    return (
        <div id="mobile-menu">
            <div id="menu">
                <div id="menu-items">
                    <div
                        className={`menu-item${activeSection === MenuItems.about ? " active" : ""}`}
                        onClick={() => dispatch(setActiveSection(MenuItems.about))}>
                        <span className="menu-label">
                            <span className="icon-wrapper">{CommonIcons.about}</span>
                            {MenuItems.about}
                        </span>
                    </div>
                    <div
                        className={`menu-item${activeSection === MenuItems.skills ? " active" : ""}`}
                        onClick={() => dispatch(setActiveSection(MenuItems.skills))}>
                        <span className="menu-label">
                            <span className="icon-wrapper">{CommonIcons.code}</span>
                            {MenuItems.skills}
                        </span>
                    </div>
                    <div
                        className={`menu-item${activeSection === MenuItems.portfolio ? " active" : ""}`}
                        onClick={() => dispatch(setActiveSection(MenuItems.portfolio))}>
                        <span className="menu-label">
                            <span className="icon-wrapper smile">{CommonIcons.smileEmoji}</span>
                            {MenuItems.portfolio}
                        </span>
                    </div>
                    <div
                        className={`menu-item${activeSection === MenuItems.education ? " active" : ""}`}
                        onClick={() => dispatch(setActiveSection(MenuItems.education))}>
                        <span className="menu-label">
                            <span className="icon-wrapper cap">{CommonIcons.cap}</span>
                            {MenuItems.education}
                        </span>
                    </div>
                    <div
                        className={`menu-item${activeSection === MenuItems.workHistory ? " active" : ""}`}
                        onClick={() => dispatch(setActiveSection(MenuItems.workHistory))}>
                        <span className="menu-label">
                            <span className="icon-wrapper briefcase">{CommonIcons.workHistory}</span>
                            {MenuItems.workHistory}
                        </span>
                    </div>
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
        </div>
    )
}

export default MobileMenu
