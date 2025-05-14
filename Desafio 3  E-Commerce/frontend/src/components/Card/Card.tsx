import "./Card.css";

type CardProps = {
    image: string;
    type: string;
    alternativeText: string;
    name: string;
    product?: string;
    genre?: string;
    age?: number;
    size?: string | number;
    price?: number;
    description?: string;
    text?: string;
    haveLink?: boolean;
    nextPage?: string;
};

const Card = ({ image, type, alternativeText, name, product, genre, age, size, price, description, text }: CardProps) => {
    if (type === "product") {
        return (
            <div id="product-card">
                <img src={image} alt={alternativeText} />
                <p>{name}</p>
                <div>
                    <p>Product: {product} </p>
                    <p>Size: {size} </p>
                </div>
                <p>{price} VDN</p>
                <p>{text}</p>
            </div>
        )
    }

    if (type === "pet") {
        return (
            <div id="pet-card">
                <img src={image} alt={alternativeText} />
                <p>{name}</p>
                <div>
                    <p>Genre: {genre}</p>
                    <p>Age: {age}</p>
                </div>
                <p>{price} VDN</p>
            </div>
        )
    }

    if (type === "informative") {
        return (
            <div id="informative-card">
                <img src={image} alt={alternativeText} />
                <p>{name}</p>
                <p>{description}</p>
            </div>
        )
    }
}

export default Card;