/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Sidebar from '../../../../components/Shared/Sidebar/Sidebar';
import useGlobalContext from '../../../../hooks/useGlobalContext';
import { useTranslation } from 'react-i18next';

const HomeHeader = ({ logo }) => {
   const [show, setShow] = useState(false);
   const handleClose = () => setShow(false);
   const handleShow = () => setShow(true);
   const { stickyMenu } = useGlobalContext();
   const { t, i18n } = useTranslation();

   const params = useLocation();
   console.log('params', params.pathname)
   return (
      <>
         <header>
            <div className="top-bar d-none d-md-block">
               <div className="container" style={{ maxWidth: '100%' }}>
                  <div style={{ backgroundColor: '#0e1136' }} className="row d-flex align-items-center">
                     <div className="col-xl-6 offset-xl-1 col-lg-6 offset-lg-1 col-md-7 offset-md-1">
                        <div className="header-info">
                           <a href="tel:+37410482151">
                              <span style={{ color: "white" }}><i class="fas fa-phone"></i>հեռ</span>
                           </a>
                           {/* <span style={{ color: 'white' }}><i className="fas fa-phone"></i> հեռ</span> */}

                           <a href="mailto: poliklinika-13@mail.ru">
                              <span style={{ color: 'white' }}><i className="fas fa-envelope"></i> poliklinika-13@mail.ru</span>
                           </a>

                        </div>
                     </div>
                     <div className="col-xl-5 col-lg-5 col-md-4">
                        <div className="header-top-right-btn f-right">
                           <Link to="/contact" className="primary_btn">{t('contact_key')}</Link>
                        </div>
                     </div>
                  </div>
               </div>
            </div>

            <div className={stickyMenu ? "header-menu-area sticky_menu" : "header-menu-area"}>
               <div style={{ maxWidth: '1297px' }} className="container menu_wrapper">
                  <div style={{ justifyContent: 'space-between' }} className="row align-items-center">
                     <div className="col-xl-3 col-lg-3 col-md-6 col-6 d-flex align-items-center">
                        <div className="logo logo-circle pos-rel">
                           <Link to="/"><img style={{ maxWidth: '170px' }} src={logo || "img/logo/logo.png"} alt="" /></Link>
                        </div>
                     </div>
                     <div className="col-xl-9 col-lg-9 col-md-6 col-6">
                        <div className="header-right f-right">
                           <div className="header-lang f-right pos-rel d-none d-lg-block">
                              <div className="lang-icon d-flex">
                                 <img height={30} width={30}
                                    src={i18n.language === 'hy' ?
                                       "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Flag_of_Armenia.svg/2880px-Flag_of_Armenia.svg.png"
                                       : i18n.language === 'ru' ? "https://upload.wikimedia.org/wikipedia/commons/f/f3/Flag_of_Russia.svg" : "https://upload.wikimedia.org/wikipedia/commons/4/42/Flag_of_the_United_Kingdom.png"
                                    }
                                    alt="" />
                                 <span className='d-flex align-items-center'>{i18n.language?.toLocaleUpperCase()}<i className="fas fa-angle-down"></i></span>
                              </div>
                              <ul className="header-lang-list">
                                 <li><a onClick={() => {
                                    i18n.changeLanguage('hy');
                                    localStorage.setItem('lang', 'hy')
                                 }}>ARM</a></li>
                                 <li><a onClick={() => {
                                    i18n.changeLanguage('ru');
                                    localStorage.setItem('lang', 'ru')
                                 }}>RUS</a></li>
                                 <li><a onClick={() => {
                                    i18n.changeLanguage('en');
                                    localStorage.setItem('lang', 'en')

                                 }}>ENG</a></li>
                              </ul>
                           </div>
                           <div className="header-social-icons f-right d-none d-xl-block">
                              <ul>
                                 <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                                 {/* <li><a href="#"><i className="fab fa-behance"></i></a></li>
                                 <li><a href="#"><i className="fab fa-youtube"></i></a></li>
                                 <li><a href="#"><i className="fab fa-linkedin"></i></a></li>
                                 <li><a href="#"><i className="fab fa-pinterest"></i></a></li> */}
                              </ul>
                           </div>
                        </div>
                        <div className="header__menu f-right">

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

                        <div className="side-menu-icon d-lg-none text-end">
                           <button onClick={handleShow} className="side-toggle border-0 bg-transparent">
                              <i className="fas fa-bars"></i> </button>
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

export default HomeHeader;