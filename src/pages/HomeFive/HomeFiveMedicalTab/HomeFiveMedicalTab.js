import React from 'react';
import HomeFiveSingleMedicalTab from '../../../components/HomeFiveSingleMedicalTab/HomeFiveSingleMedicalTab';
import HomeFourSingleService from '../../../components/HomeFourSingleService/HomeFourSingleService';

const HomeFiveMedicalTab = ({ items }) => {
   const services = [
      { title: '1. Թերապևտիկ բաժին' },
      { title: '2. Վիրաբուժական կաբինետ' },
      { title: '3. Ինֆեկցիոն  կաբինետ' },
      { title: '4. Մաշկավեներաբանական կաբինետ' },
      { title: '5. Ճառագայթային ախտորոշման բաժին' },
      { title: '6. Մանկաբարձա-գինեկոլոգիական բաժին' },
      { title: '7. Ուռուցքաբանական կաբինետ' },
      { title: '8. Ֆիզիոթերապևտիկ բաժին' },
      { title: '9. Սրտաբանական կաբինետ' },
      { title: '10. Միջամտության կաբինետ' },
      { title: '11. Քիթ-կոկորդ-ականջաբանական կաբինետ' },
      { title: '12. Ներզատաբանական կաբինետ' },
      { title: '13. Ստոմատոլոգիական  կաբինետ' },
      { title: '14. Դեռահասների կաբինետ' },
      { title: '15. Նյարդաբանական կաբինետ' },
      { title: '16. Կենտրոնացված ախտահանման բաժին' },
      { title: '17. Լաբորատոր-ախտորոշիչ բաժին' },
      { title: '18. Ակնաբուժական կաբինետ' },
      { title: '19. Ուլտրաձայնային ախտորոշման կաբինետ' },
      { title: '20. Թոքային հիվանդությունների հայտնաբերման կաբինետ' },
      { title: '21. Մանկական բաժին' },
      { title: '22. Դպրոց-նախադպրոցական բաժին' },
   ]
   return (
      <>
         <div className="medical-tab medical-tab-border">
            <div className="container">
               <div className="row">
                  <div className="col-sm-12">
                     <div className="h5medical-tab-menu pos-rel">
                        <nav>
                           <div className="nav nav-tabs" id="nav-tab" role="tablist">
                              {/* <a className="nav-item nav-link active" id="nav-home-tab" data-bs-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true"><i><img src="img/home5/tab/tab__menu__icon3.png"
                                 alt="" /></i> Բաժանմունքներ ցանկ</a> */}
                              {/* <a className="nav-item nav-link" id="nav-profile-tab" data-bs-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false"><i><img src="img/home5/tab/tab__menu__icon3.png" alt="" /></i> Նորագավիթ</a>
                              <a className="nav-item nav-link" id="nav-contact-tab" data-bs-toggle="tab" href="#nav-contact" role="tab" aria-controls="nav-contact" aria-selected="false"><i><img src="img/home5/tab/tab__menu__icon3.png" alt="" /></i> Նոր Խարբերդ</a> */}
                              <h2 className='text-center w-100 mt-3 mb-5'> Բաժանմունքներ ցանկ</h2>
                           </div>
                        </nav>
                     </div>
                  </div>
                  <div className="col-sm-12">
                     <div className="h5medical-tab-body">
                        <div className="tab-content" id="nav-tabContent">

                           <div className='col-sm-12 col-md-12'>
                              {services.map((service, index) => (
                                 <HomeFourSingleService
                                    key={index}
                                    image={index + 1 || ''}
                                    name=">>>"
                                    title={service.title}
                                 />
                              ))}
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
};

export default HomeFiveMedicalTab;