import styles from "./HeaderScss.module.scss";
import classNames from "classnames/bind";
import { useNavigate } from "react-router";
import Routes from "@/routes";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import ActionRedux from "@/redux/ActionRedux";

const cx = classNames.bind(styles);

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const selector = useSelector((state) => state.CheckLogin);
  const CheckLog = selector.CheckLogin;

  const handleSignOut = () => {
    dispatch({ type: ActionRedux.LoginSuccess, payload: "" });
    navigate(Routes.web.HomePage.index);
  };

  return (
    <>
      <header id={cx("header")}>
        <div className={cx("container-navbar")}>
          <div className={cx("container-navbar-contact")}>
            <div
              className={cx("container-navbar-contact-items")}
              onClick={() => {
                navigate(Routes.web.HomePage.index);
              }}
            >
              <span className={cx("text-special")}>Home Page</span>
            </div>
            <div className={cx("container-navbar-contact-items")}>
              <i className={cx("fa-brands fa-discord icon")}></i>
              <span className={cx("text")}>Discord</span>
            </div>
            <div className={cx("container-navbar-contact-items")}>
              <i className={cx("fa-brands fa-twitter icon")}></i>
              <span className={cx("text")}>Twitter</span>
            </div>
          </div>

          <div className={cx("container-navbar-space")}></div>

          <div className={cx("container-navbar-menu")}>
            <ul className={cx("container-navbar-menu-list")}>
              <li className={cx("container-navbar-menu-list-items")}>
                Thông báo
              </li>
              <li className={cx("container-navbar-menu-list-items")}>Hỗ trợ</li>
              <li
                className={cx("container-navbar-menu-list-items")}
                onClick={() => {
                  navigate(Routes.web.LoginPage.index);
                }}
              >
                {!CheckLog && "Đăng nhập"}
              </li>
              <li
                className={cx("container-navbar-menu-list-items")}
                onClick={() => {
                  navigate(Routes.web.RegisterPage.index);
                }}
              >
                {!CheckLog && "Đăng ký"}
              </li>
              <li
                className={cx("container-navbar-menu-list-items")}
                onClick={() => {
                  handleSignOut();
                }}
              >
                {!CheckLog && ""}
                {CheckLog && "Đăng xuất"}
              </li>
            </ul>
          </div>
        </div>

        <div className={cx("container-wrapper")}>
          <ul className={cx("container-wrapper-menu")}>
            <li className={cx("container-wrapper-menu-list")}>
              <i class="fa-solid fa-bolt"></i>Đồ điện tử
              <ul></ul>
            </li>
            <li className={cx("container-wrapper-menu-list")}>
              <i class="fa-solid fa-house"></i>Hàng gia dụng
            </li>
            <li className={cx("container-wrapper-menu-list")}>
              <i class="fa-solid fa-cash-register"></i>Thiết bị
            </li>
            <li className={cx("container-wrapper-menu-list")}>
              <i class="fa-solid fa-shirt"></i>Thời trang
            </li>
            <li className={cx("container-wrapper-menu-list")}>
              <i class="fa-solid fa-glasses"></i>Phụ kiện
            </li>
            <li className={cx("container-wrapper-menu-list")}>
              <i class="fa-solid fa-heart-pulse"></i>Sức khỏe
            </li>
            <li className={cx("container-wrapper-menu-list")}>
              <i class="fa-solid fa-burger"></i>Thực phẩm
            </li>
          </ul>

          <div className={cx("container-wrapper-button")}>
            <div className={cx("container-wrapper-button-cart")}>
              <button
                className={cx("container-wrapper-button-cart-button")}
                onClick={() => navigate(Routes.web.PurchasePage.index)}
              >
                Giỏ Hàng
              </button>
            </div>
            <div className={cx("container-wrapper-button-buy")}>
              <button
                className={cx("container-wrapper-button-buy-button")}
                onClick={() => navigate(Routes.web.PurchasePage.index)}
              >
                Mua Hàng
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
