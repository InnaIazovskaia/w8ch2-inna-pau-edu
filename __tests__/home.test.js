import { getServerSideProps } from "../pages";

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
          tutis: tuits,
        },
      };

      const props = await getServerSideProps();

      expect(props).toEqual(response);
    });
  });
});
