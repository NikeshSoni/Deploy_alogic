import { Link } from "react-router-dom";

import fb from '../assets-img/footer-icons/fb.webp';
import insta from '../assets-img/footer-icons/insta.webp';
import twitter from '../assets-img/footer-icons/twitter.webp';
import youTube from '../assets-img/footer-icons/you-tube.webp';


import   { useState} from 'react'

import logo from "../assets-img/logo/alogic-logo--mian.png";
import lcon from "../assets-img/logo/India-icon.png";
import Search_icon from "../assets-img/logo/Search-icon-main.png";
import User_icon from "../assets-img/logo/accounts-icon-user.png";
import Cart_icon from "../assets-img/logo/Cart-icon-buy.png";
import '../SCSS/App.scss';
import '../SCSS/comman.scss';


const navigation_bar = ['About','Support','Contact US','Privacy Policy','Terms and Conditions','Warranty Policy','Shipping Policy'];

const media = [fb,insta,twitter,youTube];


const navLinks = [
    {
        pageName:'Shop',
        page:'/',
    },
    {
        pageName:'About',
        page:'/About',
    },
    {
        pageName:'Support',
        page:'/Support',
    },
    {
        pageName:'More',
        page:'/More',
    },
];


const nav = navLinks;

    

const Navigation = () => {
    const [show, setShow] = useState(false);
    const [open, setOpen] = useState('fa-bars');

    const eventHandle = () => {

        setShow(!show);

        if (show === !true) {
            setOpen('fa-xmark')

        } else {
            setOpen('fa-bars')
        } 
    }

    return  (
        <div>
            <header>
                    <nav className="main-logo w-100 d-flex nav-bar">
                               <div className="responsive-bar d-md-none" onClick={eventHandle}>
                                   <i className={`main-heading fa-solid ${open}`} ></i> 
                               </div>
                               
                                 <div className="text-center"> 
                                    <img  src={logo} className='alogic-logo w-100' alt="Alogic-logo"/>
                                 </div>

                                 <ul className=" gap-3 d-none d-md-flex p-0  m-0">
                                    {navLinks.map( (data) => {
                                        return(
                                            <li>
                                                <Link className="text-dark" to={data.page}> {data.pageName}</Link>
                                            </li>
                                        )
                                    })}
                                 </ul>

                                  
                                  { show ?  <ul className="list-item p-3 comman-main responsive-header m-0 ul-list">
                                    {navLinks.map( (items) => {
                                        return (
                                            <li  className="comman-links pb-md-1 pb-1 responsive-width">
                                              <Link className="text-dark comman-color" to={items.page}>{items.pageName}</Link>
                                          </li>
                                        ) 
                                    })}

                                    <div className="d-md-none row mt-5 text-white">
                                          <div className="col-12 col-sm-6 d-md-none">
                                                <div className="responsive-logo"> 
                                                    <img  src={logo} className='responsive-logo img-fluid' alt="Alogic-logo"/>
                                                    <p className="mt-2">© 2001-2021 ALOGIC, Inc. All rights reserved.</p>
                                               </div>
                                        
                                            <ul className="mt-3 p-0">
                                                {navigation_bar.map((new_bar) => {
                                                    return(
                                                        <li className="mx-auto">
                                                            <Link className="text-white" to="#">{new_bar}</Link>
                                                        </li> 
                                                    )
                                                })}
                                            </ul>
                                          </div>
                                          <div className="d-none col-sm-6 d-sm-block d-md-none">
                                                <div className="responsive-icons mr-right d-flex justify-content-center"> 
                                                    {media.map( (item) => {
                                                        return <img className="mr-main main-icon-width" src={item} alt="search"/>
                                                    })} 
                                                </div> 
                                         </div>
                                    </div>
                            </ul> : null }

                                <div className="icon d-none d-md-block">
                                    <img className="img-fluid" src={lcon} alt="Alogic-icon-flag"/>
                                    <Link to="#" className="text-dark">IND</Link>
                                </div>

                <div className="icon-wapper d-flex nav-icons">
                    <img className="mr-main main-icon-width" src={Search_icon} alt="search"/>
                    <img className="mr-main main-icon-width" src={User_icon} alt="user"/>
                    <img className="mr-main main-icon-width" src={Cart_icon} alt="cart"/>
               </div>
                    </nav>
            </header>
        </div>
    )
}

export default Navigation;