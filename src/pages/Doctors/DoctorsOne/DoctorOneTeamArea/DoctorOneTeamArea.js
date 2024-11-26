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
        { image: "11", title: "Աստղիկ Մամյան", subTitle: 'Մանկական բաժնի վարիչ/մանկական նյարդաբան' },
        { image: "1", title: "Նաիրա Գինոսյան", subTitle: 'Մանկաբույժ' },
        { image: "2", title: "Հասմիկ Ղազարյան", subTitle: 'Մանկաբարձ-Գինեկոլոգ' },
        { image: "3", title: "Արեգնազան Իսախանյան", subTitle: 'Lաբորատորիայի բժիշկ' },
        { image: "4", title: "Աիդա Գրիգորյան", subTitle: 'Lաբորատորիայի բժիշկ' },
        { image: "5", title: "Անահիտ Մելքոնյան", subTitle: 'Մանկաբարձ-Գինեկոլոգ' },
        { image: "6", title: "Աիդա Տոնոյան", subTitle: 'Մանկաբույժ' },
        { image: "7", title: "Անի Ոսկանյան", subTitle: 'Թերապևտ' },
        { image: "8", title: "Գալինա Ավագյան", subTitle: 'Թերապևտ' },
        { image: "9", title: "Թագուհի Հովսեփյան", subTitle: 'Մանկաբույժ' },
        { image: "10", title: "Վարդուհի Տեր-Պետրոսյան", subTitle: 'Մանկաբարձ-Գինեկոլոգ' },
        { image: "12", title: "Ասյա Մովսիսյան", subTitle: 'ֆթիզիատր' },
        { image: "13", title: "Արուսյակ Մելիքյան", subTitle: 'ֆթիզիատր' },
        { image: "14", title: "Գոհար Խլոյան", subTitle: 'մանկական-սրտաբան' },
        { image: "15", title: "Ինեսսա Միրզոյան", subTitle: 'ակնաբան' },
        { image: "16", title: "Կիրակոսյան Սուսաննա", subTitle: 'մանկաբույժ' },
        { image: "17", title: "Մարկոսյան Մարիամ", subTitle: 'մանկաբարձ-գինեկոլոգ' },
        { image: "18", title: "Մարտիրոսյան Նարինե", subTitle: 'մանկաբարձ-գինեկոլոգ' },
        { image: "19", title: "Մետաքսյա Հարությունյան", subTitle: 'վիրաբույժ' },
        { image: "20", title: "Մկրտչյան Արմինե", subTitle: 'բժիշկ-ռենտգենոլոգ' },
        { image: "21", title: "Նատալյա Ավագյան", subTitle: 'ֆթիզիատր' },
        { image: "22", title: "Նարինե Մարտիրոսյան", subTitle: 'նյարդաբան' },
        { image: "23", title: "Ռոզա Հակոբյան", subTitle: 'մանկական-վիրաբույժ' },
        { image: "24", title: "Սյուզաննա Վիրաբյան", subTitle: 'ակնաբան' },
        { image: "25", title: "Վալենտինա Մուսաելյան", subTitle: 'ֆիզիոթերապևտ' },
        { image: "26", title: "Անժելյա Օգանովա", subTitle: 'ուռուցքաբան' },
        { image: "27", title: "Աննա Ենգոյան", subTitle: 'նյարդաբան' },
        { image: "28", title: "Աննա Հայրապետյան", subTitle: 'սոնոգրաֆիստ' },
        { image: "29", title: "Կարինե Ղազարյան", subTitle: 'Լաբորատորիայի վարիչ' },
        { image: "30", title: "Զարուհի Մեհրաբյան", subTitle: 'Թերապևտ' },

        { image: "31", title: "Էլմիրա Անդրեասյան", subTitle: 'Թերապևտ' },

        { image: "32", title: "Իրինա Մարտիրոսյան", subTitle: 'Թերապևտ' },
        { image: "33", title: "Կարինա Մորյան", subTitle: 'Թերապևտ' },
        { image: "34", title: "Կարինե Գասպարյան", subTitle: 'Թերապևտ' },
        // { image: "35", title: "Մարինա Հայրապետյան", subTitle: 'Թերապևտ' },
        { image: "36", title: "Նաիրա Գևորգյան", subTitle: 'Թերապևտ' },
        { image: "37", title: "Նարինե Մարգարյան", subTitle: 'Թերապևտ' },
        { image: "38", title: "Սյուզաննա Հակոբյան", subTitle: 'Թերապևտ' },
        { image: "39", title: "Գայանե Սիմոնյան", subTitle: 'Թերապևտ' },
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
