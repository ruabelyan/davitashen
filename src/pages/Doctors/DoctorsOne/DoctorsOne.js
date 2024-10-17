import CommonPageHeader from '../../../components/CommonPageHeader/CommonPageHeader';
import HomeFourFooter from '../../HomeTwo/HomeTwoFooter/HomeTwoFooter';
import HomeFact from '../../Home/Home/HomeFact/HomeFact';
import HomeHeader from '../../Home/Home/HomeHeader/HomeHeader';
import HomeFourNavBar from '../../HomeFour/HomeFourNavBar/HomeFourNavBar';
import CounterArea from './CounterArea/CounterArea';
import DoctorOneTeamArea from './DoctorOneTeamArea/DoctorOneTeamArea';
import { useTranslation } from 'react-i18next';

const DoctorsOne = () => {
    const { t } = useTranslation();
    return (
        <>
            <HomeFourNavBar />
            <CommonPageHeader title={t('doctores_key')} subtitle={t('doctor_key')} />
            <DoctorOneTeamArea />
            <HomeFact />
            <CounterArea />
            <HomeFourFooter />
        </>
    );
};

export default DoctorsOne;