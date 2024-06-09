import PropTypes from "prop-types";
import "./globals.css";
import MainBackground from "./Components/mainbackground"; // Component name should start with a capital letter
import Header from "./Components/Header";
import FooterContent from "./Components/Footer";

export const metadata = {
  title: "Glacier",
  description: "Finest Drinking Water",
};

function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="relative z-[0] bg-body-bg-color">
        <MainBackground />
        <Header></Header>
        {children}
        <FooterContent></FooterContent>
      </body>
    </html>
  );
}

RootLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default RootLayout;
