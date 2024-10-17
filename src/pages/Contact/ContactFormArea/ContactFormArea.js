import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';


const ContactFormArea = () => {
   const { t } = useTranslation();

   return (
      <>
         <section className="contact-form-area gray-bg pt-100 pb-100">
            <div className="container">
               <div className="form-wrapper">
                  <div className="row align-items-center">
                     <div className="col-xl-8 col-lg-8">
                        <div className="section-title mb-55">
                           <p><span></span>{t("anything_on_your_mind_key")}</p>
                           <h1>{t("estimate_your_idea_key")}</h1>
                        </div>
                     </div>
                     {/* <div className="col-xl-4 col-lg-3 d-none d-xl-block ">
                        <div className="section-link mb-80 text-end">
                           <Link to="/appoinment"
                           className="primary_btn btn-icon ml-0"><span>+</span>{t("make_appointment_key")}</Link>
                        </div>
                     </div> */}
                  </div>
                  <div className="contact-form">
                     <form id="contact-form" action="#">
                        <div className="row">
                           <div className="col-lg-6">
                              <div className="form-box user-icon mb-30">
                                 <input type="text" name="name" placeholder={t("your_name_key")} />
                              </div>
                           </div>
                           <div className="col-lg-6">
                              <div className="form-box email-icon mb-30">
                                 <input type="text" name="email" placeholder={t("your_email_key")} />
                              </div>
                           </div>
                           <div className="col-lg-6">
                              <div className="form-box phone-icon mb-30">
                                 <input type="text" name="phone" placeholder={t("your_phone_key")} />
                              </div>
                           </div>
                           <div className="col-lg-6">
                              <div className="form-box subject-icon mb-30">
                                 <input type="text" name="subject" placeholder={t("your_subject_key")} />
                              </div>
                           </div>
                           <div className="col-lg-12">
                              <div className="form-box message-icon mb-30">
                                 <textarea name="message" id="message" cols="30" rows="10"
                                    placeholder={t("your_message_key")}></textarea>
                              </div>
                              <div className="contact-btn text-center">
                                 <button className="primary_btn btn-icon ml-0" type="button"><span>+</span>{t("get_action_key")}</button>
                              </div>
                           </div>
                        </div>
                     </form>
                     <p className="ajax-response text-center"></p>
                  </div>
               </div>
            </div>
         </section>
      </>
   );
};

export default ContactFormArea;