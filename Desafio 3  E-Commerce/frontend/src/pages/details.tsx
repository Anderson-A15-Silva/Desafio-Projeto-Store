import './css/details.css';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import AppBar from '../components/AppBar/AppBar';
import CardsSection from '../components/CardsSection/CardsSection';
import ItemCarousel from '../components/ItemCarousel/ItemCarousel';
import Button from '../components/Button/Button';

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

const Details = () => {
    const params = useParams();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [item, setItem] = useState<Product | Pet | null>(null);
    const type = params.type;
    const id = params.id;

    useEffect(() => {
        const fetchItem = async () => {
            try {
                const response = await fetch(`http://localhost:3025/${type}/${id}`);
                const data = await response.json();
                console.log(data);
                setItem(data);
            } catch (error) {
                console.error('Error fetching item: ', error);
            }
        };

        fetchItem();
    }, [type, id]);

    if (!item) return <div>Carregando...</div>;

    const isPet = (item: Product | Pet): item is Pet => (item as Pet).gender !== undefined;

    return (
        <div id="detailsPage">
            <AppBar backgroundColor='var(--neutral)' squareDisplay={true} />

            {isModalOpen && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <h2>Send your message</h2>
                        <form action="http://localhost:3025/forms/" method="POST">
                            <label>
                                Nome completo: <input type="text" name="name" required />
                            </label>
                            <br />
                            <label>
                                Telefone: <input type="text" name="phone" required />
                            </label>
                            <br />
                            <label>
                                Email: <input type="email" name="email" required />
                            </label>
                            <br />
                            <label>
                                Cidade: <input type="text" name="city" required />
                            </label>
                            <br />
                            <label>
                                Estado:
                                <select name="state" id="state" required>
                                    <option value="">-- Selecione um estado --</option>
                                    <option value="">-- Selecione um estado --</option>
                                    <option value="AC">Acre</option>
                                    <option value="AL">Alagoas</option>
                                    <option value="AP">Amapá</option>
                                    <option value="AM">Amazonas</option>
                                    <option value="BA">Bahia</option>
                                    <option value="CE">Ceará</option>
                                    <option value="DF">Distrito Federal</option>
                                    <option value="ES">Espírito Santo</option>
                                    <option value="GO">Goiás</option>
                                    <option value="MA">Maranhão</option>
                                    <option value="MT">Mato Grosso</option>
                                    <option value="MS">Mato Grosso do Sul</option>
                                    <option value="MG">Minas Gerais</option>
                                    <option value="PA">Pará</option>
                                    <option value="PB">Paraíba</option>
                                    <option value="PR">Paraná</option>
                                    <option value="PE">Pernambuco</option>
                                    <option value="PI">Piauí</option>
                                    <option value="RJ">Rio de Janeiro</option>
                                    <option value="RN">Rio Grande do Norte</option>
                                    <option value="RS">Rio Grande do Sul</option>
                                    <option value="RO">Rondônia</option>
                                    <option value="RR">Roraima</option>
                                    <option value="SC">Santa Catarina</option>
                                    <option value="SP">São Paulo</option>
                                    <option value="SE">Sergipe</option>
                                    <option value="TO">Tocantins</option>
                                </select>
                            </label>
                            <br />
                            <div className='chat-butons'>
                                <Button type='submit' backgroundColor='var(--terciary)' color='var(--neutral)' haveLink={false} onClick={() => setIsModalOpen(true)} text="Enviar" border='none' />
                                <Button backgroundColor='var(--neutral)' color='var(--terciary)' haveLink={false} onClick={() => setIsModalOpen(false)} text="Fechar" border='none' />
                            </div>
                        </form>
                    </div>
                </div>
            )}

            <section id='item-details'>
                <div id='left-div'>
                    <ItemCarousel
                        type='profile'
                        images={[
                            `http://localhost:3025/${item.image}`,
                            'http://localhost:3025/uploads/pets/dog-2.jpg',
                            'http://localhost:3025/uploads/pets/dog-3.png',
                            'http://localhost:3025/uploads/pets/dog-4.jpg',
                            'http://localhost:3025/uploads/pets/dog-5.jpg']}
                        height='100px' width='400px' />
                </div>

                <div id='right-div'>
                    <h2>{item.name}</h2>
                    <div className='chat-buttons'>
                        <Button text='Contact Us' backgroundColor='var(--terciary)' color='var(--neutral)' border='none' haveLink={false} onClick={() => setIsModalOpen(true)} />
                        <Button text='Chat with Monica' backgroundColor='var(--neutral)' color='var(--terciary)' border='0.1px solid var(--terciary)' haveLink={false} />
                    </div>

                    {isPet(item) ? (
                        <div id='item-description'>
                            <div>
                                <div><p>SKU</p></div>
                                <div>{item.sku}</div>
                            </div>
                            <div>
                                <div><p>Gender</p></div>
                                <div>{item.gender}</div>
                            </div>
                            <div>
                                <div><p>Age</p></div>
                                <div>{item.age}</div>
                            </div>
                            <div>
                                <div><p>Size</p></div>
                                <div>{item.size}</div>
                            </div>
                            <div>
                                <div><p>Color</p></div>
                                <div>{item.color.split("And").join(" ")}</div>
                            </div>
                            <div>
                                <div><p>Vaccinated</p></div>
                                <div>{item.vaccinated ? 'Yes' : 'No'}</div>
                            </div>
                            <div>
                                <div><p>Dewormed</p></div>
                                <div>{item.dewormed ? 'Yes' : 'No'}</div>
                            </div>
                            <div>
                                <div><p>Cert</p></div>
                                <div>{item.cert ? 'Yes' : 'No'}</div>
                            </div>
                            <div>
                                <div><p>Microchip</p></div>
                                <div>{item.microchip ? 'Yes' : 'No'}</div>
                            </div>
                            <div>
                                <div><p>Location</p></div>
                                <div>{item.location}</div>
                            </div>
                            <div>
                                <div><p>Published Date</p></div>
                                <div>{item.publishedDate}</div>
                            </div>
                            <div>
                                <div><p>Additional Information</p></div>
                                <div>{item.additionalInformation || 'None'}</div>
                            </div>
                        </div>
                    ) : (
                        <div id='item-description'>
                            <div>
                                <div><p>Name</p></div>
                                <div>{item.name}</div>
                            </div>
                            <div>
                                <div><p>Type</p></div>
                                <div>{item.prType}</div>
                            </div>
                            <div>
                                <div><p>Price</p></div>
                                <div>{item.price}</div>
                            </div>
                            <div>
                                <div><p>Size</p></div>
                                <div>{item.size}</div>
                            </div>
                        </div>
                    )}
                </div>
            </section>

            <section id='customers-details'>
                <h2>Our lovely customers</h2>
                <div id='customers-imgs'>
                    <ItemCarousel
                        type='section'
                        images={[
                            'http://localhost:3025/uploads/customers/customer-1.png', 
                            'http://localhost:3025/uploads/customers/customer-2.png',
                            'http://localhost:3025/uploads/customers/customer-3.png',
                            'http://localhost:3025/uploads/customers/customer-4.png',
                            'http://localhost:3025/uploads/customers/customer-5.png']}
                        width='100%' height='320px' />
                </div>
            </section>

            <CardsSection
                title="What's new?"
                text="See More Puppies"
                cardType="pet"
                limit={4}
            />
        </div>
    );
};

export default Details;
