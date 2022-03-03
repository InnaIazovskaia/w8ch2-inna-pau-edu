import { render, screen } from "@testing-library/react";
import "whatwg-fetch";
import Home, { getServerSideProps } from "../pages";

describe("Given a Home Page", () => {
  describe("When its recives a array with tuits", () => {
    test("Then it should render 2 tuits", () => {
      const tuits = [
        {
          date: "2022-03-03T07:12:53.638Z",
          text: "Write, with just one T",
          likes: 0,
        },
        {
          date: "2022-03-03T07:09:08.557Z",
          text: "I can time travel",
          likes: 0,
        },
      ];

      render(<Home key={tuits.date} tuits={tuits} />);

      const expectedFirst = screen.getByText("Write, with just one T");
      const expectedSecond = screen.getByText("I can time travel");

      expect(expectedFirst).toBeInTheDocument();
      expect(expectedSecond).toBeInTheDocument();
    });
  });
});

describe("Given a getServerSideProps function", () => {
  describe("When its instanciated", () => {
    test("Then it should return a props object with tuits inside", async () => {
      const tuits = [
        {
          date: "2022-03-03T07:12:53.638Z",
          text: "Write, with just one T",
          likes: 0,
        },
        {
          date: "2022-03-03T07:09:08.557Z",
          text: "I can time travel",
          likes: 0,
        },
      ];

      const response = {
        props: {
          tuits,
        },
      };

      expect(await getServerSideProps()).toEqual(response);
    });
  });
});
