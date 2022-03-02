import Head from "next/head";
import styled from "styled-components";
import Tuit from "../components/tuit/tuit";

const ContainerMain = styled.section`
  min-height: 100vh;
  background-color: #000;
`;

const Home = ({ tuits }) => {
  return (
    <>
      <Head>
        <title>Tuiteh</title>
        <meta name="description" content="Tuiteh" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <ContainerMain>
          {tuits.map((tuit) => {
            <Tuit date={tuit.date} likes={tuit.likes} text={tuit.text} />;
          })}
        </ContainerMain>
      </main>
    </>
  );
};

export const getServerSideProps = async () => {
  const request = await fetch(process.env.NEXT_PUBLIC_HEROKUAPI);
  const tuits = await request.json();

  return {
    props: {
      tuits,
    },
  };
};

export default Home;
