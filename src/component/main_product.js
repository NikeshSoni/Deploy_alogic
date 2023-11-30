import Main_alogic from '../assets-img/main-alogic-product/media-main-img.jpg';
import media_camera from '../assets-img/main-alogic-product/media-camera.jpg';
import Normal_medis from '../assets-img/main-alogic-product//media-normal.jpg';
import media_last from '../assets-img/main-alogic-product/media-last-wire.jpg';

import '../SCSS/App.scss';
import '../SCSS/comman.scss';


const Main_media = () => {

  let Data_product =  {
    CLARITY:'27F34KCPD',
    webcamp:'UIWA09',
    thander:'TB4H3TB',
    magfource:'ULCVGHD-SGR',
  }
      return (
            
    <div className="main-product-weapper mb-5">

<div className="heading-wappers text-center m-5">
     <h2 className="min-headingg comman-heading-main">FEATURED PRODUCTS</h2>
</div>
    <div className="row">
        <div className="col-11 mar-0-auto">
              <div className="row">
                  <div className="col-12 col-lg-6">
                      <div className="row text-center">
                        <div className="col-8 col-sm-6 mar-0-auto mt-4 m-sm-0">
                          <div className="text-center" >
                            <img className="img-fluid comman-producy-img" src={Main_alogic} alt="Main_alogic"/>
                          </div>
                          <div>
                              <p><a className="text-dark mt-1" href="#">CLARITY 27 UHD 4K MONITOR</a> </p>
                              <p className="mt-3 ">Part Number: <span className="monitor-main">{Data_product.CLARITY}</span></p>
                          </div>
                      
                          <div className="d-block shop-btn ">
                            <p className="bg-secondary  p-2 comman-border-r mt-2"> <a className="text-white" href="#">$899.95</a></p>
                           <p className="bg-dark p-2 comman-border-r mt-2"> <a className="text-white" href="#"> ADD TO CART </a></p>
                          </div>
                      </div>
                  
                  
                        <div className="col-8 col-sm-6 mar-0-auto mt-4 m-sm-0">
                            <div>
                              <img className="img-fluid comman-producy-img" src={media_camera} alt="camera"/>
                            </div>
                            <div>
                              <p><a className="text-dark mt-1" href="#">IRIS WEBCAM A09</a></p>

                                <p className="mt-3">Part Number:  <span>{Data_product.webcamp}</span></p>
                            </div>
                            <div className="d-block shop-btn">
                              <p className="bg-secondary  p-2 comman-border-r mt-2"> 
                                <a className="text-white" href="#">$99.95</a>
                              </p>
                             <p className="bg-dark p-2 comman-border-r mt-2"> 
                               <a className="text-white" href="#"> ADD TO CART </a>
                             </p>
                            </div>
                      </div>
                    </div>

                </div>
                



                <div className="col-12 col-lg-6  mt-md-4 m-lg-0">
                  <div className="row text-center">
                    <div className="col-8 col-sm-6 mt-4 m-sm-0 mar-0-auto">
                      <div className="text-center" >
                        <img className="img-fluid comman-producy-img" src={Normal_medis} alt="Normal-medis"/>
                      </div>
                      <div>
                          <p><a className="text-dark mt-1" href="#">THUNDERBOLT 4 BLAZE HUB </a> </p>
                          <p className="mt-3">Part Number: <span>{Data_product.thander}</span></p>
                      </div>
                  
                      <div className="d-block shop-btn ">
                        <p className="bg-secondary  p-2 comman-border-r mt-2"> <a className="text-white" href="#">$379.95</a></p>
                       <p className="bg-dark p-2 comman-border-r mt-2"> <a className="text-white" href="#"> ADD TO CART </a></p>
                      </div>
                  </div>
              
              
                    <div className="col-8 col-sm-6 mar-0-auto mt-4 m-sm-0">
                        <div>
                          <img className="img-fluid comman-producy-img" src={media_last} alt="media-last"/>
                        </div>
                        <div>
                          <p><a className="text-dark mt-1" href="#">MAGFOURCE DUO PLAY 2-IN-1 ADAPTER</a> </p>

                            <p className="mt-0">Part Number: <span>{Data_product.magfource}</span></p>
                        </div>
                        <div className="d-block shop-btn">
                          <p className="bg-secondary  p-2 comman-border-r mt-2"> <a className="text-white" href="#">$62.95</a></p>
                          <p className="bg-dark p-2 comman-border-r mt-2 main-para"> <a className="text-white" href="#"> ADD TO CART</a></p>
                        </div>
                  </div>
                </div>

            </div>
              </div>
        </div>
    </div>
 </div> 
      )
}



  export default Main_media;


