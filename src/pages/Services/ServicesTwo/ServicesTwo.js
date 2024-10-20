import React from 'react';
import CommonPageHeader from '../../../components/CommonPageHeader/CommonPageHeader';
import HomeHeader from '../../Home/Home/HomeHeader/HomeHeader';
import CalculateArea from '../ServicesOne/CalculateArea/CalculateArea';
import ServicesOneHiringArea from '../ServicesOne/ServicesOneHiringArea/ServicesOneHiringArea';
import ServicesTwoAbout from './ServicesTwoAbout/ServicesTwoAbout';
import ServicesTwoArea from './ServicesTwoArea/ServicesTwoArea';
import HomeFourFooter from '../../HomeTwo/HomeTwoFooter/HomeTwoFooter';

const ServicesTwo = () => {
    return (
        <>
            <HomeHeader />
            <CommonPageHeader title="Այլ Ծառայություններ" subtitle="Services" />
            <ServicesTwoAbout />
            <ServicesTwoArea />
            <CalculateArea />
            <ServicesOneHiringArea />
            <HomeFourFooter />
        </>
    );
};

export default ServicesTwo;