import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const HomeFooter = () => {
    const { t } = useTranslation();
    return (
        <>
            <footer>
                <div className="footer-top primary-bg pt-115 pb-90">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-5 col-lg-6 col-md-8">
                                <div className="footer-contact-info mb-30">
                                    <div className="emmergency-call fix">
                                        <div className="emmergency-call-icon f-left">
                                            <i className="fas fa-phone"></i>
                                        </div>
                                        <div className="emmergency-call-text f-left">
                                            <h6>{t('phone_number_key')}</h6>
                                            <span> (010) 48-21-51</span>
                                        </div>
                                    </div>
                                    <div className="footer-logo mb-35">
                                        <Link to="/"><img src="img/logo/footer-logo.png" alt="" /></Link>
                                    </div>
                                    <div className="footer-contact-content mb-25">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
                                            et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.</p>
                                    </div>
                                    <div className="footer-emailing">
                                        <ul>
                                            <li><i className="far fa-envelope"></i>poliklinika-13@mail.ru</li>
                                            {/* <li><i className="far fa-clone"></i>examplemedical.com</li> */}
                                            <li><i className="far fa-flag"></i>{t("shahamiryanneri_street_key")}</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-2 offset-xl-1 col-lg-3 col-md-4">
                                <div className="footer-widget mb-30">
                                    <div className="footer-title">
                                        <h3>{t('department_key')}</h3>
                                    </div>
                                    <div className="footer-menu">
                                        <ul>
                                            <li><Link to="/">{t('cabinet_kka_key')}</Link></li>
                                            <li><Link to="/">{t('ophthalmology_cabinet_key')}</Link></li>
                                            <li><Link to="/">{t('endocrinology_cabinet_key')}</Link></li>
                                            <li><Link to="/">{t('dermatology_cabinet_key')}</Link></li>
                                            <li><Link to="/">{t('neurology_cabinet_key')}</Link></li>
                                            {/* <li><Link to="/servicesDetails">Dermatology</Link></li> */}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-2 offset-xl-1 col-lg-3 d-md-none d-lg-block">
                                <div className="footer-widget mb-30">
                                    <div className="footer-title">
                                        <h3>{t('diagnostic_services_key')}</h3>
                                    </div>
                                    <div className="footer-menu">
                                        <ul>
                                            <li><Link to="/">{t('xray_cabinet_key')}</Link></li>
                                            <li><Link to="/">{t('fluorography_cabinet_key')}</Link></li>
                                            <li><Link to="/">{t('ecg_cabinet_key')}</Link></li>
                                            <li><Link to="/">{t('ultrasound_cabinet_key')}</Link></li>
                                            <li><Link to="/">{t('echocardiography_key')}</Link></li>
                                            <li><Link to="/">{t('electroneuromyography_key')}</Link></li>
                                            <li><Link to="/">{t('autorefractor_key')}</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom pt-25 pb-20">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="footer-copyright text-center">
                                    <p className="white-color">Copyright by@ rubabelyan - 2024</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default HomeFooter;