import { Link } from "react-router-dom";
import "./Button.css";

interface ButtonProps {
    text: string;
    backgroundColor: string;
    color: string;
    border: string;
    haveLink: boolean;
    nextPage?: string;
}

const Button = ({ text, backgroundColor, color, border, haveLink, nextPage }: ButtonProps) => {
    return (
        <button id='button' style={{ backgroundColor: backgroundColor, color: color, border: border || "none" }}>
            {haveLink && nextPage ? <Link to={nextPage}><p style={{color: color}}>{text}</p></Link> : text}
        </button>
    );
};

export default Button;