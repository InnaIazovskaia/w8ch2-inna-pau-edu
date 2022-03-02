import styled from "styled-components";
import Tuit from "../components/tuit/tuit";

const ContainerMain = styled.section`
  min-height: 100vh;
  background-color: black;
`;

const ContainerGeneral = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Home = ({ tuits }) => {
  return (
    <>
      <ContainerMain>
        <ContainerGeneral>
          {tuits.map((tuit) => (
            <Tuit key={tuit.id} tuit={tuit} />
          ))}
        </ContainerGeneral>
      </ContainerMain>
    </>
  );
};

export const getServerSideProps = async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_HEROKUAPI}tuit/all`);
  const { tuits } = await response.json();

  return {
    props: {
      tuits,
    },
  };
};

export default Home;
