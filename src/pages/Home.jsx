import HomePage from "../components/Home";

export default function Home() {
  return <HomePage />;
}
export const getStaticProps = async () => {
  const res = await fetch(
    "https://r1.edkt.net/api/s/dynamic-page/new-home-page?contentBlock=Object",
    {
      headers: {
        apihost: "https://schooltheme1.institute.org.in",
      },
    }
  );
  const data = await res.json();

  return {
    props: {
      data,
    },
    revalidate: 30,
  };
};
