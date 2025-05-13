import Card from "../Card/Card";
import cat1 from '../../assets/imgs/cat-1.png';
import "./CardsSection.css";
import { JSX } from "react";
import Button from "../Button/Button";

interface CardsSectionProps {
  title: string;
  text: string;
  type: string;
}

const CardsSection = ({ title, text, type }: CardsSectionProps): JSX.Element => {
  if (type === "product") {
    return (
      <section id="cards-section">
        <div id="card-header">
          <div>
            <h2>{title}</h2>
            <p>{text}</p>
          </div>
          <Button text="View More" backgroundColor="var(--neutral)" color="var(--terciary)" haveLink={true} nextPage="/category" border="0.1px solid var(--terciary)" />
        </div>
        <div id="card-content">
          <Card type='product' name='a' product='a' image={cat1} alternativeText='#' size='a' price={13} text='a' />
          <Card type='product' name='a' product='a' image={cat1} alternativeText='#' size='a' price={13} text='a' />
          <Card type='product' name='a' product='a' image={cat1} alternativeText='#' size='a' price={13} text='a' />
          <Card type='product' name='a' product='a' image={cat1} alternativeText='#' size='a' price={13} text='a' />
          <Card type='product' name='a' product='a' image={cat1} alternativeText='#' size='a' price={13} text='a' />
          <Card type='product' name='a' product='a' image={cat1} alternativeText='#' size='a' price={13} text='a' />
          <Card type='product' name='a' product='a' image={cat1} alternativeText='#' size='a' price={13} text='a' />
          <Card type='product' name='a' product='a' image={cat1} alternativeText='#' size='a' price={13} text='a' />
        </div>
      </section>
    );
  }

  if (type === 'pet') {
    return (
      <section id="cards-section">
        <div id="card-header">
          <div>
            <h2>{title}</h2>
            <p>{text}</p>
          </div>
          <Button text="View More" backgroundColor="var(--neutral)" color="var(--terciary)" haveLink={true} nextPage="/category" border="0.1px solid var(--terciary)" />
        </div>
        <div id="card-content">
          <Card type='pet' name='a' genre='a' image={cat1} alternativeText='#' age={1} price={13} />
          <Card type='pet' name='a' genre='a' image={cat1} alternativeText='#' age={1} price={13} />
          <Card type='pet' name='a' genre='a' image={cat1} alternativeText='#' age={1} price={13} />
          <Card type='pet' name='a' genre='a' image={cat1} alternativeText='#' age={1} price={13} />
          <Card type='pet' name='a' genre='a' image={cat1} alternativeText='#' age={1} price={13} />
          <Card type='pet' name='a' genre='a' image={cat1} alternativeText='#' age={1} price={13} />
          <Card type='pet' name='a' genre='a' image={cat1} alternativeText='#' age={1} price={13} />
          <Card type='pet' name='a' genre='a' image={cat1} alternativeText='#' age={1} price={13} />
        </div>
      </section>
    );
  }

  if (type === 'informative') {
    return (
      <section id="cards-section">
        <div id="card-header">
          <div>
            <h2>{title}</h2>
            <p>{text}</p>
          </div>
          <Button backgroundColor="var(--neutral)" color="(--terciary)" border="1px solid var(--terciary)" text="View more" haveLink={true} nextPage="/category" />
        </div>
        <div id="card-content">
          <Card type='informative' name='a' image={cat1} alternativeText='#' description='The Pomeranian, also known as the Pomeranian (Pom dog), is always in the top of the cutest pets. Not only that, the small, lovely, smart, friendly, and skillful circus dog breed.' />
          <Card type='informative' name='a' image={cat1} alternativeText='#' description='The Pomeranian, also known as the Pomeranian (Pom dog), is always in the top of the cutest pets. Not only that, the small, lovely, smart, friendly, and skillful circus dog breed.' />
          <Card type='informative' name='a' image={cat1} alternativeText='#' description='The Pomeranian, also known as the Pomeranian (Pom dog), is always in the top of the cutest pets. Not only that, the small, lovely, smart, friendly, and skillful circus dog breed.' />
        </div>
      </section>
    );
  }

  return <div>Cards section not found</div>;
};

export default CardsSection;