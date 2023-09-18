import classNames from "classnames/bind";
import styles from "@/layout/product/ProductDetail/ProductDetail.module.scss";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Routes from "@/routes";
import axios from "axios";
import { useSelector } from "react-redux";

const cx = classNames.bind(styles);

const ProductDetail = () => {
  const params = useParams();
  const [ProductsData, setProductsData] = useState([]);
  const [UserData, setUserData] = useState([]);
  const [Count, setCount] = useState(1);
  const navigate = useNavigate();
  const selector = useSelector((state) => state.CheckLogin);
  const Login = selector.CheckLogin;
  const userID = selector.UserData.id;

  useEffect(() => {
    if (Login) {
      const FetchUserData = async () => {
        const response = await axios.get(`${Routes.api.user}/${userID}`);
        setUserData(response.data);
      };
      FetchUserData();
    }
  }, [Count, userID, Login]);

  useEffect(() => {
    const FetchProductData = async () => {
      const response = await axios.get(
        `${Routes.api.product}/${params.IDProduct}`
      );
      setProductsData(response.data);
    };
    FetchProductData();
  }, [params.IDProduct]);

  const handleadd = () => {
    if (Login) {
      const Amount = document.getElementById("Amount").value;
      let OldAmount = 0;

      if (Amount !== "") {
        const cart = UserData.cart;
        const Cart = UserData.cart;
        const index = cart.findIndex(
          (element) =>
            Number.parseInt(element.id, 10) ===
            Number.parseInt(params.IDProduct, 10)
        );

        if (index >= 0) {
          OldAmount = cart[index]?.amount;
          const NewAmount =
            Number.parseInt(OldAmount, 10) + Number.parseInt(Amount, 10);

          const Newcart = {
            id: cart[index].id,
            imageurl: cart[index].imageurl,
            name: cart[index].name,
            price: cart[index].price,
            description: cart[index].description,
            amount: NewAmount,
          };

          Cart.splice(index, 1);

          const FinalCart = Cart.concat(Newcart);

          console.log(FinalCart);

          const UploadCart = async () => {
            await axios.put(`${Routes.api.user}/${userID}`, {
              lastname: UserData.lastname,
              firstname: UserData.firstname,
              phone: UserData.phone,
              email: UserData.email,
              password: UserData.password,
              cart: [...FinalCart],
            });
          };
          UploadCart();
        } else {
          const OldCart = UserData.cart;
          const NewProductsData = {
            ...ProductsData,
            amount: Number.parseInt(Amount, 10),
          };
          const NewCart = OldCart.concat(NewProductsData);
          const UploadCart = async () => {
            await axios.put(`${Routes.api.user}/${userID}`, {
              lastname: UserData.lastname,
              firstname: UserData.firstname,
              phone: UserData.phone,
              email: UserData.email,
              password: UserData.password,
              cart: [...NewCart],
            });
          };
          UploadCart();
        }
        setCount((prev) => prev + 1);

        alert("Đã thêm sản phẩm vào giỏ hàng");
      } else {
        alert("Không được để trống số lượng");
      }
    } else {
      navigate(Routes.web.LoginPage.index);
    }
  };

  const handleaddImmediate = () => {
    if (Login) {
      const Amount = document.getElementById("Amount").value;
      let OldAmount = 0;

      if (Amount !== "") {
        const cart = UserData.cart;
        const Cart = UserData.cart;
        const index = cart.findIndex(
          (element) =>
            Number.parseInt(element.id, 10) ===
            Number.parseInt(params.IDProduct, 10)
        );

        if (index >= 0) {
          OldAmount = cart[index]?.amount;
          const NewAmount =
            Number.parseInt(OldAmount, 10) + Number.parseInt(Amount, 10);

          const Newcart = {
            id: cart[index].id,
            imageurl: cart[index].imageurl,
            name: cart[index].name,
            price: cart[index].price,
            description: cart[index].description,
            amount: NewAmount,
          };

          Cart.splice(index, 1);

          const FinalCart = Cart.concat(Newcart);

          console.log(FinalCart);

          const UploadCart = async () => {
            await axios.put(`${Routes.api.user}/${userID}`, {
              lastname: UserData.lastname,
              firstname: UserData.firstname,
              phone: UserData.phone,
              email: UserData.email,
              password: UserData.password,
              cart: [...FinalCart],
            });
          };
          UploadCart();
        } else {
          const OldCart = UserData.cart;
          const NewProductsData = {
            ...ProductsData,
            amount: Number.parseInt(Amount, 10),
          };
          const NewCart = OldCart.concat(NewProductsData);
          const UploadCart = async () => {
            await axios.put(`${Routes.api.user}/${userID}`, {
              lastname: UserData.lastname,
              firstname: UserData.firstname,
              phone: UserData.phone,
              email: UserData.email,
              password: UserData.password,
              cart: [...NewCart],
            });
          };
          UploadCart();
        }
        setCount((prev) => prev + 1);

        alert("Đã thêm sản phẩm vào giỏ hàng");
      } else {
        alert("Không được để trống số lượng");
      }
    } else {
      navigate(Routes.web.LoginPage.index);
    }

    navigate(Routes.web.PurchasePage.index);
  };

  return (
    <>
      <main id={cx("main")} className={cx("Product-Detail")}>
        <div className={cx("Product-Detail-Image")}>
          <img src={`${ProductsData.imageurl}`} alt="hinh anh" />
        </div>

        <div className={cx("Product-Detail-Introduce")}>
          <div className={cx("Product-Detail-Introduce-Information")}>
            <h1>{ProductsData.name}</h1>

            <p>{ProductsData.description}</p>

            <div className={cx("Product-Detail-Introduce-Information-Price")}>
              <span
                className={cx(
                  "Product-Detail-Introduce-Information-Price-Money"
                )}
              >
                {ProductsData.price} đ
              </span>

              <div
                className={cx(
                  "Product-Detail-Introduce-Information-Price-Amount"
                )}
              >
                <input type="number" placeholder="Số lượng" id="Amount" />
              </div>
            </div>
          </div>

          <div className={cx("Product-Detail-Introduce-Button")}>
            <div>
              <button
                className={cx("Product-Detail-Introduce-Button-Left")}
                onClick={() => handleadd()}
              >
                Thêm vào giỏ hàng
              </button>
            </div>
            <div>
              <button
                className={cx("Product-Detail-Introduce-Button-Right")}
                onClick={() => handleaddImmediate()}
              >
                Mua ngay
              </button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default ProductDetail;
