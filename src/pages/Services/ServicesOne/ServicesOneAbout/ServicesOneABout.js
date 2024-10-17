import { useTranslation } from 'react-i18next';
import HomeFiveMedicalTab from '../../../HomeFive/HomeFiveMedicalTab/HomeFiveMedicalTab';

const ServicesOneABout = () => {
   const { t } = useTranslation();
   return (
      <>
         <section className="about-area pt-120 pb-90">
            <div className="container">
               {/* <div className="row ">
                  <div className="col-xl-6 col-lg-6 col-md-12">
                     <div className="section-title section-title-m-0 pos-rel mb-50 text-end">
                        <div className="section-icon">
                           <img className="section-back-icon back-icon-right" src="img/section/section-back-icon.png" alt="" />
                        </div>
                        <div className="section-text section-text-small pos-rel">
                           <h5>{t("health_care_facility_key")}</h5>
                           <h1>{t("stay_at_home_key")}</h1>
                        </div>
                     </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-12">
                     <div className="facalty-text mb-50">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                           aliqua. Ut enim ad minim veniam, quis nost rud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                           Duis aute irure dolor in reprehenderit.</p>
                     </div>
                  </div>
               </div> */}
                  <div className='container mt-5'>
                  <HomeFiveMedicalTab/>
                  </div>

            </div>
         </section>
      </>
   );
};

export default ServicesOneABout;