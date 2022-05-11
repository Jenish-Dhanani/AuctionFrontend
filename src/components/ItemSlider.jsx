import { ProductCard } from './ProductCard'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
    slidesToSlide: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 768, min: 567 },
    items: 2,
    slidesToSlide: 2 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 567, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};



const ItemSlider = ({ products, role, handleOnDeleteBtnClick }) => {
  return (
    <Carousel responsive={responsive}
      containerClass="bg-dark p-5"
      showDots={true}
      ssr={true} // means to render carousel on server-side.
      autoPlaySpeed={4000}
      autoPlay={true}
    >


        {products && products.slice(0, 5).map((product, index) => {
          return <ProductCard product={product} key={index} role={role} handleOnDeleteBtnClick={handleOnDeleteBtnClick} />
        })}
    </Carousel>)
}

export { ItemSlider }