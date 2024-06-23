import PropTypes from "prop-types";
import "./globals.css";
import MainBackground from "./Components/mainbackground"; // Ensure file name matches the import
import Header from "./Components/Header";
import FooterContent from "./Components/Footer";
import fav from "../public/assets/svg/LOGO.svg";
export const metadata = {
  title: "Glacier",
  description: "Finest Drinking Water",
  icons: fav.src,
};
function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="relative z-[0] bg-body-bg-color">
        <MainBackground />
        <Header />
        {children}
        <FooterContent />
      </body>
    </html>
  );
}

RootLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default RootLayout;
