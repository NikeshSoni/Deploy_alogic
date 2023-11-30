import mainImg from '../assets-img/new-arrival/CH2-img.jpg';
import Ultra from '../assets-img/new-arrival/ultra-4k.jpg';
import thunderbolt from '../assets-img/new-arrival/thunderbolt-blaze-dock.jpg';

import '../SCSS/App.scss';
import '../SCSS/comman.scss';

const data_arrival = {
   ch2:'CH2',
   para:'Connect up to Two 4K Displays',
   btn:'BUY NOW',


   clarity:'CLARITY',
   ultra_para:'Ultra HD 4K resolution',


   blaze:'THUNDERBOLT 4 BLAZE DOCK',
   blaze_para:'Dual Display 4k@60Hz',

}
   const Arrivals = function Main() {

        return(
                <div className='text-white'>
                    <div className='d-block p-3 d-md-flex w-100 main-wapper'>
                           <div className='main-img  mx-auto new-arrival-width position-parent'>
                              <img className="img-fluid  comman-border-r w-100 d-block "  src={mainImg}  alt="alogic-blaze"/>

                              <div className='position-child p-3 main-arrival'>
                                       <h3 className='main-heading comman-heading-main m-0'>{data_arrival.ch2}</h3>
                                       <p>{data_arrival.para}</p>
                                       <button className="text-white btn mt-1 btn-primary">{data_arrival.btn}</button>
                              </div>
                            </div>

                        <div className='main-img new-arrival-width position-parent mt-5 m-md-0'>
                              <img className="img-fluid comman-border-r w-100 d-block "  src={Ultra}  alt="alogic-blaze"/>
                           <div className='position-child  main-arrival p-3  width'>
                              <h3 className='main-heading comman-heading-main m-0'>{data_arrival.clarity}</h3>
                              <p>{data_arrival.ultra_para}</p>
                              <button className="text-white btn mt-1 btn-primary">{data_arrival.btn}</button>
                           </div>
                       </div>
                    </div>

           <div className=' mx-auto main-img banner position-parent mt-5'>
                    <img className="img-fluid comman-border-r"  src={thunderbolt}  alt="alogic-blaze"/>  

                   <div className='position-child p-md-3 p-1 main-arrival main-col'>
                      <h3 className='main-heading comman-heading-main short-font m-0'>{data_arrival.blaze}</h3>
                      <p>{data_arrival.blaze_para}</p>
                      <button className="text-white btn mt-2 short-font btn-primary">{data_arrival.btn}</button>
                   </div> 
           </div>
            </div>             
        )
   }


   export default Arrivals;