import styled from "styled-components";

const ContainerTuit = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid #aa0050;
  width: 400px;
  margin: 10px;
  border-radius: 5px;
`;

const ContainerTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px;
  padding: 5px;
  border-radius: 25px;
  border: 1px solid #aa0050;
`;

const Date = styled.p`
  font-size: 15px;
  color: #fff;
`;

const Likes = styled.p`
  font-size: 15px;
  color: #fff;
`;
const Text = styled.p`
  color: #fff;
  padding: 40px;
  border: 1px solid #aa0050;
`;

const Tuit = ({ tuit: { likes, date, text } }) => {
  return (
    <ContainerTuit>
      <ContainerTop>
        <Likes>{likes}</Likes>
        <Date>{date}</Date>
      </ContainerTop>
      <Text>{text}</Text>
    </ContainerTuit>
  );
};

export default Tuit;
