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

    & input {
    }

    & label {
      color: white;
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
  const blankTuit = { name: "", username: "" };
  const form = useRef(null);
  const [tuitero, setTuitero] = useState(blankTuit);

  const handleFormChange = (event) => {
    const test = event.target.value;
    console.log(test);
    setTuitero({
      ...tuitero,
      [event.target.id]: event.target.value,
    });
  };

  const newTuitero = async (tuitero) => {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_HEROKUAPI}tuiteros/create`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(tuitero),
      }
    );
    await response.json();
  };

  const submitForm = async (event) => {
    event.preventDefault();
    await newTuitero(tuitero);
    resetForm();
  };
  const resetForm = () => {
    setTuitero(blankTuit);
  };

  return (
    <ContainerForm>
      <h1>New tuitero</h1>
      <form onSubmit={submitForm} autoComplete="off" noValidate ref={form}>
        <label htmlFor="name">Name:</label>
        <input id="name" type="text" onChange={handleFormChange} />
        <label htmlFor="username">Username:</label>

        <input id="username" type="text" onChange={handleFormChange} />
        <span></span>
        <button type="submit">tweetEro</button>
      </form>
    </ContainerForm>
  );
};

export default TuitInput;
