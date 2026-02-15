import PricingDifference from "../components/Pricing/Different";
import FAQ from "../components/Pricing/Faqs";
import PricingHero from "../components/Pricing/Hero";
import PlansComparison from "../components/Pricing/Plans";
import TeamsSection from "../components/Pricing/Team";
import TrialCTA from "../components/Pricing/Trial";

export default function Pricing() {
  return(
    <>
    <PricingHero />
    <TeamsSection />
    <PlansComparison />
    <TrialCTA />
    <PricingDifference />
    <FAQ />
    </>
  );
}
