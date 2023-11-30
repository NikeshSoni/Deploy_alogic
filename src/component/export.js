
import Main_img from '../assets-img/export-img/main-export-1.jpg';
import Apple_access from '../assets-img/export-img/iphone-access.jpg';
import Apple_mac from '../assets-img/export-img/picture1-mac.jpg';
import Apple_mobile from '../assets-img/export-img/m2-banner-mobile.jpg';

import '../SCSS/App.scss';
import '../SCSS/comman.scss';


  const ExportData = () => {
    return (
        <div className="row export-body mar-0-auto mt-5  mb-5">

            <div>
                <h1 className="main-heading text-center m-5">
                     ARTICLES FROM OUR EXPERTS
                </h1>
            </div>
            
            <div className="export-wapper d-sm-flex col-md-6 mar-0-auto">
               <div className="data-wapper mar-0-auto mb-3 m-sm-0 col-10 col-sm-7">
                  <h3 className="comman-heading-main export-fonts">A Guide to USB4</h3>
                  <p className='comman-size'>USB4 is a specification that significantly transforms the way you work.</p>
                  <p className='comman-size'>Read More...</p>
               </div>
               <div className="gide-wapper text-center mar-0-auto mb-3 col-4">
                     <img className="img-fluid gide-img " src={Main_img} alt="main_img"/>
               </div>
            </div>

            <div className="export-wapper d-sm-flex col-md-6 mar-0-auto">
               <div className="data-wapper mar-0-auto mb-3 m-sm-0 col-10 col-sm-7">
                  <h3 className="comman-heading-main export-fonts">What are the best iPhone 14 accessories?</h3>
                  <p className='comman-size'>Make the iPhone 14 experience truly yours with the best smartphone accessories.</p>
                  <p className='comman-size'>Read More...</p>
               </div>
               <div className="gide-wapper text-center mar-0-auto mb-3 col-4">
                     <img className="img-fluid gide-img " src={Apple_access} alt="main_img"/>
               </div>
            </div>

            

            <div className="export-wapper d-sm-flex col-md-6 mar-0-auto mt-2 mt-md-5">
               <div className="data-wapper mar-0-auto mb-3 m-sm-0 col-10 col-sm-7">
                  <h3 className="comman-heading-main export-fonts">Choosing a Docking Station to Connect Multiple Monitors to an M2 Mac</h3>
                  <p className='comman-size'>Some docking stations will connect multiple external displays to an M2 MacBook
                     Air or 13-inch
                     MacBook Pro. But which features should you look for in your future dock?</p>

                  <p className='comman-size'>Read More...</p>
               </div>
               <div className="gide-wapper text-center mar-0-auto mb-3 col-4">
                     <img className="img-fluid gide-img " src={Apple_mac} alt="main_img"/>
               </div>
            </div>


            <div className="export-wapper d-sm-flex col-md-6 mar-0-auto mt-2 mt-md-5">
               <div className="data-wapper mar-0-auto mb-3 m-sm-0 col-10 col-sm-7">
                  <h3 className="comman-heading-main export-fonts">Can I Connect Two Monitors to my M2 Mac?</h3>
                  <p className='comman-size'>Apple’s M2 MacBook Air and 13-inch MacBook Pro are happening. But each has 
                    limited native external display capabilities.</p>
                  <p className='comman-size'>Read More...</p>
               </div>
               <div className="gide-wapper text-center mar-0-auto mb-3 col-4">
                     <img className="img-fluid gide-img mar-0-auto" src={Apple_mobile} alt="main_img"/>
               </div>
            </div>


            <div className="text-center mt-5 col-6 col-sm-4 col-lg-3 mar-0-auto">
                <p  className="text-white comman-size bg-dark comman-border-r p-3">
                     <a href="#" className="text-white" >Read More Articles</a>
                </p>
            </div>
        </div>
    )
  }

export default ExportData;
