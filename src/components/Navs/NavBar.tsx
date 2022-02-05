import {FaBell, FaSearch} from "react-icons/fa";
import {VscSettings} from "react-icons/vsc";

export type NavBarProps = {};
const NavBar = ({}: NavBarProps) => {
    return (<nav className={"nav-bar padding-6xl"}>
        <div className={"nav-bar__input-box border-radius-7xl margin-4xl padding-right-2xl"}>
            <FaSearch size={20} className={"nav-bar__input-box__icon-input margin-left-2xl margin-right-2xl"}/>
            <input className={"nav-bar__input-box__input width-7xl height-md border-radius-7xl padding-left-sm"}
                   placeholder={"Search here"}/>
        </div>
        <div className={"nav-bar__settings_box"}>
            <div className={"icon"}>
                <span className={"counter text-xs"}>10</span>
                <FaBell size={20}/>
            </div>
            <span className={"icon"}>
                <VscSettings size={20}/>
            </span>
        </div>
    </nav>);
};

export default NavBar;