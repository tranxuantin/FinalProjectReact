import Footer from "@/layout/header_and_footer/Footer";
import Header from "@/layout/header_and_footer/Header";
import ProductDetail from "@/layout/product/ProductDetail/ProductDetail";
import { useEffect } from "react";
import axios from "axios";
import Routes from "@/routes";
import { useParams } from "react-router";

const DetailProductPage = () => {
  const param = useParams();

  useEffect(() => {
    const SendPreviousPage = async () => {
      await axios.put(Routes.api.PreviousPage, {
        page: `/DetailProduct/${param.IDProduct}`,
      });
    };

    SendPreviousPage();
  }, [param.IDProduct]);

  return (
    <>
      <Header />
      <ProductDetail />
      <Footer />
    </>
  );
};

export default DetailProductPage;
