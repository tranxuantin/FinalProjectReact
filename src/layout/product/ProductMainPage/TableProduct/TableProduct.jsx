import axios from "axios";
import Product from "./Product";
import styles from "@/layout/product/ProductMainPage/TableProduct/TableProduct.module.scss";
import classNames from "classnames/bind";
import { useEffect, useState } from "react";
import Routes from "@/routes";

const cx = classNames.bind(styles);

const TableProduct = () => {
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
      <div className={cx("Product-Table")}>
        <div className={cx("Product-Table-Text")}>GỢI Ý CHO BẠN</div>
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
      </div>
    </>
  );
};

export default TableProduct;
