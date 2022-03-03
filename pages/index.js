import styled from "styled-components";
import Tuit from "../components/tuit/tuit";

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

const Home = ({ tuits }) => {
  const intervals = [
    { label: "year", seconds: 31536000 },
    { label: "month", seconds: 2592000 },
    { label: "day", seconds: 86400 },
    { label: "hour", seconds: 3600 },
    { label: "minute", seconds: 60 },
    { label: "second", seconds: 1 },
  ];

  const calcDate = (date) => {
    let difference = Math.abs(new Date(date) - Date.now());
    const seconds = Math.floor(difference / 1000);
    const interval = intervals.find((i) => i.seconds < seconds);
    const count = Math.floor(seconds / interval.seconds);
    return `${count} ${interval.label}${count !== 1 ? "s" : ""} ago`;
  };

  return (
    <>
      <ContainerMain>
        <ContainerGeneral>
          <ContainerMargin>
            {tuits.map((tuit) => (
              <Tuit key={tuit.id} tuit={tuit} date={calcDate(tuit.date)} />
            ))}
          </ContainerMargin>
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
