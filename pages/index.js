import Head from "next/head";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import SectionTitle from "../components/sectionTitle";

import { benefitOne, benefitTwo, benefitThree } from "../components/data";
import Video from "../components/video";
import Benefits from "../components/benefits";
import Footer from "../components/footer";
import Testimonials from "../components/testimonials";
import Cta from "../components/cta";
import Faq from "../components/faq";
import Price from "../components/price";
import PopupWidget from "../components/popupWidget";

const Home = () => {
  return (
    <>
      <Head>
        <title>Nextly - Free Nextjs & TailwindCSS Landing Page Template</title>
        <meta
          name="description"
          content="Nextly is a free landing page template built with next.js & Tailwind CSS"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <Hero />
      <Benefits data={benefitOne} />
      <Benefits imgPos="right" data={benefitTwo} />
      <Benefits data={benefitThree} />
      <SectionTitle
        pretitle="Price"
        title="参考价格">
      </SectionTitle>
      <Price />
      <SectionTitle
        pretitle="About"
        title="团队成员">
      </SectionTitle>
      <Testimonials />

      <Footer />
      <PopupWidget />
    </>
  );
}

export default Home;