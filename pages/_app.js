//import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/App.css'
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';
import Ribbon from '../components/Ribbon'
import { useEffect, useState } from 'react';
import { getCheckout, initCheckout } from '../adapters/index';
function MyApp({ Component, pageProps }) {
  const [ cart, setCart ] = useState(null)
  //TODO: add context for Cart so ribbon stays updated without re rendering
  useEffect(()=>{
    (async ()=> {
      await initCheckout()
      const checkout = await getCheckout(window.localStorage.getItem("cart"));
      setCart(checkout)
    })()

},[])
  return (
  <>
    <NavBar/> {    console.log(cart)}
    <Component {...pageProps}  />
    {cart !== null && <Ribbon cart={cart}/>}
    <Footer/>
  </>)
}

export default MyApp
