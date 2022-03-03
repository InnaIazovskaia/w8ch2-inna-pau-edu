import { rest } from "msw";

export const handlers = [
  rest.get(`${process.env.NEXT_PUBLIC_HEROKUAPI}tuit/all`, (req, res, ctx) =>
    res(
      ctx.status(200),
      ctx.json([
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
      ])
    )
  ),
];
