import CommonPageHeader from '../../components/CommonPageHeader/CommonPageHeader';
import Footer from '../../components/Shared/Footer';
import HomeFact from '../Home/Home/HomeFact/HomeFact';
import HomeHeader from '../Home/Home/HomeHeader/HomeHeader';
import { useTranslation } from 'react-i18next';
import PriceListArea from './PriceListArea/PriceListArea';
import HomeFourNavBar from '../HomeFour/HomeFourNavBar/HomeFourNavBar';
import HomeFourFooter from '../HomeTwo/HomeTwoFooter/HomeTwoFooter';


const PriceList = () => {
   const { t } = useTranslation();

   return (
      <>
         <HomeFourNavBar />
         <CommonPageHeader title={t("about_us_key")} subtitle={t('price_list_key')} />
         <PriceListArea />
         <HomeFourFooter />
      </>
   );
};

export default PriceList;