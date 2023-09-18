import * as yup from "yup";
import validation from "./Validation";

const validate = validation({
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
});

export default validate;
