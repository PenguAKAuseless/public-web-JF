import Navbar from "../components/NavBar";
import HeroSection from "../components/HeroSection";
import Sponsor from "../components/theSponsor";
import AboutSponsor from "../components/AboutSponsor";
import AchievementsSection from "../components/AchievementSection";
import View from "../components/MapView";
import Footer from "../components/footer";

const HomePage = () => {
    return (
        <div className="min-h-screen bg-background">
            <Navbar />
            <main className="pt-16">
                <HeroSection />
                <Sponsor />
                <AboutSponsor />
                <AchievementsSection />
                <View modelUrl="/Map.glb" />
            </main>
            <Footer />
        </div>
    );
};

export default HomePage;
