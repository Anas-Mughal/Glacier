// Home.js
import Main from "./HomeSections/Main";
import Section1Content from "./HomeSections/Section1";
import Section4Content from "./HomeSections/Section4";
import Section1 from "../Components/GeneralSection1";
import Section2 from "./HomeSections/Section2";
import Section3 from "./HomeSections/Section3";
import imgUrl1 from "../assets/png/bottle-1.png";
import imgUrl2 from "../assets/png/p1.png";
import Section5 from "./HomeSections/Section5";
import Section6 from "./ContactUs/Form";
import Head from "next/head";
function Home() {
  return (
    <>
      <Head>
        <title>Glacier | Home  </title>
      </Head>
      <Main>
        <Section1 flow="" ImgPath={imgUrl1} component={Section1Content} />
        <Section2 />
        <Section3 />
        <Section1
          flow="flex-row-reverse"
          ImgPath={imgUrl2}
          component={Section4Content}
        />
        <Section5></Section5>
        <Section6></Section6>
      </Main>
    </>
  );
}

export default Home;
