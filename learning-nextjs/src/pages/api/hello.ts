// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type User = {
  name: string;
  profilePicture: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<User>
) {
  res
    .status(200)
    .json({
      name: "Fernando de Jesús",
      profilePicture:
        "/../public/images/1635674175962.jpg",
    });
}
