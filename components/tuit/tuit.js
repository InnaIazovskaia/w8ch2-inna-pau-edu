import styled from "styled-components";

const ContainerTuit = styled.div`
  background-color: red;
`;

const Date = styled.p`
  font-size: 15px;
`;

const Likes = styled.p`
  font-size: 15px;
`;
const Text = styled.p`
  background-color: yellow;
`;

const Tuit = ({ date, text, likes }) => {
  return (
    <ContainerTuit>
      <Likes likes={likes} />
      <Date date={date} />
      <Text text={text} />
    </ContainerTuit>
  );
};

export default Tuit;
