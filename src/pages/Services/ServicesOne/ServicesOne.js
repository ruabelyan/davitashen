import { useTranslation } from 'react-i18next';
import CommonPageHeader from '../../../components/CommonPageHeader/CommonPageHeader';
import HomeHeader from '../../Home/Home/HomeHeader/HomeHeader';
import ServicesOneABout from './ServicesOneAbout/ServicesOneABout';
import ServicesOneHiringArea from './ServicesOneHiringArea/ServicesOneHiringArea';
import HomeFourNavBar from '../../HomeFour/HomeFourNavBar/HomeFourNavBar';
import HomeFourFooter from '../../HomeTwo/HomeTwoFooter/HomeTwoFooter';

const ServicesOne = () => {
   const { t } = useTranslation('');
   return (
      <>
         <HomeFourNavBar />
         <CommonPageHeader title={t('department_key')} subtitle={t('department_key')} />
         <ServicesOneABout />
         {/* <CalculateArea /> */}
         {/* <ServicesOneHiringArea /> */}
         <HomeFourFooter />
      </>
   );
};

export default ServicesOne;