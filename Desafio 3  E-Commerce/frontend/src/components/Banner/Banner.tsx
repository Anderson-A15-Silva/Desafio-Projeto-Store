import Button from "../Button/Button";
import "./Banner.css";

interface BannerProps {
    backgroundImage: string;
    title: string;
    subtitle: string;
    text: string;
    nextPage: string;
    backgroundColor: string;
    side: "left" | "right" | "center" | "justify" | "start" | "end";
}

const Banner = ({backgroundImage, title, subtitle, text, nextPage, backgroundColor, side }: BannerProps) => {
    return (
        <div id="entire-banner" style={{ backgroundColor: backgroundColor}}>
            <img src={backgroundImage} alt="woman lifting up a dog" id="img-background-2" />
            <div id="banner-content">
                <h2 style={{textAlign: side}}>{title}</h2>
                <h3 style={{textAlign: side}}>{subtitle}</h3>
                <p style={{textAlign: side}}> {text}</p>
                <div>
                    <Button text="View Intro" backgroundColor="var(--neutral)" color="black" border="1px solid var(--terciary)" haveLink={false}/>
                    <Button text="Explore Now" backgroundColor="var(--terciary)" color="white" border="none" haveLink={true} nextPage={nextPage}/>
                </div>
            </div>
            <div id="square-4"></div>
            <div id="square-5"></div>
        </div>
    );
}

export default Banner;