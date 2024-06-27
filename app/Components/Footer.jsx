import Image from "next/image";
import footerBg from "../../public/assets/png/footerbg.png";
import link1 from "../../public/assets/svg/Link1.svg";
import link2 from "../../public/assets/svg/Link2.svg";
import link3 from "../../public/assets/svg/Link3.svg";
import Link from "next/link";

const FooterContent = () => (
  <footer
    id="footer"
    className="relative z-50 flex items-end justify-center overflow-hidden"
  >
    <Image
      src={footerBg}
      className="h-full max-[950px]:h-[65.104vw]"
      alt="Background"
      priority
    />
    <div className="absolute flex flex-col items-center justify-center gap-[2.5vw] max-[950px]:gap-[5vw]">
      <div className="flex flex-col items-center justify-center max-[950px]:gap-[2vw]">
        <div className="flex items-start justify-center  gap-[35vw]">
          <nav className="flex flex-col justify-center gap-[0.5vw] max-[950px]:gap-[1.5vw]">
            <p className="first-letter:text-primary first-letter:font-bold">
              | &nbsp;Menu
            </p>
            <ul className="flex flex-col justify-center gap-[0.5vw]">
              <li className="font-light cursor-pointer">
                <Link href="/">
                  <p>Home</p>
                </Link>
              </li>
              <li className="font-light cursor-pointer">
                <Link href="/#contactUs">
                  <p>Contact Us</p>
                </Link>
              </li>
              <li className="font-light cursor-pointer">
                <Link href="/about">
                  <p>About Us</p>
                </Link>
              </li>
            </ul>
          </nav>
          <div className="flex flex-col gap-[0.5vw] max-[950px]:gap-[1.5vw]">
            <p className="first-letter:text-primary first-letter:font-bold">
              | &nbsp;Contact Us
            </p>
            <ul className="flex flex-col justify-center gap-[0.5vw]">
              <li className="font-light cursor-pointer">
                <p>Address of shop</p>
              </li>
              <li className="font-light cursor-pointer">
                <p>Phone Number</p>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col gap-[0.5vw] max-[950px]:gap-[1.25vw] items-center justify-center">
          <p className="first-letter:text-primary first-letter:font-bold">
            | &nbsp;Social Links
          </p>
          <div className="flex gap-[0.75vw]">
            <Link href="#0">
              <Image className="size-[2.083vw] max-[950px]:size-[5vw]" src={link1} alt="Link 1" />
            </Link>
            <Link href="#0">
              <Image className="size-[2.083vw] max-[950px]:size-[5vw]" src={link2} alt="Link 2" />
            </Link>
            <Link href="#0">
              <Image className="size-[2.083vw] max-[950px]:size-[5vw]" src={link3} alt="Link 3" />
            </Link>
          </div>
        </div>
      </div>
      <div>
        <p>Copyright © 2024 Glacier. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

export default FooterContent;
