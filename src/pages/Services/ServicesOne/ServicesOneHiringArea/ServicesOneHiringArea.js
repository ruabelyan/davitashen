import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';


const ServicesOneHiringArea = () => {
   const  {t} = useTranslation();

    return (
        <>
            <section className="hiring-area pt-120 pb-120">
                <div className="container">
                    <div className="row no-gutters hire-bg-2">
                        <div className="col-xl-6 col-lg-6">
                            <div className="hire-img">
                                <img className="img" src="img/hire/hire1.jpg" alt=""/>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6">
                            <div className="hire-text">
                                <h1>{t("for_employers_key")}</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                                    labore et dolore magna
                                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                    commodo consequat.
                                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                    pariatur. Excepteur sint
                                    occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                </p>
                                <Link to="/contact"
                                    className="primary_btn btn-icon btn-icon-green ml-0"><span>+</span>{t("contact_us_key")}</Link>
                            </div>
                        </div>
                    </div>
                    <div className="row no-gutters hire-bg">
                        <div className="col-xl-6 col-lg-6">
                            <div className="hire-text">
                                <h1>{t("for_employers_key")}</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                                    labore et
                                    dolore magna
                                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                    commodo
                                    consequat.
                                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                    pariatur.
                                    Excepteur sint
                                    occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                </p>
                                <Link to="/contact"
                                    className="primary_btn btn-icon ml-0"><span>+</span>{t("apply_today_key")}</Link>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6">
                            <div className="hire-img">
                                <img className="img" src="img/hire/hire2.jpg" alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ServicesOneHiringArea;