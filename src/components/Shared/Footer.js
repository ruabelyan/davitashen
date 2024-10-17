import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';


const Footer = () => {
   const { t } = useTranslation();

   return (
      <>
         <footer>
            <div className="footer-top primary-bg footer-map pos-rel pt-120 pb-80">
               <div className="container">
                  <div className="row align-items-center" style={{ position: 'relative', zIndex: '9999' }}>
                     <div className="col-xl-4 col-lg-6 col-md-6">
                        <div className="footer-contact-info footer-contact-info-3 mb-40">
                           <div className="footer-logo mb-35">
                              <Link to="/"><img style={{ maxWidth: 150 }} src="img/logo/footer-logo-3.png" alt="" /></Link>
                           </div>
                           <div className="footer-contact-content mb-25">
                              <p>{t("bagratunyants_clinic_info_key")}</p>
                           </div>
                           <div className="footer-emailing">
                              <ul>
                                 <li><i className="far fa-envelope"></i>poliklinika-13@mail.ru</li>
                                 {/* <li><i className="far fa-clone"></i>examplemedical.com</li> */}
                                 <li><i className="far fa-flag"></i>{t("shahamiryanneri_street_key")}</li>
                              </ul>
                           </div>
                        </div>
                     </div>
                     {/* <div className="col-xl-4 col-lg-6 col-md-6">
                        <div className="footer-widget mb-40">
                           <div className="footer-title">
                              <h3>Departments</h3>
                           </div>
                           <div className="footer-menu footer-menu-2">
                              <ul>
                                 <li><Link to="/servicesDetails">Surgery and Radiology</Link></li>
                                 <li><Link to="/servicesDetails">Departments</Link></li>
                                 <li><Link to="/servicesDetails">Family Medicine</Link></li>
                                 <li><Link to="/doctors">Our Doctors</Link></li>
                                 <li><Link to="/servicesDetails">Women’s Health</Link></li>
                                 <li><Link to="/blogs">News</Link></li>
                                 <li><Link to="/servicesDetails">Optician</Link></li>
                                 <li><Link to="/shop">Shop</Link></li>
                                 <li><Link to="/servicesDetails">Pediatrics</Link></li>
                                 <li><Link to="/contact">Contact Us</Link></li>
                                 <li><Link to="/servicesDetails">Dermatology</Link></li>
                                 <li><Link to="/contact">Book an Appointment</Link></li>
                              </ul>
                           </div>
                        </div>
                     </div> */}
                     {/* <div className="col-xl-4 col-lg-6 col-md-6">
                        <div className="footer-widget mb-40">
                           <div className="footer-title">
                              <h3>News Feeds</h3>
                           </div>
                           <div className="blog-feeds pe-15">
                              <HomeSingleFooterBlog image="1" />
                              <HomeSingleFooterBlog image="2" />
                              <HomeSingleFooterBlog image="3" />
                           </div>
                        </div>
                     </div> */}
                  </div>
               </div>
            </div>
            <div className="footer-bottom pt-25 pb-20">
               <div className="container">
                  <div className="row">
                     <div className="col-xl-12">
                        <div className="footer-copyright footer-copyright-3 text-center">
                           <p>Copyright by@ rubabelyan - 2024</p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </footer>
      </>
   );
};

export default Footer;