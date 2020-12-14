import Head from "next/head";
import GlobalStyle from "../styles/globalStyles";
import Header from "../components/Header";
import Banner from "../components/Banner";
import About from "../components/About";
import Partners from "../components/Partners";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <GlobalStyle />
      <Header />
      <Banner />
      <About />
      <Partners />
    </div>
  );
}
