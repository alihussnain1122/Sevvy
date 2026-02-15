import FAQ from "../components/Pricing/Faqs";
import PricingHero from "../components/Pricing/Hero";
import PlansComparison from "../components/Pricing/Plans";
import TeamsSection from "../components/Pricing/Team";

export default function Pricing() {
  return(
    <>
    <PricingHero />
    <TeamsSection />
    <PlansComparison />
    <FAQ />
    </>
  );
}
