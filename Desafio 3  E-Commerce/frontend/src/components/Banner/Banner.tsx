import Button from "../Button/Button";
import "./Banner.css";

interface BannerProps {
    backgroundImage: string;
    title: string;
    subtitle: string;
    text: string;
    nextPage1: string;
    nextPage2: string;
    backgroundColor: string;
    textSide: "left" | "right" | "center" | "justify" | "start" | "end";
    flexDirection: "row" | "row-reverse";
    textColor: string;
    backgroundColorButton1: string;
    textColorButton1: string;
    borderButton1: string;
    backgroundColorButton2: string;
    textColorButton2: string;
    borderButton2: string;
}

const Banner = ({backgroundImage, title, subtitle, text, nextPage1, nextPage2, backgroundColor, textColor, textSide, flexDirection, backgroundColorButton1, textColorButton1, borderButton1, backgroundColorButton2, textColorButton2, borderButton2}: BannerProps) => {
    return (
        <div id="entire-banner" style={{ backgroundColor: backgroundColor, flexDirection: flexDirection, color: textColor }}>
            <img src={backgroundImage} alt="woman lifting up a dog" id="img-background-2" />
            <div id="banner-content">
                <h2 style={{textAlign: textSide}}>{title}</h2>
                <h3 style={{textAlign: textSide}}>{subtitle}</h3>
                <p style={{textAlign: textSide}}> {text}</p>
                <div>
                    <Button text="View Intro" backgroundColor={backgroundColorButton1} color={textColorButton1} border={borderButton1} haveLink={true} nextPage={nextPage1}/>
                    <Button text="Explore Now" backgroundColor={backgroundColorButton2} color={textColorButton2} border={borderButton2} haveLink={true} nextPage={nextPage2}/>
                </div>
            </div>
            <div id="square-4"></div>
            <div id="square-5"></div>
        </div>
    );
}

export default Banner;