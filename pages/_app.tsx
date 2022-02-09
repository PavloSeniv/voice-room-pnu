import "../styles/nProgress.css";
import "../styles/globals.css";
import Router from "next/router";
import nProgress from "nprogress";

//Імпорт з node_modules
import "../node_modules/react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import "reactjs-popup/dist/index.css";
import "../styles/popUp.css";

Router.events.on("routeChangeStart", nProgress.start);
Router.events.on("routeChangeError", nProgress.done);
Router.events.on("routeChangeComplete", nProgress.done);

function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default App;
