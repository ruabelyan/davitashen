import React from 'react';
import SingleTeam from '../../../components/SingleTeam/SingleTeam';
import { useTranslation } from 'react-i18next';


const HomeFourTeams = () => {
    const { t } = useTranslation();

    return (
        <>
            <section className="team-area pt-180 pb-65">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 offset-xl-3 col-lg-10 offset-lg-1">
                            <div className="section-title text-center pos-rel mb-75">
                                <div className="section-icon">
                                    <img className="section-back-icon" src="img/section/section-back-icon.png" alt="" />
                                </div>
                                <div className="section-text pos-rel horizontalLine">
                                    <h5>{t('our_team_key')}</h5>
                                    <h1>{t('professional_care_provider_key')}</h1>
                                </div>
                                {/* <div className="section-line pos-rel">
                                    <img src="img/shape/section-title-line.png" alt="" />
                                </div> */}
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <SingleTeam number={3} image="11" name="Աստղիկ Մամյան" title="Բաժնի վարիչ-Մանկաբույժ" />
                        <SingleTeam number={1} image="1" name="Նաիրա Գինոսյան" title="Մանկաբույժ" />
                        <SingleTeam number={2} image="2" name="Հասմիկ Ղազարյան" title="Մանկաբարձ-Գինեկոլոգ" />
                        <SingleTeam number={3} image="3" name="Արեգնազան Իսախանյան" title="Lաբորատորիայի բժիշկ" />
                    </div>
                </div>
            </section>
        </>
    );
};

export default HomeFourTeams;