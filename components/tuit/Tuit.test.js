import { render, screen } from "@testing-library/react";
import Tuit from "./tuit";

describe("Given a Tuit component", () => {
  describe("When it's rendered with tuit 'hello' with 5 likes and date of publication '01.02.2022'", () => {
    test("Then it should display text 'hello', text '5' and text '01.02.2022'", () => {
      const tuit = {
        text: "hello",
        likes: "5",
      };
      const date = "01.02.2022";

      render(<Tuit tuit={tuit} date={date} />);

      const tuitText = screen.getByText("hello");
      const tuitLikes = screen.getByText("5");
      const tuitDate = screen.getByText("01.02.2022");

      expect(tuitText).toBeInTheDocument();
      expect(tuitLikes).toBeInTheDocument();
      expect(tuitDate).toBeInTheDocument();
    });

    test("Then it should render button", () => {
      const tuit = {
        text: "hello",
        likes: "5",
      };
      const date = "01.02.2022";

      render(<Tuit tuit={tuit} date={date} />);

      const button = screen.getByRole("button");

      expect(button).toBeInTheDocument();
    });
  });
});
