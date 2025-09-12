import React, {useEffect, useState} from "react"
import {useDispatch} from "react-redux"
import {setBlur} from "../../redux/globalState"
export default function Slideshow({activeIndex = 0, images = [], wrapperClasses = "", show = false, hide = () => {}}) {
    const [activeImageIndex, setActiveImageIndex] = useState(activeIndex)
    const dispatch = useDispatch()

    const Navigate = (direction) => {
        if (direction === "left") {
            if (activeImageIndex > 0) {
                setActiveImageIndex(activeImageIndex - 1)
            } else {
                setActiveImageIndex(images.length - 1)
            }
        } else {
            if (activeImageIndex < images.length - 1) {
                setActiveImageIndex(activeImageIndex + 1)
            } else {
                setActiveImageIndex(0)
            }
        }
    }

    useEffect(() => {
        if (show) {
            dispatch(setBlur(true))
        } else {
            dispatch(setBlur(false))
        }
    }, [show])

    useEffect(() => {
        setActiveImageIndex(activeIndex)
    }, [activeIndex])

    useEffect(() => {
        if (images && images.length > 0) {
            const newImage = new Image()
            newImage.src = images[activeImageIndex]?.url
        }
    }, [activeImageIndex])

    return (
        <div id={"slideshow-wrapper"} className={`${show ? "active" : ""}${wrapperClasses}`}>
            <div id="slideshow-overlay">
                <div id={"images-wrapper"} className={`${show ? "active" : ""}`}>
                    {images &&
                        images.length > 0 &&
                        images.map((imageData, index) => {
                            const hasNotes = imageData?.notes !== ""
                            const hasTitle = imageData?.title !== ""

                            return (
                                <div key={index} className={index === activeImageIndex && show ? "active content" : "content"}>
                                    {/* IMAGE */}
                                    <img src={imageData?.url} alt={imageData?.title} />
                                    {(hasNotes || hasTitle) && (
                                        <>
                                            {/* TITLE */}
                                            {imageData?.title?.length > 0 && activeImageIndex === index && (
                                                <p className={"title"}>{imageData?.title}</p>
                                            )}
                                            {/* NOTES */}
                                            {imageData?.notes?.length > 0 && activeImageIndex === index && (
                                                <p className={"notes"}>{imageData?.notes}</p>
                                            )}
                                        </>
                                    )}
                                </div>
                            )
                        })}
                </div>
                {/* NAVIGATION */}
                {images?.length > 1 && images && images.length > 0 && (
                    <p className="count">
                        {activeImageIndex + 1} <span className="op-8">of</span> {images.length}
                    </p>
                )}
                <div className={`navigation ${images?.length < 2 ? "full-width" : ""}${images && images.length > 0 ? "" : "hidden"}`}>
                    {images && images.length > 0 && images?.length > 1 && (
                        <>
                            <button onClick={() => Navigate("left")}>Previous</button>
                            <button onClick={hide}>Dismiss</button>
                            <button onClick={() => Navigate("right")}>Next</button>
                        </>
                    )}
                    {images && images.length > 0 && images?.length === 1 && <button onClick={hide}>Dismiss</button>}
                </div>
            </div>
        </div>
    )
}
