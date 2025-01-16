import { useTranslation } from 'react-i18next';

const ContactArea = () => {
    const { t } = useTranslation();

    return (
        <>
            <section className="contact-area pt-120 pb-90" data-background="assets/img/bg/bg-map.png">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-4 col-lg-4 col-md-4">
                            <div className="contact text-center mb-30">
                                <i className="fas fa-envelope"></i>
                                <h3>{t("mail_here_key")}</h3>
                                <a href="#">dmedcentre@bk.ru</a>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-4">
                            <div className="contact text-center mb-30">
                                <i className="fas fa-map-marker-alt"></i>
                                <h3>{t("visit_here_key")}</h3>
                                <p>{t("street_key")}</p>
                            </div>
                        </div>
                        <div className="col-xl-4  col-lg-4 col-md-4 ">
                            <div className="contact text-center mb-30">
                                <i className="fas fa-phone"></i>
                                <h3>{t("call_here_key")}</h3>
                                <p>Տնօրենի ընդունարան՝ 010 368241</p>
                                <p>Բուժական հարցով փոխտնօրեն՝ 011 370039</p>
                                <p>Մատենավարման բաժին՝ 010 369390 , 011 369390</p>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ContactArea;