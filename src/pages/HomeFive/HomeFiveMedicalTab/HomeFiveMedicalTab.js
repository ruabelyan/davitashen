import React from 'react';
import HomeFiveSingleMedicalTab from '../../../components/HomeFiveSingleMedicalTab/HomeFiveSingleMedicalTab';

const HomeFiveMedicalTab = ({items}) => {
   return (
      <>
         <div className="medical-tab medical-tab-border">
            <div className="container">
               <div className="row">
                  <div className="col-sm-12">
                     <div className="h5medical-tab-menu pos-rel">
                        <nav>
                           <div className="nav nav-tabs" id="nav-tab" role="tablist">
                              <a className="nav-item nav-link active" id="nav-home-tab" data-bs-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true"><i><img src="img/home5/tab/tab__menu__icon3.png"
                              alt=""/></i> Շենգավիթ</a>
                              <a className="nav-item nav-link" id="nav-profile-tab" data-bs-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false"><i><img src="img/home5/tab/tab__menu__icon3.png" alt=""/></i> Նորագավիթ</a>
                              <a className="nav-item nav-link" id="nav-contact-tab" data-bs-toggle="tab" href="#nav-contact" role="tab" aria-controls="nav-contact" aria-selected="false"><i><img src="img/home5/tab/tab__menu__icon3.png" alt=""/></i> Նոր Խարբերդ</a>
                           </div>
                        </nav>
                     </div>
                  </div>
                  <div className="col-sm-12">
                     <div className="h5medical-tab-body">
                        <div className="tab-content" id="nav-tabContent">
                        <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                              <HomeFiveSingleMedicalTab items={[
                              {title:'Թերապևտիկ բաժանմունք'},
                              {title:'Մանկական բաժանմունք'},
                              {title:'Վերականգնողական բաժանմունք'},
                              {title:'Նեղ մասնագիտական բաժանմունք',
                                  childs:[
                                 "Իմունականխարգելման ծառայություն",
                                 "Սրտաբանական ծառայություն",
                                 "Կանանց կոնսուլտացիա",
                                 "Վիրաբուժական ծառայություն",
                                 "Ինֆեկցիոն ծառայություն",
                                 "Ներզատաբանական ծառայություն",
                                 "Ակնաբուժական ծառայություն",
                                 "Քիթ-կոկորդ-ականջաբանական ծառայություն",
                                 "Մաշկավեներաբանական ծառայություն",
                                 "Ուռուցքաբանական ծառայություն",
                                 "Համաճարակաբանական ծառայություն",
                                 "Ատամնաբուժական ծառայություն",
                                 "Աղեստամոքսաբանական ծառայություն ",
                                 "Ուրոլոգիական ծառայություն",
                               ]},
                              {title:'Լաբորատոր-գործիքային ախտորոշիչ բաժանմունք', childs: [
                                 "ՈՒլտրաձայնային ախտորոշման ծառայություն",
                                 "Ֆունկցիոնալ ախտորոշման ծառայություն",
                                 "Ռենտգեն դիագնոստիկ ծառայություն",
                                 "Լաբորատոր ծառայություն"
                               ]},

                             ]}  title='' />
                           </div>
                           <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                             <HomeFiveSingleMedicalTab items={[
                              {title:'Թերապևտիկ բաժանմունք'},
                              {title:'Մանկական բաժանմունք'},
                              {title:'Նեղ մասնագիտական բաժանմունք',
                                  childs:[
                                 "Իմունականխարգելման ծառայություն",
                                 "Սրտաբանական ծառայություն",
                                 "Կանանց կոնսուլտացիա",
                                 "Վիրաբուժական ծառայություն",
                                 "Ինֆեկցիոն ծառայություն",
                                 "Ներզատաբանական ծառայություն",
                                 "Ակնաբուժական ծառայություն",
                                 "Քիթ-կոկորդ-ականջաբանական ծառայություն",
                                 "Մաշկավեներաբանական ծառայություն",
                                 "Ուռուցքաբանական ծառայություն",
                                 "Լաբորատոր-գործիքային ախտորոշիչ բաժանմունք",
                                 "ՈՒլտրաձայնային ախտորոշման ծառայություն",
                                 "Ֆունկցիոնալ ախտորոշման ծառայություն",
                                 "Լաբորատոր ծառայություն"
                               ]},
                             ]} />
                           </div>
                           
                           <div className="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">
                              <HomeFiveSingleMedicalTab items={[
                                 {title:'Թերապևտիկ բաժանմունք'},
                                 {title:'Մանկական  բաժանմունք'},
                               ]} 
                              title=''
                              />
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