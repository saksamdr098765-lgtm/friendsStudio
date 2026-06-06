import About from "./components/About";
import CTA from "./components/CTA";
import FeaturedWork from "./components/FeaturedWork";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Services from "./components/Services";
import SignatureCollections from "./components/SignatureCollection";
import Testimonials from "./components/Testimonials";


export default function Home() {
  return (
<>
<Hero></Hero>
<FeaturedWork></FeaturedWork>
<About></About>
<Services></Services>
<SignatureCollections></SignatureCollections>
<Testimonials></Testimonials>
<CTA></CTA>
<Footer></Footer>
</>
  );
}
