import React from 'react';
import { Offcanvas } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import Collapsible from 'react-collapsible';
import { useTranslation } from 'react-i18next';


const Sidebar = ({ show, handleClose }) => {
   const { t } = useTranslation();

   const Home = <NavLink to="/home">{t("home_key")}</NavLink>
   const Department = <NavLink to="/services">{t("department_key")}</NavLink>
   const Doctors = <NavLink to="/doctors">{t("doctors_key")}</NavLink>
   const About = <NavLink to="/about">{t("about_us_key")}</NavLink>
   const Contact = <NavLink to="/contact">{t("contact_key")}</NavLink>
   const PriceList = <NavLink to="/pricelist">{t("price_list_key")}</NavLink>
   // const Pages = <a href="#">Pages</a>
   return (
      <>

         <div >
            <Offcanvas show={show} onHide={handleClose} placement='end' className='side__bar'>
               <Offcanvas.Header closeButton>
                  {/* <Offcanvas.Title>Offcanvas</Offcanvas.Title> */}
               </Offcanvas.Header>
               <Offcanvas.Body>


                  <Collapsible trigger={Home} triggerTagName="div"
                     triggerOpenedClassName="icon_close" triggerClassName="iconAdd" open={false}>

                  </Collapsible>

                  <Collapsible trigger={Department} triggerTagName="div"
                     triggerOpenedClassName="icon_close" triggerClassName="iconAdd" open={false}>

                  </Collapsible>

                  <Collapsible trigger={Doctors} triggerTagName="div"
                     triggerOpenedClassName="icon_close" triggerClassName="iconAdd" open={false}>

                  </Collapsible>
                  <Collapsible trigger={About} triggerTagName="div"
                     triggerOpenedClassName="icon_close" triggerClassName="iconAdd" open={false}>

                  </Collapsible>

                  <Collapsible trigger={Contact} triggerTagName="div"
                     triggerOpenedClassName="icon_close" triggerClassName="iconAdd" open={false}>

                  </Collapsible>
                  <Collapsible trigger={PriceList} triggerTagName="div"
                     triggerOpenedClassName="icon_close" triggerClassName="iconAdd" open={false}>

                  </Collapsible>

                  {/* <Collapsible trigger={Shop} triggerTagName="div"
                     triggerOpenedClassName="icon_close" triggerClassName="iconAdd" open={false}>
                   
                  </Collapsible> */}

                  {/* <Collapsible trigger={News} triggerTagName="div"
                     triggerOpenedClassName="icon_close" triggerClassName="iconAdd" open={false}>
                  
                  </Collapsible> */}

                  {/* <Collapsible trigger={Pages} triggerTagName="div"
                     triggerOpenedClassName="icon_close" triggerClassName="iconAdd" open={false}>
                
                  </Collapsible> */}


               </Offcanvas.Body>
            </Offcanvas>
         </div>
      </>
   );
};

export default Sidebar;