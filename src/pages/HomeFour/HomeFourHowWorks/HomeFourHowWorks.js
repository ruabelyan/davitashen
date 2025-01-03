import React from 'react';
import HomeFourSingleHowWorksItem from '../../../components/HomeFourSingleHowWorksItem/HomeFourSingleHowWorksItem';

const HomeFourHowWorks = () => {
   return (
      <>
         <section className="howitworks pt-180 pb-80">
            <div className="container">
               <div className="row">
                  <div className="col-xl-10 offset-xl-1 col-lg-10 offset-lg-1">
                     <div className="section-title text-center pos-rel mb-75">
                        <div className="section-icon">
                           <img className="section-back-icon" src="img/section/section-back-icon.png" alt="" />
                        </div>
                        <div className="section-text pos-rel">
                           {/* <h5>How It Works</h5> */}
                           {/* <h1>You Will Be Able To Access Այլ Ծառայություններ Following 3 Steps</h1> */}
                           <h1>Դուք ունեք հնարավորություն</h1>

                        </div>
                        <div className="section-line pos-rel horizontalLine">
                           {/* <img src="img/shape/section-title-line.png" alt="" /> */}
                        </div>
                     </div>
                  </div>
               </div>
               <div className="row pos-rel d-flex justify-content-between">

                  <HomeFourSingleHowWorksItem icon="1" title="Գրանցվել" moveIcon="move-icon" />
                  <HomeFourSingleHowWorksItem icon="2" title="Ընտրել բժիշկ" moveIcon="move-icon" />
                  <HomeFourSingleHowWorksItem icon="3" title="Անցնել հետազոտություն" />

               </div>
            </div>
         </section>
      </>
   );
};

export default HomeFourHowWorks;