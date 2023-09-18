import styles from "@/layout/purchase/Purchase.module.scss";
import classNames from "classnames/bind";
import Products from "./Products";
import { useEffect, useState } from "react";
import axios from "axios";
import Routes from "@/routes";
import { useSelector } from "react-redux";

const cx = classNames.bind(styles);

const Purchase = () => {
  const [UserData, setUserData] = useState([]);
  const [UserData1, setUserData1] = useState([]);
  const [buyAll, setbuyAll] = useState(1);
  const selector = useSelector((state) => state.CheckLogin);
  const userID = selector.UserData.id;
  const Login = selector.CheckLogin;
  const Delete = useSelector((state) => state.CheckDelete);
  const ChangeDelete = Delete.CheckDelete;
  let total = 0;

  useEffect(() => {
    if (Login) {
      const FetchUserData = async () => {
        const response = await axios.get(`${Routes.api.user}/${userID}`);
        setUserData(response.data.cart);
        setUserData1(response.data);
      };
      FetchUserData();
    }
  }, [ChangeDelete, Login, userID, buyAll]);

  const BuyAll = () => {
    if (Login) {
      const FetchUserData = async () => {
        await axios.put(`${Routes.api.user}/${userID}`, {
          id: UserData1.id,
          firstname: UserData1.firstname,
          lastname: UserData1.lastname,
          phone: UserData1.phone,
          email: UserData1.email,
          password: UserData1.password,
          cart: [],
        });
      };
      FetchUserData();

      setbuyAll((prev) => prev + 1);
    }
  };

  const AllTotalOfEachProduct = UserData.map((item) => {
    return Number.parseInt(item.price, 10) * Number.parseInt(item.amount, 10);
  });

  for (let index = 0; index < AllTotalOfEachProduct.length; index++) {
    total = total + Number.parseInt(AllTotalOfEachProduct[index], 10);
  }

  return (
    <>
      <main id={cx("Purchase")}>
        {UserData.map((item) => {
          return (
            <Products
              key={item.id}
              id={item.id}
              name={item.name}
              url={item.imageurl}
              price={item.price}
              description={item.description}
              amount={item.amount}
            />
          );
        })}

        <div className={cx("Purchase-Total")}>
          <div className={cx("Purchase-Total-Price")}>
            <span>Tổng tiền: {total} đồng</span>
          </div>
          <button
            className={cx("Purchase-Total-Buy")}
            onClick={() => {
              BuyAll();
            }}
          >
            Mua Hàng
          </button>
        </div>
      </main>
    </>
  );
};

export default Purchase;
