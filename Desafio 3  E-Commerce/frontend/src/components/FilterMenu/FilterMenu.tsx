import { useEffect } from 'react';
import './FilterMenu.css';

interface FiltersPets {
    limit: number;
    offset: number;
    minPrice: number;
    maxPrice: number;
    gender: string[];
    color: string[];
    size: string[];
}

interface FiltersProducts {
    limit: number;
    offset: number;
    prType: string[];
    minPrice: number;
    maxPrice: number;
    minSize: number;
    maxSize: number;
}

interface FilterMenuProps {
    setPetsFilters?: React.Dispatch<React.SetStateAction<FiltersPets>>;
    petsFilters?: FiltersPets;
    setProductsFilters?: React.Dispatch<React.SetStateAction<FiltersProducts>>;
    productsFilters?: FiltersProducts;
    path: string;
}

const FilterMenu = ({ setPetsFilters, petsFilters, productsFilters, setProductsFilters, path }: FilterMenuProps) => {
    const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, checked, type } = e.target;

        if (path === 'pets' && setPetsFilters && petsFilters) {
            if (type === 'checkbox') {
                setPetsFilters((prev) => {
                    const updatedArray = checked
                        ? [...(prev[name as keyof FiltersPets] as string[]), value]
                        : (prev[name as keyof FiltersPets] as string[]).filter((v) => v !== value);

                    return { ...prev, [name]: updatedArray };
                });
            } else {
                setPetsFilters((prev) => ({
                    ...prev,
                    [name]: value ? Number(value) : undefined,
                }));
            }
        }

        if (path === 'products' && setProductsFilters && productsFilters) {
            if (type === 'checkbox') {
                setProductsFilters((prev) => {
                    const updatedArray = checked
                        ? [...(prev[name as keyof FiltersProducts] as string[]), value]
                        : (prev[name as keyof FiltersProducts] as string[]).filter((v) => v !== value);

                    return { ...prev, [name]: updatedArray };
                });
            } else {
                setProductsFilters((prev) => ({
                    ...prev,
                    [name]: value ? Number(value) : undefined,
                }));
            }
        }
    };

    const isPetChecked = (key: keyof FiltersPets, value: string) =>
        petsFilters && Array.isArray(petsFilters[key]) && petsFilters[key].includes(value);

    const isProductChecked = (key: keyof FiltersProducts, value: string) =>
        productsFilters && Array.isArray(productsFilters[key]) && productsFilters[key].includes(value);

    return (
        <aside id="filter-menu">
            {path === 'pets' && petsFilters && (
                <>
                    <p>Gender</p>
                    {['Male', 'Female'].map((gender) => (
                        <label key={gender}>
                            <input
                                type="checkbox"
                                name="gender"
                                value={gender}
                                checked={isPetChecked('gender', gender)}
                                onChange={handleFilterChange}
                            />
                            {gender}
                        </label>
                    ))}

                    <p>Color</p>
                    {['Red', 'Apricot', 'Black', 'BlackAndWhite', 'Silver', 'Tan'].map((color) => (
                        <label key={color}>
                            <input
                                type="checkbox"
                                name="color"
                                value={color}
                                checked={isPetChecked('color', color)}
                                onChange={handleFilterChange}
                            />
                            {color}
                        </label>
                    ))}

                    <p>Price</p>
                    <input
                        type="number"
                        name="minPrice"
                        value={petsFilters.minPrice}
                        placeholder="Min"
                        onChange={handleFilterChange}
                    />
                    <input
                        type="number"
                        name="maxPrice"
                        value={petsFilters.maxPrice}
                        placeholder="Max"
                        onChange={handleFilterChange}
                    />

                    <p>Size</p>
                    {['Small', 'Medium', 'Large'].map((size) => (
                        <label key={size}>
                            <input
                                type="checkbox"
                                name="size"
                                value={size}
                                checked={isPetChecked('size', size)}
                                onChange={handleFilterChange}
                            />
                            {size}
                        </label>
                    ))}
                </>
            )}

            {path === 'products' && productsFilters && (
                <>
                    <p>Type</p>
                    {['Food', 'Costume', 'Toy'].map((type) => (
                        <label key={type}>
                            <input
                                type="checkbox"
                                name="type"
                                value={type}
                                checked={isProductChecked('prType', type)}
                                onChange={handleFilterChange}
                            />
                            {type}
                        </label>
                    ))}

                    <p>Price</p>
                    <input
                        type="number"
                        name="minPrice"
                        value={productsFilters.minPrice}
                        placeholder="Min"
                        onChange={handleFilterChange}
                    />
                    <input
                        type="number"
                        name="maxPrice"
                        value={productsFilters.maxPrice}
                        placeholder="Max"
                        onChange={handleFilterChange}
                    />

                    <p>Size</p>
                    <input
                        type="number"
                        name="minSize"
                        value={productsFilters.minSize}
                        placeholder="Min"
                        onChange={handleFilterChange}
                    />
                    <input
                        type="number"
                        name="maxSize"
                        value={productsFilters.maxSize}
                        placeholder="Max"
                        onChange={handleFilterChange}
                    />
                </>
            )}
        </aside>
    );
};

export default FilterMenu;
