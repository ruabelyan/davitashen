import React from 'react';

const HomeFourSinglePhotoGallery = ({ image, title,customUrl }) => {
   return (
      <>
         <div className="">
            <div className="gallery-box pos-rel">
               <img src={customUrl ? customUrl :`img/home4/gallery/gallery__thum${image}.jpg`} alt="" />
               <div className="gallery-content">
                  {/* <h2 className="f-600 theme-color">{title}</h2> */}
               </div>
            </div>
         </div>
      </>
   );
};

export default HomeFourSinglePhotoGallery;