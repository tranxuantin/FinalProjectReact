import styles from "@/layout/login_register_form/RegisterForm.module.scss";
import classNames from "classnames/bind";
import { ErrorMessage, Form, Formik } from "formik";
import { useNavigate } from "react-router";
import Routes from "@/routes";
import validate from "./validateRegister/validate";
import axios from "axios";

const cx = classNames.bind(styles);

const RegisterForm = () => {
  const navigate = useNavigate();

  const handleFormSubmit = (values) => {
    const UploadData = async () => {
      await axios.post(Routes.api.user, {
        lastname: values.lastname,
        firstname: values.firstname,
        phone: values.phone,
        email: values.email,
        password: values.password,
      });
    };

    UploadData();

    navigate(Routes.web.LoginPage.index);
  };

  return (
    <>
      <header id={cx("header")}>
        <div className={cx("header-register")}>
          <span
            className={cx("header-register-welcome")}
            onClick={() => navigate(Routes.web.HomePage.index)}
          >
            WELCOME
          </span>
          <span className={cx("header-register-register")}>Đăng Ký</span>
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
              initialValues={{
                lastname: "",
                firstname: "",
                phone: "",
                email: "",
                password: "",
                confirmpassword: "",
                checkboxRule: "",
              }}
              onSubmit={handleFormSubmit}
              validationSchema={validate}
            >
              {({ handleSubmit, handleChange, handleBlur, values }) => (
                <>
                  <span className={cx("submit-text")}>Đăng Ký</span>

                  <Form className={cx("submit-form")}>
                    <div id={cx("register-name")}>
                      <div id={cx("register-lastname")}>
                        <input
                          type="text"
                          id={cx("LastName")}
                          name="lastname"
                          value={values.lastname}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          placeholder="Họ"
                        />
                        <ErrorMessage
                          name="lastname"
                          component="small"
                          className="error"
                        />
                      </div>

                      <div id={cx("register-firstname")}>
                        <input
                          type="text"
                          id={cx("FirstName")}
                          name="firstname"
                          value={values.firstname}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          placeholder="Tên"
                        />
                        <ErrorMessage
                          name="firstname"
                          component="small"
                          className="error"
                        />
                      </div>
                    </div>

                    <div id={cx("register-phone")}>
                      <input
                        type="number"
                        id={cx("Phone")}
                        name="phone"
                        value={values.phone}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="Điện Thoại"
                      />
                      <ErrorMessage
                        name="phone"
                        component="small"
                        className="error"
                      />
                    </div>

                    <div id={cx("register-email")}>
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

                    <div id={cx("register-password")}>
                      <input
                        type="password"
                        id={cx("Password")}
                        name="password"
                        value={values.password}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="Mật khẩu"
                      />
                      <ErrorMessage
                        name="password"
                        component="small"
                        className="error"
                      />
                    </div>

                    <div id={cx("register-confirmpassword")}>
                      <input
                        type="password"
                        id={cx("ConfirmPassword")}
                        name="confirmpassword"
                        value={values.confirmpassword}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="Xác nhận mật khẩu"
                      />
                      <ErrorMessage
                        name="confirmpassword"
                        component="small"
                        className="error"
                      />
                    </div>

                    <div id={cx("register-checkboxRule")}>
                      <input
                        type="checkbox"
                        id={cx("Checkbox")}
                        name="checkboxRule"
                        value={values.checkboxRule}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      <span className={cx("text")}>
                        {" "}
                        Tôi đã đọc và đồng ý với các{" "}
                        <span className={cx("rule")}>điều khoản</span> và{" "}
                        <span className={cx("law")}>chính sách</span>
                      </span>{" "}
                      <br />
                      <ErrorMessage
                        name="checkboxRule"
                        component="small"
                        className="error"
                      />
                    </div>
                  </Form>

                  <button
                    className={cx("submit-button")}
                    type="button"
                    onClick={(values) => handleSubmit(values)}
                  >
                    Đăng nhập
                  </button>
                </>
              )}
            </Formik>
          </div>

          <div className={cx("main-formik-register")}>
            <span>Bạn đã tài khoản ? </span>
            <span
              className={cx("Login")}
              onClick={() => navigate(Routes.web.LoginPage.index)}
            >
              Đăng nhập
            </span>
          </div>
        </div>
      </main>
    </>
  );
};

export default RegisterForm;
