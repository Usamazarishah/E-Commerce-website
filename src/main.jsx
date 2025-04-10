import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { store } from "./redux/store.js";
import { Provider } from "react-redux";
import { Toaster } from "react-hot-toast";
import CartContextProvider from "./Context/CartContext.jsx";

createRoot(document.getElementById("root")).render(
  <CartContextProvider>
    <StrictMode>
      <Provider store={store}>
        <BrowserRouter
          future={{
            v7_relativeSplatPath: true,
          }}
        >
          <App />
          <Toaster />
        </BrowserRouter>
      </Provider>
    </StrictMode>
  </CartContextProvider>
);
