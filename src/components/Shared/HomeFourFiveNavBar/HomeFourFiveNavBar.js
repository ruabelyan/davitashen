import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import useGlobalContext from '../../../hooks/useGlobalContext';
import Sidebar from '../Sidebar/Sidebar';
import { useTranslation } from 'react-i18next';

const HomeFourFiveNavBar = () => {
   const [show, setShow] = useState(false);
   const handleClose = () => setShow(false);
   const handleShow = () => setShow(true);
   const { stickyMenu } = useGlobalContext();
   const params = useParams();
   const { t } = useTranslation();
   return (
      <>
         <header>
            <div className="top-bar4 white-bg top-border d-none d-md-block pl-55 pr-55 pt-25 pb-25">
               <div className="container-fluid">
                  <div className="row d-flex align-items-center">
                     <div className="col-xl-6 col-lg-6">
                        <div className="header-info header-info4 p-0">
                           <span><i className="far fa-envelope-open"></i>pol.20@mail.ru</span>
                           <span><i className="fal fa-phone"></i>010368241</span>
                           <span><i className="fal fa-clock"></i>Sun - Thuseday, 09:00 am - 08:00 pm</span>
                        </div>
                     </div>
                     {/* <div className="col-xl-6 col-lg-6">
                        <div className="top4-right d-flex justify-content-end">
                           <div className="top4-menu">
                              <ul className="list-inline">
                                 <li><a className="need-help" href="#">Needs Help?</a></li>
                                 <li><a href="#">Setting & Privacy</a></li>
                                 <li><a href="#">Media</a></li>
                              </ul>
                           </div>
                           <div className="header-social-icons top4-social d-none d-xl-block">
                              <ul>
                                 <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                                 <li><a href="#"><i className="fab fa-behance"></i></a></li>
                                 <li><a href="#"><i className="fab fa-youtube"></i></a></li>
                                 <li><a href="#"><i className="fab fa-linkedin"></i></a></li>
                                 <li><a href="#"><i className="fab fa-pinterest"></i></a></li>
                              </ul>
                           </div>
                        </div>
                     </div> */}
                  </div>
               </div>
            </div>
            {/* <!-- menu-area --> */}
            <div className={stickyMenu ? "sticky_menu header-menu-area menu-area4 pl-55 pr-55" :
               "header-menu-area menu-area4 pl-55 pr-55"}>
               <div className="container-fluid">
                  <div className="row">
                     <div className="col-xl-8 col-lg-12 col-md-12 d-flex align-items-center navbar__wrapper">
                        <div className="logo pos-rel">
                           <Link to="/"><img height={50} width={240} style={{ borderRadius: 10 }} src="img/logo/logo.png" alt="MediDove" /></Link>
                        </div>
                        <div className="header__menu header__menu4 pl-10">
                           <nav id="mobile-menu">
                              <ul>
                                 <li><Link style={{ fontWeight: params.pathname === '/' ? '700' : '400' }} to="/">{t('home_key')}</Link></li>
                                 <li style={{ fontWeight: (params.pathname === '/services' || params.pathname === '/doctors') ? '700' : '400' }}>{t('department_key')}
                                    <ul className="submenu">
                                       <li><Link to="/services">{t('department_key')}</Link></li>
                                       <li><Link to="/doctors">{t('doctors_key')}</Link></li>
                                    </ul>
                                 </li>
                                 <li><Link style={{ fontWeight: params.pathname === '/about' ? '700' : '400' }} to="/about">{t('about_key')}</Link></li>
                                 <li><Link style={{ fontWeight: params.pathname === '/contact' ? '700' : '400' }} to="/contact">{t('contact_key')}</Link></li>
                                 <li><Link style={{ fontWeight: params.pathname === '/pricelist' ? '700' : '400' }} to="/pricelist">{t('price_list_key')}</Link></li>
                              </ul>
                           </nav>
                        </div>

                        <div onClick={handleShow} className="side-menu-icon d-lg-none text-end">
                           <button className="side-toggle border-0 bg-transparent">
                              <i className="fas fa-bars"></i> </button>
                        </div>

                     </div>
                     <div className="col-xl-4 col-lg-9 col-md-9 d-none d-xl-block">
                        <div className="header-right d-flex align-items-center justify-content-end">
                           <div className="header-lang pos-rel d-none d-lg-block">
                              <div className="lang-icon">
                                 <img src="img/icon/lang.png" alt="" />
                                 <span>EN<i className="fas fa-angle-down"></i></span>
                              </div>
                              <ul className="header-lang-list">
                                 <li><a href="#">EN</a></li>
                                 <li><a href="#">RU</a></li>
                                 <li><a href="#">HY</a></li>
                              </ul>
                           </div>
                           <div className="header-button pl-50">
                              <Link to="/contact"
                                 className="primary_btn btn-icon ml-0" style={{ animationDelay: '0.6s' }} tabIndex="0">
                                 <span>+</span>Կապ</Link>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </header>

         <Sidebar show={show} handleClose={handleClose} />
      </>
   );
};

export default HomeFourFiveNavBar;