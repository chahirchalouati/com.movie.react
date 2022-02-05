import Banner from "../../domain/Banner";

export type BannerCardProps = {
    banner: Banner
};
const BannerCard = ({banner}: BannerCardProps) => {
    return (<div className={"height-7xl width-full"}>
        <img
            src={banner.downloadUrl?.startsWith('http') ? banner.downloadUrl : `http://localhost:8080${banner.downloadUrl}`}
            alt={banner.title}/>
    </div>);
};

export default BannerCard;