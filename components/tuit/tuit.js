import styled from "styled-components";

const ContainerTuit = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid #2f3336;
  width: 578px;
  margin: 10px;
  border-radius: 5px;
`;

const ContainerTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px;
  padding: 5px;
`;

const Date = styled.p`
  font-size: 15px;
  color: #fff;
`;

const ContLikes = styled.section`
  display: flex;
  color: #fff;
  font-size: 20px;
`;

const Likes = styled.button`
  background: none;
  border: none;
  font-size: 15px;
  color: #fff;
  font-size: 20px;
  margin-right: 10px;
`;
const Text = styled.p`
  color: #fff;
  padding: 40px;
  border-top: 1px solid #2f3336;
`;

const Tuit = ({ tuit: { likes, text }, date }) => {
  return (
    <ContainerTuit>
      <ContainerTop>
        <ContLikes>
          <Likes></Likes>
          <p>{likes}</p>
        </ContLikes>
        <Date>{date}</Date>
      </ContainerTop>
      <Text>{text}</Text>
    </ContainerTuit>
  );
};

export default Tuit;
