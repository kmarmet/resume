import React, {useEffect} from "react"
import {useDispatch, useSelector} from "react-redux"
import {setBlur} from "../../redux/globalState"
import CommonIcons from "../commonIcons"
const Modal = ({children, show, hide = () => {}, scopedClass = ""}) => {
    const dispatch = useDispatch()
    const activeSection = useSelector((state) => state.globalState.activeSection)
    useEffect(() => {
        if (show) dispatch(setBlur(true))
        else dispatch(setBlur(false))
    }, [show, dispatch, setBlur])
    return (
        <>
            <div className={`modal ${activeSection?.toLowerCase()} ${show ? " show" : ""} ${scopedClass} ${show ? "slide-up" : "slide-down"}`}>
                <div className="modal-content" onClick={hide}>
                    {children}
                </div>
            </div>
            <button className={`close-modal-button ${activeSection?.toLowerCase()} ${show ? "active" : ""}`} onClick={hide} aria-label="Close Modal">
                <div className="icon-wrapper">{CommonIcons.close}</div>
            </button>
        </>
    )
}

export default Modal
