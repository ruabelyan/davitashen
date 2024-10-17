import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import HomeSingleTeam from '../../../../components/HomeSingleTeam/HomeSingleTeam';
import { useTranslation } from 'react-i18next';

const DoctorOneTeamArea = () => {
    const { t } = useTranslation();
    const [searchQuery, setSearchQuery] = useState('');
    const [loading, setLoading] = useState(false);

    const teamMembers = [
        { image: "1", title: "Վալերի Ադամյան" },
        { image: "2", title: "Աննա Ասոյան" },
        { image: "3", title: "Աստղիկ Դավթյան" },
        { image: "4", title: "Աննա Ավանեսովա" },
        { image: "5", title: "Գայանե Ավետիկյան" },
        { image: "6", title: "Գոհար Բաբայան" },
        { image: "7", title: "Մարինե Բաբայան" },
        { image: "8", title: "Գոհար Բաբայան" },
        { image: "9", title: "Գայանե Բարսելյանց" },
        { image: "10", title: "Աննա Գալաջյան" },
        { image: "11", title: "Սուսան Գևորգյան" },
        { image: "12", title: "Էմմա Գրիգորյան" },
        { image: "13", title: "Հասմիկ Երվանդյան" },
        { image: "14", title: "Ջուլիետտա Զոհրաբյան" },
        { image: "15", title: "Մարինե Իգիթյան" },
        { image: "16", title: "Ստեփան Կսպոյան" },
        { image: "17", title: "Հասմիկ Հովակիմյան" },
        { image: "18", title: "Մարիամ Հովհաննիսյան" },
        { image: "19", title: "Հասմիկ Մանուկյան" },
        { image: "20", title: "Աննա Մելիք-Փաշայան" },
        { image: "21", title: "Ծաղիկ Միդուրյան" },
        { image: "22", title: "Լուսինե Միրազիզյան" },
        { image: "23", title: "Դիանա Մկրտչյան" },
        { image: "24", title: "Ռոմելլա Միրզոյան" },
        { image: "25", title: "Անուշիկ Սահակյան" },
        { image: "26", title: "Մարիետա Սարկիսովա" },
        { image: "27", title: "Սերգեյ Գինոսյան" },
        { image: "28", title: "Մուշեղ Ստեփանյան" },
        { image: "29", title: "Վարվառա Հակոբյան" },
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
                                    <HomeSingleTeam key={index} image={member.image} title={member.title} />
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
