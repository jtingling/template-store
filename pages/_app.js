//import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/App.css'
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';

function MyApp({ Component, pageProps }) {
  return (
  <>
    <NavBar/>
    <Component {...pageProps} />
    <Footer/>
  </>)
}

export default MyApp
