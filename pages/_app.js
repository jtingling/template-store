import "../styles/App.css";
import { SSRProvider } from "react-bootstrap";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Footer from "../components/Footer";
import NavBar from "../components/Navs/NavBar";
import Ribbon from "../components/Navs/Ribbon";
import { CartContext } from "../contexts/App";
import { getCartFromStorage } from "../adapters/Checkout/checkout";

function MyApp({ Component, pageProps }) {
  const [checkout, setCheckout] = useState({ lineItems: [] });
  const router = useRouter();

  const initCheckout = async () => {
    const cart = await getCartFromStorage();
    setCheckout(cart);
  };

  useEffect(() => {
    initCheckout();
  }, []);
  return (
    <SSRProvider>
      <main className="overflow-hidden">
        <NavBar />
        <CartContext.Provider
          value={{
            setCheckout: setCheckout,
            checkout: checkout,
          }}
        >
          <Component {...pageProps} />
          {router.pathname !== "/cart" && <Ribbon checkout={checkout} />}
        </CartContext.Provider>
        <Footer />
      </main>
    </SSRProvider>
  );
}

export default MyApp;
