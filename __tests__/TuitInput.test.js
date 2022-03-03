import { render, screen } from "@testing-library/react";
import "whatwg-fetch";
import TuitInput from "../pages/new-tweet";

describe("Given a TuitInput function", () => {
  describe("When it's called", () => {
    test("Then it should display heading with text 'New tweet'", () => {
      render(<TuitInput />);
      const expectedHeading = "New tweet";

      const heading = screen.getByRole("heading", {
        name: expectedHeading,
        level: 1,
      });

      expect(heading).toBeInTheDocument();
    });

    test("Then it should display area for writing tuits and a button with text 'Tweet'", () => {
      render(<TuitInput />);

      const textArea = screen.getByRole("textbox");
      const button = screen.getByRole("button", { name: /tweet/i });

      expect(textArea).toBeInTheDocument();
      expect(button).toBeInTheDocument();
    });
  });
});
