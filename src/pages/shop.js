// import Track from './pages/More';
import Navigation from '../component/nav-bar';
import Info from '../component/Info';
import Banner from '../component/banner';
import Products from '../component/products';
import Arrivals from '../component/arrivals';
import Doc_alogic from '../component/Doc';
import Microsoft from '../component/infoWeb';
import Main_media from '../component/main_product';
import ExportData from '../component/export';
import Singnnn from '../component/sign';
import Footer from '../component/Footer';

import '../SCSS/App.scss';


  const Shop = () => {
      return (
       

        <div>
            <Navigation />
            <Info />
            <Banner/>
            <Products />
            <Arrivals />
            <Doc_alogic />
            <Microsoft />
            <Main_media /> 
            <ExportData />
            <Singnnn />
            <Footer />
        </div>
      )
  }

  export default Shop;