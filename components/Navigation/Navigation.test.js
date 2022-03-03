import { render, screen } from "@testing-library/react";
import Navigation from "./Navigation";

describe("Given a Navigation component", () => {
  describe("When it's rendered", () => {
    test("Then it should show three anchors", () => {
      render(<Navigation />);

      const newTuit = screen.getByRole("link", { name: /new tweet/i });
      const home = screen.getByRole("link", { name: /home/i });
      const cuervo = screen.getAllByRole("link")[1];

      expect(newTuit).toBeInTheDocument();
      expect(home).toBeInTheDocument();
      expect(cuervo).toBeInTheDocument();
    });
  });
});
