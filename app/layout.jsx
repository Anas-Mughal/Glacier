import PropTypes from "prop-types";
import "./globals.css";
import MainBackground from "./Components/mainbackground"; // Ensure file name matches the import
import Header from "./Components/Header";
import FooterContent from "./Components/Footer";
import Head from "next/head";

export const metadata = {
  title: "Glacier",
  description: "Finest Drinking Water",
};

function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link rel="icon" href="../public/LOGO.ico" />
      </Head>
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
