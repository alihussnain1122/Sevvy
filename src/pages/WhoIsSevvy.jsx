import Agency from "../components/WhoisSevvy/Agency";
import SocialMedia from "../components/WhoisSevvy/Media";
import LastSection from "../components/WhoisSevvy/Last";
import ContentCreator from "../components/WhoisSevvy/ContentCreator";
import Freelance from "../components/WhoisSevvy/Freelancer";
import NontechCreativeTeams from "../components/WhoisSevvy/NonTech";


export default function WhoIsSevvy() {
  return(
    <>
      <Agency />
      <SocialMedia />
      <ContentCreator />
      <Freelance />
      <NontechCreativeTeams />
      <LastSection />
    </>
  );
}