import Head from "next/head";

const headerConfig = {
  title: "Welcome to 'StoreName!",
};
export default function Header() {
  return (
    <Head className="position-relative mt-5">
      <title>{headerConfig.title}</title>
      <meta property="og:title" content="Landing Page" key="title" />
    </Head>
  );
}
