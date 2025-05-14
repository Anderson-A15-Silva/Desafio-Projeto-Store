import Card from "../Card/Card";
import "./CardsSection.css";
import { JSX, useEffect, useState } from "react";
import Button from "../Button/Button";
import { Link } from "react-router-dom";

interface CardsSectionProps {
  title: string;
  text: string;
  cardType: string;
  limit: number;
}

interface Pet {
  price: number;
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

const CardsSection = ({ title, text, cardType, limit }: CardsSectionProps): JSX.Element => {
  const API_URL = 'http://localhost:3025';

  const [pets, setPets] = useState<Pet[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const [petsFilters, setPetsFilters] = useState({
    limit: limit,
    offset: 0,
    minPrice: 0,
    maxPrice: 1000,
    gender: [] as string[],
    color: [] as string[],
    size: [] as string[]
  });

  const [productsFilters, setProductsFilters] = useState({
    limit: limit,
    offset: 0,
    prType: [] as string[],
    minPrice: 0,
    maxPrice: 1000,
    minSize: 0,
    maxSize: 1000
  });

  if (cardType === 'pet') {
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

        console.log('API URL:', url);

        const response = await fetch(url);

        if (!response.ok) {
          let errorMessage = `Error fetching pets: ${response.statusText}`;

          try {
            const errorBody = await response.json();
            errorMessage += ` - Details: ${JSON.stringify(errorBody)}`;
          } catch (error) {
            console.error("Error trying to capture response details: ", error);
          }

          throw new Error(errorMessage);
        }


        const data = await response.json();
        console.log('Datas received:', data);

        if (data && Array.isArray(data)) {
          setPets(data);
        } else {
          console.error('Invalid Data Received: ', data);
          setPets([]);
        }
      } catch (error) {
        console.error('Error fetching pets: ', error);
        setPets([]);
      }
    };

    useEffect(() => {
      fetchPets();
    }, [petsFilters]);
  }

  if (cardType === 'product') {
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

        console.log('API URL: ', url);

        const response = await fetch(url);

        if (!response.ok) {
          let errorMessage = `Error while fetching products: ${response.statusText}`;

          try {
            const errorBody = await response.json();
            errorMessage += ` - Details: ${JSON.stringify(errorBody)}`;
          } catch (error) {
            console.error("Error trying to capture response details: ", error);
          }

          throw new Error(errorMessage);
        }


        const data = await response.json();
        console.log('Datas received:', data);

        if (data && Array.isArray(data)) {
          setProducts(data);
        } else {
          console.error('Invalid datas received: ', data);
          setProducts([]);
        }
      } catch (error) {
        console.error('Error while fetching products: ', error);
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

  if (cardType === "product") {
    return (
      <section id="cards-section">
        <div id="card-header">
          <div>
            <h2>{title}</h2>
            <p>{text}</p>
          </div>
          <Button text="View More" backgroundColor="var(--neutral)" color="var(--terciary)" haveLink={true} nextPage="/category/products" border="0.1px solid var(--terciary)" />
        </div>
        <div id="card-content">
          {
            products.length === 0 ? (
              showNoPetsMessage ? (
                <p>Nenhum produto foi encontrado.</p>
              ) : (
                <p>Carregando pets...</p>
              )
            ) : (
              products.map(product => (
                <Link to={`/details/${cardType}s/${product.id}`}>
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
                </Link>
              ))
            )
          }
        </div>
      </section>
    );
  }

  if (cardType === 'pet') {
    return (
      <section id="cards-section">
        <div id="card-header">
          <div>
            <h2>{title}</h2>
            <p>{text}</p>
          </div>
          <Button text="View More" backgroundColor="var(--neutral)" color="var(--terciary)" haveLink={true} nextPage="/category/pets" border="0.1px solid var(--terciary)" />
        </div>
        <div id="card-content">
          {
            pets.length === 0 ? (
              showNoPetsMessage ? (
                <p>Nenhum pet foi encontrado.</p>
              ) : (
                <p>Carregando pets...</p>
              )
            ) : (
              pets.map(pet => (
                <Link to={`/details/${cardType}s/${pet.id}`}>
                  <Card
                    type="pet"
                    key={pet.id}
                    name={pet.name}
                    genre={pet.gender}
                    image={`${API_URL}/${pet.image}`}
                    price={pet.price}
                    alternativeText={`Imagem de ${pet.name}`}
                    age={pet.age}
                  />
                </Link>
              ))
            )
          }
        </div>
      </section>
    );
  }

  if (cardType === 'informative') {
    return (
      <section id="cards-section">
        <div id="card-header">
          <div>
            <h2>{title}</h2>
            <p>{text}</p>
          </div>
          <Button backgroundColor="var(--neutral)" color="(--terciary)" border="1px solid var(--terciary)" text="View more" haveLink={true} nextPage="/category/pets" />
        </div>
        <div id="card-content">
          <Card type='informative' name='Pet knowledge' image='http://localhost:3025/uploads/posts/post-1.png' alternativeText='#' description='The Pomeranian, also known as the Pomeranian (Pom dog), is always in the top of the cutest pets. Not only that, the small, lovely, smart, friendly, and skillful circus dog breed.' />
          <Card type='informative' name='Pet knowledge' image='http://localhost:3025/uploads/posts/post-2.jpg' alternativeText='#' description='The Pomeranian, also known as the Pomeranian (Pom dog), is always in the top of the cutest pets. Not only that, the small, lovely, smart, friendly, and skillful circus dog breed.' />
          <Card type='informative' name='Pet knowledge' image='http://localhost:3025/uploads//posts/post-3.png' alternativeText='#' description='The Pomeranian, also known as the Pomeranian (Pom dog), is always in the top of the cutest pets. Not only that, the small, lovely, smart, friendly, and skillful circus dog breed.' />
        </div>
      </section>
    );
  }

  return <div>Cards section not found</div>;
};

export default CardsSection;