import { useEffect, useState } from 'react';
import './ItemCarousel.css';

interface ItemCarouselProps {
  images: string[];
  width: string;
  height: string;
  type: string;
}

const ItemCarousel = ({ images, width, height, type }: ItemCarouselProps) => {
  const  items = images || [];

  const [mainImage, setMainImage] = useState(images[0]); 

  useEffect(() => {
  if (images && images.length > 0) {
    setMainImage(images[0]);
  }
}, [images]);

  const changeMainImage = (src: string) => {
    setMainImage(src);
  };


  if (type === 'section') {
    return (
    <section className="item-carousel" style={{ width: width, height: height }}>
      <div className="carousel-track">
        {items.map((src, index) => (
          <div className="carousel-card" key={index}>
            <img src={src} alt={`Item ${index + 1}`} />
          </div>
        ))}
      </div>
    </section>
  );
  }

  if (type === 'profile') {
    return (
    <section className="item-carousel" style={{ width, height }}>
      <div className="main-image">
        <img src={mainImage} alt="Main" />
      </div>

      <div className="carousel-track">
        {images.map((src, index) => (
          <div
            className={`carousel-card ${src === mainImage ? 'active' : ''}`}
            key={index}
            onClick={() => changeMainImage(src)}
          >
            <img className='bottom-img' src={src} alt={`Item ${index + 1}`} />
          </div>
        ))}
      </div>
    </section>
  );
  }
};

export default ItemCarousel;