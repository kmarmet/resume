import React from "react"
import {BiLogoTypescript} from "react-icons/bi"
import {BsFillBugFill, BsQuora, BsSendFill, BsTextLeft} from "react-icons/bs"
import {CgArrowsExpandRight} from "react-icons/cg"
import {DiHtml5, DiJsBadge, DiReact} from "react-icons/di"
import {
    FaExternalLinkSquareAlt,
    FaFilter,
    FaGithub,
    FaInfoCircle,
    FaLinkedinIn,
    FaNode,
    FaRegStar,
    FaSass,
    FaSave,
    FaSmile,
    FaStar,
    FaStarHalfAlt,
} from "react-icons/fa"
import {FaAddressCard, FaAngleLeft, FaAngleRight, FaBugSlash, FaChildren, FaCodeCommit, FaMinus, FaPhone, FaSquareUpwork} from "react-icons/fa6"
import {GiGraduateCap, GiMammoth} from "react-icons/gi"
import {HiColorSwatch} from "react-icons/hi"
import {HiDocumentCheck, HiPhoneArrowUpRight} from "react-icons/hi2"
import {IoMdMegaphone} from "react-icons/io"
import {IoClose, IoDocumentText, IoPhonePortrait} from "react-icons/io5"
import {MdEdit, MdEmail, MdLaunch, MdMilitaryTech, MdTipsAndUpdates} from "react-icons/md"
import {
    PiArrowsInSimple,
    PiCalendarDotsFill,
    PiCheckFatFill,
    PiClockFill,
    PiCurrencyDollarSimpleFill,
    PiEyesBold,
    PiHandWavingBold,
    PiMapPinFill,
    PiNoteBlankFill,
    PiRepeatBold,
    PiTagFill,
} from "react-icons/pi"
import {RiCodeSSlashFill} from "react-icons/ri"
import {RxUpdate} from "react-icons/rx"
import {SiCoffeescript, SiJquery, SiLodash} from "react-icons/si"
import {TbArrowBadgeRightFilled, TbCircleDotFilled, TbMessageCircleSearch, TbSql} from "react-icons/tb"
import Svgs from "./svgs/svgs"
const CommonIcons = {
    linkedInOutline: <FaLinkedinIn className="linkedin-icon" />,
    github: <FaGithub className="github-icon" />,
    quora: <BsQuora className="quora-icon" />,
    upwork: <FaSquareUpwork className="upwork-icon" />,
    workHistory: <IoDocumentText className="work-history-icon" />,
    portfolio: Svgs.portfolio,
    mammoth: <GiMammoth className="mammoth-icon" />,
    lodash: <SiLodash className="lodash-icon" />,
    coffeescript: <SiCoffeescript className="coffeescript-icon" />,
    jquery: <SiJquery className="jquery-icon" />,
    node: <FaNode className="node-icon" />,
    starHalf: <FaStarHalfAlt className="star-half-icon" />,
    starFilled: <FaStar className="star-filled-icon" />,
    starOutline: <FaRegStar className="star-regular-icon" />,
    expand: <CgArrowsExpandRight className="expand-icon" />,
    csharp: Svgs.csharp,
    dotnet: Svgs.dotnet,
    veteran: <MdMilitaryTech className="veteran-icon" />,
    typescript: <BiLogoTypescript className="typescript-icon" />,
    sql: <TbSql className="sql-icon" />,
    html: <DiHtml5 className="html-icon" />,
    js: <DiJsBadge className="js-icon" />,
    react: <DiReact className="react-icon" />,
    sass: <FaSass className="sass-icon" />,
    commit: <FaCodeCommit className="commit-icon" />,
    about: <FaAddressCard className="about-icon" />,
    address: <PiMapPinFill className="address-icon" />,
    bug: <BsFillBugFill className="bug-icon" />,
    eyes: <PiEyesBold className="eyes-icon" />,
    bulb: <MdTipsAndUpdates className="bulb-icon" />,
    call: <HiPhoneArrowUpRight className="call-icon" />,
    code: <RiCodeSSlashFill className="code-icon" />,
    category: <PiTagFill className="category-icon" />,
    checkmark: <PiCheckFatFill className="checkmark-icon" />,
    chevronRight: <TbArrowBadgeRightFilled className="chevron-right-icon" />,
    children: <FaChildren className="children-icon" />,
    handWave: <PiHandWavingBold className="hand-wave-icon" />,
    cap: <GiGraduateCap className="cap-icon" />,
    close: <IoClose className="close-icon" />,
    collapse: <PiArrowsInSimple className="collapse-icon" />,
    comment: <PiNoteBlankFill className="comment-icon" />,
    date: <PiCalendarDotsFill className="date-icon" />,
    details: <BsTextLeft className="details-icon" />,
    document: <IoDocumentText className="document-icon" />,
    dot: <TbCircleDotFilled className="dot-icon" />,
    edit: <MdEdit className="edit-icon" />,
    email: <MdEmail className="email-icon" />,
    expensePaid: <HiDocumentCheck className="expense-paid-icon" />,
    externalLink: <FaExternalLinkSquareAlt className="external-link-icon" />,
    filter: <FaFilter className="filter-icon" />,
    info: <FaInfoCircle className="info-icon" />,
    launch: <MdLaunch className="launch-icon" />,
    leftArrow: <FaAngleLeft className="left-arrow-icon" />,
    megaphone: <IoMdMegaphone className="megaphone-icon" />,
    messageSearch: <TbMessageCircleSearch className="message-search-icon" />,
    minus: <FaMinus className="minus-icon" />,
    money: <PiCurrencyDollarSimpleFill className="money-icon" />,
    mobilePhone: <IoPhonePortrait className="mobile-phone-icon" />,
    paperAirplane: <BsSendFill className="paper-airplane-icon" />,
    phone: <FaPhone className="phone-icon" />,
    recurring: <PiRepeatBold className="recurring-icon" />,
    rightArrow: <FaAngleRight className="right-arrow-icon" />,
    save: <FaSave className="save-icon" />,
    smileEmoji: <FaSmile className="smile-emoji-icon" />,
    bugSlash: <FaBugSlash className="bug-slash-icon" />,
    swatch: <HiColorSwatch className="swatch-icon" />,
    time: <PiClockFill className="time-icon" />,
    update: <RxUpdate className="update-icon" />,
}

export default CommonIcons

//# sourceMappingURL=commonIcons.js.map
