
import Footer_logo from '../assets-img/logo/footer-logo-alogic.png';

import '../SCSS/App.scss';
import '../SCSS/comman.scss';
import fb from '../assets-img/footer-icons/fb.webp';
import insta from '../assets-img/footer-icons/insta.webp';
import twitter from '../assets-img/footer-icons/twitter.webp';
import youTube from '../assets-img/footer-icons/you-tube.webp';


const Footer = () =>{
    return(
        <div className="footer-wapper bg-dark p-4 text-white">
             <footer className="main-footer mar-0-auto">
                      <div className="row ">
                            <div className="col-12 mt-4 text-md-center text-lg-inherit col-md-12 col-lg-4">
                                   <a href="#"> 
                                        <img src={Footer_logo} alt="main"/>
                                   </a>

                                <p className="mt-4">We are dedicated to making products that
                                    help realise the true potential of technology</p>

                                    <div className=''>
                                         <h4 className="mt-3 comman-heading-main"> FOLLOW US ON </h4>

                                         <div className='d-flex  mr-right justify-content-center mt-4'>
                                             <img className=' img-fluid' src={fb} alt='facebook' />
                                             <img src={insta} alt='facebook' />
                                             <img src={twitter} alt='facebook' />
                                             <img src={youTube} alt='facebook' />
                                         </div>   
                                    </div>
                            </div>
                            <div className="col-12  col-md-5 mt-4 col-lg-3">
                                        <h5 className="mt-3 comman-heading-main">POPULAR SOLUTIONS</h5>

                                        <ul className="p-0 m-0">
                                             <li className="mt-2">
                                                  <a className="text-white main-para" href="#"> USB Products</a>
                                             </li>
                                             <li className="mt-2">
                                                  <a className="text-white main-para" href="#">Thunderbolt 3 Products</a>
                                             </li>
                                             <li className="mt-2">
                                                  <a className="text-white main-para" href="#">Laptop Docking Stations</a>
                                             </li>
                                             <li className="mt-2">
                                                  <a className="text-white main-para" href="#"> Cables & Adapters</a>
                                             </li>
                                             <li className="mt-2">
                                                  <a className="text-white main-para" href="#"> Charging & Power</a>
                                             </li>
                                             <li className="mt-2">
                                                  <a className="text-white main-para" href="#"> USB-A (USB 3.0) Products</a>
                                             </li>
                                        </ul>
                            </div>
                            <div className="col-12  col-md-4 mt-4 col-lg-3">
                                        <h5 className="mt-3 comman-heading-main">SUPPORT</h5>

                                        <ul className="p-0 m-0">
                                             <li className="mt-2">
                                                  <a className="text-white main-para" href="#"> Dock Configurator</a>
                                             </li>
                                             <li className="mt-2">
                                                  <a className="text-white main-para" href="#">Where to Buy</a>
                                             </li>
                                             <li className="mt-2">
                                                  <a className="text-white main-para" href="#">Knowledge Base</a>
                                             </li>
                                             <li className="mt-2">
                                                  <a className="text-white main-para" href="#">Support Requests</a>
                                             </li>
                                             <li className="mt-2">
                                                  <a className="text-white main-para" href="#">Browse Catalogs</a>
                                             </li>
                                        </ul>
                            </div>


                            <div className="col-12  col-md-3 mt-4 col-lg-2">
                                        <h5 className="mt-3 comman-heading-main">COMPANY</h5>

                                        <ul className="p-0 m-0">
                                             <li className="mt-2">
                                                  <a className="text-white main-para" href="#"> About ALOGIC</a>
                                             </li>
                                             <li className="mt-2">
                                                  <a className="text-white main-para" href="#">Contact Us</a>
                                             </li>
                                             <li className="mt-2">
                                                  <a className="text-white main-para" href="#">Careers</a>
                                             </li>
                                             <li className="mt-2">
                                                  <a className="text-white main-para" href="#">Blog</a>
                                             </li>
                                        </ul>
                            </div>



                            <div className="policy-wapper mt-5 d-flex justify-content-between">
                                     <p className="mt-3">© 2021-2022 ALOGIC, Inc. All rights reserved.</p>

                                   

                                     <ul className="p-0 m-0 main-list mt-3  d-flex">
                                             <li className="link">
                                                  <a className="text-white main-para" href="#">  Privacy Policy</a>
                                             </li>
                                             <li className="link">
                                                  <a className="text-white main-para" href="#">Contact Us</a>
                                             </li>
                                             <li className="link">
                                                  <a className="text-white main-para" href="#">Careers</a>
                                             </li>
                                             <li className="link">
                                                  <a className="text-white main-para" href="#">Blog</a>
                                             </li>
                                        </ul>
                          </div>
                      </div>
             </footer>
        </div>
    )
}

  export default Footer;