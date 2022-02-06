import {SIDE_BAR_BODY_ROUTES, SIDE_BAR_FOOTER_ROUTES,} from "../../configs/porps/RoutesProps";
import {IMAGE_URL_AVATAR} from "../../mock/Mock";
import SideBarBox from "./SideBarBox";
import {useState} from "react";

export type SideBarProps = {};

const SideBar = ({}: SideBarProps) => {
    const doSomeThing = () => {
    };
    const handleRouteChange = (to: string) => {
    };

    return (
        <div className={"side-bar"}>
            {/* SideBar header */}
            <div className={"side-bar__header padding-xl margin-top-7xl"}>
                <div className={"side-bar__avatar_box padding-right-xl padding-left-xl"}>
                    <img className={"side-bar__avatar_box_img margin-sm"} src={IMAGE_URL_AVATAR} alt={""}/>
                    <div className={"side-bar__avatar_box_title margin-sm"}>
                        <div className={"text-sm text-capitalize"}>welcome</div>
                        <div className={"text-xl text-capitalize"}>Kevin Bond</div>
                    </div>
                </div>
            </div>
            <SideBarBox label="menu" routes={SIDE_BAR_BODY_ROUTES} handleRouteChange={handleRouteChange}/>
            <SideBarBox label="general" routes={SIDE_BAR_FOOTER_ROUTES} handleRouteChange={handleRouteChange}/>
        </div>
    );
};
export default SideBar;