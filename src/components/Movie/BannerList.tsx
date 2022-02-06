import Banner from "../../domain/Banner";
import React from "react";
import BannerCard from "./BannerCard";

export type BannerListProps = {
    banners: Array<Banner>
};
const BannerList = ({banners}: BannerListProps) => {
    return (<div className={"banner-list width-full padding-sm"}>
        {banners?.map((banner, index) => <BannerCard banner={banner} key={banner.id}/>)}
    </div>);
    ;
};

export default BannerList;