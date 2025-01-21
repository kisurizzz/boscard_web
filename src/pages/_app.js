import ContextProvider from "@/context/ContextProvider";
import "bootstrap/dist/css/bootstrap.min.css";
import "node_modules/swiper/swiper-bundle.min.css";
import "tiny-slider/dist/tiny-slider.css";
import "@/../public/vendors/animate/animate.min.css";
import "@/../public/vendors/animate/custom-animate.css";
import "@/../public/vendors/fontawesome/css/all.min.css";
import "@/../public/vendors/tevily-icons/style.css";
import "@/../public/vendors/reey-font/stylesheet.css";
import "react-datepicker/dist/react-datepicker.css";
// import "react-rangeslider/lib/index.css";

// extra css
import "@/styles/globals.css";
import "@/styles/tevily.css";
import "@/styles/tevily-responsive.css";

const MyApp = ({ Component, pageProps }) => {
  return (
    <ContextProvider>
      <Component {...pageProps} />
    </ContextProvider>
  );
};

export default MyApp;
