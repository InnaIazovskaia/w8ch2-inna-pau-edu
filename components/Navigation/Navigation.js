import { faCrow } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import styled from "styled-components";

const ContainerNav = styled.section`
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;

  & .icon {
    font-size: 30px;
    margin: 30px;
    color: white;
  }
  & .icon:hover {
    color: #1c9bef;
  }

  & a {
    font-size: 20px;
    font-weight: bold;
    text-decoration: none;
    color: white;
    padding: 10px 20px;
    border-radius: 25px;
  }

  & a:hover {
    background-color: #202327;
  }
`;

const Navigation = () => {
  return (
    <>
      <ContainerNav>
        <Link href="/newtweet">tweet</Link>
        <Link href="/" passHref>
          <FontAwesomeIcon className="icon" icon={faCrow} />
        </Link>
        <Link href="/uwu">uwu</Link>
      </ContainerNav>
    </>
  );
};
export default Navigation;
