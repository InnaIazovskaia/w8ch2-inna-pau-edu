import { screen, render } from "@testing-library/react";
import Home, { getServerSideProps } from "../pages";
import "whatwg-fetch";

describe("Given a getServerSideProps function", () => {
  describe("When the home page it's instantiated", () => {
    test("Then it should return a props object with a list of tweets", async () => {
      const tuits = [
        {
          date: "2022-03-02T20:02:28.763+00:00",
          likes: 7,
          text: "first tuit",
        },
        {
          date: "2022-04-02T20:02:28.763+00:00",
          likes: 72,
          text: "second tuit",
        },
      ];

      const response = {
        props: {
          tuits,
        },
      };

      const props = await getServerSideProps();

      expect(props).toEqual(response);
    });
  });
});

describe("Given a home page", () => {
  describe("When it's rendered with a list of tuits", () => {
    test("Then it should render the tutis", async () => {
      const tuits = [
        {
          date: "2022-03-02T20:02:28.763+00:00",
          likes: 7,
          text: "first tuit",
        },
        {
          date: "2022-04-02T20:02:28.763+00:00",
          likes: 72,
          text: "second tuit",
        },
      ];

      render(<Home tuits={tuits} />);

      const findFirstText = screen.getByText("first tuit");
      const findSecondText = screen.getByText(tuits[1].text);

      expect(findFirstText).toBeInTheDocument();
      expect(findSecondText).toBeInTheDocument();
    });
  });
});
