import Navbar from "../components/Navbar";
import DeveloperHero from "../sections/ForDevelopers/DeveloperHero";
import DeveloperRegistration from "../sections/ForDevelopers/DeveloperRegister";
import DeveloperFAQs from "../sections/ForDevelopers/DeveloperFAQs";
import EligibleProjects from "../sections/ForDevelopers/EligibleProjects";
import DeveloperExamples from "../sections/ForDevelopers/DeveloperExamples";
import FinancingChallenge from "../sections/ForDevelopers/FinancingChallenge";
import PlatformDeveloperSupport from "../sections/ForDevelopers/PlatformDeveloperSupport";

export default function ForDevelopers() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <DeveloperHero />
      <FinancingChallenge />
      <PlatformDeveloperSupport />
      <DeveloperExamples />
      <EligibleProjects />
      <DeveloperFAQs />
      <DeveloperRegistration />
    </div>
  );
}
