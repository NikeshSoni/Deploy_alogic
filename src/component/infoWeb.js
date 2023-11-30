
import Microsoft_14 from '../assets-img/info-images/Microsoft-Teams-image-14.png';
import Countries from '../assets-img/info-images/countries-main.png';
import MicrosoftTeams from '../assets-img/info-images/MicrosoftTeams-image.png';
import '../SCSS/App.scss';
import '../SCSS/comman.scss';




        const Microsoft = () => {
            return (

                <div className="main-infop-wapper mt-4 mb-4">
                <div className="row">
                   <div className="col-10 mar-0-auto">
                       <div className="row">
                            <div className="col-12 col-md-4">
                                 <div className="row">
                                      <div className="col-6">
                                         <img className="img-fluid" src={Microsoft_14} alt="main-microsoft"/>
                                      </div>
              
                                      <div className="col-6 center-all-data">
                                          <span className="comman-heading">100</span>
                                          <p>Million+ Units Sold</p>
                                     </div>
                                     <p className="mt-3">ALOGIC’s IT peripherals, consumer electronics products, and mobility accessories help connected households and businesses connect to their best lives.</p>
                                 </div>
                            </div>
                            <div className="col-12 col-md-4">
                             <div className="row">
                               <div className="col-6">
                                  <img className="img-fluid" src={Countries} alt="Countries"/>
                               </div>
              
                               <div className="col-6 center-all-data">
                                   <span className="comman-heading">28</span>
                                   <p>Countries</p>
                              </div>
                              <p className="mt-3">Our comprehensive product range – which includes docks, chargers, and cables –
                                empowers customers in almost 30 countries worldwide.</p>
                          </div>
                            </div>
                            <div className="col-12 col-md-4">
                             <div className="row">
                               <div className="col-6">
                                  <img className="img-fluid" src={MicrosoftTeams} alt="MicrosoftTeams"/>
                               </div>
              
                               <div class="col-6 center-all-data">
                                   <span className="comman-heading">10</span>
                                   <p>Innovation of </p>
                                   <p>years</p>
                              </div>
                              <p className="mt-3">We have a decade’s-plus expertise delivering innovative connectivity solutions 
                               for homes and businesses with data, display, and power needs.</p>
                          </div>
                            </div>
                       </div>
                   </div>
                </div>
              </div>
            )
        }


        export default Microsoft;


