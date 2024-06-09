import Section1 from "./AboutSections/Section1";
import Section2 from "./AboutSections/Section2";
import Section3 from "./AboutSections/Section3";
import Map from "./AboutSections/Map";
import WaterQualityTable from "./AboutSections/WaterQualityTable";
import Main from "./AboutSections/Main";

function About() {
  return (
    <Main>
      <Section1></Section1>
      <Section2></Section2>
      <Section3></Section3>
      <WaterQualityTable></WaterQualityTable>
      <Map></Map>
    </Main>
  );
}
export default About;
