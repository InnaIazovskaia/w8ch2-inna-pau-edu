import React, { useRef, useState } from "react";
import styled from "styled-components";

const ContainerForm = styled.section`
  height: 83vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  & h1 {
    font-size: 30px;
    color: #fff;
  }

  & form {
    border-radius: 5px;
    width: 578px;
    margin: 10px;
    height: 220px;
    border: 1px solid #2f3336;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;

    & span {
      width: 80%;
      height: 1px;
      background-color: #2f3336;
      margin: 20px;
    }

    & textarea {
      background: none;
      border: none;
      outline: none;
      color: white;
      margin-top: 5px;
      width: 560px;
      min-height: 120px;
      text-indent: 10px;
      font-size: 20px;
      resize: none;
    }

    & button {
      background-color: #1c9bef;
      border: none;
      font-size: 15px;
      font-weight: bold;
      text-decoration: none;
      color: white;
      padding: 10px 60px;
      border-radius: 25px;
      cursor: pointer;
    }

    & button:hover {
      background-color: #134d77;
    }
  }
`;

const TuitInput = () => {
  const blankTuit = { text: "" };
  const form = useRef(null);
  const [tuit, setTuit] = useState(blankTuit);

  const handleFormChange = (event) => {
    setTuit({
      ...tuit,
      [event.target.id]: event.target.value,
    });
  };

  const postTuit = async (tuit) => {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_HEROKUAPI}tuit/create`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(tuit),
      }
    );
    await response.json();
  };

  const submitForm = async (event) => {
    event.preventDefault();
    await postTuit(tuit);
    resetForm();
  };
  const resetForm = () => {
    setTuit(blankTuit);
  };

  return (
    <ContainerForm>
      <h1>New tweet</h1>
      <form onSubmit={submitForm} autoComplete="off" noValidate ref={form}>
        <label htmlFor="tuit-box"></label>

        <textarea
          id="text"
          type="textarea"
          onChange={handleFormChange}
          value={tuit.text}
          maxLength={200}
          placeholder="What's happening?"
        />
        <span></span>
        <button type="submit">Tweet</button>
      </form>
    </ContainerForm>
  );
};

export default TuitInput;
