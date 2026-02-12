import Hero from '../components/Home/Hero.jsx';
import Testimonials from '../components/Home/Testinomials.jsx';
import Teams from '../components/Home/teams.jsx';
import Who from '../components/Home/Who.jsx';

export default function Home() {
    return (
        <> 
            <Hero /> 
            <Testimonials />
            <Teams />
            <Who />
        </>
    );
}