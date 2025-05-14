import Card from "../components/Card/Card";
import "./css/category.css";
import AppBar from "../components/AppBar/AppBar";
import FilterMenu from "../components/FilterMenu/FilterMenu";
import Banner from "../components/Banner/Banner";
import { useEffect, useState } from "react";
import backgroundImage4 from '../assets/imgs/background-4.png';
import { useParams, Link } from "react-router-dom";
import Button from "../components/Button/Button";
import Footer from "../components/Footer/Footer";

interface Pet {
    id: number;
    image: string;
    name: string;
    sku: string;
    gender: string;
    price: number;
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

    const [currentPage, setCurrentPage] = useState(1);

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
        maxSize: 1000
    });

    useEffect(() => {
        if (type === 'pets') {
            setPetsFilters(prev => ({
                ...prev,
                offset: (currentPage - 1) * prev.limit
            }));
        } else {
            setProductsFilters(prev => ({
                ...prev,
                offset: (currentPage - 1) * prev.limit
            }));
        }
    }, [currentPage, type]);

    useEffect(() => {
        if (type !== 'pets') return;

        const buildQuery = () => {
            const params = new URLSearchParams();
            params.append("limit", petsFilters.limit.toString());
            params.append("offset", petsFilters.offset.toString());
            params.append("minPrice", petsFilters.minPrice.toString());
            params.append("maxPrice", petsFilters.maxPrice.toString());
            petsFilters.gender.forEach(g => params.append("gender", g));
            petsFilters.color.forEach(c => params.append("color", c));
            petsFilters.size.forEach(s => params.append("size", s));
            return params.toString();
        };

        const fetchPets = async () => {
            try {
                const query = buildQuery();
                const response = await fetch(`${API_URL}/pets?${query}`);
                if (!response.ok) throw new Error(`Error: ${response.statusText}`);
                const data = await response.json();
                setPets(Array.isArray(data) ? data : []);
            } catch (err) {
                console.error(err);
                setPets([]);
            }
        };

        fetchPets();
    }, [petsFilters, type]); 

    useEffect(() => {
        if (type !== 'products') return;

        const buildQuery = () => {
            const params = new URLSearchParams();
            params.append("limit", productsFilters.limit.toString());
            params.append("offset", productsFilters.offset.toString());
            params.append("minPrice", productsFilters.minPrice.toString());
            params.append("maxPrice", productsFilters.maxPrice.toString());
            params.append("minSize", productsFilters.minSize.toString());
            params.append("maxSize", productsFilters.maxSize.toString());
            productsFilters.prType.forEach(t => params.append("prType", t));
            return params.toString();
        };

        const fetchProducts = async () => {
            try {
                const query = buildQuery();
                const response = await fetch(`${API_URL}/products?${query}`);
                if (!response.ok) throw new Error(`Error: ${response.statusText}`);
                const data = await response.json();
                setProducts(Array.isArray(data) ? data : []);
            } catch (err) {
                console.error(err);
                setProducts([]);
            }
        };

        fetchProducts();
    }, [productsFilters, type]);

    const [showNoPetsMessage, setShowNoPetsMessage] = useState(false);
    useEffect(() => {
        const items = type === 'pets' ? pets : products;
        if (items.length === 0) {
            const timer = setTimeout(() => setShowNoPetsMessage(true), 2000);
            return () => clearTimeout(timer);
        } else {
            setShowNoPetsMessage(false);
        }
    }, [pets, products, type]);

    return (
        <div id="categoryPage">
            <AppBar backgroundColor="var(--neutral)" squareDisplay={true} />
            <Banner
                title="One More Friend"
                subtitle="Thousand More Fun!"
                text="Having a pet means you have more joy, a new friend, a happy person who will always be with you to have fun. We have 200+ different pets that can meet your needs!"
                textSide="end"
                flexDirection="row"
                backgroundImage={backgroundImage4}
                backgroundColor="var(--primary)"
                nextPage1="/"
                nextPage2="/category/pets"
                textColor="var(--neutral)"
                backgroundColorButton1="var(--terciary)"
                backgroundColorButton2="var(--neutral)"
                textColorButton1="var(--neutral)"
                textColorButton2="var(--terciary)"
                borderButton1="0.1px solid var(--neutral)"
                borderButton2="none"
            />
            <div id="category-content">
                {type === 'pets' ? (
                    <FilterMenu setPetsFilters={setPetsFilters} petsFilters={petsFilters} path='pets' />
                ) : (
                    <FilterMenu setProductsFilters={setProductsFilters} productsFilters={productsFilters} path='products' />
                )}

                <section>
                    <div>
                        {
                            type === 'pets' ? (
                                pets.length === 0 ? (
                                    showNoPetsMessage ? <p>Nenhum pet foi encontrado.</p> : <p>Carregando pets...</p>
                                ) : (
                                    pets.map(pet => (
                                        <Link to={`/details/pets/${pet.id}`} key={pet.id}>
                                            <Card
                                                type="pet"
                                                name={pet.name}
                                                genre={pet.gender}
                                                price={pet.price}
                                                image={`${API_URL}/${pet.image}`}
                                                alternativeText={`Imagem de ${pet.name}`}
                                                age={pet.age}
                                            />
                                        </Link>
                                    ))
                                )
                            ) : (
                                products.length === 0 ? (
                                    showNoPetsMessage ? <p>Nenhum produto foi encontrado.</p> : <p>Carregando produtos...</p>
                                ) : (
                                    products.map(product => (
                                        <Link to={`/details/products/${product.id}`} key={product.id}>
                                            <Card
                                                type="product"
                                                name={product.name}
                                                product={product.prType}
                                                size={product.size}
                                                price={product.price}
                                                image={`${API_URL}/${product.image}`}
                                                alternativeText={`Imagem de ${product.name}`}
                                            />
                                        </Link>
                                    ))
                                )
                            )
                        }
                    </div>

                    <div className="pagination">
                        <Button disabled={currentPage === 1} text="&lt; Anterior" backgroundColor="var(--neutral)" color="var(--terciary)" haveLink={true} border="none" onClick={() => setCurrentPage(p => Math.max(1, p - 1))} />
                        <span>Página {currentPage}</span>
                        <Button
                            disabled={
                                type === 'pets'
                                    ? pets.length < petsFilters.limit
                                    : products.length < productsFilters.limit
                            }
                            text="Próxima &gt;"
                            backgroundColor="var(--neutral)"
                            color="var(--terciary)"
                            haveLink={true}
                            border="none"
                            onClick={() => setCurrentPage(p => p + 1)}
                        />
                    </div>
                </section>
            </div>
            <Footer />
        </div>
    );
};

export default Category;
