import React from "react"

const Collapsible = ({wrapperClasses = "", children, toggleState = false}) => {
    return <div className={`collapsible${toggleState === true ? " open" : " closed"}${wrapperClasses ? ` ${wrapperClasses}` : ""}`}>{children}</div>
}

export default Collapsible
