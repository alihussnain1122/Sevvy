import Hero from '../components/Home/Hero.jsx';
import Testimonials from '../components/Home/Testinomials.jsx';
import Teams from '../components/Home/teams.jsx';
import Who from '../components/Home/Who.jsx';
import Choose from '../components/Home/Choose.jsx';
import Pricing from '../components/Home/Pricing.jsx';

export default function Home() {
    return (
        <> 
            <Hero /> 
            <Testimonials />
            <Teams />
            <Who />
            <Choose />
            <Pricing />
        </>
    );
}