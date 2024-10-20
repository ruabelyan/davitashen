import HomeSIngleService from '../../../../components/HomeSIngleService/HomeSIngleService';
import { useTranslation } from 'react-i18next';

const HomeServices = () => {
   const { t } = useTranslation();

   return (
      <>
         <section className="servcies-area gray-bg pt-115 pb-90">
            <div className="container">
               <div className="row">
                  <div className="col-xl-8 offset-xl-2 col-lg-10 offset-lg-1">
                     <div className="section-title text-center pos-rel mb-75">
                        <div className="section-icon">
                           <img className="section-back-icon" src="img/section/section-back-icon.png" alt="" />
                        </div>
                        <div className="section-text pos-rel home_ser_title">
                           <h1>{t('Բաժիններ_key')}</h1>
                        </div>
                        <div className="section-line pos-rel">
                           <img src="img/shape/section-title-line.png" alt="" />
                        </div>
                     </div>
                  </div>
               </div>
               <div className="row">
                  <HomeSIngleService icon="1" title={t('therapeutic_key')} />
                  <HomeSIngleService icon="2" title={t('pediatric_key')} />
                  <HomeSIngleService icon="3" title={t('Նեղ մասնագիտական բաժանմունք')} />
                  <HomeSIngleService icon="4" title={t('Լաբորատոր-գործիքային ախտորոշիչ բաժանմունք')} />
               </div>
            </div>

         </section>
      </>
   );
};

export default HomeServices;