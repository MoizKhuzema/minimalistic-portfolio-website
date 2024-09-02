import Head from "next/head";
import AnimatedText from "../components/AnimatedText";
import AnimatedPage from "../components/PageWrapper";
import Link from "next/link";

export default function About() {
  return (
    <AnimatedPage>
      <Head>
        <title>moiz — about</title>
        <meta
          name="description"
          content="hey, i'm moiz, a 22 year old ml practitioner
          and data scientist based in pakistan. 
          i specialize in transforming complex data into captivating tech solutions. 
          my programming journey is driven by a simple philosophy: 
          to blend innovation with utility, one line of code at a time. 
          i love chess, the big bang theory, and agatha christie's books!"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="title__wrapper">
        <AnimatedText element="h1" text="About" />
      </div>
      <p>
        hey, i'm moiz, a 22 year old ml practitioner
        and data scientist based in pakistan. 
        i specialize in transforming complex data into captivating tech solutions. 
        my programming journey is driven by a simple philosophy: 
        <strong>to blend innovation with utility, one line of code at a time.</strong>  
        i love chess, the big bang theory, and agatha christie's books!
      </p>

      <br />
      <p>
        I'm currently working at{" "}
        <Link href="https://www.afiniti.com/" target="_blank">
          Afiniti
        </Link>
      </p>
    </AnimatedPage>
  );
}
