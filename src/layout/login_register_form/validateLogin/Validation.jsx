import * as yup from "yup";
import YupPassword from "yup-password";
YupPassword(yup);

const validation = (validationObject) => yup.object().shape(validationObject);

export default validation;
