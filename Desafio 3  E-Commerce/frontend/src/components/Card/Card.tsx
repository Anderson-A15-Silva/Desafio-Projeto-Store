import "./Card.css";

type CardProps = {
    image: string;
    alternativeText: string;
    name: string;
    genre: string;
    age: number;
};

const Card = ({ image, alternativeText, name, genre, age }: CardProps) => {
    return (
        <div className="card">
            <img src={image} alt={alternativeText} />
            <p>
                Name: {name}
            </p>
            <div>
                <p>
                    Genre: {genre}
                </p>
                <p>
                    Age: {age}
                </p>
            </div>     
        </div>
    )
}

export default Card;