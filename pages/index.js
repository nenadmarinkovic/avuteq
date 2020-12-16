import Head from "next/head";
import GlobalStyle from "../styles/globalStyles";
import Header from "../components/Header";
import Banner from "../components/Banner";
import About from "../components/About";
import Partners from "../components/Partners";
import How from "../components/How";
import Clients from "../components/Clients";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Avuteq</title>
        <link
          rel="stylesheet"
          type="text/css"
          charSet="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link rel="icon" href="/logo-avuteq.png" />
      </Head>
      <GlobalStyle />
      <Header />
      <Banner />
      <About />
      <Partners />
      <How />
      <Clients />
      <Footer/>
    </div>
  );
}
