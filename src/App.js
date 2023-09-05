
import './App.css';
import Navbar from './components/navbar/navbar'
import Footer from './components/Footer/footer'
import Homesection from './components/HomeSection/homesection'
import Topnav from './components/navbar/topnav'
import TopCards from './components/topCards'
import Banner from './components/Banner/banner'
import Offer from './components/offer'
import ProductCard from './components/productCard'
import img from'./style/up-arrow.png'

function App() {
  return (
    <>
    <Topnav/>
     <Navbar/>
     <Homesection/>
     <TopCards/>
     <Banner/>
     <ProductCard/>
     <Offer/>
    
     <Footer/>
     <a href="#" class="arrow"><i><img src={img} alt="" width="50px"></img></i></a>
     </>
     
   
    
  );
}

export default App;
