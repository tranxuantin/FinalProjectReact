import Footer from "@/layout/header_and_footer/Footer";
import Header from "@/layout/header_and_footer/Header";
import ProductMainPage from "@/layout/product/ProductMainPage/ProductMainPage";
import { useEffect } from "react";
import axios from "axios";
import Routes from "@/routes";

const HomePage = () => {
  useEffect(() => {
    const SendPreviousPage = async () => {
      await axios.put(Routes.api.PreviousPage, {
        page: "/",
      });
    };

    SendPreviousPage();
  }, []);

  return (
    <>
      <Header />
      <ProductMainPage />
      <Footer />
    </>
  );
};

export default HomePage;
