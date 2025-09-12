import React from "react"
import {useSelector} from "react-redux"
import MenuItems from "../constants/menuItems"
import Slideshow from "../shared/slideshow"
import Spacer from "../shared/spacer"

const Education = () => {
    const [showSlideshow, setShowSlideshow] = React.useState(false)
    const activeSection = useSelector((state) => state.globalState.activeSection)

    return (
        <>
            <Slideshow
                images={[{url: "https://i.imghippo.com/files/uXmI5104BrQ.jpg"}, {url: "https://i.imghippo.com/files/ZBZr5782F.jpg"}]}
                show={showSlideshow}
                hide={() => setShowSlideshow(false)}
            />
            <div id="education" className={`section${activeSection === MenuItems.education ? " active" : ""}`}>
                <Spacer height={20} />
                <div className="section-content">
                    <div className="flex images">
                        <img
                            className="degree"
                            src="https://i.imghippo.com/files/uXmI5104BrQ.jpg"
                            alt="Degree"
                            onClick={() => setShowSlideshow(true)}
                        />
                        <img
                            className="transcript"
                            src="https://i.imghippo.com/files/ZBZr5782F.jpg"
                            alt="Transcript"
                            onClick={() => setShowSlideshow(true)}
                        />
                    </div>
                    <span className="instructions">Click an image to enlarge</span>
                </div>
                <Spacer height={50} />
                <div className="awards">
                    <div className="award">
                        <span className="value">Champlain College</span>
                        <span className="label">Institution</span>
                    </div>
                    <div className="award">
                        <span className="value">2014 - 2018</span>
                        <span className="label">Dates</span>
                    </div>
                    <div className="award">
                        <span className="value">Summa Cum Laude</span>
                        <span className="label">Honors</span>
                    </div>
                    <div className="award">
                        <span className="value">President&apos;s List </span>
                        <span className="label">Achievement</span>
                    </div>
                    <div className="award">
                        <span className="value">Dean&apos;s List</span>
                        <span className="label">Achievement</span>
                    </div>
                    <div className="award">
                        <span className="value">3.96</span>
                        <span className="label">GPA</span>
                    </div>
                    <div className="award">
                        <span className="value">Alpha Sigma Lambda</span>
                        <span className="label">Honor Society</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Education
