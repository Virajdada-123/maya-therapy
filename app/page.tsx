import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Intro from "../components/Intro"
import WhoIHelp from "../components/WhoIHelp";
import Expertise from "../components/Expertise";
import Approach from "../components/Approach"
import Specialties from "../components/Specialities";
import Office from "../components/Office";
import Consultation from "../components/Consultation";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar/>
      <Hero/>
      <Intro/>
      <WhoIHelp/>
      <Expertise/>
      <Approach/>
      <Specialties/>
      <Office/>
      <Consultation/>
      <Contact/>
      <Footer/>
    </main>
  );
}