import Hero from "../components/WhoisSevvy/Hero";
import Agency from "../components/WhoisSevvy/Agency";
import SocialMedia from "../components/WhoisSevvy/Media";
import LastSection from "../components/WhoisSevvy/Last";
import ContentCreator from "../components/WhoisSevvy/ContentCreator";
import Freelance from "../components/WhoisSevvy/Freelancer";
import NontechCreativeTeams from "../components/WhoisSevvy/NonTech";
import NeedSevvy from "../components/WhoisSevvy/Need";
import Partner from "../components/WhoisSevvy/Partner";


export default function WhoIsSevvy() {
  return(
    <>
      <Hero />
      <Agency />
      <SocialMedia />
      <ContentCreator />
      <Freelance />
      <NontechCreativeTeams />
      <NeedSevvy />
      <Partner />
      <LastSection />
    </>
  );
}