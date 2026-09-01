import { RegistrationBanner } from "./components/CtaBanner";
import HeroEngineering from "./components/HeroEngineering";
import GridContent from "./components/GridContent";
import { ResourceDirectory } from "./components/ResourceDirectory";
import { ContentSection } from "./components/ContentSection";
import { BusinessPodcastSection } from "./components/BusinessPodcastSection";
import InternationalCreditManager from "./components/InternationalCreditManager";
import PegHero from "./components/PegHero";
import LoginGateway from "./components/(auth)/page";
import AgencySlider from "./components/AgencySlider";
import PegLocations from "./components/PegLocations";
import FutureCulvertComponent from "./components/FutureCulvertComponent";
import DeliverableUpgrade from "./components/DeliverableUpgrade";
import DotMatrixSlider from "./components/DotMatrixSlider";
import MeetAtShows from "./components/MeetAtShows";
import FuturisticCTA from "./components/FuturisticCTA";
import PrecastersGoDigital from "./components/PrecastersGoDigital";
import PrecasterManifesto from "./components/PrecasterManifesto";
import AdvancedEngineeringTech from "./components/AdvancedEngineeringTech";
import TargetAudience from "./components/TargetAudience";
import UnchallengedResources from "./components/UnchallengedResources";
import SeamlessConnection from "./components/SeamlessConnection";
import TrenchingSystem from "./components/TrenchingSystem";
import RetainingWallComponent from "./components/RetainingWallComponent";
import MarinaSystemComponent from "./components/MarinaSystemComponent";
import SponsorMarquee from "./components/SponsorMarquee";
import PegResourceGrid from "./components/PegResourceGrid";
import HexagonLogoShowcase from "./components/HexagonLogoShowcase";
import ManufacturingHub from "./components/ManufacturingHub";
import EngineeringExecuted from "./components/EngineeringExecuted";
import InnovativeContactComponent from "./components/InnovativeContactComponent";
import ContactTerminal from "./components/ContactTerminal";
import MembershipBox from "./components/MembershipBox";
import PegServices from "./components/PegServices";

export default function Home() {
  return (
    <main className="flex-1 flex flex-col items-center bg-slate-50">
      <ResourceDirectory />
      
      {/* 1. HERO */}
      <HeroEngineering />
      <SponsorMarquee />
      
      {/* 2. CORE SERVICES */}
      <PegServices />
      
      {/* 3. TECHNICAL EXPERTISE & ENGINEERING */}
      <PrecasterManifesto />
      <AdvancedEngineeringTech />
      <EngineeringExecuted />
      <DeliverableUpgrade />
      
      {/* 4. PRODUCTS & APPLICATIONS */}
      <div className="w-full bg-white py-10 text-center relative z-20">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#1B79EE]/20 text-[#1B79EE] text-xs font-black tracking-[0.2em] uppercase mb-4 border-l-2 border-[#1B79EE]">
          Engineered Portfolios
        </div>
        <h2 className="text-3xl md:text-5xl font-black text-[#004aad] uppercase tracking-tighter">
          Precast Applications <span className="text-[#1B79EE]">& Products</span>
        </h2>
        <p className="mt-6 text-slate-400 font-medium max-w-2xl mx-auto px-6">
          Explore examples of our structural engineering, from underground infrastructure to marine systems. We design products for real-world performance.
        </p>
      </div>
      
      <FutureCulvertComponent />
      <TrenchingSystem />
      <RetainingWallComponent />
      <MarinaSystemComponent />

      {/* 5. MANUFACTURING & OPERATIONS SUPPORT */}
      <ManufacturingHub />
      <TargetAudience />
      <MembershipBox/>
      <UnchallengedResources />
      <SeamlessConnection />
      
      {/* 6. PORTALS & RESOURCES */}
      <section id="portal" className="w-full bg-[#004aad] text-white overflow-hidden relative">
        <LoginGateway />
      </section>
      
      <section id="technical-vault" className="w-full bg-[#004aad] text-white overflow-hidden relative">
        <GridContent />
      </section>
      
      <PegResourceGrid />
      <AgencySlider />
      <ContentSection />
      <PegHero />
      <DotMatrixSlider />
      <PegLocations />
      <HexagonLogoShowcase />
      <PrecastersGoDigital />
      <MeetAtShows />
      <FuturisticCTA />
      
      <section id="contact" className="w-full bg-[#004aad] text-white overflow-hidden relative">
        <ContactTerminal />
        <InnovativeContactComponent/>
      </section>
    </main>
  );
}
