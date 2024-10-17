import HomeAboutArea from './HomeAboutArea/HomeAboutArea';
import HomeFooter from './HomeFooter/HomeFooter';
import HomeHeader from './HomeHeader/HomeHeader';
import HomeHeroSection from './HomeHeroSection/HomeHeroSection';
import HomeOurTeam from './HomeOurTeam/HomeOurTeam';
import HomeServices from './HomeServices/HomeServices';
import HomeFourPhotoGallery from '../../HomeFour/HomeFourPhotoGallery/HomeFourPhotoGallery';
import HomeThreeMembership from '../../HomeThree/HomeThreeMembership/HomeThreeMembership';


const Home = () => {
    return (
        <>
            <HomeHeader />
            <HomeHeroSection />
            <HomeAboutArea />
            <HomeServices />
            <HomeThreeMembership/>
            <HomeFourPhotoGallery/>
            <HomeOurTeam />
            {/* <HomeFact /> */}
            {/* < HomeBlogs/> */}

            {/* <HomeBlogs /> */}
            <HomeFooter />
        </>
    );
};

export default Home;