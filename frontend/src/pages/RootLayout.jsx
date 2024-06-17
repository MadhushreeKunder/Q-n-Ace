import Header from "../components/ui/Header";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import layoutStyles from "../styles/layout.module.css";
import { useEffect } from "react";

export default function RootLayout() {
  useEffect(() => {
    // Cleanup function to cancel speech synthesis when the component unmounts
    return () => {
      speechSynthesis.cancel();
    };
  }, []);

  return (
    <>
      <Header />
      <div className={layoutStyles.pageLayout}>
        <Outlet />
      </div>
      <Footer />
    </>
  );
}
