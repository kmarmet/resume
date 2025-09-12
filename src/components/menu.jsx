import React from "react"
import {useDispatch, useSelector} from "react-redux"
import {setActiveSection} from "../redux/globalState"
import CommonIcons from "./commonIcons"
import MenuItems from "./constants/menuItems"

const Menu = () => {
    const activeSection = useSelector((state) => state.globalState.activeSection)
    const dispatch = useDispatch()

    return (
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
            </div>
        </div>
    )
}

export default Menu
