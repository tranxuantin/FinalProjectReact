import { RouterProvider } from "react-router";
import router from "./router";
import { Provider } from "react-redux";
import { createStore } from "redux";
import RootReducer from "./redux/RootReducer";

const store = createStore(RootReducer);

function App() {
  return (
    <>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </>
  );
}

export default App;
