import * as yup from "yup";
import validation from "./Validation";

const validate = validation({
  lastname: yup
    .string()
    .required("Không để trống Họ")
    .min(3, "Có ít nhất 3 ký tự")
    .max(20, "Không nhiều hơn 20 ký tự"),
  firstname: yup
    .string()
    .required("Không để trống Tên")
    .min(3, "Có ít nhất 3 ký tự")
    .max(40, "Không nhiều hơn 40 ký tự"),
  phone: yup
    .number()
    .required("Không để trống số điện thoại")
    .min(100, "Có ít nhất 3 số")
    .max(999999999999999999999999999999, "Không nhiều hơn 30 số"),
  email: yup
    .string()
    .required("Không để trống email")
    .email("Không đúng định dạng email")
    .min(7, "Ít nhất 7 ký tự")
    .max(30, "Tối đa 30 ký tự"),
  password: yup
    .string()
    .required("Không để trống password")
    .min(6, "Ít nhất 6 ký tự")
    .minUppercase(1, "Ít nhất 1 chữ viết hoa")
    .minSymbols(1, "Ít nhất 1 ký tự đặc biệt")
    .minNumbers(1, "Ít nhất 1 số")
    .max(18),
  confirmpassword: yup
    .string()
    .required("Không để trống confirm password")
    .oneOf([yup.ref("password"), null], "Không khớp mật khẩu đã nhập"),
  checkboxRule: yup.boolean().oneOf([true], "Phải đồng ý điều kiện"),
});

export default validate;
