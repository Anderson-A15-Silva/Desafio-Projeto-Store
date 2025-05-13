import Card from "../components/Card/Card";
import "./css/category.css";
import AppBar from "../components/AppBar/AppBar";
import FilterMenu from "../components/FilterMenu/FilterMenu";
import Banner from "../components/Banner/Banner";
import { use, useEffect, useState } from "react";
import backgroundImage4 from '../assets/imgs/background-4.png';
import { useParams } from "react-router-dom";

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

interface Product {
    id: number;
    image: string;
    name: string;
    prType: string;
    price: number;
    size: number;
}

const Category = () => {
    const API_URL = 'http://localhost:3025';
    const params = useParams();
    const type = params.type;

    const [pets, setPets] = useState<Pet[]>([]);
    const [products, setProducts] = useState<Product[]>([]);
    const [petsFilters, setPetsFilters] = useState({
        limit: 12,
        offset: 0,
        minPrice: 0,
        maxPrice: 1000,
        gender: [] as string[],
        color: [] as string[],
        size: [] as string[]
    });

    const [productsFilters, setProductsFilters] = useState({
        limit: 12,
        offset: 0,
        prType: [] as string[],
        minPrice: 0,
        maxPrice: 1000,
        minSize: 0,
        maxSize: 0
    });

    if (type === 'pets') {
        const buildQuery = () => {
            const params = new URLSearchParams();

            params.append("limit", petsFilters.limit.toString());
            params.append("offset", petsFilters.offset.toString());
            params.append("minPrice", petsFilters.minPrice.toString());
            params.append("maxPrice", petsFilters.maxPrice.toString());

            if (petsFilters.gender.length > 0) {
                petsFilters.gender.forEach(g => params.append("gender", g));
            }

            if (petsFilters.color.length > 0) {
                petsFilters.color.forEach(c => params.append("color", c));
            }

            if (petsFilters.size.length > 0) {
                petsFilters.size.forEach(s => params.append("size", s));
            }

            return params.toString();
        };



        const fetchPets = async () => {
            try {
                const query = buildQuery();
                const url = `${API_URL}/pets?${query}`;

                console.log('URL da API:', url);

                const response = await fetch(url);

                if (!response.ok) {
                    let errorMessage = `Erro ao buscar pets: ${response.statusText}`;

                    try {
                        const errorBody = await response.json();
                        errorMessage += ` - Detalhes: ${JSON.stringify(errorBody)}`;
                    } catch (error) {
                        console.error("Erro ao tentar capturar detalhes da resposta:", error);
                    }

                    throw new Error(errorMessage);
                }


                const data = await response.json();
                console.log('Dados recebidos:', data);

                if (data && Array.isArray(data)) {
                    setPets(data);
                } else {
                    console.error('Dados inválidos recebidos:', data);
                    setPets([]);
                }
            } catch (error) {
                console.error('Erro ao buscar pets:', error);
                setPets([]);
            }
        };

        useEffect(() => {
            fetchPets();
        }, [petsFilters]);
    }

    if (type === 'products') {
        const buildQuery = () => {
            const params = new URLSearchParams();

            params.append("limit", productsFilters.limit.toString());
            params.append("offset", productsFilters.offset.toString());
            params.append("minPrice", productsFilters.minPrice.toString());
            params.append("maxPrice", productsFilters.maxPrice.toString());
            params.append("minSize", productsFilters.minPrice.toString());
            params.append("maxSize", productsFilters.maxPrice.toString());

            if (productsFilters.prType.length > 0) {
                productsFilters.prType.forEach(t => params.append("prType", t));
            }

            return params.toString();
        };



        const fetchProducts = async () => {
            try {
                const query = buildQuery();
                const url = `${API_URL}/products?${query}`;

                console.log('URL da API:', url);

                const response = await fetch(url);

                if (!response.ok) {
                    let errorMessage = `Error while fetching products: ${response.statusText}`;

                    try {
                        const errorBody = await response.json();
                        errorMessage += ` - Details: ${JSON.stringify(errorBody)}`;
                    } catch (error) {
                        console.error("Error trying to capture response details:", error);
                    }

                    throw new Error(errorMessage);
                }


                const data = await response.json();
                console.log('Datas received:', data);

                if (data && Array.isArray(data)) {
                    setProducts(data);
                } else {
                    console.error('Invalid datas received:', data);
                    setProducts([]);
                }
            } catch (error) {
                console.error('Error while fetching products:', error);
                setProducts([]);
            }
        };

        useEffect(() => {
            fetchProducts();
        }, [productsFilters]);
    }

    const [showNoPetsMessage, setShowNoPetsMessage] = useState(false);

    useEffect(() => {
        if (pets.length === 0) {
            const timer = setTimeout(() => {
                setShowNoPetsMessage(true);
            }, 2000);

            return () => clearTimeout(timer);
        } else {
            setShowNoPetsMessage(false);
        }
    }, [pets]);

    return (
        <div id="categoryPage">
            <AppBar backgroundColor="var(--neutral)" squareDisplay={false} />
            <Banner
                title="One More Friend"
                subtitle="Thousand More Fun!"
                text="Having a pet means you have more joy, a new friend, a happy person who will always be with you to have fun. We have 200+ different pets that can meet your needs!"
                textSide="end"
                flexDirection="row"
                backgroundImage={backgroundImage4}
                backgroundColor="var(--primary)"
                nextPage="/category"
            />
            <div id="category-content">
                {
                    type === 'pets' ? (
                        <FilterMenu setPetsFilters={setPetsFilters} petsFilters={petsFilters} path='pets' />
                    ) : (
                        <FilterMenu setProductsFilters={setProductsFilters} productsFilters={productsFilters} path='products' />
                    )
                }

                <section>
                    <div>
                        {
                            type === 'pets' ? (
                                pets.length === 0 ? (
                                    showNoPetsMessage ? (
                                        <p>Nenhum pet foi encontrado.</p>
                                    ) : (
                                        <p>Carregando pets...</p>
                                    )
                                ) : (
                                    pets.map(pet => (
                                        <Card
                                            type="pet"
                                            key={pet.id}
                                            name={pet.name}
                                            genre={pet.gender}
                                            image={`${API_URL}/${pet.image}`}
                                            alternativeText={`Imagem de ${pet.name}`}
                                            age={pet.age}
                                        />
                                    ))
                                )) : (
                                products.length === 0 ? (
                                    showNoPetsMessage ? (
                                        <p>Nenhum produto foi encontrado.</p>
                                    ) : (
                                        <p>Carregando pets...</p>
                                    )
                                ) : (
                                    products.map(product => (
                                        <Card
                                            type="product"
                                            key={product.id}
                                            name={product.name}
                                            product={product.prType}
                                            size={product.size}
                                            price={product.price}
                                            image={`${API_URL}/${product.image}`}
                                            alternativeText={`Imagem de ${product.name}`}
                                        />
                                    ))
                                )
                            )
                        }
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Category;