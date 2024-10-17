import { useTranslation } from 'react-i18next';

const HomeAboutArea = () => {
   const { t } = useTranslation();
   return (
      <>
         <section className="about-area pt-120 pb-90">
            <div className="container">
               <div className="row">
                  <div className="col-xl-6 col-lg-5 about_left">
                     <div className="medical-icon-brand-2">
                        <img src="img/about/medical-brand-icon-border.png" alt="" />
                     </div>
                     <div className="about-left-side pos-rel mb-30">
                        <div className="about-front-img">
                           <img src="img/about/about-img.jpg" alt="" />
                        </div>
                        <div className="about-shape">
                           <img src="img/about/about-shape.png" alt="" />
                        </div>
                     </div>
                  </div>
                  <div className="col-xl-6 col-lg-7">
                     <div className="about-right-side pt-55 mb-30">
                        <div className="about-title mb-20">
                           {/* <h5>{t('about_key')}</h5> */}
                           <h1>Մեր պատմությունը</h1>
                        </div>
                        <div className="about-text">
                           <p> Երևանի «Բագրատունյաց» առողջության կենտրոնի կողմից բնակչությանը տրամադրվում է պետության կողմից երաշխավորված անվճար արտահիվանդանոցային բժշկական օգնություն և սպասարկում՝  համաձայն ՀՀ կառավուրաթյան 318-Ն որոշման:</p>
                        </div>
                        <div className="about-author d-flex align-items-center">
                           <div className="author-ava">
                              <img src="img/about/author-ava.jpg" alt="" />
                           </div>
                           <div className="author-desination">
                              <h4>{t("ruzanna_durgharyan_key")}</h4>
                              <h6>{t("director_key")}</h6>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </>
   );
};

export default HomeAboutArea;