import { useState } from 'react';
import './FilterMenu.css';

const FilterMenu = () => {
    const [selectedGender, setSelectedGender] = useState("");
    const [selectedColor, setSelectedColor] = useState("");
    const [selectedSize, setSelectedSize] = useState("");

    return (
        <aside>
            <p>Gender</p>
            <label htmlFor="radioGenderMale">
                <input type="radio" name="n_radioGender" id="radioGenderMale" /> Male
            </label>
            <label htmlFor="radioGenderFemale">
                <input type="radio" name="n_radioGender" id="radioGenderFemale" /> Female
            </label>
            
            <p>Color</p>
            <label htmlFor="radioColorRed">
                <input type="radio" name="n_radioColor" id="radioColorRed" /> Red
            </label>
            <label htmlFor="radioColorApricot">
                <input type="radio" name="n_radioColor" id="radioColorApricot" /> Apricot
            </label>
            <label htmlFor="radioColorBlack">
                <input type="radio" name="n_radioColor" id="radioColorBlack" /> Black
            </label>
            <label htmlFor="radioColorBlackAndWhite">
                <input type="radio" name="n_radioColor" id="radioColorBlackAndWhite" /> Black & White
            </label>
            <label htmlFor="radioColorSilver">
                <input type="radio" name="n_radioColor" id="radioColorSilver" /> Silver
            </label>
            <label htmlFor="radioColorTan">
                <input type="radio" name="n_radioColor" id="radioColorTan" /> Tan
            </label>
            <p>Price</p>
            <input type="number" name="n_inputPriceMin" id="inputPriceMin" min={0}/>
            <input type="number" name="n_inpurPriceMax" id="inputPriceMax" min={1}/>
            <p>Size</p>
        </aside>
    );
}

export default FilterMenu;