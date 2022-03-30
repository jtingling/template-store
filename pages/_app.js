import "../styles/App.css";
import Footer from "../components/Footer";
import NavBar from "../components/Navs/NavBar";
import Ribbon from "../components/Navs/Ribbon";
import { CartContext } from "../contexts/App";
import { getCartIdFromStorage, getCheckout } from "../adapters";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }) {
  const [cartId, setCartId] = useState(0);
  const [checkout, setCheckout] = useState({ lineItems: [] });
  const router = useRouter();
  useEffect(() => {
    (async () => {
      const id = await getCartIdFromStorage();
      setCartId(id);
    })();
  }, []);
  useEffect(() => {
    (async () => {
      const clientCheckout = await getCheckout(cartId);
      setCheckout(clientCheckout);
    })();
  }, [cartId]);
  useEffect(() => {
    setCheckout(checkout);
  }, [checkout.lineItems]);

  return (
    <main className="vh-100">
      <NavBar />
      <CartContext.Provider
        value={{
          cartId: cartId,
          setCheckout: setCheckout,
          checkout: checkout,
        }}
      >
        <Component {...pageProps} className="mw-100" />
        {router.pathname !== "/cart" && <Ribbon checkout={checkout} />}
      </CartContext.Provider>
      <Footer />
    </main>
  );
}

export default MyApp;
