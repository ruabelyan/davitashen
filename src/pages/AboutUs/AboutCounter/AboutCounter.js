import React from 'react';
import AboutSingleCounter from '../../../components/AboutSingleCounter/AboutSingleCounter';
import { useTranslation } from 'react-i18next';


const AboutCounter = () => {
   const { t } = useTranslation();

   return (
      <>
         <section className="counter-wraper pt-120 pb-90 gray-bg">
            <div className="container">
               <div className="row">

                  <AboutSingleCounter icon="1" counter="358" title={t("worldwide_branches_key")} />
                  <AboutSingleCounter icon="2" counter="358" title={t("hospital_formed_key")} />
                  <AboutSingleCounter icon="3" counter="238" title={t("local_partners_key")} />

               </div>
            </div>
         </section>
      </>
   );
};

export default AboutCounter;