import { NextApiRequest, NextApiResponse } from "next";
import { posts } from '../../../../api.json';

export default function handlePosts(
  request: NextApiRequest, 
  response: NextApiResponse
) {
  if (request.method === "GET") {
    return response.json(posts);
  }

  return response.json({ ok: true });
}