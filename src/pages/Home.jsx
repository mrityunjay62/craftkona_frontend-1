import Header from "../componenets/Header";
import Navbar from "../componenets/Navbar";
import Nav2 from "../componenets/Nav2";
import Banner from "../componenets/Banner";
import Category from "../componenets/Category";
import Product from "../componenets/Product";
import SmallBanner from "../componenets/SmallBanner";
import AddedProduct from "../componenets/AddedProduct";
import OurStory from "../componenets/OurStory";
import Footer from "../componenets/Footer";
import FeaturedBrands from "../componenets/FeaturedBrands";

const Home =()=>{
  return <div>
<Header></Header>
<Navbar></Navbar>
<Nav2></Nav2>
<Banner></Banner>
<Category></Category>
<Product></Product>
<FeaturedBrands></FeaturedBrands>
<SmallBanner></SmallBanner>
<AddedProduct></AddedProduct>
<OurStory></OurStory>
<Footer></Footer>
  </div>
}

export default Home;