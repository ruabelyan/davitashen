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
                  <HomeFourSinglePhotoGallery customUrl="https://move2armenia.am/wp-content/uploads/2023/09/6b435c8244535b89a24e68965d1f7e4399d33701-1-600x402.jpeg" image="b" title="Our Hospitality" />
                  <HomeFourSinglePhotoGallery customUrl='https://move2armenia.am/wp-content/uploads/2023/09/4c7bc7df4e2d7981a4f8b140fc9f91c462022327-600x402.jpeg' image="b2" title="Trusted Partner" />
                  <HomeFourSinglePhotoGallery customUrl='https://move2armenia.am/wp-content/uploads/2023/09/8e236e9cce1f6119f843a425d872b57ebf93304b-600x402.jpeg' image="b" title="Trusted Partner" />
                  <HomeFourSinglePhotoGallery customUrl='https://move2armenia.am/wp-content/uploads/2023/09/ba6171a6b928b918f89a62fca11d4f4d0cf6bc5d-600x402.jpeg' image="b" title="Trusted Partner" />
                  <HomeFourSinglePhotoGallery customUrl='https://move2armenia.am/wp-content/uploads/2023/09/d96988dc7a2261903f4723f80ed6223faca448ce-600x402.jpeg' image="b" title="Trusted Partner" />
               </Slider>

            </div>
         </section>
      </>
   );
};

export default HomeFourPhotoGallery;