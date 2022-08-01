import Head from 'next/head';
import Header from "../components/header";
import Logo from "../components/logo";
import Slide from "../components/slide";
import Blog from "../components/blog";

function Home() {
  return (
    <>
      <Head>
        <title>Leia Munhai</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Logo />
      <Slide />
      <Blog />
    </>
  );
}

export default Home;