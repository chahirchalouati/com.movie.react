import {ReactNode} from "react";
import {IoNavigateCircleOutline} from "react-icons/io5";
import {AiOutlineHome} from "react-icons/ai";
import {BsClockHistory} from "react-icons/bs";
import {MdOutlineAvTimer} from "react-icons/md";
import {FiSettings} from "react-icons/fi";
import {RiLogoutBoxRLine, RiMovie2Line} from "react-icons/ri";

export const SIDE_BAR_BODY_ROUTES: Array<RoutesProps> = [
    {to: '#', label: 'Home', icon: <AiOutlineHome size={25}/>},
    {to: '#', label: 'Browse', icon: <IoNavigateCircleOutline size={25}/>},
    {to: '#', label: 'WatchList', icon: <RiMovie2Line size={25}/>},
    {to: '#', label: 'History', icon: <BsClockHistory size={25}/>},
    {to: '#', label: 'Coming soon', icon: <MdOutlineAvTimer size={25}/>},
];

export const SIDE_BAR_FOOTER_ROUTES: Array<RoutesProps> = [
    {to: '#', label: 'Settings', icon: <FiSettings size={25}/>},
    {to: '#', label: 'logout', icon: <RiLogoutBoxRLine size={25}/>}
];

export interface RoutesProps {
    to: string,
    label: string,
    icon: ReactNode
}