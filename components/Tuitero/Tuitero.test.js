import { render, screen } from "@testing-library/react";
import Tuitero from "./Tuitero";

describe("Given a Tuit component", () => {
  describe("When it's rendered with a tuitero object", () => {
    test("Then it should render a text with the username", () => {
      const tuitero = {
        name: "Cristiano",
        username: "cr7",
      };

      render(<Tuitero tuitero={tuitero} />);

      const findUsername = screen.getByText(`@${tuitero.username}`);

      expect(findUsername).toBeInTheDocument();
    });
  });
});
