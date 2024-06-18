import Image from "next/image";
import footerBg from "../assets/svg/footer.svg";
import link1 from "../assets/svg/Link1.svg";
import link2 from "../assets/svg/Link2.svg";
import link3 from "../assets/svg/Link3.svg";
import Link from "next/link";
const FooterContent = () => (
  <footer
    id="footer"
    className="relative z-50 flex items-center justify-end overflow-hidden"
  >
    <Image
      src={footerBg}
      className="w-[100%] absolute inset-0 -z-10"
      alt="Background"
      priority
    />
    <div className="flex flex-col items-center justify-center w-full m-auto gap-[3.5vw] mt-[9.2vw]">
      <div className="flex gap-[29.583vw] ">
        <nav className="flex flex-col justify-center gap-[0.5vw]">
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
        <div className="flex flex-col gap-[2.604vw]">
          <div className="flex flex-col gap-[0.5vw]">
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
          <div className="flex flex-col gap-[0.5vw]">
            <p className="first-letter:text-primary first-letter:font-bold">
              | &nbsp;Social Links
            </p>
            <div className="flex gap-[0.75vw]">
              <Link href="#0">
                <Image className="size-[2.083vw]" src={link1} alt="Link 1" />
              </Link>
              <Link href="#0">
                <Image className="size-[2.083vw]" src={link2} alt="Link 2" />
              </Link>
              <Link href="#0">
                <Image className="size-[2.083vw]" src={link3} alt="Link 3" />
              </Link>
            </div>
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
