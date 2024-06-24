// /app/layout.jsx

import PropTypes from "prop-types";
import "./globals.css";
import MainBackground from "./Components/mainbackground";
import Header from "./Components/Header";
import FooterContent from "./Components/Footer";
import fav from "../public/assets/svg/LOGO.svg";
import { SpeedInsights } from "@vercel/speed-insights/next"; // Import SpeedInsights component

export const metadata = {
  title: "Glacier",
  description: "Finest Drinking Water",
  icons: fav.src,
};

function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        {/* Add any other meta tags, links, etc., here */}
      </head>
      <body className="relative z-[0] bg-body-bg-color">
        <MainBackground />
        <Header />
        {children}
        <FooterContent />
        <SpeedInsights /> {/* Add SpeedInsights component here */}
      </body>
    </html>
  );
}

RootLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default RootLayout;
