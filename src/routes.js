const Routes = {
    api: {
        product: "http://localhost:9001/api/product",
        user: "http://localhost:9001/api/user",
        PreviousPage: "http://localhost:9001/api/PreviousPage/1",
    },
    web: {
        HomePage: {
            index: "/",
        },
        DetailProductPage: {
            index: "/DetailProduct/:IDProduct",
            create: "/DetailProduct/",
        },
        PurchasePage: {
            index: "/Purchase",
        },
        LoginPage: {
            index: "/Login",
        },
        RegisterPage: {
            index: "/Register",
        },
    },
}

export default Routes