import styles from "@/layout/login_register_form/LoginForm.module.scss";
import Routes from "@/routes";
import classNames from "classnames/bind";
import { ErrorMessage, Form, Formik } from "formik";
import { useNavigate } from "react-router";
import validate from "./validateLogin/validate";
import { useDispatch } from "react-redux";
import axios from "axios";
import { useEffect, useState } from "react";
import ActionRedux from "@/redux/ActionRedux";

const cx = classNames.bind(styles);

const LoginForm = () => {
  const [userData, setuserData] = useState([]);
  const [PreviousPage, setPreviousPage] = useState([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const FetchUserData = async () => {
      const response = await axios.get(Routes.api.user);
      setuserData(response.data);
    };

    FetchUserData();
  }, []);

  useEffect(() => {
    const SendPreviousPage = async () => {
      const response = await axios.get(Routes.api.PreviousPage);
      setPreviousPage(response.data.page);
    };
    SendPreviousPage();
  }, []);

  const handleFormSubmit = (values) => {
    userData.map((user) => {
      if (user.email === values.email && user.password === values.password) {
        dispatch({
          type: ActionRedux.LoginSuccess,
          payload: { boolean: "True", information: user },
        });
        navigate(PreviousPage);
      }
      return 0;
    });
  };

  return (
    <>
      <header id={cx("header")}>
        <div className={cx("header-login")}>
          <span
            className={cx("header-login-welcome")}
            onClick={() => navigate(Routes.web.HomePage.index)}
          >
            WELCOME
          </span>
          <span className={cx("header-login-login")}>Đăng Nhập</span>
        </div>

        <div className={cx("header-help")}>Bạn cần giúp đỡ ?</div>
      </header>
      <main id={cx("main")}>
        <div className={cx("main-background")}>
          <img
            src={require("@/img/image2.png")}
            alt="hinh anh"
            className={cx("main-background-image")}
          />
        </div>

        <div className={cx("main-formik")}>
          <div className={cx("main-formik-form")}>
            <Formik
              initialValues={{ email: "", password: "" }}
              onSubmit={handleFormSubmit}
              validationSchema={validate}
            >
              {({ handleSubmit, handleChange, handleBlur, values }) => (
                <>
                  <span className={cx("submit-text")}>Đăng Nhập</span>

                  <Form>
                    <div id={cx("login-email")}>
                      <input
                        type="email"
                        id={cx("Email")}
                        name="email"
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="Email"
                      />
                      <ErrorMessage
                        name="email"
                        component="small"
                        className="error"
                      />
                    </div>

                    <div id={cx("login-password")}>
                      <input
                        type="password"
                        id={cx("Password")}
                        name="password"
                        value={values.password}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="password"
                      />
                      <ErrorMessage
                        name="password"
                        component="small"
                        className="error"
                      />
                    </div>
                  </Form>

                  <button
                    className={cx("submit-button")}
                    type="submit"
                    onClick={(values) => handleSubmit(values)}
                  >
                    Đăng nhập
                  </button>
                </>
              )}
            </Formik>
          </div>

          <div className={cx("main-formik-register")}>
            <span>Bạn chưa có tài khoản ? </span>
            <span
              className={cx("Register")}
              onClick={() => navigate(Routes.web.RegisterPage.index)}
            >
              Đăng ký
            </span>
          </div>
        </div>
      </main>
    </>
  );
};

export default LoginForm;
