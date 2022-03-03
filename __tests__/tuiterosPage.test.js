import "whatwg-fetch";
import { getServerSideProps } from "../pages/tuiteros";

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
