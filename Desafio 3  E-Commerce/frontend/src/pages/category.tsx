import Card from "../components/Card/Card";
import "./css/category.css";
import AppBar from "../components/AppBar/AppBar";
import FilterMenu from "../components/FilterMenu/FilterMenu";
import { useEffect, useState } from "react";

interface Pet {
    id: number;
    image: string;
    name: string;
    sku: string;
    gender: string;
    age: number;
    size: string;
    color: string;
    vaccinated: boolean;
    dewormed: boolean;
    cert: boolean;
    microchip: boolean;
    location: string;
    publishedDate: Date;
    additionalInformation: string | null;
}

const Category = () => {
    const API_URL = 'http://localhost:3025';
    const [pets, setPets] = useState<Pet[]>([]);

    useEffect(() => {
        fetch(`${API_URL}/pets`)
           fetch(`${API_URL}/pets`)
        .then(response => {
            if (!response.ok) throw new Error("Erro ao buscar pets");
            return response.json();
        })
        .then(data => setPets(data))
        .catch(error => console.error(error));
    }, []);


    return (
        <div id="categoryPage">
            <AppBar/>
            <div id="third-banner">

            </div>
            <FilterMenu/>
            <section>
                <div>
                    {pets.length === 0 ? (
                        <p>Carregando pets...</p>
                    ) : (
                        pets.map(pet => (
                            <Card
                                key={pet.id}
                                name={pet.name}
                                genre={pet.gender}
                                image={`${API_URL}/uploads/${pet.image}`}
                                alternativeText={`Imagem de ${pet.name}`}
                                age={pet.age}
                            />
                        ))
                    )}
                </div>
            </section>
        </div>
    )
}

export default Category;