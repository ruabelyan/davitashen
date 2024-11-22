import { Link } from 'react-router-dom';

const HomeTwoFooter = () => {
   return (
      <>
         <footer>
            <div className="footer-top theme-bg pt-100">
               <div className="container">
                  <div className="footer-top-form mb-60">
                     <div className="row align-items-center">
                        <div className="col-xl-4 col-lg-4 col-md-4">
                           <div className="footer-logo-2">
                              <img style={{ borderRadius: '10px', width: '200px', height: '50px' }} src="img/logo/logo.png" alt="" />
                           </div>
                        </div>
                        <div className="col-xl-2 col-lg-3 d-none d-lg-block d-xl-block">
                           {/* <div className="footer-subscribe-title">
                              <span>Subscribe to Our Newsletter</span>
                           </div> */}
                        </div>
                        <div className="col-xl-6 col-lg-5 col-md-8">
                           <form className="footer-newsletter" action="#">
                              <input type="text" placeholder="Ձեր Էլ հասցեն...." />
                              <button className="primary_btn">Գրանցվել</button>
                           </form>
                        </div>
                     </div>
                  </div>
                  <div className="footer-mid pb-60">
                     <div className="row">
                        <div className="col-xl-4 col-lg-6 col-md-6">
                           <div className="footer-widget mb-40">
                              <div className="footer-contact-info-2">
                                 <div className="f-contact-info-box fix mb-30">
                                    <div className="footer-co-icon f-left">
                                       <img src="img/icon/footer-co-icon-1.png" alt="" />
                                    </div>
                                    <div className="footer-co-content">
                                       {/* <span>Mon to Fri : 08h30 - 18h00</span> */}
                                       <h4>010368241</h4>
                                    </div>
                                 </div>
                                 <div className="f-contact-info-box fix mb-30">
                                    <div className="footer-co-icon f-left">
                                       <img src="img/icon/footer-co-icon-2.png" alt="" />
                                    </div>
                                    <div className="footer-co-content">
                                       {/* <span>do you have a question?</span> */}
                                       <h4>pol.20@mail.ru</h4>
                                    </div>
                                 </div>
                                 {/* <div className="f-contact-info-box fix mb-30">
                                    <div className="footer-co-icon f-left">
                                       <img src="img/icon/footer-co-icon-2.png" alt="" />
                                    </div>
                                    <div className="footer-co-content">
                                       <span>socials network</span>
                                       <ul>
                                          <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                                          <li><a href="#"><i className="fab fa-behance"></i></a></li>
                                          <li><a href="#"><i className="fab fa-linkedin"></i></a></li>
                                          <li><a href="#"><i className="fab fa-youtube"></i></a></li>
                                          <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                                       </ul>
                                    </div>
                                 </div> */}
                              </div>
                           </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-md-6">
                           <div className="footer-widget mb-40">
                              <div className="footer-title">
                                 <h3>Բաժիններ</h3>
                              </div>
                              <div className="footer-menu footer-menu-2 fix">
                                 <ul>
                                    <li><Link to="/">Գլխավոր</Link></li>
                                    <li><Link to="/services">Բաժանմունքներ</Link></li>
                                    <li><Link to="/doctors">Բժիշկներ</Link></li>
                                    <li><Link to="/contact">Կապ մեզ հետ</Link></li>
                                    <li><Link to="/about">Մեր մասին</Link></li>
                                    <li><Link to="/pricelist">Գնացուցակ</Link></li>
                                 </ul>
                              </div>
                           </div>
                        </div>
                        {/* <div className="col-xl-4 col-md-6">
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
                  <div className="footer-bottom-0">
                     <div className="row">
                        <div className="col-xl-12">
                           <div className="footer-copyright-area text-center">
                              <p className="white-color">Copyright ©2022 <strong><a className="white-color"
                                 href="#">Basictheme. </a></strong> All rights reserved</p>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </footer>
      </>
   );
};

export default HomeTwoFooter;