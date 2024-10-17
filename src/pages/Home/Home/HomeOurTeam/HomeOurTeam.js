import { Link } from 'react-router-dom';
import HomeSingleTeam from '../../../../components/HomeSingleTeam/HomeSingleTeam';
import { useTranslation } from 'react-i18next';

const HomeOurTeam = () => {
   const { t } = useTranslation();
   return (
      <>
         <section className="team-area pt-115 pb-55">
            <div className="container">
               <div className="row">
                  <div className="col-xl-6 col-lg-7 col-md-10">
                     <div className="section-title pos-rel mb-75">
                        <div className="section-icon">
                           <img className="section-back-icon back-icon-left" src="img/section/section-back-icon.png" alt="" />
                        </div>
                        <div className="section-text pos-rel">
                           <h5>{t('our_team_key')}</h5>
                           <h1>{t('professional_care_provider_key')}</h1>
                        </div>
                        <div className="section-line pos-rel">
                           <img src="img/shape/section-title-line.png" alt="" />
                        </div>
                     </div>
                  </div>
                  <div className="col-xl-6 col-lg-5">
                     <div className="section-button text-end d-none d-lg-block pt-80 team_btn">
                        <Link to="/contact" className="primary_btn btn-icon ml-0"><span>+</span>{t("make_appointment_key")}</Link>
                     </div>
                  </div>
               </div>
               <div className="row">
                  <HomeSingleTeam image="30" name="Ռուզան Դուրգարյան" title={t("տնօրեն")}  />
                  <HomeSingleTeam image="31" name="Արմինե Ջանոյան" title={t("փորձաքննության գծով տնօրենի տեղակալ")}/>

               </div>
            </div>
         </section>
      </>
   );
};

export default HomeOurTeam;