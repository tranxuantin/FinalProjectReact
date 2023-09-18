import styles from "@/layout/product/ProductMainPage/ProductMainPage.module.scss";
import classNames from "classnames/bind";
import CarouselProductMainPage from "./CarouselProductMainPage/CarouselProductMainPage";
import TableProduct from "./TableProduct/TableProduct";

const cx = classNames.bind(styles);

const ProductMainPage = () => {
  return (
    <>
      <main>
        <div className={cx("space")}></div>
        <TableProduct />
        <CarouselProductMainPage />
      </main>
    </>
  );
};

export default ProductMainPage;
