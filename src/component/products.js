import laptop from '../assets-img/apple-product/Laptop-Docking-Stations-product.png';
import Peripherals from '../assets-img/apple-product/Peripherals-main-comman.png';
import Hubs from '../assets-img/apple-product/Hubs-Adapters.png';
import Charging from '../assets-img/apple-product/Charging-power-alogic.png';
import Cables from '../assets-img/apple-product/Cables-Adapters-product.png';
import Ergonomics from '../assets-img/apple-product/Ergonomics-product-main.png';


import '../SCSS/App.scss';
import '../SCSS/comman.scss';




const Products = () => {
      return (
        
        <div className="product-wapper row mt-5 mb-5">
        <div className="product-body col-10 mar-0-auto">
           <div className="row">
                <div className="col-6 col-lg-2 text-center">
                     <img className="img-fluid hover-comman comman-width" src={laptop} alt="laptop-producting"/>
                     <div className="main-para">
                         <p>
                            <a className="main-para text-dark" href="#">Laptop Docking</a>
                        </p>
                         <p>
                            <a className="main-para text-dark" href="#">Stations</a>
                        </p>
                     </div>
                </div>
                <div className="col-6 col-lg-2 text-center">
                  <img className="img-fluid hover-comman  comman-width" src={Peripherals} alt="Peripherals-main"/>

                 <div>
                     <p className="main-para">
                        <a className="main-para text-dark" href="#">Peripherals</a>
                    </p>
                 </div>
            </div>


                 <div className="col-6 col-lg-2 text-center">
                     <img className="img-fluid hover-comman comman-width" src={Hubs} alt="Hubs-Adapters"/>
                     <div className="main-para">
                         <p>
                            <a className="main-para text-dark" href="#">Hubs & Adapters</a>
                         </p>
                     </div>
                 </div>
                 <div className="col-6 col-lg-2 text-center">
                         <img className="img-fluid hover-comman comman-width" src={Charging} alt="charging-power"/>
                     <div>
                         <p className="main-para">
                             <a className="main-para text-dark" href="#">Charging & Power</a>
                         </p>
                    </div>
               </div>


               <div className="col-6 col-lg-2 text-center">
                 <img className="img-fluid hover-comman comman-width" src={Cables} alt="Cables-Adapters"/>
                 <div className="main-para">
                     <p>
                        <a className="main-para text-dark" href="#">Cables & Adapters</a>
                     </p>
                 </div>
             </div>
             <div className="col-6 col-lg-2 text-center">
                     <img className="img-fluid hover-comman  comman-width" src={Ergonomics} alt="Ergonomics"/>
                 <div>
                     <p className="main-para">
                         <a className="main-para text-dark" href="#">Ergonomics</a>
                     </p>
                </div>
           </div>
        </div>
        </div>
   </div>

      )
}
export default Products;
