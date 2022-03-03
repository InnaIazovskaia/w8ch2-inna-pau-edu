import { render, screen } from "@testing-library/react";
import "whatwg-fetch";
import Tuiteros, { getServerSideProps } from "../pages/tuiteros";

describe("Given a getServerSideProps function from tuiterosPage", () => {
  describe("When it's called", () => {
    test("Then it should return the users", async () => {
      const users = [
        {
          name: "Cristiano",
          username: "cr7",
        },
        {
          name: "Messi",
          username: "d10s",
        },
      ];

      const response = {
        props: {
          tuiteros: users,
        },
      };

      const getServer = await getServerSideProps();

      expect(getServer).toEqual(response);
    });
  });
});

describe("Given a Tuiteros page", () => {
  describe("When it's rendered with a tuiteros array", () => {
    test("Then it should render the tuiteros", () => {
      const tuiteros = [
        {
          name: "Cristiano",
          username: "cr7",
        },
        {
          name: "Messi",
          username: "d10s",
        },
      ];

      render(<Tuiteros tuiteros={tuiteros} />);

      const findCristiano = screen.getByText(tuiteros[0].name);
      const findMessi = screen.getByText(tuiteros[1].name);

      expect(findCristiano).toBeInTheDocument();
      expect(findMessi).toBeInTheDocument();
    });
  });
});
