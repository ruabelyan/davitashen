import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const HomeFact = () => {
   const { t } = useTranslation();
   return (
      <>
         <section className="fact-area fact-map primary-bg pos-rel pt-115 pb-60">
            <div className="container">
               <div className="row">
                  <div className="col-xl-6 col-lg-6 col-md-10">
                     <div className="section-title pos-rel mb-45">
                        <div className="section-text section-text-white pos-rel">
                           <h5>{t("available_24_7_key")}</h5>
                           <h1 className="white-color">{t('always_ready_challenge_key')}</h1>
                        </div>
                     </div>
                     <div className="section-button section-button-left mb-30">
                        <Link to="/contact" className="primary_btn btn-icon ml-0"><span>+</span>{t('contact_key')}</Link>
                     </div>
                  </div>
                  <div className="col-lg-6 col-lg-6 col-md-8">
                     <div className="cta-satisfied">
                        <div className="single-satisfied mb-50">
                           <h1>1M+</h1>
                           <h5> <i className="fas fa-user"></i>{t("satisfied_patients_key")}</h5>
                           <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                              aliqua.</p>
                        </div>
                        <div className="single-satisfied mb-50">
                           <h1>100+</h1>
                           <h5><i className="far fa-thumbs-up"></i>{t("world_awards_key")}</h5>
                           <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                              aliqua.</p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </>
   );
};

export default HomeFact;