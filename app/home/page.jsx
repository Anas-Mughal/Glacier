// Home.js
import Main from "./HomeSections/Main";
import Section1Content from "./HomeSections/Section1";
import Section4Content from "./HomeSections/Section4";
import Section1 from "../Components/GeneralSection1";
import Section2 from "./HomeSections/Section2";
import Section3 from "./HomeSections/Section3";
import imgUrl1 from "../../public/assets/png/bottle-1.png";
import imgUrl2 from "../../public/assets/png/p1.png";
import Section5 from "./HomeSections/Section5";
import Section6 from "./ContactUs/Form";

export const metadata = {
  title: "Glacier | HOME",
  description: "Finest Drinking Water",
};

function Home() {
  return (
    <Main>
      <Section1
        flow="h-dvh"
        ImgPath={imgUrl1}
        component={Section1Content}
        extraProperties="max-[950px]:hidden size-[100%]"
      />
      <div className="flex flex-col justify-center my-[12.5vw] gap-[15vw] max-[950px]:gap-[41.143vw] ">
        <Section2 />
        <Section3 />
        <Section1
          flow="flex-row-reverse"
          ImgPath={imgUrl2}
          component={Section4Content}
        />
        <Section5></Section5>
        <Section6></Section6>
      </div>
    </Main>
  );
}

export default Home;
