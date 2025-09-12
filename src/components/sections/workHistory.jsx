import React from "react"
import {useSelector} from "react-redux"
import MenuItems from "../constants/menuItems"
import Spacer from "../shared/spacer"

const WorkHistory = () => {
    const activeSection = useSelector((state) => state.globalState.activeSection)
    return (
        <div id="work-history" className={`section${activeSection === MenuItems.workHistory ? " active" : ""}`}>
            <div className="section-content">
                <div className="job">
                    <h3 className="job-title">
                        Senior Full Stack Developer <span>April 2021 - August 2025</span>
                    </h3>
                    <p className="job-company-name">International Association of Better Business Bureaus</p>
                    <p className="job-location">Remote</p>
                    <div className="job-description">
                        <ul>
                            <li>
                                Maintained and supported BBB.org, receiving <span className="emphasize">12M visits</span> monthly.
                            </li>
                            <li>
                                Developed Accreditation API for third-party integrations and implemented address verification using SmartyStreets API.
                            </li>
                            <li> Engaged in new feature development, bug fixes, and assisted in AWS migration.</li>
                            <li>
                                Re-architected the File a Complaint system, including database storage, S3 uploads, and API creation for data access.
                            </li>
                            <li> Utilized React (+Redux), C#, SQL, SOLR, VB.NET, ASP.NET.</li>
                            <li> Mentored junior developers and led frequent team meetings.</li>
                            <li>
                                Introduced Sprint Retrospective meetings to enhance agile methodologies. Designed and implemented various UI
                                components.
                            </li>
                            <li> Reviewed GitHub pull requests to ensure quality and coherence.</li>
                        </ul>
                    </div>
                </div>

                <Spacer height={15} />

                <div className="job">
                    <h3 className="job-title">
                        Senior Process Control Analyst
                        <span>April 2018 - April 2021</span>
                    </h3>
                    <p className="job-company-name">TimkenSteel</p>
                    <p className="job-location">Canton, OH</p>
                    <div className="job-description">
                        <ul>
                            <li>
                                <span className="emphasize">Enabled $10,000+ savings</span>, by designing and developing an internal, web based DVR
                                application used across three seperate manufacturing plants.
                            </li>
                            <li> Consult business and technical teams to drive software development lifecycle (SDLC) from concept to execution.</li>
                            <li>
                                Independently developed mobile tablet web application used to scan (barcode reader) tags attached to steel, load steel
                                onto trucks and many other tasks.
                            </li>
                            <li>Independently developed touchscreen tablet UI web application responsible for allowing entry into the plant.</li>
                            <li>Oversee and contribute to front end user interface (UI) and backend development.</li>
                            <li>Document and present solutions to technical and non-technical audiences.</li>
                            <li>Web applications were self-hosted and deployed on servers as a Windows service.</li>
                            <li>
                                Responsible for development and maintenance of several applications that are used company wide and require constant
                                uptime.
                            </li>
                        </ul>
                    </div>
                </div>

                <Spacer height={15} />
                <div className="job">
                    <h3 className="job-title">
                        Web Developer
                        <span>February 2017 - June 2018</span>
                    </h3>
                    <p className="job-company-name">Whitemyer Advertising</p>
                    <p className="job-location">Zoar, OH</p>
                    <div className="job-description">
                        <ul>
                            <li>
                                Independently managed <span className="emphasize">30+ websites.</span>
                            </li>
                            <li> Developed scalable and maintainable applications, ensuring alignment with requirements and specifications.</li>
                            <li>
                                Collaborated with business stakeholders to define and clarify project requirements and define metrics to optimize
                                product delivery.
                            </li>
                            <li>
                                Partnered with multi-disciplinary teams to design solutions to business issues, implementing best practices and
                                principles.
                            </li>
                            <li>Independently and successfully managed 30+ websites, leading to elimination of contractor usage.</li>
                            <li>
                                Designed and maintained backend as well as front end for multiple medium-large scale websites, such as Gradall.com
                                (11.5k unique visits per month)
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WorkHistory
