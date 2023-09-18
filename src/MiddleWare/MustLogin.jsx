import { Navigate } from "react-router-dom";
import Routes from "@/routes";
import { useSelector } from "react-redux";

const MustLogin = ({ children }) => {
  const selector = useSelector((state) => state.CheckLogin);
  const CheckLog = selector.CheckLogin;

  return (
    <>{CheckLog ? children : <Navigate to={Routes.web.LoginPage.index} />}</>
  );
};

export default MustLogin;
