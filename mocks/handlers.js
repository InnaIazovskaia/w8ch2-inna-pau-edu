import { rest } from "msw";

export const handlers = [
  rest.get(
    `${process.env.NEXT_PUBLIC_HEROKUAPI}tuiteros/all`,
    (req, res, ctx) =>
      res(
        ctx.status(200),
        ctx.json({
          tuiteros: [
            {
              name: "Cristiano",
              username: "cr7",
            },
            {
              name: "Messi",
              username: "d10s",
            },
          ],
        })
      )
  ),

  rest.get(`${process.env.NEXT_PUBLIC_HEROKUAPI}tuit/all`, (req, res, ctx) =>
    res(
      ctx.status(200),
      ctx.json({
        tuits: [
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
        ],
      })
    )
  ),
];
