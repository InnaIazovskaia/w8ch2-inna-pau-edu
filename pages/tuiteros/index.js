import styled from "styled-components";
import Tuitero from "../../components/Tuitero/Tuitero";

const ContainerMain = styled.section`
  min-height: 90vh;
  background-color: #000;
`;

const ContainerGeneral = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const ContainerMargin = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #000;
  align-items: center;
  border: 1px solid #2f3336;
  height: 83vh;
  margin-top: 40px;
  overflow: scroll;
  ::-webkit-scrollbar {
    width: 0;
  }
`;

const Tuiteros = ({ tuiteros }) => {
  return (
    <>
      <ContainerMain>
        <ContainerGeneral>
          <ContainerMargin>
            {tuiteros.map((tuitero) => (
              <Tuitero key={tuitero.id} tuitero={tuitero} />
            ))}
          </ContainerMargin>
        </ContainerGeneral>
      </ContainerMain>
    </>
  );
};

export const getServerSideProps = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_HEROKUAPI}tuiteros/all`
  );
  const { tuiteros } = await response.json();

  return {
    props: {
      tuiteros,
    },
  };
};

export default Tuiteros;
