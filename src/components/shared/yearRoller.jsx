import React, {useEffect} from "react"
import {useSelector} from "react-redux"
import MenuItems from "../constants/menuItems"

const YearRoller = ({id, maxYear, shouldRoll = false, delay = 500, scopedClass = ""}) => {
    const activeSection = useSelector((state) => state.globalState.activeSection)

    function rollDigit() {
        const el = document.getElementById(id)
        el.style.top = -(maxYear * 2) + "rem" // shift down by digit height
    }

    function resetDigit() {
        const el = document.getElementById(id)
        el.style.top = "0"
    }

    useEffect(() => {
        if (maxYear > 0 && shouldRoll) {
            setTimeout(() => {
                rollDigit()
            }, delay)
        }
    }, [maxYear, id, shouldRoll, delay])

    useEffect(() => {
        if (!shouldRoll) {
            resetDigit()
        }
    }, [id, shouldRoll])

    return (
        <div className={`years-roller ${scopedClass}`}>
            <div className="number">
                <div className="digits" id={id}>
                    {(activeSection === MenuItems.about || activeSection === MenuItems.skills) && (
                        <>
                            0<br />1<br />2<br />3<br />4<br />5<br />6<br />7<br />8<br />9
                        </>
                    )}
                </div>
            </div>
        </div>
    )
}

export default YearRoller
