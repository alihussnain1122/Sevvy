import Hero from '../components/Home/Hero.jsx';
import Testimonials from '../components/Home/Testinomials.jsx';
import Teams from '../components/Home/teams.jsx';
import Who from '../components/Home/Who.jsx';
import Choose from '../components/Home/Choose.jsx';
import Pricing from '../components/Home/Pricing.jsx';
import Operation from '../components/Home/Operation.jsx';
import Review from '../components/Home/Review.jsx';
import FAQ from '../components/Home/Faqs.jsx';

export default function Home() {
    return (
        <> 
            <Hero /> 
            <Testimonials />
            <Teams />
            <Who />
            <Choose />
            <Pricing />
            <Operation />
            <Review />
            <FAQ />
        </>
    );
}