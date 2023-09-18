import styles from "@/layout/purchase/Products.module.scss";
import ActionRedux from "@/redux/ActionRedux";
import classNames from "classnames/bind";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import Routes from "@/routes";

const cx = classNames.bind(styles);

const Products = (props) => {
  const dispatch = useDispatch();
  const [CountDelete, setCountDelte] = useState(1);
  const [Data, setData] = useState([]);
  const selector = useSelector((state) => state.CheckLogin);
  const userID = selector.UserData.id;

  useEffect(() => {
    const FetchUserFirstTimeData = async () => {
      const response = await axios.get(`${Routes.api.user}/${userID}`);
      setData(response.data);
    };
    FetchUserFirstTimeData();
  }, [CountDelete, userID]);

  const DeleteProduct = (e) => {
    console.log(e.currentTarget.id);
    let newCart = Data.cart;

    const index = newCart?.findIndex(
      (element) =>
        Number.parseInt(element.id, 10) ===
        Number.parseInt(e.currentTarget.id, 10)
    );

    newCart?.splice(index, 1);

    const FetchUserSecondTimeData = async () => {
      await axios.put(`${Routes.api.user}/${userID}`, {
        id: Data.id,
        firstname: Data.firstname,
        lastname: Data.lastname,
        phone: Data.phone,
        email: Data.email,
        password: Data.password,
        cart: [...newCart],
      });
    };
    FetchUserSecondTimeData();

    dispatch({ type: ActionRedux.DeleteSuccess, payload: CountDelete });
    setCountDelte((prev) => prev + 1);
  };

  return (
    <>
      <div className={cx("Product")}>
        <div className={cx("Product-Content")}>
          <div className={cx("Product-Content-Image")}>
            <img src={props.url} alt="hinh anh" />
          </div>
          <div className={cx("Product-Content-Name")}>
            <p className={cx("Name")}>{props.name}</p>

            <p className={cx("Description")}>{props.description}</p>
          </div>
        </div>
        <div className={cx("Product-React")}>
          <div className={cx("Product-React-Price")}>
            <span>{props.price} Đồng * </span>
          </div>

          <div className={cx("Product-React-Amount")}>
            <input type="number" placeholder="Số lượng" value={props.amount} />
          </div>

          <div className={cx("Product-React-Total")}>
            <span className={cx("Product-React-Total-Number")}>
              ={" "}
              {Number.parseInt(props.price, 10) *
                Number.parseInt(props.amount, 10)}{" "}
              đồng
            </span>
          </div>

          <div className={cx("Product-React-Delete")}>
            <button
              id={props.id}
              onClick={(e) => {
                DeleteProduct(e);
              }}
            >
              Xóa Sản Phẩm
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
