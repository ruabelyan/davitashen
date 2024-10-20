import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import HomeSingleTeam from '../../../../components/HomeSingleTeam/HomeSingleTeam';
import { useTranslation } from 'react-i18next';
import SingleTeam from '../../../../components/SingleTeam/SingleTeam';

const DoctorOneTeamArea = () => {
    const { t } = useTranslation();
    const [searchQuery, setSearchQuery] = useState('');
    const [loading, setLoading] = useState(false);

    const teamMembers = [
        { image: "11", title: "Աստղիկ Մամյան", subTitle: "բաժնի վարիչ" },
        { image: "1", title: "Նաիրա Գինոսյան", subTitle: 'lorem' },
        { image: "2", title: "Հասմիկ Ղազարյան", subTitle: 'lorem' },
        { image: "3", title: "Արեգնազան Իսախանյան", subTitle: 'lorem' },
        { image: "4", title: "Աիդա Գրիգորյան", subTitle: 'lorem' },
        { image: "5", title: "Անահիտ Մելքոնյան", subTitle: 'lorem' },
        { image: "6", title: "Աիդա Տոնոյան", subTitle: 'lorem' },
        { image: "7", title: "Անի Ոսկանյան", subTitle: 'lorem' },
        { image: "8", title: "Գալինա Ավագյան", subTitle: 'lorem' },
        { image: "9", title: "Թագուհի Հովսեփյան", subTitle: 'lorem' },
        { image: "10", title: "Վարդուհի Տեր-Պետրոսյան", subTitle: 'lorem' },

    ];

    // Filter team members based on the search query
    const filteredTeam = teamMembers.filter(member =>
        member.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <>
            <section className="team-area pt-115 pb-55">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-lg-7 col-md-10">
                            <div className="section-title pos-rel mb-75">
                                <div className="section-icon">
                                    <img className="section-back-icon back-icon-left" src="img/section/section-back-icon.png" alt="" />
                                </div>
                                <div className="section-text pos-rel">
                                    <h5>{t('our_team_key')}</h5>
                                    <h1>{t('professional_care_provider_key')}</h1>
                                </div>
                                <div className="section-line pos-rel">
                                    <img src="img/shape/section-title-line.png" alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-5">
                            <div className="section-button text-end d-none d-lg-block pt-80">
                                <Link to="/contact" className="primary_btn btn-icon ml-0"><span>+</span>{t('contact_key')}</Link>
                            </div>
                        </div>
                    </div>

                    {/* Search Input */}
                    <div className="row mb-4">
                        <div className="col-xl-12">
                            <input
                                type="text"
                                placeholder={t('Որոնում․․․')}
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="form-control"
                            />
                        </div>
                    </div>

                    {/* Loader */}
                    {loading ? (
                        <div>Loading...</div>
                    ) : (
                        <div className="row">
                            {filteredTeam.length > 0 ? (
                                filteredTeam.map((member, index) => (
                                    // <HomeSingleTeam key={index} image={member.image} title={member.title} />
                                    <SingleTeam number={index + 1} image={member.image} name={member.title} title={member.subTitle} />

                                ))
                            ) : (
                                <div>{t('Որոնման արդյունքում տվյալներ չեն հայտնաբերվել')}</div>
                            )}
                        </div>
                    )}
                </div>
            </section>
        </>
    );
};

export default DoctorOneTeamArea;
