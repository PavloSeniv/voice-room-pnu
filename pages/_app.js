import "../styles/nprogress.css";
import "../styles/globals.css";
import Router from "next/router";
import nProgress from "nprogress";

//Імпорт з node_modules
import "reactjs-popup/dist/index.css";
import "../styles/PopUp.css";

Router.events.on("routeChangeStart", nProgress.start);
Router.events.on("routeChangeError", nProgress.done);
Router.events.on("routeChangeComplete", nProgress.done);

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
