import Banner from "../../domain/Banner";

export type BannerCardProps = {
    banner: Banner
};
const BannerCard = ({banner}: BannerCardProps) => {
    return (<div className={" banner-card "}>
        <img className={"height-7xl max-width-full border-radius-sm"}
             src={banner.downloadUrl?.startsWith('http') ? banner.downloadUrl : `http://localhost:8080${banner.downloadUrl}`}
             alt={banner.title}/>
    </div>);
};

export default BannerCard;