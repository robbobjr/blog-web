import { NextApiRequest, NextApiResponse } from "next";
import data from '../../../../api.json';

export default function handlePosts(
  request: NextApiRequest, 
  response: NextApiResponse
) {
  if (request.method === "GET") {
    return response.json(data.posts);
  }

  return response.json({ ok: true });
}