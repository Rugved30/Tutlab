import BecomeTutor from "../BecomeTutor/BecomeTutor";
import Footer from "../Footer/Footer";
import HeroSection from "../HeroSection/Hero"
import Review from "../Review/Review";

const Home = () =>{
    return(
        <>
            <HeroSection />
            <Review />
            <BecomeTutor />
            <Footer />
        </>
    )
}

export default Home;