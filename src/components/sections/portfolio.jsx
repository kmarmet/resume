import React from "react"
import {useSelector} from "react-redux"
import CommonIcons from "../commonIcons"
import ImageUrls from "../constants/imageUrls"
import MenuItems from "../constants/menuItems"
import Collapsible from "../shared/collapsible"
import CollapsibleTitle from "../shared/collapsibleTitle"
import Slideshow from "../shared/slideshow"
import Spacer from "../shared/spacer"

const Portfolio = () => {
    const activeSection = useSelector((state) => state.globalState.activeSection)
    const [showDVRSlideshow, setShowDVRSlideshow] = React.useState(false)
    const [showUpworkSlideshow, setShowUpworkSlideshow] = React.useState(false)
    const [showDVRProject, setShowDVRProject] = React.useState(false)
    const [showFreelancingWork, setShowFreelancingWork] = React.useState(false)
    const [showQuoraProject, setShowQuoraProject] = React.useState(false)
    const [showQuoraSlideshow, setShowQuoraSlideshow] = React.useState(false)
    const [showGradallProject, setShowGradallProject] = React.useState(false)
    const [showGradallSlideshow, setShowGradallSlideshow] = React.useState(false)
    const [showEssenceAppProject, setShowEssenceAppProject] = React.useState(false)
    const [showEssenceAppSlideshow, setShowEssenceAppSlideshow] = React.useState(false)
    const [showOldDogsSlideshow, setShowOldDogsSlideshow] = React.useState(false)
    return (
        <>
            <Slideshow
                show={showDVRSlideshow}
                hide={() => setShowDVRSlideshow(false)}
                images={[
                    {url: ImageUrls.replay, title: "Replay"},
                    {url: ImageUrls.allCameras, title: "Plant Selection"},
                    {url: ImageUrls.hostManagement, title: "Host Management"},
                    {url: ImageUrls.userManagement, title: "User Management"},
                    {url: ImageUrls.cameraManagement, title: "Camera Management"},
                    {url: ImageUrls.roleManagement, title: "Role Management"},
                    {url: ImageUrls.upworkStats, title: "Upwork Stats"},
                ]}
            />
            <Slideshow
                show={showUpworkSlideshow}
                hide={() => setShowUpworkSlideshow(false)}
                images={[
                    {url: ImageUrls.upwork, title: "Upwork"},
                    {url: ImageUrls.upworkStats, title: "Upwork Stats"},
                ]}
            />
            <Slideshow
                show={showQuoraSlideshow}
                hide={() => setShowQuoraSlideshow(false)}
                images={[{url: ImageUrls.quora, title: "Top Writer 2018"}]}
            />
            <Slideshow
                show={showGradallSlideshow}
                hide={() => setShowGradallSlideshow(false)}
                images={[
                    {url: ImageUrls.gradallOne, title: ""},
                    {url: ImageUrls.gradallTwo, title: "Gradall TV"},
                    {url: ImageUrls.gradallThree, title: "Dealor Locator"},
                ]}
            />

            <Slideshow
                show={showEssenceAppSlideshow}
                hide={() => setShowEssenceAppSlideshow(false)}
                images={[
                    {url: ImageUrls.essenceAppTwo, title: ""},
                    {url: ImageUrls.essenceAppThree, title: ""},
                    {url: ImageUrls.essenceAppFour, title: ""},
                    {url: ImageUrls.essenceAppFive, title: ""},
                    {url: ImageUrls.essenceAppSix, title: ""},
                ]}
            />
            <Slideshow
                show={showOldDogsSlideshow}
                hide={() => setShowOldDogsSlideshow(false)}
                images={[
                    {url: ImageUrls.oldDogsOne, title: ""},
                    {url: ImageUrls.oldDogsTwo, title: ""},
                    {url: ImageUrls.oldDogsThree, title: ""},
                ]}
            />
            <div id="portfolio" className={`section${activeSection === MenuItems.portfolio ? " active" : ""}`}>
                <div className="section-content">
                    <div className="flex gap-10">
                        <CollapsibleTitle
                            toggleState={showEssenceAppProject}
                            titleText={"Essence Application"}
                            onClick={() => setShowEssenceAppProject(!showEssenceAppProject)}
                        />
                        <CollapsibleTitle
                            toggleState={showDVRProject}
                            titleText={"Web App: DVR"}
                            onClick={() => setShowDVRProject(!showDVRProject)}
                        />
                        <CollapsibleTitle
                            toggleState={showFreelancingWork}
                            titleText="Freelancing"
                            onClick={() => setShowFreelancingWork(!showFreelancingWork)}
                        />
                        <CollapsibleTitle toggleState={showQuoraProject} titleText={"Quora"} onClick={() => setShowQuoraProject(!showQuoraProject)} />
                        <CollapsibleTitle
                            toggleState={showGradallProject}
                            titleText={"Gradall"}
                            onClick={() => setShowGradallProject(!showGradallProject)}
                        />
                    </div>
                    <div className="projects">
                        <Collapsible toggleState={showDVRProject}>
                            <Spacer height={5} />
                            <p>
                                The DVR Web is a web hosted DVR application used across all three of TimkenSteel&apos;s plants, to view cameras (live)
                                and replay videos stored in the cloud for incident review. Before its existence, TimkenSteel was paying a very high
                                amount to a third party for this functionality.
                            </p>
                            <Spacer height={10} />
                            <p>
                                I independently developed all front end functionality, along with create/read/update/delete (CRUD) functionality on
                                the back end. The application is currently used by several hundred employees.
                            </p>
                            <Spacer height={15} />
                            <h3>Features</h3>
                            <Spacer height={5} />
                            <ul>
                                <li>
                                    <span className="emphasize">Live/Replay</span>
                                </li>
                                <li>Zoom mode</li>
                                <li>Freeform mode </li>
                                <li>
                                    <span className="emphasize">
                                        Users can resize any camera and drag it where they want to create a custom/freeform view
                                    </span>
                                </li>
                                <li>Draggable/resizable</li>
                                <li>Custom views </li>
                                <li>
                                    <span className="emphasize">
                                        Active Directory authentication is used to save named views and their position on the page so users do not
                                        have to setup a new configuration on each launch
                                    </span>
                                </li>
                                <li>Admin Portal</li>
                                <li>Host Management (manage hosts/servers that contain cameras)</li>
                                <li>User Management </li>
                                <li>Add/remove users</li>
                                <li>Assign roles to users </li>
                                <li>
                                    <span className="emphasize">Live search based on Active Directory</span>
                                </li>
                                <li>Camera Management </li>
                                <li>
                                    <span className="emphasize">Assign permissions (Live, Replay, Download) on a per-role basis</span>
                                </li>
                                <li>Role Management</li>
                                <li>Add/remove custom roles</li>
                            </ul>
                            <Spacer height={20} />
                            <div className="thumbnails" onClick={() => setShowSlideshow(true)}>
                                <img src={ImageUrls.replay} alt="replay" />
                                <img src={ImageUrls.allCameras} alt="all cameras" />
                                <img src={ImageUrls.hostManagement} alt="host management" />
                                <img src={ImageUrls.userManagement} alt="user management" />
                                <img src={ImageUrls.cameraManagement} alt="camera management" />
                                <img src={ImageUrls.roleManagement} alt="role management" />
                            </div>
                        </Collapsible>

                        <Collapsible toggleState={showFreelancingWork}>
                            <p>Over the years I have also freelanced for several clients on Upwork, which you can see in the images below.</p>

                            <Spacer height={5} />
                            <div className="thumbnails" onClick={() => setShowUpworkSlideshow(true)}>
                                <img src={ImageUrls.upwork} alt="upwork" />
                                <img src={ImageUrls.upworkStats} alt="upwork stats" />
                            </div>
                            <a
                                className="view-profile"
                                href="https://www.upwork.com/freelancers/~01baddbe5fbfbf7dc7"
                                target="_blank"
                                rel="noreferrer">
                                View my Profile <span className="icon-wrapper">{CommonIcons.upwork}</span>
                            </a>

                            <Spacer height={30} />
                            <h3 className="yellow">Example Project: Two Old Dogs</h3>
                            <Spacer height={10} />
                            <div className="thumbnails" onClick={() => setShowOldDogsSlideshow(true)}>
                                <img src={ImageUrls.oldDogsOne} alt="Two Old Dogs" />
                                <img src={ImageUrls.oldDogsTwo} alt="Two Old Dogs" />
                                <img src={ImageUrls.oldDogsThree} alt="Two Old Dogs" />
                            </div>
                            <a className="view-two-old-dogs" href="https://twoolddogs.com" target="_blank" rel="noreferrer">
                                View Website <span className="icon-wrapper">{CommonIcons.externalLink}</span>
                            </a>
                        </Collapsible>

                        <Collapsible toggleState={showQuoraProject}>
                            <p>In the past I have answered many questions to help others with their programming questions on Quora.</p>
                            <Spacer height={10} />
                            <div className="thumbnails" onClick={() => setShowQuoraSlideshow(true)}>
                                <img src={ImageUrls.quora} alt="quora" />
                            </div>
                            <a className="view-profile" href="https://www.quora.com/profile/Kevin-Marmet-1" target="_blank" rel="noreferrer">
                                View my Profile <span className="icon-wrapper">{CommonIcons.quora}</span>
                            </a>
                        </Collapsible>
                        <Collapsible toggleState={showGradallProject}>
                            <p>
                                Gradall is large scale hydraulic excavators manufacturer. Independently, I developed the entire website including the
                                front end, back end and database interactions.
                            </p>
                            <Spacer height={10} />
                            <p>
                                Doing so allowed my employer at the time to <span className="emphasize">save a significant amount of money </span>by
                                removing the necessity for a backend programmer, as I took on the role of front end and back end developer.
                            </p>
                            <Spacer height={20} />
                            <h3>Features & Info</h3>
                            <Spacer height={5} />
                            <ul>
                                <li>
                                    Developed with PHP, <span className="emphasize">which was new to me at the time of development</span>
                                </li>
                                <li>Entire website built from scratch</li>
                                <li>Dealer Locator with Google Maps integration</li>
                                <li>
                                    Video Streaming with a multitude of filters that can be combined to find the exact video the user is looking for.
                                </li>
                            </ul>
                            <Spacer height={10} />
                            <div className="thumbnails" onClick={() => setShowGradallSlideshow(true)}>
                                <img src={ImageUrls.gradallOne} alt="gradall" />
                                <img src={ImageUrls.gradallTwo} alt="gradall" />
                                <img src={ImageUrls.gradallThree} alt="gradall" />
                            </div>
                        </Collapsible>
                        <Collapsible toggleState={showEssenceAppProject}>
                            <p>
                                Essence is an application for both iOS and Android platforms that allows the user to store{" "}
                                <span className="emphasize">ANY</span> information about the people in their circle.
                            </p>
                            <Spacer height={10} />
                            <p>
                                It was developed using React Native alongside Expo, which as a new mobile application developer made it seamless to
                                deploy.
                            </p>
                            <Spacer height={10} />
                            <div className="thumbnails" onClick={() => setShowEssenceAppSlideshow(true)}>
                                <img src={ImageUrls.essenceAppTwo} alt="Essence Application" />
                                <img src={ImageUrls.essenceAppThree} alt="Essence Application" />
                                <img src={ImageUrls.essenceAppFour} alt="Essence Application" />
                                <img src={ImageUrls.essenceAppFive} alt="Essence Application" />
                                <img src={ImageUrls.essenceAppSix} alt="Essence Application" />
                            </div>
                            <a
                                className="view-essence"
                                href="https://apps.apple.com/us/app/essence-app/id6444461705"
                                target="_blank"
                                rel="noreferrer">
                                View on App Store
                                <span className="icon-wrapper">
                                    <img src={ImageUrls.essenceAppOne} alt="essence" width={20} height={20} />
                                </span>
                            </a>
                        </Collapsible>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Portfolio
