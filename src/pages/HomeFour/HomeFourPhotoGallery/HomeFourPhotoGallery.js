import React from 'react';
import HomeFourSinglePhotoGallery from '../../../components/HomeFourSinglePhotoGallery/HomeFourSinglePhotoGallery';
import Slider from "react-slick";
import useGlobalContext from '../../../hooks/useGlobalContext';

const HomeFourPhotoGallery = () => {
   const { SlickArrowLeft, SlickArrowRight } = useGlobalContext();
   // setting
   const settings = {
      dots: true,
      arrows: true,
      infinite: true,
      speed: 300,
      prevArrow: <SlickArrowLeft />,
      nextArrow: <SlickArrowRight />,
      slidesToShow: 2,
      slidesToScroll: 1,
      responsive: [
         {
            breakpoint: 991,
            settings: {
               slidesToShow: 2,
               slidesToScroll: 1
            }
         },
         {
            breakpoint: 576,
            settings: {
               slidesToShow: 1,
               slidesToScroll: 1,
               arrows: false,
            }
         }
      ]

   };
   return (
      <>
         <section className="photogallery pt-130 pb-180">
            <div className="container">
               <div className="row">
                  <div className="col-lg-5">
                     <div className="about-title mb-65">
                        <h1>Նկարներ</h1>
                     </div>
                  </div>
               </div>

               <Slider className='h4gallery-active h4_services_slider h4_photogallery' {...settings}>
                  <HomeFourSinglePhotoGallery customUrl="https://www.yerevan.am/uploads/media/default/0002/35/thumb_134606_default_list.jpeg" image="b" title="Our Hospitality" />
                  <HomeFourSinglePhotoGallery customUrl='https://www.yerevan.am/uploads/media/default/0002/35/thumb_134606_default_list.jpeg' image="b" title="Trusted Partner" />
               </Slider>

            </div>
         </section>
      </>
   );
};

export default HomeFourPhotoGallery;