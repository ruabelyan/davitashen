import CommonPageHeader from '../../components/CommonPageHeader/CommonPageHeader';
import Footer from '../../components/Shared/Footer';
import HomeFourNavBar from '../HomeFour/HomeFourNavBar/HomeFourNavBar';
import ContactArea from './ContactArea/ContactArea';
import ContactFormArea from './ContactFormArea/ContactFormArea';
import ContactMap from './ContactMap/ContactMap';
import { useTranslation } from 'react-i18next';
import HomeFourFooter from '../HomeTwo/HomeTwoFooter/HomeTwoFooter';

const Contact = () => {
    const { t } = useTranslation();
    return (
        <>
            <HomeFourNavBar />

            <CommonPageHeader title={t('contact_key')} subtitle={t('contact_key')} />
            <ContactArea />
            <ContactFormArea />
            <ContactMap />
            <HomeFourFooter />
        </>
    );
};

export default Contact;