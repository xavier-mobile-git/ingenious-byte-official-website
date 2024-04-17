import AboutOurCompany from "@/components/AboutOurCompany/AboutOurCompany";
import Footer from "@/components/Footer/Footer";
import GoTop from "@/components/GoTop/GoTop";
import HeroSection from "@/components/HeroSection/HeroSection";
import MenuWrapper from "@/components/Menu/MenuWrapper";
import OurService from "@/components/OurService/OurService";
import Wave from "@/components/Wave/Wave";

export default function Home() {
  return (
    <>
      <div className="full-page flex flex-col justify-center">
        <MenuWrapper />
        <div className="home-section justify-center">
          <div className="container flex flex-col h-max">
            <HeroSection />
            <Wave />
            <div id="service">
              <OurService />
            </div>
          </div>
          <div className="flex flex-col h-max mt-32 bg-slate-200">
            <div className="container flex flex-col h-max">
              <AboutOurCompany />
            </div>
          </div>
          <Footer />
          <GoTop />
        </div>
      </div>
    </>
  );
}
