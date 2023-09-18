import styles from "./FooterScss.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const Footer = () => {
  return (
    <>
      <footer id={cx("footer")}>
        <div className={cx("contact")}>
          <div className={cx("contact-phone")}>
            <i class="fa-solid fa-phone"></i> 0906895572
          </div>
          <div className={cx("contact-email")}>
            <i class="fa-solid fa-envelope"></i> balevu123321@gmail.com
          </div>
          <div className={cx("contact-facebook")}>
            <a
              className={cx("contact-facebook-link")}
              href="https://www.facebook.com/home.php"
            >
              <i class="fa-brands fa-facebook-f"></i> Facebook
            </a>
          </div>
        </div>

        <div className={cx("information")}>
          <ul className={cx("information-menu")}>
            <li className={cx("information-menu-list")}>Giới thiệu</li>
            <li className={cx("information-menu-list")}>Khách hàng</li>
            <li className={cx("information-menu-list")}>Tuyển dụng</li>
            <li className={cx("information-menu-list")}>Giao hàng</li>
            <li className={cx("information-menu-list")}>Đổi trả</li>
          </ul>

          <div className={cx("information-image")}>
            <img src={require("@/img/image1.png")} alt="hinh anh" />
          </div>
        </div>

        <div className={cx("copyright")}>
          <p className={cx("copyright-detail")}>
            Nội dung và hình ảnh bài viết trên trang đã được đăng ký bản quyền
            Digital Millennium Copyright Act (DMCA) theo tiêu chuẩn Creative
            Commons Attribution-NoDerivs 3.0 Unported License. Vui lòng dẫn link
            nguồn khi sao chép các bài viết trên trang này.
          </p>

          <p className={cx("copyright-information")}>
            2023 © CÔNG TY BÁN HÀNG VIỆT NAM - Giấy phép ĐKKD số 0106683363
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
