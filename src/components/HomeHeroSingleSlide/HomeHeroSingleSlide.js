import { useTranslation } from 'react-i18next';

const HomeHeroSingleSlide = ({ bg_className }) => {

   const { t } = useTranslation();
   return (
      <>
         <div
            // style={{ backgroundImage: 'url("")' }}
            className={`single-slider slider-height d-flex align-items-center slider_bg_${bg_className}`}>
            <div className="container">
               <div className="row">
                  <div className="col-xl-6 col-lg-8 col-md-10">
                     <div className="hero-text">
                        <div className="hero-slider-caption ">
                           <h5>{t('hero_care')}</h5>
                           <h1>{t('hero_best_care')}</h1>
                           <p>{t('hero_description')}</p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
};

export default HomeHeroSingleSlide;