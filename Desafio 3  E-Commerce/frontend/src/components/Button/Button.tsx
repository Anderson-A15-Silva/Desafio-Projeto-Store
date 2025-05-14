import { Link } from "react-router-dom";
import "./Button.css";

interface ButtonProps {
    text: string;
    backgroundColor: string;
    color: string;
    border: string;
    haveLink: boolean;
    nextPage?: string;
    onClick?: () => void;
    disabled?: boolean;
    type?: "submit" | "reset" | undefined;
}

const Button = ({
    text,
    backgroundColor,
    color,
    border,
    haveLink,
    nextPage,
    onClick,
    disabled,
    type
}: ButtonProps) => {
    const style = {
        backgroundColor,
        color,
        border: border || "none",
        cursor: disabled ? "not-allowed" : "pointer",
        opacity: disabled ? 0.6 : 1
    };

    if (haveLink && nextPage && !disabled) {
        return (
            <Link to={nextPage}>
                <button className="button" style={style}>
                    {text}
                </button>
            </Link>
        );
    }

    return (
        <button
            disabled={disabled}
            onClick={onClick}
            className="button"
            style={style}
            type={type}
        >
            {text}
        </button>
    );
};

export default Button;
