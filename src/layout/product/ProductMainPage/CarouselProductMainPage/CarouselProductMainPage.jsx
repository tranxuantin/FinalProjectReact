import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Product from "./Product";
import styles from "@/layout/product/ProductMainPage/CarouselProductMainPage/CarouselProductMainPage.module.scss";
import classNames from "classnames/bind";
import { useEffect, useState } from "react";
import axios from "axios";
import Routes from "@/routes";

const cx = classNames.bind(styles);

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    slidesToSlide: 2,
  },
};

const CarouselProductMainPage = () => {
  const [ProductsData, setProductsData] = useState([]);

  useEffect(() => {
    const FetchProductsData = async () => {
      const response = await axios.get(Routes.api.product);
      setProductsData(response.data);
    };
    FetchProductsData();
  }, []);

  return (
    <>
      <div className={cx("Product-Caurosel")}>
        <h1 className={cx("Product-Caurosel-Text")}>GỢI Ý CHO BẠN</h1>
        <Carousel
          showDots={false}
          responsive={responsive}
          className={cx("Product-Caurosel-Caurosel")}
        >
          {ProductsData.map((item) => {
            return (
              <Product
                key={item.id}
                id={item.id}
                name={item.name}
                url={item.imageurl}
                price={item.price}
                description={item.description}
              />
            );
          })}
        </Carousel>
      </div>
    </>
  );
};

export default CarouselProductMainPage;
