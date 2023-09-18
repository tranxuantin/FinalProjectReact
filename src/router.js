import MustLogin from "./MiddleWare/MustLogin";
import DetailProductPage from "./pages/DetailProductPage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import PurchasePage from "./pages/PurchasePage";
import Routes from "./routes";

const { createBrowserRouter } = require("react-router-dom");

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage />,
    },
    {
        path: Routes.web.DetailProductPage.index,
        element: <DetailProductPage />,
    },
    {
        path: Routes.web.PurchasePage.index,
        element: <MustLogin><PurchasePage /></MustLogin>,
    },
    {
        path: Routes.web.LoginPage.index,
        element: <LoginPage />
    },
    {
        path: Routes.web.RegisterPage.index,
        element: <RegisterPage />
    }
])

export default router