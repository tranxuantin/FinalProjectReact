import styles from "@/layout/product/ProductMainPage/TableProduct/Product.module.scss";
import classNames from "classnames/bind";
import { useNavigate } from "react-router";
import Routes from "@/routes";

const cx = classNames.bind(styles);

const Product = (props) => {
  const navigate = useNavigate();

  return (
    <div
      id={props.id}
      className={cx("card")}
      onClick={(e) =>
        navigate(`${Routes.web.DetailProductPage.create}${e.currentTarget.id}`)
      }
    >
      <img className={cx("product-image")} src={props.url} alt="hinh anh" />
      <h2>{props.name}</h2>
      <p className={cx("price")}>{props.price} đ</p>
      <p>{props.description}</p>
      <p>
        <button>Add to Cart</button>
      </p>
    </div>
  );
};

export default Product;
