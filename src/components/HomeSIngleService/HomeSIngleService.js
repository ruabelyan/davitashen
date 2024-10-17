import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const HomeSIngleService = ({ icon, title, border_class, description }) => {
   const { t } = useTranslation();
   return (
      <>
         <div className="col-xl-4 col-lg-6 col-md-6">
            <div className={border_class ? `service-box ${border_class} text-center mb-30` : 'service-box text-center mb-30'}>
               <div className="service-thumb">
                  <img style={{ maxWidth: 100 }} src={`img/services/service${icon}.png`} alt="" />
               </div>
               <div className="service-content">
                  <h3><Link to={`/servicesDetails/${icon}`}>{title}</Link></h3>
                  <p>{description}</p>
                  {/* <Link className="service-link" to="/servicesDetails">{t('read_more_key')}</Link> */}
               </div>
            </div>
         </div>
      </>
   );
};

export default HomeSIngleService;