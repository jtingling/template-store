import Head from "next/head";

export default function Header() {
  return (
    <Head className="position-relative mt-5">
      <title>Welcome to "Store Name"!</title>
      <meta property="og:title" content="Landing Page" key="title" />
    </Head>
  );
}
