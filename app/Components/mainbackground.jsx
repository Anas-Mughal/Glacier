const { default: Image } = require("next/image");
import bg1 from "../assets/svg/background/Ellipse 1.svg";
import bg2 from "../assets/svg/background/Ellipse 2.svg";
import bg3 from "../assets/svg/background/Ellipse 3.svg";
import bg4 from "../assets/svg/background/Ellipse 4.svg";
import bg5 from "../assets/svg/background/Ellipse 5.svg";
import bg6 from "../assets/svg/background/Ellipse 6.svg";
import bg7 from "../assets/svg/background/Ellipse 7.svg";
function mainbackground() {
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden ">
      <Image
        className="w-full absolute top-[-20vw] right-[-35vw] z-[1]"
        src={bg1}
        alt=""
        width="1920"
        height="1080"
        priority={true}
      ></Image>
      <Image
        className="w-full absolute top-[25vw] left-[-50vw] rotate-[-150deg] z-[1]"
        src={bg2}
        alt=""
        width="1920"
        height="1080"
        priority={true}
      ></Image>
      <Image
        className="w-full absolute top-[100vw] right-[-45vw] z-[1] rotate-[0deg]"
        src={bg3}
        alt=""
        width="1920"
        height="1080"
        priority={true}
      ></Image>
      <Image
        className="w-full absolute top-[200vw] left-[-50vw] z-[1]"
        src={bg4}
        alt=""
        width="1920"
        height="1080"
      ></Image>
      <Image
        className="w-full absolute top-[275vw] right-[-40vw] z-[1]"
        src={bg5}
        alt=""
        width="1920"
        height="1080"
      ></Image>
      <Image
        className="w-full absolute top-[325vw] left-[-35vw] z-[1]"
        src={bg6}
        alt=""
        width="1920"
        height="1080"
      ></Image>
      <Image
        className="w-full absolute top-[400vw] right-[-25vw] z-[1]"
        src={bg6}
        alt=""
        width="1920"
        height="1080"
      ></Image>
      <Image
        className="w-full absolute top-[525vw] left-[-35vw] z-[1]"
        src={bg7}
        alt=""
        width="1920"
        height="1080"
      ></Image>
    </div>
  );
}

export default mainbackground;
