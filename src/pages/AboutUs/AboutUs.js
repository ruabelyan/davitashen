import CommonPageHeader from '../../components/CommonPageHeader/CommonPageHeader';
import Footer from '../../components/Shared/Footer';
import HomeFact from '../Home/Home/HomeFact/HomeFact';
import HomeHeader from '../Home/Home/HomeHeader/HomeHeader';
import AboutArea from './AboutArea/AboutArea';
import AboutTestimonial from './AboutTestimonial/AboutTestimonial';
import { useTranslation } from 'react-i18next';
import HomeFourNavBar from '../HomeFour/HomeFourNavBar/HomeFourNavBar';
import HomeFourFooter from '../HomeTwo/HomeTwoFooter/HomeTwoFooter';
import HomeFourTestimonials from '../HomeFour/HomeFourTestimonials/HomeFourTestimonials';


const AboutUs = () => {
   const { t } = useTranslation();

   return (
      <>
         <HomeFourNavBar />

         <CommonPageHeader title={t("about_us_key")} subtitle={t("about_key")} />
         <AboutArea />
         {/* <AboutCounter /> */}
         {/* <AboutAppoinment /> */}
         {/* <HomeOurTeam/> */}
         {/* <HomeFact /> */}
         {/* <AboutTestimonial /> */}
         {/* <AboutAnalysis /> */}
         <HomeFourTestimonials />

         <HomeFourFooter />

      </>
   );
};

export default AboutUs;