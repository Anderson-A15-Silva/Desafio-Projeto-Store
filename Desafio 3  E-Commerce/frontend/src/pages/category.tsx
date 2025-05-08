import Card from "../components/Card/Card";
import cat1 from "../assets/imgs/cat-1.png";
import "./css/category.css";
import AppBar from "../components/AppBar/AppBar";
import FilterMenu from "../components/FilterMenu/FilterMenu";

const Category = () => {
    return (
        <div id="categoryPage">
            <AppBar/>
            <div id="third-banner">

            </div>
            <FilterMenu/>
            <section>
                <div>
                    <Card name='a' genre='a' image={cat1} alternativeText='#' age={13}></Card>
                    <Card name='a' genre='a' image={cat1} alternativeText='#' age={13}></Card>
                    <Card name='a' genre='a' image={cat1} alternativeText='#' age={13}></Card>
                    <Card name='a' genre='a' image={cat1} alternativeText='#' age={13}></Card>
                    <Card name='a' genre='a' image={cat1} alternativeText='#' age={13}></Card>
                    <Card name='a' genre='a' image={cat1} alternativeText='#' age={13}></Card>
                    <Card name='a' genre='a' image={cat1} alternativeText='#' age={13}></Card>
                    <Card name='a' genre='a' image={cat1} alternativeText='#' age={13}></Card>
                    <Card name='a' genre='a' image={cat1} alternativeText='#' age={13}></Card>
                    <Card name='a' genre='a' image={cat1} alternativeText='#' age={13}></Card>
                    <Card name='a' genre='a' image={cat1} alternativeText='#' age={13}></Card>
                    <Card name='a' genre='a' image={cat1} alternativeText='#' age={13}></Card>
                    <Card name='a' genre='a' image={cat1} alternativeText='#' age={13}></Card>
                    <Card name='a' genre='a' image={cat1} alternativeText='#' age={13}></Card>
                    <Card name='a' genre='a' image={cat1} alternativeText='#' age={13}></Card>
                    <Card name='a' genre='a' image={cat1} alternativeText='#' age={13}></Card>
                </div>
            </section>
        </div>
    )
}

export default Category;