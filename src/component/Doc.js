
import main_img from '../assets-img/new-arrival/doc-mobile-responsive.png';
import alogic_microsoft from '../assets-img/new-arrival/alogic-microsoft-teams.jpg';
import '../SCSS/App.scss';
import '../SCSS/comman.scss';

  const Doc_alogic = () => {
       return (
        <div className="alogic-dock mt-5 mb-5">
                       
        <div className="row ">

            <div className="col-10 mar-0-auto position-parent">
              <div className="position-child p-3  main-md-width" >
                  <h2 className="text-white doc-heading mb-4 mb-sm-2">Finding the Right Dock? It’s Easier than Ever.</h2>
                  <p className="text-white mb-4">Finding a dock that ticks all the boxes can be difficult. That’s why we’re pleased to announce our 
                    new Docking Station Finder tool. Find the perfect ALOGIC dock the fast way.</p>

                          <a className="btn-main text-white" href="#">TRY NOW</a>
              </div>

              <div className="img-dock">
                  <img className="img-fluid d-md-none w-100" src={main_img} alt="doc-mobile"/>
                  <img className="img-fluid d-none w-100 d-md-block" src={alogic_microsoft} alt="doc-mobile"/>
             </div>
                
           </div>
        </div>
      </div>
       )
  }


  export default Doc_alogic;