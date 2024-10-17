import React from 'react';

const HomeFiveSingleMedicalTab = ({items}) => {
   return (
      <>
         <div className="row">
            <div className="col-lg-12 col-md-12" style={{alignItems:'center',justifyContent:'center'}}>
               <div className="h5medical-content mb-30 gap-5">
                {items?.map((item,index) => {
                  return  <ul className='mb-3 mt-3' style={{fontSize:20}} key={index}>
                     {item.title}
                     {item?.childs?.length && item?.childs.map(child => {
                  return <li className='mb-3 mt-3' style={{fontSize:13,marginLeft:10}}><i className="far fa-arrow-alt-circle-right"></i>{child}</li>

                     })}
               </ul>
                })}
                
                 
               </div>
            </div>
         </div>
      </>
   );
};

export default HomeFiveSingleMedicalTab;