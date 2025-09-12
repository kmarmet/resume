import React from "react"
import {LuMinus, LuPlus} from "react-icons/lu"

const CollapsibleTitle = ({onClick, titleText, toggleState}) => {
    return (
        <button className="button default grey collapsible-title" onClick={onClick}>
            <span className={"label"}>
                {titleText} {toggleState ? <LuMinus /> : <LuPlus />}
            </span>
        </button>
    )
}

export default CollapsibleTitle
